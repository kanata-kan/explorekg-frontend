// ==========================================================
// 📄 app/[locale]/page.tsx
// ==========================================================
// 🏡 HomePage — Explore Kyrgyzstan main landing page
// Pure Manual SEO Setup (no Smart Layer)
// ==========================================================

import type { Metadata } from "next";
import { SITE } from "@/config/constants";

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
// ⚙️ Manual Metadata per Locale
// --------------------------------------------
export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale } = await params;

  const base = SITE.URL.replace(/\/$/, "");
  const path = `/${locale}/`; // ✅ ensure locale-based canonical

  const canonical = `${base}${path}`;
  const image = `${base}/images/home/hero-home.webp`;

  return {
    title: `${SITE.NAME} — Explore Kyrgyzstan's Beauty`,
    description:
      SITE.DESCRIPTION ||
      "Discover the breathtaking landscapes, nomadic culture, and mountains of Kyrgyzstan — curated by Nomadia Travels.",

    metadataBase: new URL(SITE.URL),

    alternates: {
      canonical,
      languages: {
        en: `${base}/en/`,
        fr: `${base}/fr/`,
        "x-default": `${base}/`,
      },
    },

    openGraph: {
      title: `${SITE.NAME} — Explore Kyrgyzstan's Beauty`,
      description:
        "Discover the breathtaking landscapes, nomadic culture, and mountains of Kyrgyzstan — curated by Nomadia Travels.",
      url: canonical,
      siteName: SITE.NAME,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Kyrgyzstan landscape — Nomadia Travels",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@nomadia_travels",
      title: `${SITE.NAME} — Explore Kyrgyzstan's Beauty`,
      description:
        "Discover the breathtaking landscapes, nomadic culture, and mountains of Kyrgyzstan — curated by Nomadia Travels.",
      images: [image],
    },
  };
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
