const GoogleSpreadsheet = require('google-spreadsheet');
import { promisify } from 'util';

import { IHedgehog } from './IHedgehog.interface';

export const getHedgehogs = async (): Promise<IHedgehog[]> => {
  if (!process.env.SPREADSHEET_ID || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_CLIENT_EMAIL) {
    throw new Error('No config vars');
  }

  const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID);

  const creds = {
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
  };

  console.log(creds);

  await promisify(doc.useServiceAccountAuth)(creds);
  const info = await promisify(doc.getInfo)();

  const sheet = info.worksheets[0];

  const rows = await promisify(sheet.getRows)();

  return rows.map((row: any) => {
    return {
      where: row.where,
      who: row.who,
      when: row.when,
      url: row.url,
    };
  });
};
