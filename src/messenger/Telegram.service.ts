import axios from 'axios';

import { IMessengerService } from './IMessengerService.interface';

const TELEGRAM_API_URL = 'https://api.telegram.org/bot';

export class TelegramService implements IMessengerService {
  constructor(private readonly token: string) {
    this.token = token;
  }

  async sendMessage({ text, replyMarkup, chatId }: { text: string; replyMarkup: string; chatId: number }): Promise<void> {
    const chunks = this.stringToChunks(text, 4095);

    for (const chunk of chunks) {
      const message = {
        text: chunk,
        reply_markup: replyMarkup,
        chat_id: chatId,
      };

      try {
        console.log(`Sending telegram message: ${JSON.stringify(message)}...`);

        const { data } = await axios.post(
          `${TELEGRAM_API_URL}${this.token}/sendMessage`,
          message,
        );

        console.log(`Telegram message was successfully sent: ${JSON.stringify(data)}`);
      } catch (error) {
        console.log('Error sending Telegram message', error);
      }
    }
  }

  private stringToChunks(str: string, size: number): string[] {
    const chunks: string[] = [];

    const chunksNumber = Math.ceil(str.length / size);

    for (let i = 0; i < chunksNumber; i++) {
      chunks.push(str.substring(i * size, (i + 1) * size));
    }

    return chunks;
  }
}
