import * as dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

console.log(process.env.TOKEN);

// import { handleMessages } from './hedgehog';

// handleMessages({});

exports.handler = (event: any, context: any, callback: any) => {
  console.log(event);

  axios.post(`https://api.telegram.org/bot${process.env.TOKEN}/sendMessage`, {
    "chat_id": event.body.message.chat.id,
    "text": event.body.message.text,
  })
    .then((res) => {
      console.log(res);
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
