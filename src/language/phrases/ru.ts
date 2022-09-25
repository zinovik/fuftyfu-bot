import { IPhrases } from './IPhrases.interface';

export const ru: IPhrases = {
  simpleCommands: {
    buttons: [
      {
        command: 'фу',
        answer: 'Фу!',
      },
      {
        command: 'фуфты',
        answer: 'Фуфты-фуфты',
      },
      {
        command: 'фуфтыфу',
        answer: 'И тебе фуфтыфу, добрчеловек',
      },
      {
        command: 'карта',
        answer: 'https://google.com/maps/d/viewer?mid=1LJuxi1tJ6TjEjPj0xLt7AeW8kZ9oPsw',
      },
    ],
    rest: [
      {
        command: '/start',
        answer: 'Фуфтыфу! ЁжикБот на связи =]',
      },
      {
        command: 'help',
        answer: `Фуф. Вот, что я уже умею:
        1) Фу
        2) Фуфты
        3) Фуфтыфу
        4) Ёжик
        5) Номер ёжика в каталогизаторе ёжиков
        6) искать брест
        7) карта`,
      },
    ],
  },
  findCommand: 'искать',
  findExample: 'брест',
  randomHedgehogCommands: ['ёжик', 'ежик'],
  hedgehogNumberAnswer: 'Привет, я ёжик №',
  hedgehogWhereAnswer: 'Моя родина - ',
  hedgehogWhoAnswer: ' привёз меня ',
  maxCountAnswerStart: 'Столько ёжиков у меня пока нет :( Есть только ',
  maxCountAnswerEnd: ' фуфтыёжиков (=',
  hedgehogsFoundCountAnswer: 'Всего найдено ёжиков: ',
  hedgehogNotFoundAnswerStart: 'Ёжика из ',
  hedgehogNotFoundAnswerEnd: ' у меня пока нет :( Надо привезти :)',
  tooManyHedgehogsFoundAnswer: 'Слишком много подходящих ёжиков найдено, надо точнее указать место',
  finalAnswerStart: 'Фуфтыфу, ',
  finalAnswerEnd: '! ЁжикБот на связи =] Я не шплю тут',
};
