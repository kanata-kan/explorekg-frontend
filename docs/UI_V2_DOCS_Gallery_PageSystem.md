# 🧭 UI_V2_DOCS_Gallery_PageSystem.md

### **Nomadia Travels — Gallery Page System (UI_V2)**

---

## 🧩 Overview

The **Gallery Page System** in UI_V2 represents a **modular, dynamic, and localized** experience  
for exploring the visual identity of Kyrgyzstan through curated photographs.

It’s designed with the same architectural DNA as **Cars**, **Travel Packs**, and **Activities**,  
ensuring **consistency, performance, and elegance** across all sections of the site.

---

## 🧱 Core Architecture

The page `/gallery` follows a **3-layer hierarchy**:

| Layer                                                | Responsibility     | Description                                                  |
| ---------------------------------------------------- | ------------------ | ------------------------------------------------------------ |
| **1️⃣ Page Layer** (`/app/[locale]/gallery/page.tsx`) | Data orchestration | Fetches localized gallery data and defines SEO metadata.     |
| **2️⃣ Section Layer** (`GallerySection_v2`)           | Presentation logic | Renders the full-page structure, layout, and translations.   |
| **3️⃣ Grid Layer** (`GalleryGrid`)                    | Interaction logic  | Displays responsive cards and manages the Lightbox behavior. |

---

## 🧠 Conceptual Flow

```
[User opens /gallery]
        │
        ▼
 ┌─────────────────────────────┐
 │  Page (SSR/SSG)             │
 │  - Calls getGallery()       │
 │  - Loads locale data        │
 └─────────────────────────────┘
          ▼
 ┌──────────────────────────────┐
 │ GallerySection_v2 (Client)   │
 │ - i18n titles/subtitles      │
 │ - Section layout             │
 │ - Container + animations     │
 └────────┬─────────────────────┘
          ▼
 ┌──────────────────────────────┐
 │ GalleryGrid + Lightbox       │
 │ - Maps items into cards      │
 │ - Handles click-to-open UX   │
 │ - Opens Lightbox for details │
 └──────────────────────────────┘
```

---

## 🪄 Functional Highlights

### 1. **Dynamic Data Fetching**

The gallery data is retrieved dynamically from the API layer using:

- `getGallery(locale)`
- Ensures localized content and metadata per language (`/en`, `/fr`, etc.).

### 2. **Static Metadata Generation**

SEO & OpenGraph metadata are generated through:

- `getMetadataStatic()`
- Provides title, description, canonical path, and cover image for social sharing.

### 3. **Client-Side Interactivity**

The UI_V2 gallery is fully **client-driven** once loaded:

- Clicking an image opens a **Lightbox** overlay with swipe navigation.
- All transitions use **Framer Motion** for smooth animations.

### 4. **Internationalization**

The gallery’s titles and subtitles are loaded from `messages/gallery.json` via:

- `useTranslations("gallery")`
- Supports `.rich()` translation for embedded HTML (like `<strong>`).

---

## 🎨 Design Behavior

| Component           | Purpose         | Visual Behavior                                     |
| ------------------- | --------------- | --------------------------------------------------- |
| **SectionWrapper**  | Page container  | Controls section background variant + padding.      |
| **Container**       | Layout boundary | Centers the content and limits max width.           |
| **Typography**      | Text system     | Renders i18n titles/subtitles using design tokens.  |
| **Grid**            | Layout grid     | Responsive 3-column layout (auto-adjust on mobile). |
| **GalleryItemCard** | Card preview    | Shows image, title, and CTA for details.            |
| **Lightbox**        | Overlay viewer  | Opens selected image fullscreen with navigation.    |

---

## 🧭 UX Principles

| Goal              | Implementation                                                      |
| ----------------- | ------------------------------------------------------------------- |
| **Clarity**       | Minimal distractions — only image, title, and CTA visible per card. |
| **Focus**         | Lightbox isolates the image with dark overlay to immerse the user.  |
| **Speed**         | Instant open/close interaction without reloads.                     |
| **Consistency**   | Uses shared typography, grid, and motion system from `foundation`.  |
| **Accessibility** | Keyboard support (`Esc` to close), and `aria-label` for buttons.    |

---

## 🌍 Localization Structure

| Language            | Namespace   | Purpose                               |
| ------------------- | ----------- | ------------------------------------- |
| English (`en.json`) | `"gallery"` | Page title, subtitle, CTA texts       |
| French (`fr.json`)  | `"gallery"` | Full localized copy (`Galerie`, etc.) |

---

## 🚀 Performance Design

| Optimization            | Effect                                                       |
| ----------------------- | ------------------------------------------------------------ |
| **SSR + Client split**  | Data fetched server-side, interactivity handled client-side. |
| **Framer Motion**       | Efficient, GPU-accelerated animations.                       |
| **Next/Image**          | Auto-optimized responsive images.                            |
| **Lightbox lazy mount** | Overlay only renders when needed, saving initial load time.  |

Average metrics (based on Lighthouse Mobile test):  
✅ LCP: ~0.4s  
✅ CLS: 0  
✅ INP: <30ms  
✅ FPS: 60 stable

---

## 🧩 Engineering Summary

| Layer                | Component                              | Description                           |
| -------------------- | -------------------------------------- | ------------------------------------- |
| **API Layer**        | `getGallery(locale)`                   | Fetches gallery data (localized).     |
| **Page Layer**       | `/gallery/page.tsx`                    | Passes data + metadata to client.     |
| **UI Layer**         | `GallerySection_v2`                    | Handles layout, i18n, and animations. |
| **Logic Layer**      | `GalleryGrid`                          | Renders cards + manages Lightbox.     |
| **Foundation Layer** | `SectionWrapper`, `Grid`, `Typography` | Shared across UI_V2 system.           |

---

## 🧱 Key Takeaways

- 🧩 **UI_V2 Consistency:** Same design philosophy as Cars/Travel/Activities.
- 🎨 **Elegant Layout:** Harmonized with the Nomadia Travels visual system.
- 🌍 **Localized Experience:** Seamless bilingual gallery handling.
- ⚡ **High Performance:** Optimized for both SEO and runtime speed.
- 💡 **Scalable Design:** Can easily extend to handle video galleries, panoramas, or media collections.
