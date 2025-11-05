// ==========================================================
// 📄 app/[locale]/travel-packs/[id]/page.tsx
// ==========================================================
// 🧳 TravelPackDetailsPage — Dynamic route for each travel pack
// Manual Metadata Generation (no Smart Layer)
// ==========================================================

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SITE } from "@/config/constants";
import { getTravelPackById } from "@/lib/api/travel-packs";
import { TravelPackDetailsSection } from "@/components/ui_v2/sections/TravelPackDetailsSection";

// --------------------------------------------
// 🧠 Types
// --------------------------------------------
type PageParams = {
  params: Promise<{ locale: string; id: string }>;
};

// --------------------------------------------
// ⚙️ Dynamic Metadata Builder
// --------------------------------------------
export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale, id } = await params;
  const travelPack = await getTravelPackById(id, locale);

  if (!travelPack) return {};

  const base = SITE.URL.replace(/\/$/, "");
  const path = `/${locale}/travel-packs/${travelPack.id}/`;
  const canonical = `${base}${path}`;
  const image = travelPack.coverImage?.startsWith("http")
    ? travelPack.coverImage
    : `${base}${travelPack.coverImage || "/images/travel-packs/og-travel-packs.webp"}`;

  const title =
    travelPack.metadata?.title ||
    `${travelPack.name} — Travel Pack | Nomadia Travels`;
  const description =
    travelPack.metadata?.description ||
    travelPack.description ||
    "Explore this curated Kyrgyzstan travel package designed for authentic adventure and cultural immersion.";

  return {
    title,
    description,

    metadataBase: new URL(SITE.URL),

    alternates: {
      canonical,
      languages: {
        en: `${base}/en/travel-packs/${travelPack.id}/`,
        fr: `${base}/fr/travel-packs/${travelPack.id}/`,
        "x-default": `${base}/travel-packs/${travelPack.id}/`,
      },
    },

    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE.NAME,
      type: "article",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${travelPack.name} — Nomadia Travels`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@nomadia_travels",
      title,
      description,
      images: [image],
    },
  };
}

// --------------------------------------------
// 🧩 Page Component
// --------------------------------------------
export default async function TravelPackDetailsPage({ params }: PageParams) {
  const { locale, id } = await params;
  const travelPack = await getTravelPackById(id, locale);

  if (!travelPack) return notFound();

  return (
    <main>
      <TravelPackDetailsSection travelPack={travelPack} locale={locale} />
    </main>
  );
}
