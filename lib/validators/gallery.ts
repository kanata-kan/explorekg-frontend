import { z } from "zod";

// 🧩 Shared schema (موحد لكل modules)
// lib/validators/shared.ts

export const MetadataSchema = z.object({
  title: z.string(),
  description: z.string(),
  path: z.string(),
  image: z.string(),
  alt: z.string(),
});

export type Metadata = z.infer<typeof MetadataSchema>;

// 🖼️ Gallery Item schema
export const GalleryItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  image: z.string(),
  caption: z.string(),
  metadata: MetadataSchema,
});

// 🧠 Type inference
export type GalleryItem = z.infer<typeof GalleryItemSchema>;

// ✅ Array validator
export function validateGalleryArray(data: unknown[]): GalleryItem[] {
  const valid: GalleryItem[] = [];
  for (const item of data) {
    const parsed = GalleryItemSchema.safeParse(item);
    if (parsed.success) {
      valid.push(parsed.data);
    } else {
      console.warn("❌ Invalid Gallery Item:", parsed.error.format());
    }
  }
  return valid;
}
