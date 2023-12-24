import * as functions from '@google-cloud/functions-framework';
import { ConfigParameterNotDefinedError } from './error/ConfigParameterNotDefinedError';
import { Hedgehog } from './hedgehog/Hedgehog';
import { Json } from './database/Json.service';
import { LanguageService } from './language/Language.service';
import { TelegramService } from './messenger/Telegram.service';

const JSON_URL =
    'https://raw.githubusercontent.com/zinovik/fuftyfu-data/main/hedgehogs.json';

functions.http('main', async (req, res) => {
    if (process.env.TELEGRAM_TOKEN === undefined) {
        throw new ConfigParameterNotDefinedError('TELEGRAM_TOKEN');
    }

    const hedgehog = new Hedgehog(
        new Json(JSON_URL),
        new LanguageService(),
        new TelegramService(process.env.TELEGRAM_TOKEN)
    );

    let isSuccess;

    try {
        isSuccess = await hedgehog.processMessage(req.body);
    } catch (error) {
        isSuccess = false;
        console.error('Unexpected error occurred.', (error as any).message);
    }

    res.status(200).json({
        result: isSuccess ? 'success' : 'error',
    });
});
