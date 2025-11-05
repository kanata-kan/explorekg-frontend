import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import OurStorySection from "@/components/ui_v2/sections/OurStorySection/OurStorySection";
import { getOurStory } from "@/lib/api/our-story";

type PageParams = { params: Promise<{ locale: string }> };

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Our Story — The Spirit Behind Nomadia Travels",
    description:
      "Learn about Nomadia Travels — our story, mission, and the passion driving us to share Kyrgyzstan's authentic nomadic culture with the world.",
    locale,
    path: "/our-story",
    image: "/images/our-story/our-story-og.webp",
    keywords: [
      "Nomadia Travels",
      "Our Story",
      "About Us",
      "Kyrgyzstan Travel Agency",
    ],
  });
}

export default async function OurStoryPage({ params }: PageParams) {
  const { locale } = await params;
  const story = await getOurStory(locale);
  return (
    <main>
      <OurStorySection data={story} locale={locale} />
    </main>
  );
}
