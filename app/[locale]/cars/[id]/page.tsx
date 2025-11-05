// ==========================================================
// 📄 app/[locale]/cars/[id]/page.tsx
// ==========================================================
// 🚗 CarDetailsPage — Dynamic route for each car
// Manual dynamic metadata generation (no Smart Layer)
// ==========================================================

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SITE } from "@/config/constants";
import { getCarById } from "@/lib/api/cars";
import { CarDetailsSection } from "@/components/ui_v2/sections/CarDetailsSection";

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
  const car = await getCarById(id, locale);

  if (!car) return {};

  const base = SITE.URL.replace(/\/$/, "");
  const path = `/${locale}/cars/${car.id}/`;
  const canonical = `${base}${path}`;
  const image = car.coverImage?.startsWith("http")
    ? car.coverImage
    : `${base}${car.coverImage || "/images/cars/og-cars.webp"}`;

  const title =
    car.metadata?.title ||
    `${car.name} — Car Rental in Kyrgyzstan | Nomadia Travels`;
  const description =
    car.metadata?.description ||
    car.description ||
    "Browse details and specifications of this car for your Kyrgyzstan adventure with Nomadia Travels.";

  return {
    title,
    description,

    metadataBase: new URL(SITE.URL),

    alternates: {
      canonical,
      languages: {
        en: `${base}/en/cars/${car.id}/`,
        fr: `${base}/fr/cars/${car.id}/`,
        "x-default": `${base}/cars/${car.id}/`,
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
          alt: `${car.name} — Nomadia Travels Car Rental Kyrgyzstan`,
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
export default async function CarDetailsPage({ params }: PageParams) {
  const { locale, id } = await params;
  const car = await getCarById(id, locale);
  if (!car) return notFound();

  return (
    <main>
      <CarDetailsSection car={car} locale={locale} />
    </main>
  );
}
