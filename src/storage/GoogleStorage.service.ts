import { Bucket, Storage } from '@google-cloud/storage';
import { IStorageService } from './IStorageService.interface';
import { IHedgehog } from '../common/model/IHedgehog.interface';

export class GoogleStorageService implements IStorageService {
    private readonly bucketJson: Bucket;
    private readonly storage: Storage;
    private allHedgehogs: IHedgehog[] | null = null;

    constructor(
        private readonly bucketJsonName: string,
        private readonly fileName: string,
        storage: Storage = new Storage()
    ) {
        this.storage = storage;
        this.bucketJson = this.storage.bucket(this.bucketJsonName);
    }

    async getAllHedgehogs(): Promise<IHedgehog[]> {
        if (!this.allHedgehogs) {
            const file = await this.bucketJson.file(this.fileName).download();
            const hedgehogs = JSON.parse(file.toString()) as IHedgehog[];

            this.allHedgehogs = await Promise.all(
                hedgehogs.map(async (hedgehog) => ({
                    ...hedgehog,
                    photos: await Promise.all(
                        hedgehog.photos.map((photo) =>
                            this.getSignedPhotoUrl(photo)
                        )
                    ),
                }))
            );
        }

        return this.allHedgehogs;
    }

    private async getSignedPhotoUrl(photo: string): Promise<string> {
        const { bucketName, filename } = this.parsePhotoReference(photo);

        const [url] = await this.storage
            .bucket(bucketName)
            .file(filename)
            .getSignedUrl({
                version: 'v4',
                action: 'read',
                expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // 7 days - maximum
            });

        return url;
    }

    private parsePhotoReference(photo: string): {
        bucketName: string;
        filename: string;
    } {
        const storageUrl = new URL(photo);
        const segments = storageUrl.pathname.split('/').filter(Boolean);

        const bucketName = segments[0];
        const filename = segments.slice(1).join('/');

        return { bucketName, filename };
    }
}
