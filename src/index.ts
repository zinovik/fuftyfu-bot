import * as functions from '@google-cloud/functions-framework';
import { ConfigParameterNotDefinedError } from './error/ConfigParameterNotDefinedError';
import { Main } from './main/Main';
import { Json } from './storage/Json.service';
import { LanguageService } from './language/Language.service';
import { TelegramService } from './messenger/Telegram.service';

const JSON_URL = 'https://storage.googleapis.com/hedgehogs/hedgehogs.json';

functions.http('main', async (req, res) => {
    console.log('Triggered!');

    if (process.env.TOKEN === undefined) {
        throw new ConfigParameterNotDefinedError('TOKEN');
    }
    if (process.env.TELEGRAM_TOKEN === undefined) {
        throw new ConfigParameterNotDefinedError('TELEGRAM_TOKEN');
    }

    if (req.query.token !== process.env.TOKEN) {
        res.status(401).json({
            result: 'wrong token',
        });
        return;
    }

    const hedgehog = new Main(
        new Json(JSON_URL),
        new LanguageService(),
        new TelegramService(process.env.TELEGRAM_TOKEN)
    );

    await hedgehog.processMessage(req.body);

    console.log('Done!');

    res.status(200).json({
        result: 'success',
    });
});
