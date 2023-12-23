import { IMock, Mock, It, Times } from 'typemoq';

import { Hedgehog } from '../../src/hedgehog/Hedgehog';
import { IDatabaseService } from '../../src/database/IDatabaseService.interface';
import { ILanguageService } from '../../src/language/ILanguageService.interface';
import { IMessengerService } from '../../src/messenger/IMessengerService.interface';

import { IHedgehog } from '../../src/common/model/IHedgehog.interface';
import { IMessageBody } from '../../src/common/model/IMessageBody.interface';

describe('Hedgehog', () => {
    let databaseServiceMock: IMock<IDatabaseService>;
    let languageServiceMock: IMock<ILanguageService>;
    let messengerServiceMock: IMock<IMessengerService>;

    let hedgehog: Hedgehog;

    beforeEach(() => {
        databaseServiceMock = Mock.ofType<IDatabaseService>();
        languageServiceMock = Mock.ofType<ILanguageService>();
        messengerServiceMock = Mock.ofType<IMessengerService>();

        hedgehog = new Hedgehog(
            databaseServiceMock.object,
            languageServiceMock.object,
            messengerServiceMock.object
        );
    });

    afterEach(() => {
        databaseServiceMock.verifyAll();
        languageServiceMock.verifyAll();
        messengerServiceMock.verifyAll();
    });

    it('Should stop working if there is an invalid body', async () => {
        // Arrange
        const body = {} as IMessageBody;
        databaseServiceMockGetAllHedgehogsNeverCalled();
        languageServiceMockGetTextNeverCalled();
        languageServiceMockGetReplyMarkupNeverCalled();
        messengerServiceMockSendMessageNeverCalled();

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
        const body: IMessageBody = {
            message: {
                text: '${messageText}',
                chat: { id: id },
                from: {
                    language_code: '${languageCode}',
                    first_name: '${firstName}',
                },
            },
        } as IMessageBody;
        const hedgehogs: IHedgehog[] = [];
        const mockText = 'mock-text';
        const mockReplyMarkup = 'mock-reply-markup';
        databaseServiceMockGetAllHedgehogs(hedgehogs);
        languageServiceMockGetText(
            { languageCode, messageText, firstName, hedgehogs },
            mockText
        );
        languageServiceMockGetReplyMarkup(
            languageCode,
            hedgehogs.length,
            mockReplyMarkup
        );
        messengerServiceMockSendMessage({
            text: mockText,
            replyMarkup: mockReplyMarkup,
            chatId: id,
        });

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
        text: string
    ) {
        languageServiceMock
            .setup((x: ILanguageService) =>
                x.getText({
                    languageCode,
                    messageText,
                    firstName,
                    hedgehogs,
                })
            )
            .returns(async () => text)
            .verifiable(Times.once());
    }

    function languageServiceMockGetReplyMarkup(
        languageCode: string,
        hedgehogsCount: number,
        replyMarkup: string
    ) {
        languageServiceMock
            .setup((x: ILanguageService) =>
                x.getReplyMarkup(languageCode, hedgehogsCount)
            )
            .returns(async () => replyMarkup)
            .verifiable(Times.once());
    }

    function messengerServiceMockSendMessage({
        text,
        replyMarkup,
        chatId,
    }: {
        text: string;
        replyMarkup: string;
        chatId: number;
    }) {
        messengerServiceMock
            .setup((x: IMessengerService) =>
                x.sendMessage({ text, replyMarkup, chatId })
            )
            .returns(async () => undefined)
            .verifiable(Times.once());
    }

    function databaseServiceMockGetAllHedgehogsNeverCalled() {
        databaseServiceMock
            .setup((x: IDatabaseService) => x.getAllHedgehogs())
            .verifiable(Times.never());
    }

    function languageServiceMockGetTextNeverCalled() {
        languageServiceMock
            .setup((x: ILanguageService) => x.getText(It.isAny()))
            .verifiable(Times.never());
    }

    function languageServiceMockGetReplyMarkupNeverCalled() {
        languageServiceMock
            .setup((x: ILanguageService) =>
                x.getReplyMarkup(It.isAny(), It.isAny())
            )
            .verifiable(Times.never());
    }

    function messengerServiceMockSendMessageNeverCalled() {
        messengerServiceMock
            .setup((x: IMessengerService) => x.sendMessage(It.isAny()))
            .verifiable(Times.never());
    }
});
