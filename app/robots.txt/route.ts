// ==========================================================
// 🤖 app/robots.txt/route.ts
// ==========================================================
// Enhanced robots.txt with proper crawl directives
// ==========================================================

import { SITE } from "@/config/constants";

export async function GET() {
  const baseUrl = SITE.URL.replace(/\/$/, "");

  const robotsTxt = `# Robots.txt for ${SITE.NAME}
# Generated automatically

User-agent: *
Allow: /

# Disallow private/system areas
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

# Crawl-delay for specific bots
User-agent: Googlebot
Crawl-delay: 0

User-agent: Bingbot
Crawl-delay: 1

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml

# Host preference
Host: ${baseUrl}
`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
