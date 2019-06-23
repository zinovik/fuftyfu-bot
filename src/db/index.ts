import { IHedgehog } from './IHedgehog.interface';
import { hedgehogsMock } from './hedgehogsMock';

let hedgehogsFromEnv: IHedgehog[] = [];

try {
  hedgehogsFromEnv = JSON.parse(process.env.HEDGEHOGS || '');
} catch (error) {
  console.log('Can\t read hedgehogs from env');
}

export const hedgehogs = hedgehogsFromEnv.length ? hedgehogsFromEnv : hedgehogsMock;
