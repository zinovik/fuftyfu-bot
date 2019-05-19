import * as dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

import { getAnswer } from './hedgehog';

exports.handler = (event: any, context: any, callback: any) => {
  console.log(event);

  const bodyParsed = JSON.parse(event.body);

  const answer = getAnswer(bodyParsed);

  axios.post(`https://api.telegram.org/bot${process.env.TOKEN}/sendMessage`, {
    chat_id: bodyParsed.message.chat.id,
    text: answer,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });

  callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      path: event.path,
      query: event.queryStringParameters,
      method: event.httpMethod,
      headers: event.headers,
      body: event.body,
    }),
  });
};
