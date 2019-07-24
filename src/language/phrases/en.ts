import { IPhrases } from './IPhrases.interface';

export const en: IPhrases = {
  simpleCommands: {
    buttons: [
      {
        command: 'fu',
        answer: 'Fu!',
      },
      {
        command: 'fufty',
        answer: 'Fufty-fufty',
      },
      {
        command: 'fuftyfu',
        answer: 'Fuftyfu to you too, good man',
      },
    ],
    rest: [
      {
        command: '/start',
        answer: 'Fuftyfu! HedgehogBot online =]',
      },
      {
        command: 'help',
        answer: `Fuf. That's what I already can:
        1) Fu
        2) Fufty
        3) Fuftyfu
        4) Hedgehog
        5) Hedgehog number in the hedgehogs cataloger
        6) find brest`,
      },
    ],
  },
  findCommand: 'find',
  findExample: 'brest',
  randomHedgehogCommands: ['hedgehog'],
  hedgehogNumberAnswerStart: 'Hedgehog №',
  hedgehogNumberAnswerMiddle: ': ',
  hedgehogInfoAnswer: 'Fuftydossier',
  hedgehogWhereAnswer: 'Came from: ',
  hedgehogWhoAnswer: 'Brought: ',
  hedgehogWhenAnswer: 'In fuftyfamily from ',
  maxCountAnswerStart: "I don't have so many hedgehogs yet :( I have only ",
  maxCountAnswerEnd: ' fuftyhedgehogs (=',
  hedgehogsFoundCountAnswer: 'Total found hedgehogs: ',
  hedgehogNotFoundAnswerStart: 'I have no hedgehog from ',
  hedgehogNotFoundAnswerEnd: ' yet :( Need to bring :)',
  tooManyHedgehogsFoundAnswer: 'Too many suitable hedgehogs found, you need to specify the location',
  finalAnswerStart: 'Fuftyfu, ',
  finalAnswerEnd: '! HedgehogBot online =] I am not sleeping here',
};
