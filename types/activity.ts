// types/activity.ts
import { Metadata } from "./common";

export interface Activity {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  duration: string;
  location: string;
  groupSize: string;
  price?: number | null;
  images?: string[];
  metadata: Metadata;
}
