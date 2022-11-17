import { Json } from '../database/Json.service';
import { IEvent } from './model/IEvent.interface';

const JSON_URL = 'https://raw.githubusercontent.com/zinovik/fuftyfu-data/main/hedgehogs.json';

const getResponse = (statusCode: number, body: unknown, isCors: boolean) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json',
    ...(isCors
      ? {
          'Access-Control-Allow-Origin': '*',
        }
      : {}),
  },
  body: JSON.stringify(body),
});

exports.handler = async ({ path, queryStringParameters }: IEvent, context: never) => {
  if (process.env.API_TOKEN === undefined) {
    throw new Error('There is no API_TOKEN!');
  }

  const token = queryStringParameters.token || '';
  const isCors = queryStringParameters.cors === 'true';

  if (token !== process.env.API_TOKEN) {
    return getResponse(
      401,
      {
        result: 'wrong token',
      },
      isCors,
    );
  }

  const json = new Json(JSON_URL);
  const hedgehogs = await json.getAllHedgehogs();

  if (path.includes('/api/hedgehog/')) {
    const id = Number(path.replace('/api/hedgehog/', '')) - 1;

    return hedgehogs[id] ? getResponse(200, hedgehogs[id], isCors) : getResponse(404, { result: 'not found' }, isCors);
  }

  const limit = Number(queryStringParameters.limit) || 10;
  const offset = Number(queryStringParameters.offset) || 0;
  const filter = queryStringParameters.filter || '';

  const hedgehogsFiltered = hedgehogs.filter(
    ({ country, place, comment, who }) =>
      Object.keys(country).some((lang) => country[lang].toLowerCase().includes(filter)) ||
      Object.keys(place).some((lang) => place[lang].toLowerCase().includes(filter)) ||
      (comment && Object.keys(comment).some((lang) => comment[lang].toLowerCase().includes(filter))) ||
      Object.keys(who).some((lang) => who[lang].toLowerCase().includes(filter)),
  );
  const hedgehogsSliced = hedgehogsFiltered.slice(offset, offset + limit);

  return getResponse(
    200,
    {
      total: hedgehogs.length,
      filtered: hedgehogsFiltered.length,
      hedgehogs: hedgehogsSliced,
    },
    isCors,
  );
};
