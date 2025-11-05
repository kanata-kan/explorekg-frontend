export const dynamic = "force-dynamic";
export const revalidate = 43200;

import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { BaseSection } from "@/components/ui_v2/sections";
import { getTravelPacks } from "@/lib/api/travel-packs";

type PageParams = { params: Promise<{ locale: string }> };

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata({
    title: "Travel Packs — Curated Adventures Across Kyrgyzstan",
    description:
      "Explore our handpicked travel packs and discover authentic Kyrgyz experiences — from mountain treks to nomadic cultural tours.",
    locale,
    path: "/travel-packs",
    image: "/images/travel-packs/og-travel-packs.webp",
    keywords: ["Travel Packs", "Kyrgyzstan Tours", "Adventure Packages", "Nomadic Tours"],
  });
}

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
