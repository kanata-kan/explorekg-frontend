// ==========================================================
// 📄 app/[locale]/terms/page.tsx
// ==========================================================
// ⚖️ Terms of Service — Understand our rules and conditions
// Manual SEO + Metadata setup (no Smart Layer)
// ==========================================================

import type { Metadata } from "next";
import { SITE } from "@/config/constants";
import TermsSection_v2 from "@/components/ui_v2/sections/TermsSection/TermsSection";

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
  const path = `/${locale}/terms/`;
  const canonical = `${base}${path}`;
  const image = `${base}/images/legal/og-terms.webp`;

  return {
    title: "Terms of Service — Nomadia Travels | Explore Kyrgyzstan",
    description:
      "Read the terms and conditions for using Nomadia Travels website, services, and bookings in Kyrgyzstan. Transparency, trust, and customer rights guaranteed.",

    metadataBase: new URL(SITE.URL),

    alternates: {
      canonical,
      languages: {
        en: `${base}/en/terms/`,
        fr: `${base}/fr/terms/`,
        "x-default": `${base}/terms/`,
      },
    },

    openGraph: {
      title: "Terms of Service — Nomadia Travels | Explore Kyrgyzstan",
      description:
        "Read the terms and conditions for using Nomadia Travels website, services, and bookings in Kyrgyzstan. Transparency, trust, and customer rights guaranteed.",
      url: canonical,
      siteName: SITE.NAME,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Nomadia Travels Terms and Conditions — Customer Rights",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@nomadia_travels",
      title: "Terms of Service — Nomadia Travels | Explore Kyrgyzstan",
      description:
        "Read the terms and conditions for using Nomadia Travels website, services, and bookings in Kyrgyzstan. Transparency, trust, and customer rights guaranteed.",
      images: [image],
    },
  };
}

// --------------------------------------------
// ⚖️ Page Component
// --------------------------------------------
export default async function TermsPage({ params }: PageParams) {
  const { locale } = await params;

  return (
    <main>
      <TermsSection_v2 />
    </main>
  );
}
