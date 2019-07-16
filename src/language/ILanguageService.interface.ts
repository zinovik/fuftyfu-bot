export interface ILanguageService {
  getReplyMarkup(request: any): Promise<string>;
  getText(request: any): Promise<string>;
}
