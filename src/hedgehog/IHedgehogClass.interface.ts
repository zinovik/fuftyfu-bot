import { IMessageBody } from '../common/model/IMessageBody.interface';

export interface IHedgehogClass {
    processMessage(message: IMessageBody): Promise<void>;
}
