export interface IEvent {
  path: string;
  httpMethod: string;
  queryStringParameters: { limit?: string; offset?: string; filter?: string };
  headers: { [key: string]: string };
  body: string;
  isBase64Encoded: boolean;
}
