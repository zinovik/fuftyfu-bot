const googleSpreadsheet = require('google-spreadsheet');
import { promisify } from 'util';

import { IDatabaseService } from './IDatabaseService.interface';
import { IHedgehog } from '../common/model/IHedgehog.interface';

export class GoogleSpreadsheetService implements IDatabaseService {
  constructor(
    private readonly spreadsheetId: string,
    private readonly googlePrivateKey: string,
    private readonly googleClientEmail: string,
  ) {}

  async getAllHedgehogs(): Promise<IHedgehog[]> {
    const doc = new googleSpreadsheet(this.spreadsheetId);

    const creds = {
      private_key: this.googlePrivateKey.replace(/\\n/g, '\n'),
      client_email: this.googleClientEmail,
    };

    await promisify(doc.useServiceAccountAuth)(creds);
    const info = await promisify(doc.getInfo)();

    const sheet = info.worksheets[0];

    const rows = await promisify(sheet.getRows)();

    return rows.map((row: any) => {
      return {
        where: row.where.split(','),
        who: row.who,
        when: row.when,
        url: row.url,
      };
    });
  }
}
