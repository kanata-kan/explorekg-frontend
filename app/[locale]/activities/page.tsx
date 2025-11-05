// ==========================================================
// 📄 app/[locale]/activities/page.tsx
// ==========================================================
// 🧗‍♂️ ActivitiesPage — All adventures in Kyrgyzstan
// Manual SEO + Metadata setup (no Smart Layer)
// ==========================================================

export const revalidate = 43200; // 12h ISR
export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { SITE } from "@/config/constants";
import { BaseSection } from "@/components/ui_v2/sections";
import { getActivities } from "@/lib/api/activities";

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
  const path = `/${locale}/activities/`;
  const canonical = `${base}${path}`;
  const image = `${base}/images/activities/og-activities.webp`;

  return {
    title:
      "Activities in Kyrgyzstan — Adventure, Trekking & Culture | Explore Kyrgyzstan",
    description:
      "Discover thrilling activities in Kyrgyzstan — hiking in Tien Shan, horse trekking, yurt stays, skiing, and nomadic adventures across the country.",

    metadataBase: new URL(SITE.URL),

    alternates: {
      canonical,
      languages: {
        en: `${base}/en/activities/`,
        fr: `${base}/fr/activities/`,
        "x-default": `${base}/activities/`,
      },
    },

    openGraph: {
      title:
        "Activities in Kyrgyzstan — Adventure, Trekking & Culture | Explore Kyrgyzstan",
      description:
        "Discover thrilling activities in Kyrgyzstan — hiking in Tien Shan, horse trekking, yurt stays, skiing, and nomadic adventures across the country.",
      url: canonical,
      siteName: SITE.NAME,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Kyrgyzstan Adventure Activities — Nomadia Travels",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@nomadia_travels",
      title:
        "Activities in Kyrgyzstan — Adventure, Trekking & Culture | Explore Kyrgyzstan",
      description:
        "Discover thrilling activities in Kyrgyzstan — hiking in Tien Shan, horse trekking, yurt stays, skiing, and nomadic adventures across the country.",
      images: [image],
    },
  };
}

// --------------------------------------------
// 🧗‍♂️ Page Component
// --------------------------------------------
export default async function ActivitiesPage({ params }: PageParams) {
  const { locale } = await params;
  const activities = await getActivities(locale);

  return (
    <main>
      <BaseSection
        items={activities}
        namespace="activities"
        ctaBasePath="/activities"
        variant="page"
      />
    </main>
  );
}
