import { IMock, Mock, It, Times } from 'typemoq';

import { Hedgehog } from '../../src/hedgehog/Hedgehog';
import { IDatabaseService } from '../../src/database/IDatabaseService.interface';
import { ILanguageService } from '../../src/language/ILanguageService.interface';
import { ITelegramService } from '../../src/telegram/ITelegramService.interface';

import { IHedgehog } from '../../src/common/model/IHedgehog.interface';

describe('Hedgehog', () => {
  let databaseServiceMock: IMock<IDatabaseService>;
  let languageServiceMock: IMock<ILanguageService>;
  let telegramServiceMock: IMock<ITelegramService>;

  let hedgehog: Hedgehog;

  beforeEach(() => {
    databaseServiceMock = Mock.ofType<IDatabaseService>();
    languageServiceMock = Mock.ofType<ILanguageService>();
    telegramServiceMock = Mock.ofType<ITelegramService>();

    hedgehog = new Hedgehog(databaseServiceMock.object, languageServiceMock.object, telegramServiceMock.object);
  });

  afterEach(() => {
    databaseServiceMock.verifyAll();
    languageServiceMock.verifyAll();
    telegramServiceMock.verifyAll();
  });

  it('Should stop working if there is an invalid body', async () => {
    // Arrange
    const body = '';
    databaseServiceMockGetAllHedgehogsNeverCalled();
    languageServiceMockGetTextNeverCalled();
    languageServiceMockGetReplyMarkupNeverCalled();
    telegramServiceMockSendMessageNeverCalled();

    // Act
    await hedgehog.processMessage(body);

    // Act - Assert
    expect(true).toBeTruthy();
  });

  it('Should process user message if there is no hedgehog with the number', async () => {
    // Arrange
    const languageCode = 'en';
    const messageText = '1';
    const firstName = 'test';
    const id = 123456789;
    const body = `{"message":{"text":"${messageText}","chat":{"id":${id}},"from":{"language_code":"${languageCode}","first_name":"${firstName}"}}}`;
    const hedgehogs: IHedgehog[] = [];
    const mockText = 'mock-text';
    const mockReplyMarkup = 'mock-reply-markup';
    databaseServiceMockGetAllHedgehogs(hedgehogs);
    languageServiceMockGetText({ languageCode, messageText, firstName, hedgehogs }, mockText);
    languageServiceMockGetReplyMarkup(languageCode, hedgehogs.length, mockReplyMarkup);
    telegramServiceMockSendMessage({ text: mockText, replyMarkup: mockReplyMarkup, chatId: id });

    // Act
    await hedgehog.processMessage(body);

    // Assert
    expect(true).toBeTruthy();
  });

  function databaseServiceMockGetAllHedgehogs(hedgehogs: IHedgehog[]) {
    databaseServiceMock
      .setup((x: IDatabaseService) => x.getAllHedgehogs())
      .returns(async () => hedgehogs)
      .verifiable(Times.once());
  }

  function languageServiceMockGetText(
    {
      languageCode,
      messageText,
      firstName,
      hedgehogs,
    }: {
      languageCode: string;
      messageText: string;
      firstName: string;
      hedgehogs: IHedgehog[];
    },
    text: string,
  ) {
    languageServiceMock
      .setup((x: ILanguageService) =>
        x.getText({
          languageCode,
          messageText,
          firstName,
          hedgehogs,
        }),
      )
      .returns(async () => text)
      .verifiable(Times.once());
  }

  function languageServiceMockGetReplyMarkup(languageCode: string, hedgehogsCount: number, replyMarkup: string) {
    languageServiceMock
      .setup((x: ILanguageService) => x.getReplyMarkup(languageCode, hedgehogsCount))
      .returns(async () => replyMarkup)
      .verifiable(Times.once());
  }

  function telegramServiceMockSendMessage({
    text,
    replyMarkup,
    chatId,
  }: {
    text: string;
    replyMarkup: string;
    chatId: number;
  }) {
    telegramServiceMock
      .setup((x: ITelegramService) => x.sendMessage({ text, replyMarkup, chatId }))
      .returns(async () => undefined)
      .verifiable(Times.once());
  }

  function databaseServiceMockGetAllHedgehogsNeverCalled() {
    databaseServiceMock.setup((x: IDatabaseService) => x.getAllHedgehogs()).verifiable(Times.never());
  }

  function languageServiceMockGetTextNeverCalled() {
    languageServiceMock.setup((x: ILanguageService) => x.getText(It.isAny())).verifiable(Times.never());
  }

  function languageServiceMockGetReplyMarkupNeverCalled() {
    languageServiceMock
      .setup((x: ILanguageService) => x.getReplyMarkup(It.isAny(), It.isAny()))
      .verifiable(Times.never());
  }

  function telegramServiceMockSendMessageNeverCalled() {
    telegramServiceMock.setup((x: ITelegramService) => x.sendMessage(It.isAny())).verifiable(Times.never());
  }
});
