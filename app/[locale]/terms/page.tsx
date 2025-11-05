import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import TermsSection_v2 from "@/components/ui_v2/sections/TermsSection/TermsSection";

type PageParams = { params: Promise<{ locale: string }> };

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata({
    title: "Terms & Conditions — Nomadia Travels Booking Terms",
    description:
      "Read the terms and conditions for booking tours, car rentals, and travel services with Nomadia Travels in Kyrgyzstan.",
    locale,
    path: "/terms",
    image: "/images/legal/og-terms.webp",
    keywords: ["Terms and Conditions", "Booking Terms", "Legal", "Terms of Service"],
    noindex: false,
  });
}

export default async function TermsPage({ params }: PageParams) {
  const { locale } = await params;

  return (
    <main>
      <TermsSection_v2 />
    </main>
  );
}
