// app/robots.txt/route.ts
export async function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: https://explore-kyrgyzstan.vercel.app/sitemap.xml
`,
    { headers: { "Content-Type": "text/plain" } },
  );
}
