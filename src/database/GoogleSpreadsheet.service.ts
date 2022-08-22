// eslint-disable-next-line @typescript-eslint/no-var-requires
const googleSpreadsheet = require('google-spreadsheet');
import { promisify } from 'util';

import { IDatabaseService } from './IDatabaseService.interface';
import { IHedgehog } from '../common/model/IHedgehog.interface';

export class GoogleSpreadsheetService implements IDatabaseService {
  constructor(readonly spreadsheetId: string, readonly googlePrivateKey: string, readonly googleClientEmail: string) {
    this.spreadsheetId = spreadsheetId;
    this.googlePrivateKey = googlePrivateKey;
    this.googleClientEmail = googleClientEmail;
  }

  async getAllHedgehogs(): Promise<IHedgehog[]> {
    const doc = new googleSpreadsheet(this.spreadsheetId);

    const creds = {
      private_key: this.googlePrivateKey,
      client_email: this.googleClientEmail,
    };

    console.log('Connecting to the database...');

    await promisify(doc.useServiceAccountAuth)(creds);

    console.log('Getting info with worksheet...');

    const info = await promisify(doc.getInfo)();

    const sheet = info.worksheets[0];

    console.log('Getting worksheet rows...');

    const rows = await promisify(sheet.getRows)();

    let hedgehogNumber = 1;

    return rows.map((row: any) => {
      return {
        hedgehogNumber: hedgehogNumber++,
        where: row.where.split(','),
        who: row.who,
        when: row.when,
        url: row.url,
      };
    });
  }
}
