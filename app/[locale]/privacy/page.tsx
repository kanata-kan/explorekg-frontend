// ==========================================================
// 📄 app/[locale]/privacy/page.tsx
// ==========================================================
// 🔒 Privacy Policy — How Nomadia Travels protects your data
// Manual SEO + Metadata setup (no Smart Layer)
// ==========================================================

import type { Metadata } from "next";
import { SITE } from "@/config/constants";
import PrivacySection_v2 from "@/components/ui_v2/sections/PrivacySection/PrivacySection";

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
  const path = `/${locale}/privacy/`;
  const canonical = `${base}${path}`;
  const image = `${base}/images/legal/og-privacy.webp`;

  return {
    title:
      "Privacy Policy — How Nomadia Travels Handles Your Data | Explore Kyrgyzstan",
    description:
      "Learn how Nomadia Travels collects, uses, and protects your personal information while booking tours and exploring Kyrgyzstan.",

    metadataBase: new URL(SITE.URL),

    alternates: {
      canonical,
      languages: {
        en: `${base}/en/privacy/`,
        fr: `${base}/fr/privacy/`,
        "x-default": `${base}/privacy/`,
      },
    },

    openGraph: {
      title:
        "Privacy Policy — How Nomadia Travels Handles Your Data | Explore Kyrgyzstan",
      description:
        "Learn how Nomadia Travels collects, uses, and protects your personal information while booking tours and exploring Kyrgyzstan.",
      url: canonical,
      siteName: SITE.NAME,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Nomadia Travels Privacy Policy — Data Protection",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@nomadia_travels",
      title:
        "Privacy Policy — How Nomadia Travels Handles Your Data | Explore Kyrgyzstan",
      description:
        "Learn how Nomadia Travels collects, uses, and protects your personal information while booking tours and exploring Kyrgyzstan.",
      images: [image],
    },
  };
}

// --------------------------------------------
// 🔒 Page Component
// --------------------------------------------
export default async function PrivacyPage({ params }: PageParams) {
  const { locale } = await params;
  return (
    <main>
      <PrivacySection_v2 />
    </main>
  );
}
