import { ILanguageService } from './ILanguageService.interface';
import { IHedgehog } from '../common/model/IHedgehog.interface';

import { IPhrases } from './phrases/IPhrases.interface';
import { en } from './phrases/en';
import { ru } from './phrases/ru';

const PHRASES: { [key: string]: IPhrases } = { en, ru };

export class LanguageService implements ILanguageService {
    async getReplyMarkup(
        languageCode: string,
        hedgehogsCount: number
    ): Promise<string> {
        const phrases = this.getPhrases(languageCode);
        const simpleCommandsButtons = phrases.simpleCommands.buttons.map(
            (button) => button.command
        );

        const randomHedgehogNumber =
            this.getRandomHedgehogNumber(hedgehogsCount);

        return JSON.stringify({
            keyboard: [
                simpleCommandsButtons,
                [
                    phrases.randomHedgehogCommands[0],
                    String(randomHedgehogNumber),
                ],
                [`${phrases.findCommand} ${phrases.findExample}`],
            ],
        });
    }

    async getText({
        languageCode,
        messageText,
        firstName,
        hedgehogs,
    }: {
        languageCode: string;
        messageText: string;
        firstName: string;
        hedgehogs: IHedgehog[];
    }): Promise<string> {
        const phrases = this.getPhrases(languageCode);

        // Check random hedgehog
        if (phrases.randomHedgehogCommands.includes(messageText)) {
            const randomHedgehogNumber = this.getRandomHedgehogNumber(
                hedgehogs.length
            );

            return this.getHedgehog(
                languageCode,
                phrases,
                hedgehogs[randomHedgehogNumber - 1]
            );
        }

        // Check hedgehog number
        const hedgehogNumber = Number(messageText);

        if (hedgehogNumber) {
            if (
                hedgehogNumber >= 1 &&
                hedgehogNumber <= Number(hedgehogs.length)
            ) {
                return this.getHedgehog(
                    languageCode,
                    phrases,
                    hedgehogs[hedgehogNumber - 1]
                );
            }

            if (hedgehogNumber > hedgehogs.length) {
                return `${phrases.maxCountAnswerStart}${hedgehogs.length}${phrases.maxCountAnswerEnd}`;
            }
        }

        // Check simple commands
        if (
            phrases.simpleCommands.buttons.some(
                (button) => button.command === messageText
            )
        ) {
            return phrases.simpleCommands.buttons.find(
                (button) => button.command === messageText
            )!.answer;
        }
        if (
            phrases.simpleCommands.rest.some(
                (button) => button.command === messageText
            )
        ) {
            return phrases.simpleCommands.rest.find(
                (button) => button.command === messageText
            )!.answer;
        }

        // Find hedgehogs
        if (messageText.includes(phrases.findCommand)) {
            const findText = messageText.split(' ')[1].toLowerCase();

            if (findText) {
                const foundHedgehogs = hedgehogs.filter(
                    ({ country, place, comment, who }) => {
                        return (
                            Object.keys(country).some((lang) =>
                                country[lang].toLowerCase().includes(findText)
                            ) ||
                            Object.keys(place).some((lang) =>
                                place[lang].toLowerCase().includes(findText)
                            ) ||
                            (comment &&
                                Object.keys(comment).some((lang) =>
                                    comment[lang]
                                        .toLowerCase()
                                        .includes(findText)
                                )) ||
                            Object.keys(who).some((lang) =>
                                who[lang].toLowerCase().includes(findText)
                            )
                        );
                    }
                );

                if (foundHedgehogs.length > 20) {
                    return phrases.tooManyHedgehogsFoundAnswer;
                }

                if (foundHedgehogs.length) {
                    return foundHedgehogs
                        .map((hedgehog) =>
                            this.getHedgehog(languageCode, phrases, hedgehog)
                        )
                        .join('\n\n');
                }

                return `${phrases.hedgehogNotFoundAnswerStart}${findText}${phrases.hedgehogNotFoundAnswerEnd}`;
            }
        }

        // Final answer
        return `${phrases.finalAnswerStart}${firstName}${phrases.finalAnswerEnd}`;
    }

    private getPhrases(languageCode: string): IPhrases {
        return PHRASES[languageCode] || PHRASES.en;
    }

    private getRandomHedgehogNumber(hedgehogsCount: number): number {
        return Math.floor(Math.random() * Number(hedgehogsCount)) + 1;
    }

    private getHedgehog(
        languageCode: string,
        phrases: IPhrases,
        { id, when, photos, who, country, place, comment }: IHedgehog
    ) {
        return `${phrases.hedgehogNumberAnswer}${id}.
${phrases.hedgehogWhereAnswer}${place[languageCode]}${
            comment ? ` (${comment[languageCode]})` : ''
        }, ${country[languageCode]}.
${who[languageCode]}${phrases.hedgehogWhoWhenAnswer}${when}.
${photos.map((photo, i) => `[photo ${i + 1}](${photo})`).join(', ')}`;
    }
}
