import { IHedgehog } from './IHedgehog.interface';
import { IDatabaseService } from '../database/IDatabaseService.interface';
import { ILanguageService } from '../language/ILanguageService.interface';
import { ITelegramService } from '../telegram/ITelegramService.interface';

import { IMessageBody } from '../common/model/IMessageBody.interface';

export class Hedgehog implements IHedgehog {
  constructor(
    private readonly databaseService: IDatabaseService,
    private readonly languageService: ILanguageService,
    private readonly telegramService: ITelegramService,
  ) {}

  async processMessage(message: string): Promise<void> {
    const messageParsed: IMessageBody = JSON.parse(message);

    const text = await this.languageService.getText(messageParsed);
    const replyMarkup = await this.languageService.getReplyMarkup(messageParsed);

    try {
      await this.telegramService.sendMessage({
        text,
        replyMarkup,
        chatId: messageParsed.message.chat.id,
      });
    } catch (error) {
      console.error('Error sending message', error.message);
    }
  }
}
