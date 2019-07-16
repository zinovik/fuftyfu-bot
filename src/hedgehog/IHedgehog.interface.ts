export interface IHedgehog {
  processMessage(message: string): Promise<void>;
}
