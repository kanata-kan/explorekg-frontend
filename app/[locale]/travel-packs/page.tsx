// ==========================================================
// 📄 app/[locale]/travel-packs/page.tsx
// ==========================================================
// 🧳 Travel Packs — Explore curated adventures across Kyrgyzstan
// Manual SEO + Metadata setup (no Smart Layer)
// ==========================================================

export const dynamic = "force-dynamic";
export const revalidate = 43200; // 12h ISR

import type { Metadata } from "next";
import { SITE } from "@/config/constants";
import { BaseSection } from "@/components/ui_v2/sections";
import { getTravelPacks } from "@/lib/api/travel-packs";

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
  const path = `/${locale}/travel-packs/`;
  const canonical = `${base}${path}`;
  const image = `${base}/images/travel-packs/og-travel-packs.webp`;

  return {
    title:
      "Travel Packs — Curated Adventures Across Kyrgyzstan | Nomadia Travels",
    description:
      "Explore our handpicked travel packs and discover authentic Kyrgyz experiences — from mountain treks to nomadic cultural tours.",

    metadataBase: new URL(SITE.URL),

    alternates: {
      canonical,
      languages: {
        en: `${base}/en/travel-packs/`,
        fr: `${base}/fr/travel-packs/`,
        "x-default": `${base}/travel-packs/`,
      },
    },

    openGraph: {
      title:
        "Travel Packs — Curated Adventures Across Kyrgyzstan | Nomadia Travels",
      description:
        "Explore our handpicked travel packs and discover authentic Kyrgyz experiences — from mountain treks to nomadic cultural tours.",
      url: canonical,
      siteName: SITE.NAME,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Nomadia Travels curated travel packs — Kyrgyzstan tourism",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@nomadia_travels",
      title:
        "Travel Packs — Curated Adventures Across Kyrgyzstan | Nomadia Travels",
      description:
        "Explore our handpicked travel packs and discover authentic Kyrgyz experiences — from mountain treks to nomadic cultural tours.",
      images: [image],
    },
  };
}

// --------------------------------------------
// 🧳 Page Component
// --------------------------------------------
export default async function TravelPacksPage({ params }: PageParams) {
  const { locale } = await params;
  const travelPacks = await getTravelPacks(locale);

  return (
    <main>
      <BaseSection
        items={travelPacks}
        namespace="travelPacks"
        ctaBasePath="/travel-packs"
        variant="page"
      />
    </main>
  );
}
