import { IHedgehog } from '../common/model/IHedgehog.interface';

export interface IStorageService {
    getAllHedgehogs(): Promise<IHedgehog[]>;
}
