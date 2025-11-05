import { z } from "zod";

export const MetadataSchema = z.object({
  title: z.string(),
  description: z.string(),
  path: z.string(),
  image: z.string(),
  alt: z.string(),
});

export const ContentBlockSchema = z.object({
  type: z.string(),
  text: z.string().optional(),
  src: z.string().optional(),
});

export const FormFieldSchema = z.object({
  name: z.string(),
  label: z.string(),
  type: z.string(),
  required: z.boolean().default(false),
});

export const FormSchema = z.object({
  fields: z.array(FormFieldSchema).nonempty(),
  submitText: z.string(),
});

export const InfoSchema = z.object({
  email: z.string().email(),
  phone: z.string(),
  address: z.string(),
  mapLink: z.string().url(),
});

export const SocialSchema = z.object({
  platform: z.string(),
  url: z.string().url(),
});

export const ContactPageSchema = z.object({
  id: z.string(),
  heading: z.string(),
  content: z.array(
    z.object({
      type: z.string(),
      text: z.string().optional(),
      src: z.string().optional(),
    }),
  ),
  form: z.object({
    fields: z.array(
      z.object({
        name: z.string(),
        label: z.string(),
        type: z.string(),
        required: z.boolean().default(false),
      }),
    ),
    submitText: z.string(),
  }), // ✅ إلزامية
  info: z.object({
    email: z.string().email(),
    phone: z.string(),
    address: z.string(),
    mapLink: z.string().url(),
  }),
  socials: z.array(
    z.object({
      platform: z.string(),
      url: z.string().url(),
    }),
  ),
  metadata: z.object({
    title: z.string(),
    description: z.string(),
    path: z.string(),
    image: z.string(),
    alt: z.string(),
  }),
});

export type ContactPage = z.infer<typeof ContactPageSchema>;

export function validateContactPage(data: unknown): ContactPage {
  const parsed = ContactPageSchema.safeParse(data);
  if (!parsed.success) {
    console.warn("❌ Invalid ContactPage data:", parsed.error.format());
    throw new Error("Invalid contact.json data");
  }
  return parsed.data;
}
