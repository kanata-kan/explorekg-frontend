import { z } from "zod";

export const MetadataSchema = z.object({
  title: z.string(),
  description: z.string(),
  path: z.string(),
  image: z.string(),
  alt: z.string(),
});

export const TravelPackSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  coverImage: z.string(),
  ctaLabel: z.string(),
  features: z.array(z.string()).nonempty(),
  metadata: MetadataSchema,
});

export type TravelPack = z.infer<typeof TravelPackSchema>;

export function validateTravelPacks(data: unknown[]): TravelPack[] {
  const valid: TravelPack[] = [];
  for (const item of data) {
    const parsed = TravelPackSchema.safeParse(item);
    if (parsed.success) valid.push(parsed.data);
    else console.warn("❌ Invalid TravelPack:", parsed.error);
  }
  return valid;
}
