import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { generateDynamicMetadata } from "@/lib/metadata";
import { ActivityDetailsSection } from "@/components/ui_v2/sections/ActivityDetailsSection";
import { getActivityById } from "@/lib/api/activities";

type PageParams = {
  params: Promise<{ locale: string; id: string }>;
};

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale, id } = await params;
  const activity = await getActivityById(id, locale);

  if (!activity) return {};

  return generateDynamicMetadata({
    name: activity.name,
    description:
      activity.metadata?.description ||
      activity.description ||
      "Discover authentic Kyrgyz adventures — trekking, horse riding, and nomadic life.",
    locale,
    path: `/activities/${activity.id}`,
    image: activity.coverImage || "/images/activities/og-activities.webp",
    category: "Adventure Activity",
    keywords: ["Kyrgyzstan Activities", "Adventure", activity.name, "Outdoor"],
  });
}

export default async function ActivityDetailsPage({ params }: PageParams) {
  const { locale, id } = await params;
  const activity = await getActivityById(id, locale);

  if (!activity) {
    notFound();
  }

  return (
    <main>
      <ActivityDetailsSection activity={activity} locale={locale} />
    </main>
  );
}
