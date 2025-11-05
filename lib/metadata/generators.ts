// ==========================================================
// 🎯 Metadata Generators — Unified metadata builders
// ==========================================================

import { Metadata } from "next";
import { SITE } from "@/config/constants";
import { DEFAULT_SEO } from "@/config/seo";
import { buildAlternates, withBaseUrl } from "./utils";
import type { MetadataOptions, DynamicMetadataOptions } from "./types";

/**
 * 🎯 Generate metadata for static pages
 *
 * @example
 * ```ts
 * export async function generateMetadata({ params }: PageParams) {
 *   const { locale } = await params;
 *   return generatePageMetadata({
 *     title: 'Contact Us',
 *     description: 'Get in touch with Nomadia Travels...',
 *     locale,
 *     path: '/contact',
 *     image: '/images/contact/og-contact.webp',
 *   });
 * }
 * ```
 */
export function generatePageMetadata(options: MetadataOptions): Metadata {
  const {
    title,
    description,
    locale,
    path,
    image = "/images/og-default.webp",
    keywords = [],
    type = "website",
    publishedTime,
    modifiedTime,
    authors,
    noindex = false,
    nofollow = false,
  } = options;

  // Build full title with site name
  const fullTitle = `${title} | ${SITE.NAME}`;

  // Build full image URL
  const fullImage = withBaseUrl(image);

  // Build alternates (canonical + hreflang)
  const alternates = buildAlternates(locale as "en" | "fr", path);

  // Base metadata
  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: [...DEFAULT_SEO.keywords, ...keywords],

    metadataBase: new URL(SITE.URL),
    alternates,

    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
      },
    },

    openGraph: {
      title: fullTitle,
      description,
      url: alternates.canonical,
      siteName: SITE.NAME,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type,
      locale: locale === "fr" ? "fr_FR" : "en_US",
    },

    twitter: {
      card: "summary_large_image",
      site: SITE.TWITTER,
      title: fullTitle,
      description,
      images: [fullImage],
    },
  };

  // Add article-specific fields if type is article
  if (type === "article" && metadata.openGraph) {
    (metadata.openGraph as any).publishedTime = publishedTime;
    (metadata.openGraph as any).modifiedTime = modifiedTime;
    (metadata.openGraph as any).authors = authors;
  }

  return metadata;
}

/**
 * 🎯 Generate metadata for dynamic pages (Cars, Packs, Activities)
 *
 * @example
 * ```ts
 * export async function generateMetadata({ params }: PageParams) {
 *   const { locale, id } = await params;
 *   const car = await getCarById(id);
 *
 *   return generateDynamicMetadata({
 *     name: car.name,
 *     description: car.description,
 *     locale,
 *     path: `/cars/${id}`,
 *     image: car.image,
 *     category: 'Car Rental',
 *   });
 * }
 * ```
 */
export function generateDynamicMetadata(
  options: DynamicMetadataOptions
): Metadata {
  const { name, category, ...rest } = options;

  // Build title with optional category
  const title = category ? `${name} - ${category}` : name;

  return generatePageMetadata({
    ...rest,
    title,
  });
}

/**
 * 🎯 Generate simple metadata (uses default description)
 *
 * @example
 * ```ts
 * export async function generateMetadata({ params }: PageParams) {
 *   const { locale } = await params;
 *   return generateSimpleMetadata('Privacy Policy', locale, '/privacy');
 * }
 * ```
 */
export function generateSimpleMetadata(
  title: string,
  locale: string,
  path: string
): Metadata {
  return generatePageMetadata({
    title,
    description: SITE.DESCRIPTION,
    locale,
    path,
  });
}
