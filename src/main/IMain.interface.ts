import { IMessageBody } from '../common/model/IMessageBody.interface';

export interface IMain {
    processMessage(message: IMessageBody): Promise<void>;
}
