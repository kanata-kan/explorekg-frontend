// ==========================================================
// 📄 app/[locale]/cars/page.tsx
// ==========================================================
// 🚗 CarsPage — Browse all cars in Kyrgyzstan
// ==========================================================

import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { getCars } from "@/lib/api/cars";
import { BaseSection } from "@/components/ui_v2/sections";

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
    title: "Car Rentals in Kyrgyzstan — 4x4, SUVs & Adventure Rides",
    description:
      "Browse all available cars for your Kyrgyzstan adventure — reliable 4x4s, SUVs, and off-road vehicles for mountain exploration.",
    locale,
    path: "/cars",
    image: "/images/cars/og-cars.webp",
    keywords: [
      "Car Rental Kyrgyzstan",
      "4x4 Rental",
      "SUV Rental",
      "Off-road Vehicles",
    ],
  });
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
