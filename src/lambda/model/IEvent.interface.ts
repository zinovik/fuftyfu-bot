export interface IEvent {
  path: string;
  httpMethod: string;
  queryStringParameters: { limit?: string; offset?: string; filter?: string; cors?: string, token?: string };
  headers: { [key: string]: string };
  body: string;
  isBase64Encoded: boolean;
}