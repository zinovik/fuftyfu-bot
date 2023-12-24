import axios from 'axios';

import { IMessengerService } from './IMessengerService.interface';

const TELEGRAM_API_URL = 'https://api.telegram.org/bot';

export class TelegramService implements IMessengerService {
    constructor(private readonly token: string) {
        this.token = token;
    }

    async sendMessage({
        text,
        replyMarkup,
        chatId,
    }: {
        text: string;
        replyMarkup: string;
        chatId: number;
    }): Promise<void> {
        const chunks = this.stringToChunks(text, 4095);

        for (const chunk of chunks) {
            const message = {
                text: chunk,
                reply_markup: replyMarkup,
                chat_id: chatId,
                parse_mode: 'Markdown',
            };

            try {
                console.log(
                    `Sending telegram message: ${JSON.stringify(message)}...`
                );

                const { data } = await axios.post(
                    `${TELEGRAM_API_URL}${this.token}/sendMessage`,
                    message
                );

                console.log(
                    `Telegram message was successfully sent: ${JSON.stringify(
                        data
                    )}`
                );
            } catch (error) {
                console.error('Error sending Telegram message', error);
            }
        }
    }

    private stringToChunks(str: string, size: number): string[] {
        const SEPARATOR = '\n\n';

        const chunks: string[] = [];

        let restOfTheStr = str;

        while (restOfTheStr.length > 0) {
            if (restOfTheStr.length <= size) {
                chunks.push(restOfTheStr);
                restOfTheStr = '';
                break;
            }

            const lastNewLineIndexInChunk = restOfTheStr
                .substring(0, size)
                .lastIndexOf(SEPARATOR);

            chunks.push(
                restOfTheStr.substring(
                    0,
                    lastNewLineIndexInChunk === -1
                        ? size
                        : lastNewLineIndexInChunk
                )
            );
            restOfTheStr = restOfTheStr.substring(
                lastNewLineIndexInChunk === -1
                    ? size
                    : lastNewLineIndexInChunk + SEPARATOR.length
            );
        }

        return chunks;
    }
}
