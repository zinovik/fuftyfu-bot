import { ILanguageService } from './ILanguageService.interface';
import { GoogleSpreadsheetService } from '../database/GoogleSpreadsheet.service';
import {
  START_MESSAGE,
  HELP_MESSAGE,
  getCommands,
  randomHedgehogMessages,
  getHedgehog,
  hedgehogNotFound,
  hedgehogsFoundCount,
  tooManyHedgehogsFound,
  hedgehogsMaxCount,
  SIMPLE_PHRASES,
  finalPhrase,
} from './phrases/phrases-rus';

const googleSpreadsheetService = new GoogleSpreadsheetService(
  process.env.SPREADSHEET_ID as string,
  process.env.GOOGLE_PRIVATE_KEY as string,
  process.env.GOOGLE_CLIENT_EMAIL as string,
);

const getRandomHedgehogNumber = (hedgehogsCount: number) => Math.floor(Math.random() * Number(hedgehogsCount)) + 1;

export class LanguageService implements ILanguageService {
  async getReplyMarkup(request: any): Promise<string> {
    const {
      message: { text },
    } = request;

    const message = text.toLowerCase();

    const hedgehogs = await googleSpreadsheetService.getAllHedgehogs();

    if (message === '/start') {
      const randomHedgehogNumber = getRandomHedgehogNumber(hedgehogs.length);

      return JSON.stringify(getCommands(randomHedgehogNumber));
    }

    return '';
  }

  async getText(request: any): Promise<string> {
    const {
      message: {
        text,
        from: { first_name: firstName },
      },
    } = request;

    const message = text.toLowerCase();

    if (message === '/start') {
      return START_MESSAGE;
    }

    if (message === 'help') {
      return HELP_MESSAGE;
    }

    const hedgehogNumber = Number(message);

    const hedgehogs = await googleSpreadsheetService.getAllHedgehogs();

    if (randomHedgehogMessages.indexOf(message) >= 0) {
      const randomHedgehogNumber = getRandomHedgehogNumber(hedgehogs.length);

      return getHedgehog(randomHedgehogNumber, hedgehogs[randomHedgehogNumber - 1]);
    }
    if (hedgehogNumber) {
      if (hedgehogNumber >= 1 && hedgehogNumber <= Number(hedgehogs.length)) {
        return getHedgehog(hedgehogNumber, hedgehogs[hedgehogNumber - 1]);
      }

      if (+message > hedgehogs.length) {
        return hedgehogsMaxCount(hedgehogs.length);
      }
    }

    if (SIMPLE_PHRASES.some(phrase => phrase.message === message)) {
      return SIMPLE_PHRASES.find(phrase => phrase.message === message)!.answer;
    }

    if (message.includes('find')) {
      const findText = message.substring(5).trim();

      if (findText) {
        const foundHedgehogsNumbers: number[] = [];
        hedgehogs.forEach((hedgehog: any, hedgehogNumber: number) => {
          const isHedgehogFound = hedgehog.where.some((where: string) => where.toLowerCase().includes(findText));

          if (isHedgehogFound) {
            foundHedgehogsNumbers.push(hedgehogNumber);
          }
        });

        if (foundHedgehogsNumbers.length > 15) {
          return tooManyHedgehogsFound;
        }

        if (foundHedgehogsNumbers.length) {
          let foundHedgehogs = `${hedgehogsFoundCount(foundHedgehogsNumbers.length)}`;
          foundHedgehogsNumbers.forEach((foundHedgehogNumber) => {
            foundHedgehogs += `\n\n---\n\n${getHedgehog(foundHedgehogNumber + 1, hedgehogs[foundHedgehogNumber])}`;
          });
          return foundHedgehogs;
        }

        return hedgehogNotFound(findText);
      }
    }

    return finalPhrase(firstName);
  }
}
