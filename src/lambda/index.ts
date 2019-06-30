import 'babel-polyfill';

import * as dotenv from 'dotenv';

import { sendMessage } from '../telegram';
import { IMessageBody } from '../telegram/IMessageBody.interface';

dotenv.config();

import { getText, getReplyMarkup } from '../hedgehog';

exports.handler = async (event: { body: string }, context: never) => {
  const bodyParsed: IMessageBody = JSON.parse(event.body);
  console.log(bodyParsed);

  const text = await getText(bodyParsed);
  const replyMarkup = await getReplyMarkup(bodyParsed);

  if (!process.env.TOKEN) {
    throw new Error('Token is not provided! Check environment variables!');
  }

  try {
    await sendMessage({
      text,
      replyMarkup,
      token: process.env.TOKEN,
      chatId: bodyParsed.message.chat.id,
    });
  } catch (error) {
    console.error('Error sending message');
  }

  return { statusCode: 200 };
};
