// ==========================================================
// 📄 app/[locale]/gallery/[id]/page.tsx
// ==========================================================
// 🖼️ GalleryDetailsPage — Dynamic route for gallery items
// Manual SEO Metadata Generation (no Smart Layer)
// ==========================================================

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SITE } from "@/config/constants";
import GalleryDetailsSection from "@/components/ui_v2/sections/GalleryDetailsSection/GalleryDetailsSection";
import { getGalleryItemById } from "@/lib/api/gallery";

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
  const item = await getGalleryItemById(id, locale);

  if (!item) return {};

  const base = SITE.URL.replace(/\/$/, "");
  const path = `/${locale}/gallery/${item.id}/`;
  const canonical = `${base}${path}`;
  const image = item.image?.startsWith("http")
    ? item.image
    : `${base}${item.image || "/images/gallery/og-gallery.webp"}`;

  const title = item.metadata?.title || item.title || `Gallery — ${SITE.NAME}`;
  const description =
    item.metadata?.description ||
    item.caption ||
    "Discover the visual beauty of Kyrgyzstan through this image from our curated gallery.";

  return {
    title,
    description,

    metadataBase: new URL(SITE.URL),

    alternates: {
      canonical,
      languages: {
        en: `${base}/en/gallery/${item.id}/`,
        fr: `${base}/fr/gallery/${item.id}/`,
        "x-default": `${base}/gallery/${item.id}/`,
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
          alt: `${item.title || "Gallery Image"} — Nomadia Travels`,
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
// 🖼️ Page Component
// --------------------------------------------
export default async function GalleryDetailsPage({ params }: PageParams) {
  const { locale, id } = await params;
  const item = await getGalleryItemById(id, locale);

  if (!item) return notFound();

  return (
    <main>
      <GalleryDetailsSection
        galleryItem={{
          title: item.metadata?.title || item.title || "Untitled",
          description:
            item.metadata?.description ||
            item.caption ||
            "Image from Kyrgyzstan",
          coverImage: item.metadata?.image || item.image,
          image: item.image,
        }}
        locale={locale}
      />
    </main>
  );
}
