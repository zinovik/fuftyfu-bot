import axios from 'axios';
import { IStorageService } from './IStorageService.interface';
import { IHedgehog } from '../common/model/IHedgehog.interface';

export class Json implements IStorageService {
    constructor(private readonly jsonUrl: string) {
        this.jsonUrl = jsonUrl;
    }

    async getAllHedgehogs(): Promise<IHedgehog[]> {
        const { data: hedgehogs } = await axios.get<IHedgehog[]>(this.jsonUrl);

        return hedgehogs;
    }
}
