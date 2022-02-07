import { City } from './city';

export type Weather = {
    date: Date;
    tempType: string;
    temp: number;
    city: City[];
  };
  