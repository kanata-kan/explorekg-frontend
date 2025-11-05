// ==========================================================
// 🖼️ OG Images Management — Centralized image paths
// ==========================================================

import { SITE } from "@/config/constants";

/**
 * Centralized Open Graph image paths
 */
export const OG_IMAGES = {
  default: "/images/og-default.webp",
  home: "/images/home/og-home.webp",
  contact: "/images/contact/og-contact.webp",
  activities: "/images/activities/og-activities.webp",
  cars: "/images/cars/og-cars.webp",
  travelPacks: "/images/travel-packs/og-travel-packs.webp",
  gallery: "/images/gallery/og-gallery.webp",
  ourStory: "/images/our-story/og-our-story.webp",
  privacy: "/images/legal/og-privacy.webp",
  terms: "/images/legal/og-terms.webp",
} as const;

export type OGImageKey = keyof typeof OG_IMAGES;

/**
 * Get full URL for an OG image
 *
 * @example
 * ```ts
 * const image = getOGImage('contact'); // https://example.com/images/contact/og-contact.webp
 * ```
 */
export function getOGImage(key: OGImageKey = "default"): string {
  const path = OG_IMAGES[key];
  return `${SITE.URL}${path}`;
}

/**
 * Get dynamic OG image with fallback
 *
 * @example
 * ```ts
 * // With custom image
 * const image = getDynamicOGImage('/custom/image.webp'); // https://example.com/custom/image.webp
 *
 * // With fallback
 * const image = getDynamicOGImage(undefined, 'cars'); // Uses cars OG image
 * ```
 */
export function getDynamicOGImage(
  customImage?: string,
  fallback: OGImageKey = "default"
): string {
  if (customImage) {
    // If it's already a full URL, return as is
    return customImage.startsWith("http")
      ? customImage
      : `${SITE.URL}${customImage}`;
  }
  return getOGImage(fallback);
}
