import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { generateDynamicMetadata } from "@/lib/metadata";
import { getTravelPackById } from "@/lib/api/travel-packs";
import { TravelPackDetailsSection } from "@/components/ui_v2/sections/TravelPackDetailsSection";

type PageParams = {
  params: Promise<{ locale: string; id: string }>;
};

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale, id } = await params;
  const travelPack = await getTravelPackById(id, locale);

  if (!travelPack) return {};

  return generateDynamicMetadata({
    name: travelPack.name,
    description:
      travelPack.metadata?.description ||
      travelPack.description ||
      "Explore this curated Kyrgyzstan travel package designed for authentic adventure and cultural immersion.",
    locale,
    path: `/travel-packs/${travelPack.id}`,
    image: travelPack.coverImage || "/images/travel-packs/og-travel-packs.webp",
    category: "Travel Pack",
    keywords: [
      "Kyrgyzstan Tours",
      "Travel Package",
      travelPack.name,
      "Adventure",
    ],
  });
}

export default async function TravelPackDetailsPage({ params }: PageParams) {
  const { locale, id } = await params;
  const travelPack = await getTravelPackById(id, locale);

  if (!travelPack) {
    notFound();
  }

  return (
    <main>
      <TravelPackDetailsSection travelPack={travelPack} locale={locale} />
    </main>
  );
}
