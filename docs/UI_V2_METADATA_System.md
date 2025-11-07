# ⚙️ Smart Metadata Layer — Kanata UI v2 (v3.1)

## 🌍 Overview

The **Smart Metadata Layer (v3.1)** is the latest evolution of the metadata architecture in **Kanata UI v2**,  
responsible for automating SEO generation, localization (i18n), and Open Graph integration across **all routes**.

It fully replaces older metadata setups with a **centralized, type-safe, locale-aware system**,  
built specifically for **Next.js App Router (v15+)** projects.

This system ensures that every page (Home, Cars, Gallery, Privacy, Terms...) automatically produces:

- 🌍 Localized SEO titles and descriptions
- 🖼️ OG/Twitter meta images
- 🧠 Clean, canonical URLs
- ⚙️ Server-only metadata generation (zero duplication)

---

## 🎯 Core Goals

| Goal                          | Description                                             |
| ----------------------------- | ------------------------------------------------------- |
| 🧩 **Unified Metadata API**   | One standard layer for both static and dynamic pages    |
| 🌐 **Locale Intelligence**    | Automatic localization using `next-intl`                |
| 🧱 **Type-Safe Architecture** | Built with strict TypeScript definitions                |
| 🪄 **Plug & Play**            | Add new pages with 1-2 lines of metadata setup          |
| 🧠 **Zero Duplication**       | Metadata written once, reused across locales and routes |

---

## 🧱 Architecture (Ref: Screenshot Folder Layout)

```bash
lib/
 ├─ metadata/
 │   ├─ base.ts        → Core builder (buildMetadataBase)
 │   ├─ static.ts      → Handles static routes (home, contact, etc.)
 │   ├─ dynamic.ts     → Handles dynamic routes ([id])
 │   ├─ smart.ts       → Unifies both static & dynamic flows + i18n
 │   ├─ utils.ts       → Shared helpers (OG builder, withBaseUrl, validators)
 │
 ├─ api/
 │   └─ ...localized data sources (JSON / CMS)
 │
 └─ config/
     └─ constants.ts   → SITE info (NAME, URL, DESCRIPTION, DEFAULT_IMAGE)
```

---

## 🧠 Flow Diagram

```bash
graph TD

A[User Request /en/cars] --> B[App Router]
B --> C[getTranslations(locale)]
C --> D[getMetadataStatic or getMetadataDynamic]
D --> E[buildMetadataBase() in base.ts]
E --> F[utils.withBaseUrl() → clean URL]
E --> G[SITE constants → default SEO]
E --> H[Compose OG + Twitter Schema]
H --> I[Return Metadata Object → Next.js]
```

✅ Fully server-side  
✅ Locale-aware  
✅ Zero redundancy  
✅ Compatible with Next.js v15 Metadata API

---

## ⚙️ Static Pages Example

```ts
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "galleryPage" });

  const title = t("title");
  const description = t("description");
  const image = `${SITE.URL}/images/gallery/og-gallery.webp`;

  return getMetadataStatic({
    title,
    description,
    path: `/${locale}/gallery`,
    image,
  });
}
```

✅ Title/Description localized dynamically  
✅ OG handled automatically  
✅ SEO safe for all locales

---

## ⚡ Dynamic Pages Example

```ts
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const item = await getCarById(id, locale);
  if (!item) return {};

  return getMetadataDynamic({
    name: item.name,
    description: item.description,
    image: item.coverImage,
    path: `/${locale}/cars/${id}`,
  });
}
```

✅ Fetches localized data  
✅ Generates metadata dynamically  
✅ Auto OG + Twitter card

---

## 🧩 Core Components

| Component                  | Role                                           |
| -------------------------- | ---------------------------------------------- |
| **`getMetadataStatic()`**  | Static metadata builder for regular pages      |
| **`getMetadataDynamic()`** | Dynamic metadata builder for `[id]` routes     |
| **`buildMetadataBase()`**  | Core engine that assembles metadata schema     |
| **`withBaseUrl()`**        | Utility to prevent double slashes in URLs      |
| **`SITE` Constants**       | Global app metadata: name, domain, description |
| **`DEFAULT_SEO`**          | Safe fallback for missing translation data     |

---

## 🌐 i18n Integration

Each page’s metadata is sourced from its locale JSON:

```json
"privacyPage": {
  "title": "Privacy Policy",
  "description": "Learn how Nomadia Travels collects and uses your data."
},
"terms": {
  "title": "Terms of Service",
  "description": "Read our terms and conditions for using Nomadia Travels."
}
```

Namespace follows the `pageName` convention (e.g. `carsPage`, `privacyPage`, `terms`).

---

## 🧭 Developer Workflow

| Step | Action                                                      |
| ---- | ----------------------------------------------------------- |
| 1️⃣   | Add keys in `messages/[locale].json`                        |
| 2️⃣   | Use `getMetadataStatic` or `getMetadataDynamic`             |
| 3️⃣   | Define OG image path (e.g. `/images/legal/og-privacy.webp`) |
| 4️⃣   | Done → SEO now localized automatically                      |

---

## 🧩 Example Table

| Page                  | Type    | Function             | Namespace     | OG Image                          |
| --------------------- | ------- | -------------------- | ------------- | --------------------------------- |
| `/[locale]`           | Static  | `getMetadataStatic`  | `homePage`    | `/images/home/og-home.webp`       |
| `/[locale]/cars`      | Static  | `getMetadataStatic`  | `carsPage`    | `/images/cars/og-cars.webp`       |
| `/[locale]/cars/[id]` | Dynamic | `getMetadataDynamic` | —             | `/images/cars/og-cars.webp`       |
| `/[locale]/gallery`   | Static  | `getMetadataStatic`  | `galleryPage` | `/images/gallery/og-gallery.webp` |
| `/[locale]/privacy`   | Static  | `getMetadataStatic`  | `privacyPage` | `/images/legal/og-privacy.webp`   |
| `/[locale]/terms`     | Static  | `getMetadataStatic`  | `terms`       | `/images/legal/og-terms.webp`     |

---

## 🧭 Design Philosophy

> “Metadata is not decoration — it’s infrastructure.”

This Smart Metadata Layer treats SEO as an **architectural concern**,  
not a per-page task. Every layer (API, UI, Metadata, i18n) now works in harmony.

---

## 🚀 Future Enhancements

- [ ] Strapi CMS metadata sync
- [ ] Automated sitemap generation from Smart Layer
- [ ] schema.org structured data injection
- [ ] Global fallback system per locale

---

## 🧾 Credits

**Author:** Kanata (عبدالإله)  
**Version:** 3.1  
**Date:** 2025-10-14  
**Repository:** `nomadia-travels-app`  
**Category:** Architecture / SEO / i18n  
**Purpose:** A unified, intelligent, and scalable SEO layer for Kanata UI v2.
