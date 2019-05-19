import * as dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

import { getText, getReplyMarkup } from './hedgehog';

exports.handler = (event: any, context: any, callback: any) => {
  const bodyParsed = JSON.parse(event.body);
  console.log(bodyParsed);

  const text = getText(bodyParsed);
  const replyMarkup = getReplyMarkup(bodyParsed);

  axios.post(`https://api.telegram.org/bot${process.env.TOKEN}/sendMessage`, {
    text,
    chat_id: bodyParsed.message.chat.id,
    reply_markup: replyMarkup,
  })
    .then(() => {
      console.log('Message was successfully sent');
    })
    .catch(() => {
      console.error('Error sending message');
    });

  callback(null, { statusCode: 200 });
};
