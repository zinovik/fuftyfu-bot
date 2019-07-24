export interface IPhrases {
  simpleCommands: {
    buttons: Array<{
      command: string;
      answer: string;
    }>;
    rest: Array<{
      command: string;
      answer: string;
    }>;
  };
  findCommand: string;
  findExample: string;
  randomHedgehogCommands: string[];
  hedgehogNumberAnswerStart: string;
  hedgehogNumberAnswerMiddle: string;
  hedgehogInfoAnswer: string;
  hedgehogWhereAnswer: string;
  hedgehogWhoAnswer: string;
  hedgehogWhenAnswer: string;
  maxCountAnswerStart: string;
  maxCountAnswerEnd: string;
  hedgehogsFoundCountAnswer: string;
  hedgehogNotFoundAnswerStart: string;
  hedgehogNotFoundAnswerEnd: string;
  tooManyHedgehogsFoundAnswer: string;
  finalAnswerStart: string;
  finalAnswerEnd: string;
}
