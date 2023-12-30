import { Bucket, Storage, File } from '@google-cloud/storage';
import { IStorageService } from './IStorageService.interface';
import { IHedgehog } from '../common/model/IHedgehog.interface';

const BUCKET_NAME = 'hedgehogs';
const FILE_NAME = 'hedgehogs.json';

export class GoogleStorageService implements IStorageService {
    private readonly storage: Storage = new Storage();
    private readonly bucket: Bucket;

    constructor() {
        this.bucket = this.storage.bucket(BUCKET_NAME);
    }

    // TODO: Typing streamToString(stream: Stream)
    private streamToString(stream: any): Promise<string> {
        const chunks: Uint8Array[] = [];
        return new Promise((resolve, reject) => {
            stream.on('data', (chunk: string) =>
                chunks.push(Buffer.from(chunk))
            );
            stream.on('error', (error: Error) => reject(error));
            stream.on('end', () =>
                resolve(Buffer.concat(chunks).toString('utf8'))
            );
        });
    }

    async getAllHedgehogs(): Promise<IHedgehog[]> {
        const file: File = this.bucket.file(FILE_NAME);

        const data = await this.streamToString(file.createReadStream());

        return JSON.parse(data);
    }
}
