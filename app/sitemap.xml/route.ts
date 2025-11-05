// app/sitemap.xml/route.ts
import { SITE } from "@/config/constants";

export async function GET() {
  const urls = [
    "",
    "/activities",
    "/cars",
    "/gallery",
    "/our-story",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => `${SITE.URL}${path}`);

  const xml = `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `<url><loc>${url}</loc></url>`).join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
