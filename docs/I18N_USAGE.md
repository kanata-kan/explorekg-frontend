# 🌍 i18n System - Usage Guide

## 📋 Overview

النظام الجديد للترجمة منظم في مجلدات بدلاً من ملف واحد كبير.

## 📂 Structure

```
messages/
  en/
    common.json          ← Shared translations (actions, navigation)
    pages/               ← Page-specific translations
      home.json
      cars.json
      activities.json
      gallery.json
      travel-packs.json
      contact.json
      our-story.json
      privacy.json
      terms.json
    sections/            ← Section components translations
      car-details.json
      activity-details.json
      travel-pack-details.json
      services.json
    components/          ← UI components translations
      lightbox.json
      gallery.json
  fr/
    [same structure]
```

## 🔧 Usage in Components

### Basic Usage (Current System)

```tsx
import { useTranslations } from "next-intl";

export default function MyComponent() {
  const t = useTranslations("carsSection"); // namespace name

  return <h1>{t("title")}</h1>;
}
```

### With Type Safety (Optional - Advanced)

```tsx
import { useTranslations } from "next-intl";
import { I18N_NAMESPACES } from "@/lib/i18n/namespaces";

export default function MyComponent() {
  const t = useTranslations(I18N_NAMESPACES.PAGES.CARS);
  // ✅ Autocomplete in IDE

  return <h1>{t("title")}</h1>;
}
```

### With Safe Translation (Fallback Support)

```tsx
import { useSafeTranslations } from "@/lib/i18n";

export default function MyComponent() {
  const t = useSafeTranslations("pages.cars");

  // If key is missing, returns fallback instead of crashing
  return <h1>{t("title", "Default Title")}</h1>;
}
```

## 📖 Available Namespaces

### Common

- `common` - Shared translations (actions, navigation)

### Pages

- `carsSection` / `carsPage` - Cars listing page
- `activities` / `activitiesPage` - Activities listing page
- `travelPacks` / `travelPacksPage` - Travel packs listing page
- `gallery` / `galleryPage` - Gallery page
- `contact` / `contactPage` - Contact page
- `ourStory` / `ourStoryPage` - Our Story page
- `privacyPage` - Privacy Policy page
- `terms` - Terms of Service page
- `homePage` - Home page

### Sections (Details Pages)

- `carDetails` - Car details section
- `carGallery` - Car gallery (uses carDetails)
- `activityDetails` - Activity details section
- `travelPackDetails` - Travel pack details section
- `servicesSection` - Services section

### Components

- `lightbox` - Lightbox component
- `ResponsiveGallery` / `galleryDetails` - Gallery component

## 🎯 Common Actions (Shared)

All shared actions are in `common` namespace:

```tsx
const commonT = useTranslations("common");

<button>{commonT("actions.viewAll")}</button>
<button>{commonT("actions.viewDetails")}</button>
<button>{commonT("actions.bookNow")}</button>
<button>{commonT("actions.back")}</button>
<button>{commonT("actions.submit")}</button>
<button>{commonT("actions.close")}</button>
```

## 📝 Adding New Translations

### 1. Add to JSON file

```json
// messages/en/pages/cars.json
{
  "title": "Available Cars",
  "subtitle": "Choose from our fleet",
  "viewAll": "View all",
  "viewDetails": "View Details"
}
```

### 2. Add French translation

```json
// messages/fr/pages/cars.json
{
  "title": "Voitures disponibles",
  "subtitle": "Choisissez parmi notre flotte",
  "viewAll": "Voir tout",
  "viewDetails": "Voir les détails"
}
```

### 3. Use in component

```tsx
const t = useTranslations("carsSection");
<h1>{t("title")}</h1>;
```

## 🔍 Debugging Missing Translations

In development mode, missing translations are logged to console:

```
[i18n] Missing translation: pages.cars.unknownKey (locale: en)
```

## 🚀 Advanced Features

### Lazy Loading (Future)

```tsx
import { loadPageMessages } from "@/lib/i18n";

const messages = await loadPageMessages("en", ["pages.cars"]);
```

### Type-Safe Namespaces

```tsx
import { I18N_NAMESPACES } from "@/lib/i18n/namespaces";

// All available namespaces
I18N_NAMESPACES.COMMON;
I18N_NAMESPACES.PAGES.CARS;
I18N_NAMESPACES.SECTIONS.CAR_DETAILS;
I18N_NAMESPACES.COMPONENTS.LIGHTBOX;
```

### Missing Translation Report

```tsx
import { generateMissingTranslationsReport } from "@/lib/i18n";

console.log(generateMissingTranslationsReport());
```

## ⚠️ Migration Notes

**OLD SYSTEM (DELETED):**

- ❌ `messages/en.json` (170 lines, all namespaces)
- ❌ `messages/fr.json` (170 lines, all namespaces)

**NEW SYSTEM:**

- ✅ Organized in folders (10-20 lines per file)
- ✅ 32 JSON files (16 EN + 16 FR)
- ✅ Better maintainability
- ✅ Type safety support
- ✅ Lazy loading ready

## 📚 Resources

- Documentation: `I18N_SYSTEM_AUDIT_AND_IMPROVEMENT_PLAN.md`
- Types: `types/i18n.types.ts`
- Utilities: `lib/i18n/index.ts`
- Namespaces Registry: `lib/i18n/namespaces.ts`

---

**Last Updated:** November 6, 2025  
**Status:** ✅ Production Ready
