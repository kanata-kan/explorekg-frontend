// ==========================================================
// 📄 app/[locale]/activities/page.tsx
// ==========================================================
// 🧗‍♂️ ActivitiesPage — All adventures in Kyrgyzstan
// ==========================================================

export const revalidate = 43200; // 12h ISR
export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { BaseSection } from "@/components/ui_v2/sections";
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
    title: "Activities in Kyrgyzstan — Adventure, Trekking & Culture",
    description:
      "Discover thrilling activities in Kyrgyzstan — hiking in Tien Shan, horse trekking, yurt stays, skiing, and nomadic adventures across the country.",
    locale,
    path: "/activities",
    image: "/images/activities/og-activities.webp",
    keywords: [
      "Kyrgyzstan Activities",
      "Trekking",
      "Horse Riding",
      "Adventure",
      "Hiking",
    ],
  });
}

// --------------------------------------------
// 🧗‍♂️ Page Component
// --------------------------------------------
export default async function ActivitiesPage({ params }: PageParams) {
  const { locale } = await params;
  const activities = await getActivities(locale);

  return (
    <main>
      <BaseSection
        items={activities}
        namespace="activities"
        ctaBasePath="/activities"
        variant="page"
      />
    </main>
  );
}
