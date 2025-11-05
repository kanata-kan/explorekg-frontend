import { z } from "zod";

// 🧩 Shared Metadata Schema
export const MetadataSchema = z.object({
  title: z.string(),
  description: z.string(),
  path: z.string(),
  image: z.string(),
  alt: z.string(),
});

// 🏞️ Hero Section Schema
export const HeroSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  heroImage: z.string(),
  ctaText: z.string(),
  ctaLink: z.string(),
});

// 🧱 Section Preview Schema
export const SectionPreviewSchema = z.object({
  id: z.string(),
  heading: z.string(),
  description: z.string(),
  linkText: z.string(),
  link: z.string(),
  limit: z.number().optional(), // optional field
});

// 🏠 Home Page Schema
export const HomePageSchema = z.object({
  id: z.string(),
  hero: HeroSchema,
  sections: z.array(SectionPreviewSchema),
  metadata: MetadataSchema,
});

// ✅ Type inference
export type HomePage = z.infer<typeof HomePageSchema>;

// 🧩 Validation utility
export function validateHomePage(data: unknown): HomePage {
  const parsed = HomePageSchema.safeParse(data);
  if (!parsed.success) {
    console.warn("❌ Invalid HomePage data:", parsed.error.format());
    throw new Error("Invalid home.json data");
  }
  return parsed.data;
}
