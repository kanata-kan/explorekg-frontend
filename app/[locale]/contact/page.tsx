// ==========================================================
// 📄 app/[locale]/contact/page.tsx
// ==========================================================
// 📬 ContactPage — Get in touch with Nomadia Travels
// Manual SEO + Metadata setup (no Smart Layer)
// ==========================================================

import type { Metadata } from "next";
import { SITE } from "@/config/constants";
import ContactSection from "@/components/ui_v2/sections/ContactSection/ContactSection";
import { getContact } from "@/lib/api/contact";

// --------------------------------------------
// 🧠 Types
// --------------------------------------------
type PageParams = { params: Promise<{ locale: string }> };

// --------------------------------------------
// ⚙️ Manual Metadata
// --------------------------------------------
export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale } = await params;

  const base = SITE.URL.replace(/\/$/, "");
  const path = `/${locale}/contact/`;
  const canonical = `${base}${path}`;
  const image = `${base}/images/contact/og-contact.webp`;

  return {
    title: "Contact Nomadia Travels — Tours, Car Rentals & Custom Adventures",
    description:
      "Get in touch with Nomadia Travels for tailor-made tours, car rentals, and authentic experiences across Kyrgyzstan.",

    metadataBase: new URL(SITE.URL),

    alternates: {
      canonical,
      languages: {
        en: `${base}/en/contact/`,
        fr: `${base}/fr/contact/`,
        "x-default": `${base}/contact/`,
      },
    },

    openGraph: {
      title: "Contact Nomadia Travels — Tours, Car Rentals & Custom Adventures",
      description:
        "Get in touch with Nomadia Travels for tailor-made tours, car rentals, and authentic experiences across Kyrgyzstan.",
      url: canonical,
      siteName: SITE.NAME,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Nomadia Travels contact page — Kyrgyzstan tours & rentals",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@nomadia_travels",
      title: "Contact Nomadia Travels — Tours, Car Rentals & Custom Adventures",
      description:
        "Get in touch with Nomadia Travels for tailor-made tours, car rentals, and authentic experiences across Kyrgyzstan.",
      images: [image],
    },
  };
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
      fields: contact.form.fields.map((field: any) => ({
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
