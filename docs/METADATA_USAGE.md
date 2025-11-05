# 📘 Metadata Usage Guide — Nomadia Travels

This guide explains **how to manage metadata** (static & dynamic) inside the project.  
It is designed to help any engineer quickly understand **where to place metadata, how to extend it, and how to ensure SEO quality**.

---

## 1. Purpose

- Provide consistent metadata handling across **static** and **dynamic** pages.
- Centralize SEO best practices.
- Ensure scalability for future phases (CMS, API-based metadata).

---

## 2. Static Pages Example

For pages with **fixed content** (Contact, Gallery, etc.), use `getMetadataStatic`.

```ts
// app/contact/page.tsx
import { getMetadataStatic } from "@/lib/metadata";

export const metadata = getMetadataStatic({
  title: "Contact Us",
  description:
    "Get in touch with Nomadia Travels for inquiries and bookings.",
  path: "/contact",
  image: "/og-contact.png",
});

export default function ContactPage() {
  return <h1>Contact Nomadia Travels</h1>;
}
```

## 3. Dynamic Pages Example

For pages where metadata depends on data (Cars, Travel Packs, Activities, etc.), use getMetadataDynamic.

```ts
// app/cars/[id]/page.tsx
import { getMetadataDynamic } from "@/lib/metadata";
import cars from "@/data/cars.json";

type Props = { params: { id: string } };

export async function generateMetadata({ params }: Props) {
  const car = cars.find((c) => c.id === params.id);

  if (!car) {
    return {
      title: "Car Not Found | Explore Kyrgyzstan",
      description: "The requested car could not be found.",
    };
  }

  return getMetadataDynamic({
    name: car.name,
    description: car.description,
    image: car.image,
    path: `/cars/${car.id}`,
  });
}

export default function CarDetailsPage({ params }: Props) {
  return <h1>Car: {params.id}</h1>;
}
```

For dynamic metadata in Travel Packs:

```ts
// app/travel-packs/[id]/page.tsx
import { getMetadataDynamic } from "@/lib/metadata";
import travelPacks from "@/data/travel-packs.json";

type Props = { params: { id: string } };

export async function generateMetadata({ params }: Props) {
  const pack = travelPacks.find((p) => p.id === params.id);

  if (!pack) {
    return {
      title: "Travel Pack Not Found",
      description: "The requested travel pack could not be found.",
    };
  }

  return getMetadataDynamic({
    name: pack.name,
    description: pack.description,
    image: pack.image,
    path: `/travel-packs/${pack.id}`,
  });
}

export default function TravelPackDetailsPage({ params }: Props) {
  return <h1>Travel Pack: {params.id}</h1>;
}
```

For dynamic metadata in Gallery pages:

```ts
// app/gallery/[id]/page.tsx
import { getMetadataDynamic } from "@/lib/metadata";
import galleryItems from "@/data/gallery.json";

type Props = { params: { id: string } };

export async function generateMetadata({ params }: Props) {
  const item = galleryItems.find((i) => i.id === params.id);

  if (!item) {
    return {
      title: "Gallery Item Not Found",
      description: "The requested gallery item could not be found.",
    };
  }

  return getMetadataDynamic({
    name: item.title,
    description: item.description,
    image: item.image,
    path: `/gallery/${item.id}`,
  });
}

export default function GalleryItemPage({ params }: Props) {
  return <h1>Gallery Item: {params.id}</h1>;
}
```

## 4. Key Notes

Static Pages → Use getMetadataStatic when the page content will never change.
Dynamic Pages → Use getMetadataDynamic when content is coming from JSON, API, or DB.
Always include:
title → Unique & clear.
description → Short, < 160 characters.
image → Open Graph image (1200x630).
path → Relative path of the page (/contact, /cars/:id, etc.).

## 5. SEO Best Practices

Keep title under 60 characters.
Write description like a search result snippet (informative & engaging).
Always provide OG image (1200x630) to improve social sharing.
Add alt text to images for accessibility + SEO.
Ensure language & locale consistency (en_US, fr_FR).

## 6. Folder Structure (lib/metadata)

```yaml
lib/
  metadata/
    base.ts    # Base metadata (site-wide defaults)
    static.ts  # getMetadataStatic
    dynamic.ts # getMetadataDynamic
    index.ts   # Central re-exports
```

## 7. Quick Copy Templates

Static Page Template

```ts
export const metadata = getMetadataStatic({
  title: "Page Title",
  description: "Short description here.",
  path: "/page",
  image: "/og-page.png",
});
```

Dynamic Page Template

```ts
export async function generateMetadata({ params }) {
  const item = data.find((i) => i.id === params.id);

  return getMetadataDynamic({
    name: item.name,
    description: item.description,
    image: item.image,
    path: `/route/${item.id}`,
  });
}
```

✅ With this document, any engineer can set metadata in less than 2 minutes following the standard templates.
