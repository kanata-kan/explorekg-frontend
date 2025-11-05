import { z } from "zod";

// 🧱 Service Schema
export const ServiceSchema = z.object({
  id: z.string(),
  icon: z
    .string()
    .url()
    .or(z.string().regex(/^\/icons\//)), // يقبل local path أو URL
  title: z.string(),
  description: z.string(),
  link: z.string(),
});

// 🧩 Array Schema
export const ServicesArraySchema = z.array(ServiceSchema).nonempty();

// ✅ Type inference
export type Service = z.infer<typeof ServiceSchema>;

// 🧠 Validation utility
export function validateServiceArray(data: unknown[]): Service[] {
  const valid: Service[] = [];
  for (const item of data) {
    const parsed = ServiceSchema.safeParse(item);
    if (parsed.success) valid.push(parsed.data);
    else console.warn("❌ Invalid Service:", parsed.error.format());
  }
  return valid;
}
