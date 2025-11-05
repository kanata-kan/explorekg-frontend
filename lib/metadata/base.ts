// ==========================================================
// 🧠 baseMetadata — Global Metadata for Kanata UI v2
// ==========================================================
import { Metadata } from "next";
import { SITE } from "@/config/constants";

export const baseMetadata: Metadata = {
  metadataBase: new URL("https://explore-kyrgyzstan.vercel.app"), // ✅ moved here instead
  title: {
    default: SITE.NAME,
    template: "%s | " + SITE.NAME,
  },
  description: SITE.DESCRIPTION,
  openGraph: {
    siteName: SITE.NAME,
    type: "website",
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      fr: "/fr",
    },
  },
};
