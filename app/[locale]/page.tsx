// ==========================================================
// 📄 app/[locale]/page.tsx
// ==========================================================
// 🏡 HomePage — Explore Kyrgyzstan main landing page
// ==========================================================

import type { Metadata } from "next";
import { SITE } from "@/config/constants";
import { generatePageMetadata } from "@/lib/metadata";

import { HeroSection } from "@/components/ui_v2/sections/HeroSection";
import { ServicesSectionServer } from "@/components/ui_v2/sections/ServicesSection";
import { BaseSection } from "@/components/ui_v2/sections";
import { getHome } from "@/lib/api/home";
import { getCars } from "@/lib/api/cars";
import { getTravelPacks } from "@/lib/api/travel-packs";
import { getActivities } from "@/lib/api/activities";

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
    title: `${SITE.NAME} — Explore Kyrgyzstan's Beauty`,
    description:
      SITE.DESCRIPTION ||
      "Discover the breathtaking landscapes, nomadic culture, and mountains of Kyrgyzstan — curated by Nomadia Travels.",
    locale,
    path: "/",
    image: "/images/home/hero-home.webp",
    keywords: [
      "Kyrgyzstan",
      "Nomadic Culture",
      "Central Asia",
      "Travel",
      "Adventure",
    ],
  });
}

// --------------------------------------------
// 🏡 Page Component
// --------------------------------------------
export default async function HomePage({ params }: PageParams) {
  const { locale } = await params;

  const [home, cars, travelPacks, activities] = await Promise.all([
    getHome(locale),
    getCars(locale),
    getTravelPacks(locale),
    getActivities(locale),
  ]);

  return (
    <main>
      <HeroSection {...home.hero} />
      <ServicesSectionServer locale={locale} />

      <BaseSection
        items={cars}
        namespace="carsSection"
        ctaBasePath="/cars"
        variant="home"
        showCTA
      />

      <BaseSection
        items={travelPacks}
        namespace="travelPacks"
        ctaBasePath="/travel-packs"
        variant="alt"
        showCTA
      />

      <BaseSection
        items={activities}
        namespace="activities"
        ctaBasePath="/activities"
        variant="dark"
        showCTA
      />
    </main>
  );
}
