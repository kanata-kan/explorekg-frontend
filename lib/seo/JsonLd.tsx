// ==========================================================
// 🎯 JSON-LD Components — Structured data injection
// ==========================================================

import { getOrganizationSchema, getWebSiteSchema } from "./schemas";

interface JsonLdProps {
  data: object;
}

/**
 * Generic component to inject JSON-LD structured data
 *
 * @example
 * ```tsx
 * <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", ... }} />
 * ```
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 0), // Minified for production
      }}
    />
  );
}

/**
 * Organization Schema Component (for root layout)
 * Provides structured data about the business
 */
export function OrganizationJsonLd() {
  const schema = getOrganizationSchema();
  return <JsonLd data={schema} />;
}

/**
 * WebSite Schema Component (for root layout)
 * Enables Google search box in search results
 */
export function WebSiteJsonLd() {
  const schema = getWebSiteSchema();
  return <JsonLd data={schema} />;
}

/**
 * Combined Schema Component (Organization + WebSite)
 * Use this in the root layout for maximum SEO benefit
 */
export function SiteJsonLd() {
  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />
    </>
  );
}
