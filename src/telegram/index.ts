import axios from 'axios';

export const sendMessage = async ({
  token,
  text,
  replyMarkup,
  chatId,
}: {
  token: string,
  text: string,
  replyMarkup: string,
  chatId: number,
}): Promise<void> => {
  const { data } = await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
    text,
    reply_markup: replyMarkup,
    chat_id: chatId,
  });
  console.log(`Message was successfully sent: ${data}`);
};
