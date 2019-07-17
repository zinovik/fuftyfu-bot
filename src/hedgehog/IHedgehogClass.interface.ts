export interface IHedgehogClass {
  processMessage(message: string): Promise<boolean>;
}
