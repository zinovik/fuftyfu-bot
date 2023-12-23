import { IHedgehog } from '../common/model/IHedgehog.interface';

export interface IDatabaseService {
    getAllHedgehogs(): Promise<IHedgehog[]>;
}
