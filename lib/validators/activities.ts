import { z } from "zod";

// 🧩 Shared schema
export const MetadataSchema = z.object({
  title: z.string(),
  description: z.string(),
  path: z.string(),
  image: z.string(),
  alt: z.string(),
});

// 🏕️ Activity schema
export const ActivitySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  coverImage: z.string(),
  duration: z.string(),
  location: z.string(),
  groupSize: z.string(),
  price: z.number().optional(),
  images: z.array(z.string()).optional(),
  metadata: MetadataSchema,
});

// 🧠 Type inference
export type Activity = z.infer<typeof ActivitySchema>;

// ✅ Array validator
export function validateActivityArray(data: unknown[]): Activity[] {
  const valid: Activity[] = [];
  for (const item of data) {
    const parsed = ActivitySchema.safeParse(item);
    if (parsed.success) valid.push(parsed.data);
    else console.warn("❌ Invalid Activity:", parsed.error);
  }
  return valid;
}
