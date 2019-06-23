export const START_MESSAGE = 'Фуфтыфу! ЁжикБот на связи =]';

export const HELP_MESSAGE = `Фуф. Вот, что я уже умею:
1) Фу
2) Фуфты
3) Фуфтыфу
4) Номер ёжика в каталогизаторе ёжиков
5) Ёжик
6) @icebrest, @dvvsbrest`;

export const getCommands = (randomHedgehogNumber: number) => ({
  keyboard: [
    ['Фу', 'Фуфты', 'Фуфтыфу'],
    ['Ёжик', `${randomHedgehogNumber}`],
    ['find brest'],
  ],
});

export const randomHedgehogMessages = ['ёжик', 'ежик'];

export const getHedgehog = (
  number: number,
  {
    url,
    where,
    who,
    when,
  }: {
    url: string;
    where: string[];
    who: string;
    when: string;
  },
) => `Ёжик №${number}: ${url}

Фуфтыдосье
Приехал из: ${where[0]}
Привёз: ${who}
В фуфтысемье с ${when}`;

export const hedgehogNotFound = (findText: string): string =>
  `Ёжика из ${findText} у меня пока нет :( Надо привезти :)`;

export const hedgehogsFoundCount = (hedgehogsCount: number) => `Всего найден${hedgehogsCount % 10 === 1 ? '' : 'о'}`
  + ` ${hedgehogsCount} ёжик${hedgehogsCount % 10 === 1 ? '' : [2, 3, 4].includes(hedgehogsCount % 10) ? 'а' : 'ов'}:`;

export const tooManyHedgehogsFound = 'Слишком много подходящих ёжиков найдено, надо точнее указать место.';

export const hedgehogsMaxCount = (count: number) =>
  `Столько ёжиков у меня пока нет :( Есть только ${count} фуфтыёжиков (=`;

export const SIMPLE_PHRASES = [
  {
    message: 'фуфтыфу',
    answer: 'И тебе фуфтыфу, добрчеловек.',
  },
  {
    message: 'фуфты',
    answer: 'Фуфты-фуфты',
  },
  {
    message: 'фу',
    answer: 'Фу!',
  },
];

export const finalPhrase = (name: string) => `Фуфтыфу, ${name}! ЁжикБот на связи =] Я не шплю тут.`;

export const DAYS_OF_WEEK = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];

export const NEW_SCHEDULE = 'Новое расписание:';

export const CHANGES = 'Изменения:';

export const DAYS_OF_WEEK_BUTTONS = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: 'ПН',
          callback_data: 'monday',
        },
        {
          text: 'ВТ',
          callback_data: 'tuesday',
        },
        {
          text: 'СР',
          callback_data: 'wednesday',
        },
        {
          text: 'ЧТ',
          callback_data: 'thursday',
        },
        {
          text: 'ПТ',
          callback_data: 'friday',
        },
        {
          text: 'СБ',
          callback_data: 'saturday',
        },
        {
          text: 'ВС',
          callback_data: 'sunday',
        },
      ],
    ],
  },
};
