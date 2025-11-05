// ==========================================================
// ⚙️ Next.js Configuration — Kanata UI v2 (App Router clean)
// ==========================================================

import createNextIntlPlugin from "next-intl/plugin";
import withBundleAnalyzer from "@next/bundle-analyzer";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");
const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ======================================================
  // 🧠 Core Architecture
  // ======================================================
  compiler: {
    styledComponents: { displayName: true, ssr: true },
  },

  // ======================================================
  // 🌍 SEO & Routing — canonical stability
  // ======================================================
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,

  // ======================================================
  // 🖼️ Image Optimization — modern (Next 13.4+)
  // ======================================================
  images: {
    remotePatterns: [
      {
        protocol: "http" as const,
        hostname: "localhost",
        port: "3000",
      },
      {
        protocol: "https" as const,
        hostname: "explore-kyrgyzstan.vercel.app",
      },
      {
        protocol: "https" as const,
        hostname: "example.com",
      },
      {
        protocol: "https" as const,
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https" as const,
        hostname: "**.cloudinary.com",
      },
    ],
    formats: ["image/avif", "image/webp"] as ("image/avif" | "image/webp")[],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: false,
  },

  // ======================================================
  // ⚗️ Experimental Features
  // ======================================================
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  // ======================================================
  // 🧱 Build Optimization
  // ======================================================
  productionBrowserSourceMaps: false,
  compress: true,
};

// ==========================================================
// 🧩 Compose Plugins
// ==========================================================
export default withNextIntl(withAnalyzer(nextConfig));
