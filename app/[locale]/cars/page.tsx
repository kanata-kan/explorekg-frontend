// ==========================================================
// 📄 app/[locale]/cars/page.tsx
// ==========================================================
// 🚗 CarsPage — Browse all cars in Kyrgyzstan
// Manual SEO + Metadata setup (no Smart Layer)
// ==========================================================

import type { Metadata } from "next";
import { SITE } from "@/config/constants";
import { getCars } from "@/lib/api/cars";
import { BaseSection } from "@/components/ui_v2/sections";

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
  const path = `/${locale}/cars/`;
  const canonical = `${base}${path}`;
  const image = `${base}/images/cars/og-cars.webp`;

  return {
    title:
      "Car Rentals in Kyrgyzstan — 4x4, SUVs & Adventure Rides | Explore Kyrgyzstan",
    description:
      "Browse all available cars for your Kyrgyzstan adventure — reliable 4x4s, SUVs, and off-road vehicles for mountain exploration.",

    metadataBase: new URL(SITE.URL),

    alternates: {
      canonical,
      languages: {
        en: `${base}/en/cars/`,
        fr: `${base}/fr/cars/`,
        "x-default": `${base}/cars/`,
      },
    },

    openGraph: {
      title:
        "Car Rentals in Kyrgyzstan — 4x4, SUVs & Adventure Rides | Explore Kyrgyzstan",
      description:
        "Browse all available cars for your Kyrgyzstan adventure — reliable 4x4s, SUVs, and off-road vehicles for mountain exploration.",
      url: canonical,
      siteName: SITE.NAME,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Kyrgyzstan 4x4 and SUV rentals — Nomadia Travels",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@nomadia_travels",
      title:
        "Car Rentals in Kyrgyzstan — 4x4, SUVs & Adventure Rides | Explore Kyrgyzstan",
      description:
        "Browse all available cars for your Kyrgyzstan adventure — reliable 4x4s, SUVs, and off-road vehicles for mountain exploration.",
      images: [image],
    },
  };
}

// --------------------------------------------
// 🚗 Page Component
// --------------------------------------------
export default async function CarsPage({ params }: PageParams) {
  const { locale } = await params;
  const cars = await getCars(locale);

  return (
    <main>
      <BaseSection
        items={cars}
        namespace="carsSection"
        ctaBasePath="/cars"
        variant="page"
      />
    </main>
  );
}
