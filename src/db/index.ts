// const GoogleSpreadsheet = require('google-spreadsheet');
// import { promisify } from 'util';

import { IHedgehog } from './IHedgehog.interface';
import { hedgehogsMock } from './hedgehogsMock';

// export const loadHedgehogs = async () => {
//   const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID);

//   const creds = require('./creds.json');

//   await promisify(doc.useServiceAccountAuth)(creds);
//   const info = await promisify(doc.getInfo)();

//   const sheet = info.worksheets[0];

//   const rows = await promisify(sheet.getRows)({
//     offset: 1,
//   });

//   console.log(rows);
// };

let hedgehogsFromEnv: IHedgehog[] = [];

try {
  hedgehogsFromEnv = JSON.parse(process.env.HEDGEHOGS || '');
} catch (error) {
  console.log('Can\t read hedgehogs from env');
}

export const hedgehogs = hedgehogsFromEnv.length ? hedgehogsFromEnv : hedgehogsMock;
