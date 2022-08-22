import { IHedgehogClass } from './IHedgehogClass.interface';
import { IHedgehog } from '../common/model/IHedgehog.interface';
import { IDatabaseService } from '../database/IDatabaseService.interface';
import { ILanguageService } from '../language/ILanguageService.interface';
import { ITelegramService } from '../telegram/ITelegramService.interface';

import { IMessageBody } from '../common/model/IMessageBody.interface';

export class Hedgehog implements IHedgehogClass {
  constructor(private databaseService: IDatabaseService, private languageService: ILanguageService, private telegramService: ITelegramService) {
    this.databaseService = databaseService;
    this.languageService = languageService;
    this.telegramService = telegramService;
  }

  async processMessage(message: string): Promise<boolean> {
    let messageParsed: IMessageBody;

    try {
      messageParsed = JSON.parse(message);
    } catch (error) {
      console.error('Error parsing user message: ', (error as any).message);
      return false;
    }

    const {
      message: {
        text: messageTextDirty,
        chat: { id: chatId },
        from: { language_code: languageCode, first_name: firstName },
      },
    } = messageParsed;

    const messageText = messageTextDirty.trim().toLowerCase();

    let hedgehogs: IHedgehog[] = [];

    try {
      hedgehogs = await this.databaseService.getAllHedgehogs();
    } catch (error) {
      console.error('Error getting hedgehogs from the database: ', (error as any).message);
      return false;
    }

    const hedgehogsCount = hedgehogs.length;

    let text = '';
    let replyMarkup = '';

    try {
      text = await this.languageService.getText({ languageCode, messageText, firstName, hedgehogs });
      replyMarkup = await this.languageService.getReplyMarkup(languageCode, hedgehogsCount);
    } catch (error) {
      console.error('Error getting bot answer: ', (error as any).message);
      return false;
    }

    try {
      await this.telegramService.sendMessage({ replyMarkup, text, chatId });
    } catch (error) {
      console.error('Error sending telegram message: ', (error as any).message);
      return false;
    }

    return true;
  }
}
