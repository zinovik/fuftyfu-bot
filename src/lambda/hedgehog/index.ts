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

export const getAnswer = (request: any) => {
  const { message: { text, from: { first_name: firstName } } } = request;

  if (text === /\/start/) {
    const randomHedgehogNumber = getRandomHedgehogNumber();

    return START_MESSAGE; // , getCommands(randomHedgehogNumber)
  }

  if (text === 'help') {
    return HELP_MESSAGE;
  }

  if (randomHedgehogMessages.indexOf(text) >= 0) {
    const randomHedgehogNumber = getRandomHedgehogNumber();

    return getHedgehog(randomHedgehogNumber, hedgehogs[randomHedgehogNumber - 1]);
  }

  const hedgehogNumber = Number(text);

  if (hedgehogNumber) {
    if (hedgehogNumber >= 1 && hedgehogNumber <= Number(hedgehogs.length)) {
      return getHedgehog(hedgehogNumber, hedgehogs[hedgehogNumber - 1]);
    }

    if (+text > hedgehogs.length) {
      return hedgehogsMaxCount(hedgehogs.length);
    }
  }

  if (SIMPLE_PHRASES.some(phrase => phrase.message === text)) {
    return SIMPLE_PHRASES.find(phrase => phrase.message === text)!.answer;
  }

  return finalPhrase(firstName);
};

const getRandomHedgehogNumber = () => Math.floor(Math.random() * Number(hedgehogs.length)) + 1;
