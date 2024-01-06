import { Stream } from 'stream';
import { Bucket, Storage, File } from '@google-cloud/storage';
import { IStorageService } from './IStorageService.interface';
import { IHedgehog } from '../common/model/IHedgehog.interface';

export class GoogleStorageService implements IStorageService {
    private readonly bucket: Bucket;

    constructor(
        private readonly bucketName: string,
        private readonly fileName: string
    ) {
        const storage: Storage = new Storage();
        this.bucket = storage.bucket(this.bucketName);
    }

    async getAllHedgehogs(): Promise<IHedgehog[]> {
        const file = await this.bucket.file(this.fileName).download();

        return JSON.parse(file.toString());
    }
}
