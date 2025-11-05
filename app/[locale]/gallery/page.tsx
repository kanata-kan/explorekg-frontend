// ==========================================================
// 📄 app/[locale]/gallery/page.tsx
// ==========================================================
// 🖼️ GalleryPage — Curated images of Kyrgyzstan
// ==========================================================

import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import GallerySection_v2 from "@/components/ui_v2/sections/GallerySection/GallerySection";
import { getGallery } from "@/lib/api/gallery";

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
    title: "Kyrgyzstan Photo Gallery — Mountains, Lakes & Nomadic Life",
    description:
      "Discover the breathtaking landscapes, traditions, and nomadic culture of Kyrgyzstan through our curated photo gallery.",
    locale,
    path: "/gallery",
    image: "/images/gallery/og-gallery.webp",
    keywords: [
      "Kyrgyzstan Photos",
      "Gallery",
      "Landscape Photography",
      "Nomadic Culture",
    ],
  });
}

// --------------------------------------------
// 🖼️ Page Component
// --------------------------------------------
export default async function GalleryPage({ params }: PageParams) {
  const { locale } = await params;
  const items = await getGallery(locale);

  return (
    <main>
      <GallerySection_v2 items={items} />
    </main>
  );
}
