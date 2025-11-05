# 📐 Architecture Overview — Nomadia Travels

## 🎯 Purpose

This document explains the **project architecture** at a high level.  
It’s designed for onboarding: helping new engineers quickly understand where things live and why.

---

## 🏗️ Layers & Philosophy

### 1. `app/`

- **Role:** Entry point for the application.
- **Contains:**
  - `layout.tsx` → Global layout (fonts, providers, metadata).
  - `page.tsx` → Home page.
- **Philosophy:** Centralized routing using Next.js App Router.

// TODO: Add future steps about **nested routes**, **error.tsx**, **loading.tsx**

---

### 2. `components/`

- **Role:** Reusable building blocks.
- **Structure:**
  - `providers/` → Wrappers like `ThemeProviderWrapper`, context providers.
  - `ui/` → Atomic UI elements (Button, ThemeToggleButton).
- **Philosophy:** Separation between logic providers and UI elements.

// TODO: Add future steps about **Navbar**, **Footer**, **Cards**, **Gallery**

---

### 3. `hooks/`

- **Role:** Custom React hooks for app logic.
- **Example:** `useThemeToggle.tsx` → handles dark/light theme switching.
- **Philosophy:** Encapsulate stateful logic, reusable across UI.

// TODO: Add future steps about **data fetching hooks**, **auth hooks**

---

### 4. `styles/`

- **Role:** Global styling & design tokens.
- **Contains:**
  - `global.ts` → Reset + global CSS.
  - `theme.ts` → Theme config (light/dark).
  - `tokens/` → Colors, spacing, radii.
  - `styled.d.ts` → TypeScript theme typing.
- **Philosophy:** Centralized theme system for consistency and scalability.

// TODO: Add future steps about **responsive system**, **typography scale**

---

### 5. `lib/`

- **Role:** Utilities and shared logic.
- **Example:** `metadata.ts` → SEO & social metadata config.
- **Philosophy:** Keep app-wide helpers isolated from UI.

// TODO: Add future steps about **fetch wrapper**, **i18n setup**

---

### 6. `public/`

- **Role:** Static assets (images, icons, SVG).
- **Philosophy:** Assets accessible via `/` path at runtime.

// TODO: Add future steps about **image optimization**, **open graph images**

---

## 🧭 Guiding Principles

- **Separation of concerns:** UI, logic, styles, and utilities live in separate layers.
- **Scalable design:** Ready for CMS, Auth, Payments in later phases.
- **Onboarding clarity:** Any engineer can locate theme, metadata, or UI components quickly.

---

## ✈️ New Features

### 1. `travel-packs/`

- **Role:** Manage and display travel packs.
- **Contains:**
  - `TravelPackCard.tsx` → Component to display individual travel pack.
  - `TravelPackList.tsx` → Component to list all travel packs.
- **Philosophy:** Modular components for displaying travel-related information.

### 2. `gallery/`

- **Role:** Showcase images and videos.
- **Contains:**
  - `Gallery.tsx` → Main gallery component.
  - `GalleryItem.tsx` → Individual item in the gallery.
- **Philosophy:** Dedicated space for media, separate from other content.

---
