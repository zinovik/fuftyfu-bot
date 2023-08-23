import 'babel-polyfill';

import * as dotenv from 'dotenv';

import { ConfigParameterNotDefinedError } from './error/ConfigParameterNotDefinedError';
import { Hedgehog } from '../hedgehog/Hedgehog';
import { Json } from '../database/Json.service';
import { LanguageService } from '../language/Language.service';
import { TelegramService } from '../messenger/Telegram.service';
import { IEvent } from './model/IEvent.interface';

dotenv.config();

const JSON_URL = 'https://raw.githubusercontent.com/zinovik/fuftyfu-data/main/hedgehogs.json';

exports.handler = async ({ body }: IEvent, context: never) => {
  if (process.env.TOKEN === undefined) {
    throw new ConfigParameterNotDefinedError('TOKEN');
  }
  if (process.env.SPREADSHEET_ID === undefined) {
    throw new ConfigParameterNotDefinedError('SPREADSHEET_ID');
  }
  if (process.env.GOOGLE_PRIVATE_KEY === undefined) {
    throw new ConfigParameterNotDefinedError('GOOGLE_PRIVATE_KEY');
  }
  if (process.env.GOOGLE_CLIENT_EMAIL === undefined) {
    throw new ConfigParameterNotDefinedError('GOOGLE_CLIENT_EMAIL');
  }

  const hedgehog = new Hedgehog(new Json(JSON_URL), new LanguageService(), new TelegramService(process.env.TOKEN));

  let isSuccess;

  try {
    isSuccess = await hedgehog.processMessage(body);
  } catch (error) {
    isSuccess = false;
    console.error('Unexpected error occurred.', (error as any).message);
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      result: isSuccess ? 'success' : 'error',
    }),
  };
};
