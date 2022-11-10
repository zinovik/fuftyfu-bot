import { Json } from '../database/Json.service';
import { IEvent } from './model/IEvent.interface';

const JSON_URL = 'https://raw.githubusercontent.com/zinovik/fuftyfu-data/main/hedgehogs.json';

exports.handler = async ({ queryStringParameters }: IEvent, context: never) => {
  const limit = Number(queryStringParameters.limit) || 10;
  const offset = Number(queryStringParameters.offset) || 0;
  const filter = queryStringParameters.filter || '';

  const json = new Json(JSON_URL);
  const hedgehogs = await json.getAllHedgehogs();

  const hedgehogsFiltered = hedgehogs.filter(
    ({ country, place, comment, who }) =>
      Object.keys(country).some((lang) => country[lang].toLowerCase().includes(filter)) ||
      Object.keys(place).some((lang) => place[lang].toLowerCase().includes(filter)) ||
      (comment && Object.keys(comment).some((lang) => comment[lang].toLowerCase().includes(filter))) ||
      Object.keys(who).some((lang) => who[lang].toLowerCase().includes(filter)),
  );
  const hedgehogsSliced = hedgehogsFiltered.slice(offset, offset + limit);

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      total: hedgehogs.length,
      filtered: hedgehogsFiltered.length,
      hedgehogs: hedgehogsSliced,
    }),
  };
};
