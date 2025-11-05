import { z } from "zod";

// 🧩 Shared Metadata Schema
export const MetadataSchema = z.object({
  title: z.string(),
  description: z.string(),
  path: z.string(),
  image: z.string(),
  alt: z.string(),
});

// 🧱 Content Block Schema
export const ContentBlockSchema = z.object({
  type: z.enum(["paragraph", "heading"]), // paragraph | heading
  text: z.string().optional(),
  src: z.string().optional(), // in case we add images later
});

// 📖 Our Story Schema
export const OurStoryPageSchema = z.object({
  id: z.string(),
  heading: z.string(),
  content: z.array(ContentBlockSchema).nonempty(),
  metadata: MetadataSchema,
});

// ✅ Type inference
export type OurStoryPage = z.infer<typeof OurStoryPageSchema>;

// 🧩 Validation utility
export function validateOurStoryPage(data: unknown): OurStoryPage {
  const parsed = OurStoryPageSchema.safeParse(data);
  if (!parsed.success) {
    console.warn("❌ Invalid OurStoryPage data:", parsed.error.format());
    throw new Error("Invalid our-story.json data");
  }
  return parsed.data;
}
