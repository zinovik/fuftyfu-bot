import { IHedgehogClass } from './IHedgehogClass.interface';
import { IHedgehog } from '../common/model/IHedgehog.interface';
import { IDatabaseService } from '../database/IDatabaseService.interface';
import { ILanguageService } from '../language/ILanguageService.interface';
import { IMessengerService } from '../messenger/IMessengerService.interface';

import { IMessageBody } from '../common/model/IMessageBody.interface';

export class Hedgehog implements IHedgehogClass {
  constructor(
    private readonly databaseService: IDatabaseService,
    private readonly languageService: ILanguageService,
    private readonly messengerService: IMessengerService,
  ) {
    this.databaseService = databaseService;
    this.languageService = languageService;
    this.messengerService = messengerService;
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
      await this.messengerService.sendMessage({ replyMarkup, text, chatId });
    } catch (error) {
      console.error('Error sending telegram message: ', (error as any).response.data.description);
      return false;
    }

    return true;
  }
}
