import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { generateDynamicMetadata } from "@/lib/metadata";
import { getCarById } from "@/lib/api/cars";
import { CarDetailsSection } from "@/components/ui_v2/sections/CarDetailsSection";

type PageParams = {
  params: Promise<{ locale: string; id: string }>;
};

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale, id } = await params;
  const car = await getCarById(id, locale);

  if (!car) return {};

  return generateDynamicMetadata({
    name: car.name,
    description:
      car.metadata?.description ||
      car.description ||
      "Browse details and specifications of this car for your Kyrgyzstan adventure with Nomadia Travels.",
    locale,
    path: `/cars/${car.id}`,
    image: car.coverImage || "/images/cars/og-cars.webp",
    category: "Car Rental",
    keywords: ["Car Rental", "4x4", "SUV", car.name, "Kyrgyzstan"],
  });
}

export default async function CarDetailsPage({ params }: PageParams) {
  const { locale, id } = await params;
  const car = await getCarById(id, locale);

  if (!car) {
    notFound();
  }

  return (
    <main>
      <CarDetailsSection car={car} locale={locale} />
    </main>
  );
}
