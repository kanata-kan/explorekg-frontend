// lib/metadata/utils.ts
import { SITE } from "@/config/constants";

export function withTrailingSlash(url: string) {
  return url.endsWith("/") ? url : `${url}/`;
}

export const withBaseUrl = (path: string, base = SITE.URL) => {
  const normalized = `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
  return withTrailingSlash(normalized);
};

export function buildLocalizedPath(locale: "en" | "fr", path: string) {
  const core = path.replace(/^\/(en|fr)/, "");
  const localized = `/${locale}${core.startsWith("/") ? core : `/${core}`}`;
  return withTrailingSlash(localized);
}

export function buildAlternates(locale: "en" | "fr", path: string) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const core = cleanPath.replace(/^\/(en|fr)/, "");

  const canonical = withBaseUrl(`/${locale}${core}`);
  return {
    canonical,
    languages: {
      en: withBaseUrl(`/en${core}`),
      fr: withBaseUrl(`/fr${core}`),
      "x-default": withBaseUrl(core || "/"),
    },
  };
}

export function buildMetadataBase({
  title,
  description,
  image,
  canonical,
}: {
  title: string;
  description: string;
  image: string;
  canonical: string;
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE.NAME,
      images: [{ url: image }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: SITE.TWITTER,
      title,
      description,
      images: [image],
    },
  };
}
