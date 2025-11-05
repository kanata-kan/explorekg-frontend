import { Metadata } from "./common";

export interface TravelPack {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  features: string[];
  ctaLabel: string;
  duration?: string | null;
  price?: string | null;
  images?: string[]; // ✅ رجعناها optional
  metadata: Metadata;
}
