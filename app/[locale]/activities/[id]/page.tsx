// ==========================================================
// 📄 app/[locale]/activities/[id]/page.tsx
// ==========================================================
// 🧗‍♂️ ActivityDetailsPage — Dynamic route for each activity
// Manual dynamic metadata generation (no Smart Layer)
// ==========================================================

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SITE } from "@/config/constants";
import { ActivityDetailsSection } from "@/components/ui_v2/sections/ActivityDetailsSection";
import { getActivityById } from "@/lib/api/activities";

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
  const activity = await getActivityById(id, locale);

  if (!activity) return {};

  const base = SITE.URL.replace(/\/$/, "");
  const path = `/${locale}/activities/${activity.id}/`;
  const canonical = `${base}${path}`;
  const image = activity.coverImage?.startsWith("http")
    ? activity.coverImage
    : `${base}${activity.coverImage || "/images/activities/og-activities.webp"}`;

  const title =
    activity.metadata?.title ||
    `${activity.name} — Adventure in Kyrgyzstan | Nomadia Travels`;
  const description =
    activity.metadata?.description ||
    activity.description ||
    "Discover authentic Kyrgyz adventures — trekking, horse riding, and nomadic life.";

  return {
    title,
    description,

    metadataBase: new URL(SITE.URL),

    alternates: {
      canonical,
      languages: {
        en: `${base}/en/activities/${activity.id}/`,
        fr: `${base}/fr/activities/${activity.id}/`,
        "x-default": `${base}/activities/${activity.id}/`,
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
          alt: `${activity.name} — Adventure in Kyrgyzstan`,
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
export default async function ActivityDetailsPage({ params }: PageParams) {
  const { locale, id } = await params;
  const activity = await getActivityById(id, locale);

  if (!activity) return notFound();

  return (
    <main>
      <ActivityDetailsSection activity={activity} locale={locale} />
    </main>
  );
}
