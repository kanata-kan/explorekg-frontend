import { Metadata } from "./common";

export interface Car {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  images: string[]; // required now
  price: number;
  currency: string;
  unit: string;
  seats: string; // changed to string for consistency with data
  transmission: string;
  drive: string;
  luggage: string;
  fuel: string;
  metadata: Metadata;
}
