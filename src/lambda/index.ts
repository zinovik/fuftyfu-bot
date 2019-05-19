import * as dotenv from 'dotenv';
dotenv.config();

console.log(process.env.TOKEN);

// import { handleMessages } from './hedgehog';

// handleMessages({});

exports.handler = (event: any, context: any, callback: any) => {
  console.log(JSON.stringify({
    path: event.path,
    query: event.queryStringParameters,
    method: event.httpMethod,
    headers: event.headers,
    body: event.body,
  }));

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
