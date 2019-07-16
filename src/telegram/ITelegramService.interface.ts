export interface ITelegramService {
  sendMessage({ text, replyMarkup, chatId }: { text: string; replyMarkup: string; chatId: number }): Promise<void>;
}
