import axios from 'axios';
import { IDatabaseService } from './IDatabaseService.interface';
import { IHedgehog } from '../common/model/IHedgehog.interface';

export class Json implements IDatabaseService {
  constructor(private readonly jsonUrl: string) {
    this.jsonUrl = jsonUrl;
  }

  async getAllHedgehogs(): Promise<IHedgehog[]> {
    const { data: hedgehogs } = await axios.get<IHedgehog[]>(this.jsonUrl);

    return hedgehogs;
  }
}
