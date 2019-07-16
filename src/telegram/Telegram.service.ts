import axios from 'axios';

import { ITelegramService } from './ITelegramService.interface';

export class TelegramService implements ITelegramService {
  constructor(private readonly token: string) {}

  async sendMessage({
    text,
    replyMarkup,
    chatId,
  }: {
    text: string;
    replyMarkup: string;
    chatId: number;
  }): Promise<void> {
    const { data } = await axios.post(`https://api.telegram.org/bot${this.token}/sendMessage`, {
      text,
      reply_markup: replyMarkup,
      chat_id: chatId,
    });
    console.log(`Message was successfully sent: ${data}`);
  }
}
