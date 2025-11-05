// ==========================================================
// 🚗 cars.ts — Validator & Type definition for Cars Data
// ==========================================================
import { z } from "zod";

// 🧩 Subschema for SEO Metadata
const MetadataSchema = z.object({
  title: z.string(),
  description: z.string(),
  path: z.string(),
  image: z.string(),
  alt: z.string(),
});

// 🚗 Main Car Schema
export const CarSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  coverImage: z.string(),
  images: z.array(z.string()), // now required
  price: z.number(),
  currency: z.string(),
  unit: z.string(),
  seats: z.string(), // changed to string because JSON uses "5–7"
  transmission: z.string(),
  drive: z.string(),
  luggage: z.string(),
  fuel: z.string(),
  metadata: MetadataSchema,
});

export type Car = z.infer<typeof CarSchema>;

// 🧠 Validator function
export function validateCarArray(data: unknown[]): Car[] {
  const valid: Car[] = [];
  for (const item of data) {
    const parsed = CarSchema.safeParse(item);
    if (parsed.success) {
      valid.push(parsed.data);
    } else {
      console.warn("❌ Invalid Car:", parsed.error.format());
    }
  }
  return valid;
}
