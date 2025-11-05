// ==========================================================
// 📄 app/[locale]/our-story/page.tsx
// ==========================================================
// 🏕️ OurStoryPage — Learn about Nomadia Travels' mission
// Manual SEO + Metadata setup (no Smart Layer)
// ==========================================================

import type { Metadata } from "next";
import { SITE } from "@/config/constants";
import OurStorySection from "@/components/ui_v2/sections/OurStorySection/OurStorySection";
import { getOurStory } from "@/lib/api/our-story";

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
  const path = `/${locale}/our-story/`;
  const canonical = `${base}${path}`;
  const image = `${base}/images/our-story/our-story-og.webp`;

  return {
    title: "Our Story — The Spirit Behind Nomadia Travels | Explore Kyrgyzstan",
    description:
      "Learn about Nomadia Travels — our story, mission, and the passion driving us to share Kyrgyzstan’s authentic nomadic culture with the world.",

    metadataBase: new URL(SITE.URL),

    alternates: {
      canonical,
      languages: {
        en: `${base}/en/our-story/`,
        fr: `${base}/fr/our-story/`,
        "x-default": `${base}/our-story/`,
      },
    },

    openGraph: {
      title:
        "Our Story — The Spirit Behind Nomadia Travels | Explore Kyrgyzstan",
      description:
        "Learn about Nomadia Travels — our story, mission, and the passion driving us to share Kyrgyzstan’s authentic nomadic culture with the world.",
      url: canonical,
      siteName: SITE.NAME,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Nomadia Travels team and mission — Kyrgyzstan travel agency",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@nomadia_travels",
      title:
        "Our Story — The Spirit Behind Nomadia Travels | Explore Kyrgyzstan",
      description:
        "Learn about Nomadia Travels — our story, mission, and the passion driving us to share Kyrgyzstan’s authentic nomadic culture with the world.",
      images: [image],
    },
  };
}

// --------------------------------------------
// 🏕️ Page Component
// --------------------------------------------
export default async function OurStoryPage({ params }: PageParams) {
  const { locale } = await params;
  const story = await getOurStory(locale);

  return (
    <main>
      <OurStorySection data={story} locale={locale} />
    </main>
  );
}
