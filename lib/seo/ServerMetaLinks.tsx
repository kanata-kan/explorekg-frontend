// ==========================================================
// 🧠 ServerMetaLinks — SSR-safe canonical + hreflang system
// ==========================================================
// ✅ Fully SSR-rendered: Google / Lighthouse sees it directly
// ✅ Locale-aware: detects /en or /fr automatically
// ✅ Self-healing URLs: trims / and regenerates clean paths
// ✅ Prevents canonical-hreflang circular conflicts
// ==========================================================

import { SITE } from "@/config/constants";

function withTrailingSlash(url: string) {
  return url.endsWith("/") ? url : `${url}/`;
}

export default function ServerMetaLinks({
  locale,
  path,
}: {
  locale: string;
  path: string;
}) {
  const base = SITE.URL.replace(/\/$/, ""); // remove trailing slash
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const noLocalePath = cleanPath.replace(/^\/(en|fr)/, ""); // remove locale prefix if present

  // 🔗 Build full URLs
  const enUrl = withTrailingSlash(`${base}/en${noLocalePath}`);
  const frUrl = withTrailingSlash(`${base}/fr${noLocalePath}`);
  const defaultUrl = withTrailingSlash(`${base}${noLocalePath}`);

  // 🎯 Define canonical per current locale
  const canonical =
    locale === "fr" ? frUrl : locale === "en" ? enUrl : defaultUrl;

  return (
    <>
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="fr" href={frUrl} />
      <link rel="alternate" hrefLang="x-default" href={defaultUrl} />
    </>
  );
}
