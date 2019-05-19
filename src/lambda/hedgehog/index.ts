import { hedgehogs } from './info';
import {
  START_MESSAGE,
  HELP_MESSAGE,
  getCommands,
  randomHedgehogMessages,
  getHedgehog,
  hedgehogsMaxCount,
  SIMPLE_PHRASES,
  finalPhrase,
} from '../phrases/phrases-rus';

export const getReplyMarkup = (request: any): string => {
  const { message: { text } } = request;

  const message = text.toLowerCase();

  if (message === '/start') {
    const randomHedgehogNumber = getRandomHedgehogNumber();

    return JSON.stringify(getCommands(randomHedgehogNumber));
  }

  return '';
};

export const getText = (request: any): string => {
  const { message: { text, from: { first_name: firstName } } } = request;

  const message = text.toLowerCase();

  if (message === '/start') {
    return START_MESSAGE;
  }

  if (message === 'help') {
    return HELP_MESSAGE;
  }

  if (randomHedgehogMessages.indexOf(message) >= 0) {
    const randomHedgehogNumber = getRandomHedgehogNumber();

    return getHedgehog(randomHedgehogNumber, hedgehogs[randomHedgehogNumber - 1]);
  }

  const hedgehogNumber = Number(message);

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

  return finalPhrase(firstName);
};

const getRandomHedgehogNumber = () => Math.floor(Math.random() * Number(hedgehogs.length)) + 1;
