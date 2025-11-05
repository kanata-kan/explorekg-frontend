// ==========================================================
// 📄 app/[locale]/contact/page.tsx
// ==========================================================
// 📬 ContactPage — Get in touch with Nomadia Travels
// ==========================================================

import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import ContactSection from "@/components/ui_v2/sections/ContactSection/ContactSection";
import { getContact } from "@/lib/api/contact";

// --------------------------------------------
// 🧠 Types
// --------------------------------------------
type PageParams = { params: Promise<{ locale: string }> };

// --------------------------------------------
// ⚙️ Metadata using unified system
// --------------------------------------------
export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata({
    title: "Contact Nomadia Travels — Tours, Car Rentals & Custom Adventures",
    description:
      "Get in touch with Nomadia Travels for tailor-made tours, car rentals, and authentic experiences across Kyrgyzstan.",
    locale,
    path: "/contact",
    image: "/images/contact/og-contact.webp",
    keywords: [
      "Contact",
      "Nomadia Travels",
      "Kyrgyzstan Tours",
      "Car Rental",
      "Travel Agency",
    ],
  });
}

// --------------------------------------------
// 📬 Page Component
// --------------------------------------------
export default async function ContactPage({ params }: PageParams) {
  const { locale } = await params;

  const contact = await getContact(locale);

  const fixedContact = {
    ...contact,
    form: {
      ...contact.form,
      fields: contact.form.fields.map((field) => ({
        name: field.name,
        label: field.label,
        type: field.type,
        required: field.required ?? false,
      })),
    },
  };

  return (
    <main>
      <ContactSection data={fixedContact} />
    </main>
  );
}
