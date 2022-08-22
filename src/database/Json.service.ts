import axios from 'axios';
import { IDatabaseService } from './IDatabaseService.interface';
import { IHedgehog } from '../common/model/IHedgehog.interface';

export class Json implements IDatabaseService {
  private jsonUrl: string;

  constructor(jsonUrl: string) {
    this.jsonUrl = jsonUrl;
  }

  async getAllHedgehogs(): Promise<IHedgehog[]> {
    const { data: hedgehogs } = await axios.get<Omit<IHedgehog, 'hedgehogNumber'>[]>(this.jsonUrl);

    return hedgehogs.map((hedgehog, index) => ({
      ...hedgehog,
      hedgehogNumber: index + 1,
    }));
  }
}
