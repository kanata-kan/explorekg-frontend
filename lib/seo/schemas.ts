// ==========================================================
// 🏢 SEO Schemas — Structured data for Google Rich Results
// ==========================================================

import { SITE } from "@/config/constants";

/**
 * Organization Schema (schema.org)
 */
export interface OrganizationSchema {
  "@context": "https://schema.org";
  "@type": "Organization" | "LocalBusiness" | "TravelAgency";
  name: string;
  url: string;
  logo?: string;
  description?: string;
  contactPoint?: {
    "@type": "ContactPoint";
    telephone: string;
    contactType: string;
    email: string;
  };
  address?: {
    "@type": "PostalAddress";
    streetAddress?: string;
    addressLocality?: string;
    addressCountry?: string;
  };
  sameAs?: string[];
}

/**
 * BreadcrumbList Schema
 */
export interface BreadcrumbSchema {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
}

/**
 * WebSite Schema (for search box)
 */
export interface WebSiteSchema {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  potentialAction?: {
    "@type": "SearchAction";
    target: string;
    "query-input": string;
  };
}

/**
 * Get Organization schema for the site
 */
export function getOrganizationSchema(): OrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: SITE.NAME,
    url: SITE.URL,
    logo: `${SITE.URL}/logo.png`,
    description: SITE.DESCRIPTION,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.CONTACT_PHONE,
      contactType: "Customer Service",
      email: SITE.CONTACT_EMAIL,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bishkek",
      addressCountry: "Kyrgyzstan",
    },
    sameAs: [
      // TODO: Add actual social media links
      "https://facebook.com/nomadiatravels",
      "https://instagram.com/nomadiatravels",
      "https://twitter.com/nomadia_travels",
    ],
  };
}

/**
 * Get Breadcrumb schema for navigation
 */
export function getBreadcrumbSchema(
  items: Array<{ name: string; path: string }>
): BreadcrumbSchema {
  const baseUrl = SITE.URL.replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.path}`,
    })),
  };
}

/**
 * Get WebSite schema with search capability
 */
export function getWebSiteSchema(): WebSiteSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.NAME,
    url: SITE.URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
