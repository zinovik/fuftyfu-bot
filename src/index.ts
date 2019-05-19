process.env['NTBA_FIX_319'] = '1';

import * as dotenv from 'dotenv';
import * as TelegramBot from 'node-telegram-bot-api';
import * as express from 'express';
import * as helmet from 'helmet';

dotenv.config();

import { handleMessages } from './hedgehog';

const bot: TelegramBot = new TelegramBot(process.env.TOKEN || '', { polling: true });
handleMessages(bot);

const app = express();
app.use(helmet());
app.set('port', process.env.PORT || 8100);

app.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
});
