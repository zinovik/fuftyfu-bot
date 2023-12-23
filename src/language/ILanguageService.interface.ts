import { IHedgehog } from '../common/model/IHedgehog.interface';

export interface ILanguageService {
    getReplyMarkup(
        languageCode: string,
        hedgehogsCount: number
    ): Promise<string>;
    getText(parameters: {
        languageCode: string;
        messageText: string;
        firstName: string;
        hedgehogs: IHedgehog[];
    }): Promise<string>;
}
