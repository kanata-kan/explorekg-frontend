// ==========================================================
// 🗺️ app/sitemap.xml/route.ts
// ==========================================================
// Enhanced sitemap with multi-language support and proper SEO metadata
// ==========================================================

import { SITE } from "@/config/constants";

type SitemapEntry = {
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
  alternates?: {
    languages?: Record<string, string>;
  };
};

export async function GET() {
  const baseUrl = SITE.URL.replace(/\/$/, "");

  // 📄 Static pages with SEO priority and change frequency
  const staticPages = [
    { path: "", priority: 1.0, changeFreq: "daily" },
    { path: "/activities", priority: 0.9, changeFreq: "weekly" },
    { path: "/cars", priority: 0.9, changeFreq: "weekly" },
    { path: "/travel-packs", priority: 0.9, changeFreq: "weekly" },
    { path: "/gallery", priority: 0.8, changeFreq: "weekly" },
    { path: "/our-story", priority: 0.7, changeFreq: "monthly" },
    { path: "/contact", priority: 0.8, changeFreq: "monthly" },
    { path: "/privacy", priority: 0.5, changeFreq: "yearly" },
    { path: "/terms", priority: 0.5, changeFreq: "yearly" },
  ];

  const locales = ["en", "fr"];
  const entries: SitemapEntry[] = [];

  // Build URLs for each locale with hreflang alternates
  for (const page of staticPages) {
    for (const locale of locales) {
      const url = `${baseUrl}/${locale}${page.path}`;

      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: page.changeFreq as any,
        priority: page.priority,
        alternates: {
          languages: {
            en: `${baseUrl}/en${page.path}`,
            fr: `${baseUrl}/fr${page.path}`,
            "x-default": `${baseUrl}${page.path}`,
          },
        },
      });
    }
  }

  // TODO: Add dynamic pages (Cars, Packs, Activities)
  // Example:
  // const cars = await getCars();
  // for (const car of cars) {
  //   for (const locale of locales) {
  //     entries.push({
  //       url: `${baseUrl}/${locale}/cars/${car.id}`,
  //       lastModified: car.updatedAt,
  //       changeFrequency: 'weekly',
  //       priority: 0.8,
  //       alternates: {
  //         languages: {
  //           en: `${baseUrl}/en/cars/${car.id}`,
  //           fr: `${baseUrl}/fr/cars/${car.id}`,
  //         },
  //       },
  //     });
  //   }
  // }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries
  .map(
    (entry) => `
  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified instanceof Date ? entry.lastModified.toISOString() : entry.lastModified}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>${
      entry.alternates?.languages
        ? Object.entries(entry.alternates.languages)
            .map(
              ([lang, url]) =>
                `
    <xhtml:link rel="alternate" hreflang="${lang}" href="${url}" />`
            )
            .join("")
        : ""
    }
  </url>`
  )
  .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
