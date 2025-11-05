// ==========================================================
// 📄 app/[locale]/gallery/page.tsx
// ==========================================================
// 🖼️ GalleryPage — Curated images of Kyrgyzstan
// Manual SEO + Metadata setup (no Smart Layer)
// ==========================================================

import type { Metadata } from "next";
import { SITE } from "@/config/constants";
import GallerySection_v2 from "@/components/ui_v2/sections/GallerySection/GallerySection";
import { getGallery } from "@/lib/api/gallery";

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
  const path = `/${locale}/gallery/`;
  const canonical = `${base}${path}`;
  const image = `${base}/images/gallery/og-gallery.webp`;

  return {
    title:
      "Kyrgyzstan Photo Gallery — Mountains, Lakes & Nomadic Life | Explore Kyrgyzstan",
    description:
      "Discover the breathtaking landscapes, traditions, and nomadic culture of Kyrgyzstan through our curated photo gallery.",

    metadataBase: new URL(SITE.URL),

    alternates: {
      canonical,
      languages: {
        en: `${base}/en/gallery/`,
        fr: `${base}/fr/gallery/`,
        "x-default": `${base}/gallery/`,
      },
    },

    openGraph: {
      title:
        "Kyrgyzstan Photo Gallery — Mountains, Lakes & Nomadic Life | Explore Kyrgyzstan",
      description:
        "Discover the breathtaking landscapes, traditions, and nomadic culture of Kyrgyzstan through our curated photo gallery.",
      url: canonical,
      siteName: SITE.NAME,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Gallery of Kyrgyzstan landscapes and nomadic culture — Nomadia Travels",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@nomadia_travels",
      title:
        "Kyrgyzstan Photo Gallery — Mountains, Lakes & Nomadic Life | Explore Kyrgyzstan",
      description:
        "Discover the breathtaking landscapes, traditions, and nomadic culture of Kyrgyzstan through our curated photo gallery.",
      images: [image],
    },
  };
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
