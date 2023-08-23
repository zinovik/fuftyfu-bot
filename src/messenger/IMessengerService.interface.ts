export interface IMessengerService {
  sendMessage({ text, replyMarkup, chatId }: { text: string; replyMarkup: string; chatId: number }): Promise<void>;
}
