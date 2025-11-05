// ==========================================================
// 🧠 Metadata Types — Type-safe metadata options
// ==========================================================

/**
 * Base metadata options for all pages
 */
export interface MetadataOptions {
  /** Page title (without site name suffix) */
  title: string;

  /** Meta description (150-160 characters recommended) */
  description: string;

  /** Current locale (en, fr) */
  locale: string;

  /** Page path (e.g., /contact, /cars) */
  path: string;

  /** Open Graph image path (relative or absolute) */
  image?: string;

  /** Additional keywords for SEO */
  keywords?: string[];

  /** Open Graph type */
  type?: "website" | "article" | "profile";

  /** Article published time (ISO 8601) */
  publishedTime?: string;

  /** Article modified time (ISO 8601) */
  modifiedTime?: string;

  /** Article authors */
  authors?: string[];

  /** Prevent indexing by search engines */
  noindex?: boolean;

  /** Prevent following links */
  nofollow?: boolean;
}

/**
 * Metadata options for dynamic pages (Cars, Packs, Activities)
 */
export interface DynamicMetadataOptions extends Omit<MetadataOptions, "title"> {
  /** Entity name (becomes the title) */
  name: string;

  /** Optional category to append to title */
  category?: string;

  /** Tags for the entity */
  tags?: string[];
}
