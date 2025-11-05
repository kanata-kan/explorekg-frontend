// config/constants.ts

// ==========================================================
// 🌍 SITE CONFIGURATION (Environment-Aware)
// ==========================================================

const isProd = process.env.NODE_ENV === "production";
const defaultProdUrl = "https://explore-kyrgyzstan.vercel.app";

export const SITE = {
  NAME: process.env.NEXT_PUBLIC_SITE_NAME || "Explore Kyrgyzstan",
  SUBTITLE: "by Nomadia Travels",

  DESCRIPTION:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    "Explore the majestic landscapes, lakes, and nomadic culture of Kyrgyzstan — powered by Nomadia Travels.",

  // ✅ Use Vercel domain automatically in production
  URL: "https://explore-kyrgyzstan.vercel.app",

  LOGO_TEXT: "Explore Kyrgyzstan",
  TAGLINE: "Live the Nomadic Adventure",

  CONTACT_EMAIL:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@nomadia-travels.com",
  CONTACT_PHONE: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+996 700 123 456",

  DEFAULT_LOCALE: process.env.NEXT_PUBLIC_DEFAULT_LOCALE || "en",
  SUPPORTED_LOCALES: process.env.NEXT_PUBLIC_SUPPORTED_LOCALES?.split(",") || [
    "en",
    "fr",
  ],

  OG_IMAGE: "/og-image.png",
  TWITTER: "@nomadia_travels",
  VERSION: "2.0.0",
  AUTHOR: "Kanata",
  COPYRIGHT: `© ${new Date().getFullYear()} Explore Kyrgyzstan — All rights reserved.`,
};

// ==========================================================
// 💠 UI CONFIGURATION (Design System Tokens)
// ==========================================================

export const UI_BREAKPOINTS = {
  /** Devices < 640px (Phones) */
  mobile: 640,

  /** Devices < 1024px (Tablets & small laptops) */
  tablet: 1024,

  /** Devices >= 1280px (Large screens, desktops) */
  desktop: 1280,
};

export const UI_LAYOUT = {
  MAX_WIDTH: 1440,
  CONTAINER_PADDING: "1.5rem",
};

export const UI_THEME = {
  BORDER_RADIUS: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "1rem",
    xl: "2rem",
  },
};
