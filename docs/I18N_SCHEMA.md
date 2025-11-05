## 🗺️ Detailed Schema — i18n (Language Flow in Project)

This document explains how the **internationalization system (i18n)** works inside the Nomadia Travels project,  
how the locale flows across the app (EN/FR), and how `next-intl` integrates with the App Router.

---

## 1. Visual Flow

```ts
[ URL Structure ]
  /en/...      → English routes
  /fr/...      → French routes

[ app/[locale]/layout.tsx ]
  └─ <NextIntlClientProvider locale="en|fr" messages={...}>
       └─ <Navbar> + <LanguageSwitcher> + <Content>

[ components/ui/LanguageSwitcher.tsx ]
  └─ useRouter() + usePathname() + useLocale()  ← from next-intl/navigation
       ↓
  router.replace(pathname, { locale: "fr" })     ← keeps user on same page
       ↓
  Page rerenders with messages/fr.json
       ↓
  UI updates instantly without reload ✅
```

## 2. Folder Structure Overview

```bash
i18n/
├── messages/
│   ├── en.json           # English translations
│   └── fr.json           # French translations
├── navigation.ts         # Wrapper for locale-aware hooks
└── config.ts             # Locale config & constants
```

## 3. Core Providers & Hooks

🧩 Providers

```ts
// app/[locale]/layout.tsx
<IntlProvider locale={locale} messages={messages}>
  {children}
</IntlProvider>
Loads correct translations for the current locale.

Makes useTranslations() available across all components.

🧠 Hooks

import { useRouter, usePathname } from "next-intl/navigation";
import { useLocale } from "next-intl";
Hook	Source	Role
useRouter()	next-intl/navigation	Locale-aware routing
usePathname()	next-intl/navigation	Current path detection
useLocale()	next-intl	Returns current language code
```

## 4. Language Switcher Flow

```ts
"use client";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchLang = (lang: "en" | "fr") => {
    router.replace(pathname, { locale: lang });
  };

  return (
    <Wrapper>
      <LangButton $active={locale === "en"} onClick={() => switchLang("en")}>
        EN
      </LangButton>
      <LangButton $active={locale === "fr"} onClick={() => switchLang("fr")}>
        FR
      </LangButton>
    </Wrapper>
  );
}

```

## 🔄 Behavior Diagram

```bash
Click "FR" button
   ↓
router.replace(pathname, { locale: "fr" })
   ↓
URL updates → /fr/current-page
   ↓
NextIntlProvider reloads with fr.json
   ↓
All texts + metadata change instantly
```

## 5. Metadata & SEO Integration

Each page imports a helper to create localized metadata dynamically:

```tsx
export const metadata = useMetadataStatic({
  title: "About Us",
  description: "Learn more about Nomadia Travels...",
  path: "/about",
  image: "/og-about.png",
});
```

Titles, descriptions, and paths adapt automatically to the current locale.
Metadata is pre-rendered server-side for SEO consistency.

## 6. Developer Notes

```bash
✅ Always import hooks from next-intl/navigation (not next/navigation)
✅ Keep translation files small & structured (section-based)
✅ LanguageSwitcher keeps the user on the same page during change
✅ For new locales → just add JSON + extend config.ts
```

## 7. Future Enhancements

```bash
Feature	Description	Status
Persistent language (cookie/localStorage)	Save preferred locale	⏳ Planned
CMS integration (Strapi)	Centralized translations	🔜 Future
New locale (es)	Spanish support	⏳ In planning
Automatic redirect	Detect browser language	🔜 Optional
```

## 8. Summary

```bash
User → clicks language
 ↓
Router replaces path (same page)
 ↓
NextIntl loads correct messages
 ↓
UI and metadata update instantly
 ↓
No reload — seamless multilingual UX
```
