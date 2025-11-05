// config/seo.ts

import { SITE } from "@/config";

export const DEFAULT_SEO = {
  siteName: SITE.NAME,
  siteUrl: SITE.URL,
  defaultTitle: `${SITE.NAME} — Explore Kyrgyzstan`,
  defaultDescription: SITE.DESCRIPTION,
  defaultImage: SITE.OG_IMAGE,
  twitterHandle: SITE.TWITTER,
  keywords: [
    "Kyrgyzstan",
    "Nomadia Travels",
    "Travel",
    "Tours",
    "Central Asia",
    "Hiking",
    "Cars rental",
    "Adventure",
    "Explore Kyrgyzstan",
  ],
};
