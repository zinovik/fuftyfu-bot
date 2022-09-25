export interface IHedgehog {
  id: number;
  when: string;
  photo: string;
  who: {
    [language: string]: string;
  };
  country: {
    [language: string]: string;
  };
  place: {
    [language: string]: string;
  };
  comment?: {
    [language: string]: string;
  };
}
