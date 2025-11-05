# 🧭 UI_V2_DOCS_DETAILS_Cars_Travel_Activities_Gallery.md

### **Nomadia Travels — Details Page System (Cars, Travel Packs, Activities, Gallery)**

---

## 🧩 Overview

The **Details Section System** defines a unified architecture for **individual detail pages**  
of Cars, Travel Packs, Activities, and Gallery Items — each one extending the foundation from `DetailsBaseSection.tsx`.

Every details page (e.g. `/cars/[id]`, `/travel-packs/[id]`, `/activities/[id]`, `/gallery/[id]`)  
renders a specialized UI component (`CarDetailsSection`, `TravelPackDetailsSection`, `ActivityDetailsSection`, `GalleryDetailsSection`)  
which builds upon a **single shared structure** for layout, i18n, and metadata.

---

## 🏗️ Architectural Flow

```
📂 components/
└── ui_v2/
    ├── sections/
    │   ├── base/
    │   │   ├── DetailsBaseSection.tsx     → Shared structure for all detail pages
    │   │   └── DetailsBase.styled.ts      → Styling + layout grid
    │   ├── CarDetailsSection/
    │   ├── TravelPackDetailsSection/
    │   ├── ActivityDetailsSection/
    │   └── GalleryDetailsSection/
    │       ├── GalleryDetailsSection.tsx  → Gallery-specific UI
    │       └── GalleryDetailsSection.styled.ts
```

---

## ⚙️ Core Concept: `DetailsBaseSection`

The **DetailsBaseSection** component provides the **shared visual and layout foundation**  
used by every individual details page.

It handles:

- Hero image with overlay  
- Title, description, and back link  
- CTA button (e.g. “Book this Car” or “Open Gallery”)  
- Flexible details grid for specs / metadata / images  

---

## 🧠 Props Interface

```ts
type Props = {
  imageSrc: string;
  title: string;
  description?: string;
  backHref: string;
  cta?: ReactNode;
  details?: ReactNode;
  locale: string;
};
```

| Prop          | Type        | Description                            |
| ------------- | ----------- | -------------------------------------- |
| `imageSrc`    | `string`    | Path to cover image                    |
| `title`       | `string`    | Item name (Car, Travel Pack, Activity) |
| `description` | `string`    | Short descriptive text                 |
| `backHref`    | `string`    | Link to parent section (e.g. `/cars`)  |
| `cta`         | `ReactNode` | CTA button, dynamically rendered       |
| `details`     | `ReactNode` | Specs grid or metadata list            |
| `locale`      | `string`    | Used for i18n and direction handling   |

---

## 🚗 Example: Car Details Page

*(unchanged from previous version)*  
➡️ Uses `CarDetailsSection.tsx` built on `DetailsBaseSection`.

---

## 🏕️ Example: Travel Pack Details Page

*(unchanged from previous version)*  
➡️ Uses `TravelPackDetailsSection.tsx` built on `DetailsBaseSection`.

---

## 🏞️ Example: Activity Details Page

*(unchanged from previous version)*  
➡️ Uses `ActivityDetailsSection.tsx` built on `DetailsBaseSection`.

---

## 🖼️ Example: Gallery Details Page (🆕)

### File: `app/[locale]/gallery/[id]/page.tsx`

```tsx
import { notFound } from "next/navigation";
import { getGalleryItemById } from "@/lib/api";
import { getMetadataDynamic } from "@/lib/metadata/dynamic";
import GalleryDetailsSection from "@/components/ui_v2/sections/GalleryDetailsSection/GalleryDetailsSection";

type Props = {
  params: Promise<{ id: string; locale: string }>;
};

export default async function GalleryDetailsPage({ params }: Props) {
  const { id, locale } = await params;
  const galleryItem = await getGalleryItemById(id, locale);

  if (!galleryItem) return notFound();

  return (
    <GalleryDetailsSection
      galleryItem={{
        title: galleryItem.metadata.title || "Untitled",
        description: galleryItem.metadata.description || "",
        coverImage: galleryItem.metadata.image || "",
        images: galleryItem.images || [],
      }}
      locale={locale}
    />
  );
}

export async function generateMetadata({ params }: { params: Promise<{ id: string; locale: string }> }) {
  const { id, locale } = await params;
  const galleryItem = await getGalleryItemById(id, locale);
  if (!galleryItem) return {};

  return getMetadataDynamic({
    name: galleryItem.metadata.title || "Untitled",
    description: galleryItem.metadata.description || "",
    image: galleryItem.metadata.image || "",
    path: `/${locale}/gallery/${id}`,
  });
}
```

---

### File: `components/ui_v2/sections/GalleryDetailsSection/GalleryDetailsSection.tsx`

```tsx
"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "../../foundation";
import DetailsBaseSection from "../base/DetailsBaseSection";
import { GalleryGrid } from "./GalleryDetailsSection.styled";

type Props = {
  galleryItem: {
    title: string;
    description?: string;
    coverImage: string;
    images?: string[];
  };
  locale: string;
};

export default function GalleryDetailsSection({ galleryItem, locale }: Props) {
  const t = useTranslations("galleryDetails");

  return (
    <DetailsBaseSection
      imageSrc={galleryItem.coverImage}
      title={galleryItem.title}
      description={galleryItem.description}
      backHref="/gallery"
      locale={locale}
      cta={
        <Button variant="primary" fullWidth>
          {t("openGallery")}
        </Button>
      }
      details={
        galleryItem.images && galleryItem.images.length > 0 ? (
          <>
            <h3 style={{ marginBottom: "0.5rem", color: "#fff" }}>
              {t("moreImages")}
            </h3>
            <GalleryGrid>
              {galleryItem.images.map((img, i) => (
                <div key={i} className="thumb">
                  <Image
                    src={img}
                    alt={`${galleryItem.title} ${i + 1}`}
                    fill
                    style={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                </div>
              ))}
            </GalleryGrid>
          </>
        ) : null
      }
    />
  );
}
```

---

## 🌍 i18n Namespace

**`messages/en.json`**
```json
{
  "galleryDetails": {
    "openGallery": "Open Gallery",
    "moreImages": "More Images",
    "backToGallery": "Back to Gallery"
  }
}
```

**`messages/fr.json`**
```json
{
  "galleryDetails": {
    "openGallery": "Ouvrir la galerie",
    "moreImages": "Plus d’images",
    "backToGallery": "Retour à la galerie"
  }
}
```

---

## 🎨 Layout & Visual Consistency

| Element | Role |
|----------|------|
| `DetailsBaseSection` | Unified visual foundation for all details |
| `GalleryGrid` | Responsive grid for additional images |
| `Button` | Primary CTA (“Open Gallery”) |
| `BackLink` | Navigates back to `/gallery` |

All visual styles follow `theme.ts` tokens — radii, spacing, and colors remain consistent.

---

## 🧱 Key Takeaways

- 🧩 **Now includes Gallery** under the unified Details System  
- 🎨 **Visual parity** across all detail pages  
- 🌍 **Localized** via `galleryDetails` namespace  
- 🧱 **Base-driven architecture** keeps structure consistent and maintainable  
- 🖼️ **GalleryGrid** adds visual flexibility (extra images without breaking layout)  
- 💡 **Ready for extension** — future media types (videos, panoramas) can use the same base  
