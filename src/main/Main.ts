import { IMain } from './IMain.interface';
import { IHedgehog } from '../common/model/IHedgehog.interface';
import { IStorageService } from '../storage/IStorageService.interface';
import { ILanguageService } from '../language/ILanguageService.interface';
import { IMessengerService } from '../messenger/IMessengerService.interface';

import { IMessageBody } from '../common/model/IMessageBody.interface';

export class Main implements IMain {
    constructor(
        private readonly storageService: IStorageService,
        private readonly languageService: ILanguageService,
        private readonly messengerService: IMessengerService
    ) {}

    async processMessage(message: IMessageBody): Promise<void> {
        if (!message.message) {
            throw new Error(`Bad User Input: ${JSON.stringify(message)}`);
        }

        const {
            message: {
                text: messageTextDirty,
                chat: { id: chatId },
                from: { language_code: languageCode, first_name: firstName },
            },
        } = message;

        const messageText = messageTextDirty.trim().toLowerCase();

        const hedgehogs: IHedgehog[] =
            await this.storageService.getAllHedgehogs();

        const hedgehogsCount = hedgehogs.length;

        const text = await this.languageService.getText({
            languageCode,
            messageText,
            firstName,
            hedgehogs,
        });

        const replyMarkup = await this.languageService.getReplyMarkup(
            languageCode,
            hedgehogsCount
        );

        await this.messengerService.sendMessage({
            replyMarkup,
            text,
            chatId,
        });
    }
}
