import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import PrivacySection_v2 from "@/components/ui_v2/sections/PrivacySection/PrivacySection";

type PageParams = { params: Promise<{ locale: string }> };

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata({
    title: "Privacy Policy — How Nomadia Travels Handles Your Data",
    description:
      "Learn how Nomadia Travels collects, uses, and protects your personal information while booking tours and exploring Kyrgyzstan.",
    locale,
    path: "/privacy",
    image: "/images/legal/og-privacy.webp",
    keywords: ["Privacy Policy", "Data Protection", "GDPR", "Privacy"],
    noindex: false,
  });
}

export default async function PrivacyPage({ params }: PageParams) {
  const { locale } = await params;

  return (
    <main>
      <PrivacySection_v2 />
    </main>
  );
}
