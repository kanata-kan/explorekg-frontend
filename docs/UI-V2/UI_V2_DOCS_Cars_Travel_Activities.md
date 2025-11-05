# 🧭 UI_V2_DOCS.md

### **Nomadia Travels — Section System (Cars, Travel Packs, Activities)**

---

## 🧩 Overview

The **UI_V2 Section System** defines a **modular, unified architecture**
for displaying categorized content (Cars, Travel Packs, Activities)
in both the **Home Page** and the **dedicated listing pages**.

All sections share a **single base component** — `BaseSection.tsx` —
which handles layout, translation, theme variants, and card rendering.

---

## 🏗️ Architectural Flow

```bash
📂 components/
└── ui_v2/
    ├── components/
    │   └── UniversalCard.tsx       → Generic Card for all items
    ├── foundation/
    │   ├── Container.tsx
    │   ├── Grid.tsx
    │   ├── SectionWrapper.tsx      → Section layout + background variants
    │   └── variantMap.ts           → Maps “home/page” variants to theme variants
    └── sections/
        └── base/
            └── BaseSection.tsx     → The unified section component
```

---

## ⚙️ Core Concept: BaseSection

Each section (Cars, Travel Packs, Activities)
is just a **data source + i18n namespace + variant type**.

`BaseSection` automatically handles:

1. Dynamic i18n titles (`t("title")`, `t("subtitle")`)
2. Responsive card grid (`UniversalCard`)
3. Themed backgrounds (`variantMap → SectionWrapper`)
4. Conditional “View All” button for home variant

---

## 🧠 Component Behavior

| Prop           | Type            | Description                                  |
| -------------- | --------------- | -------------------------------------------- | ----- | ------ | ------- | --------------------------------- |
| `items`        | `DisplayItem[]` | List of entities (Cars, Travel Packs, etc.)  |
| `namespace`    | `string`        | i18n namespace (e.g. `"carsSection"`)        |
| `ctaBasePath`  | `string`        | Base URL for the detail pages (e.g. `/cars`) |
| `variant`      | `"home"         | "page"                                       | "alt" | "dark" | "hero"` | Controls background + grid layout |
| `specsEnabled` | `boolean`       | Toggle for rendering specs below each card   |

---

## 🌍 i18n Integration

Text content (titles, subtitles, CTA labels)
is fully **localized** using `next-intl`.

Example JSON (excerpt from `/messages/en.json`):

```json
"carsSection": {
  "title": "Available Cars",
  "subtitle": "Choose from our fleet of cars for your {country} adventure.",
  "viewAll": "View all →",
  "viewDetails": "View Details"
}
```

> Each section (`carsSection`, `travelPacks`, `activities`) follows the same schema.

---

## 🧱 Example Usage in Pages

### 🏠 Home Page

```tsx
<BaseSection
  items={cars}
  namespace="carsSection"
  ctaBasePath="/cars"
  variant="home"
/>

<BaseSection
  items={travelPacks}
  namespace="travelPacks"
  ctaBasePath="/travel-packs"
  variant="alt"
/>

<BaseSection
  items={activities}
  namespace="activities"
  ctaBasePath="/activities"
  variant="dark"
/>
```

🧩 Behavior:

- Displays only 3 items (slice) per category
- Adds “View All” button
- Uses visual contrast via variant backgrounds

---

### 🚗 Cars Page

```tsx
<BaseSection
  items={cars}
  namespace="carsSection"
  ctaBasePath="/cars"
  variant="page"
/>
```

🧩 Behavior:

- Renders full list of cars
- Includes section title and subtitle
- No “View All” button (page variant)

---

### 🏞️ Travel Packs Page

```tsx
<BaseSection
  items={travelPacks}
  namespace="travelPacks"
  ctaBasePath="/travel-packs"
  variant="page"
/>
```

🧩 Behavior:

- Same layout logic as CarsPage
- Dynamic i18n per locale (en/fr)

---

### 🏕️ Activities Page

```tsx
<BaseSection
  items={activities}
  namespace="activities"
  ctaBasePath="/activities"
  variant="page"
/>
```

🧩 Behavior:

- Same structure and styling logic
- Reuses same foundation and typography system

---

## 🎨 Variants System

Handled by `variantMap.ts` + `SectionWrapper.tsx`.

| Base Variant | Section Variant | Visual Effect                        |
| ------------ | --------------- | ------------------------------------ |
| `"home"`     | `"default"`     | Light background (home preview)      |
| `"page"`     | `"default"`     | Full page layout with title/subtitle |
| `"alt"`      | `"alt"`         | Soft contrast background             |
| `"dark"`     | `"dark"`        | Dark contrast background             |
| `"hero"`     | `"hero"`        | Gradient hero block                  |

---

## 💡 UniversalCard Logic

All entities (car, travel pack, activity) share one display interface:

```ts
export type DisplayItem = {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  price?: string | number | null;
  specs?: { icon: React.ReactNode; label: string }[];
};
```

Each card automatically inherits:

- Image preview
- Title + description
- Optional price or specs
- CTA (“View Details”) from i18n

---

## 🧩 Data Flow Summary

```
┌────────────────────┐
│  API Layer (lib/)  │
│  getCars(), getTravelPacks(), getActivities() │
└──────────┬─────────┘
           │
           ▼
┌────────────────────┐
│   BaseSection.tsx  │
│   - Uses i18n
│   - Maps variant
│   - Renders cards
└──────────┬─────────┘
           │
           ▼
┌────────────────────┐
│  UniversalCard.tsx │
│  - Shared UI logic │
│  - Theme-based     │
└────────────────────┘
```

---

## 🧱 Key Takeaways

- 🧩 **One Component → Many Contexts**:
  Cars, Travel Packs, Activities all share one visual + data structure.

- 🌍 **Full i18n Support**:
  Section text and CTA labels are fully translatable.

- 🧠 **Architecture-Level Reuse**:
  Each new section can be added by creating:
  1. Data endpoint (`lib/api`)
  2. JSON messages namespace
  3. `<BaseSection>` instance in a page.

- 🎨 **Clean Theming**:
  Background colors are variant-driven and handled centrally.

- ⚙️ **Future-Proof**:
  `variantMap.ts` allows scaling with new visual themes without refactoring logic.
