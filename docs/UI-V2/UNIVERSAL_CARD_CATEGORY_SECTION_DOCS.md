# 🧩 UniversalCard & CategorySection — Documentation Guide

This document explains how to use and customize **UniversalCard** and **CategorySection** within the `ui_v2` layer.

---

## 📘 1. Overview

The `UniversalCard` is a **generic, reusable card component** designed to display structured data (like cars, travel packs, or activities) in a consistent visual layout.

The `CategorySection` acts as a **wrapper section** that displays multiple `UniversalCard`s inside a grid, with optional headings, translations, and CTA buttons.

Together, they allow for scalable UI reuse across multiple sections (e.g., `/cars`, `/travel-packs`, `/activities`).

---

## ⚙️ 2. UniversalCard

### 🧠 Purpose

To display a single item with optional specs, description, price, and call-to-action (CTA).

### ✅ Props Reference

| Prop | Type | Required | Description |
|------|------|-----------|--------------|
| `image` | `string` | ✅ | Path to the image displayed at the top. |
| `title` | `string` | ✅ | Main title of the card. |
| `description` | `string` | ✅ | Short description of the item. |
| `specs` | `{ icon: ReactNode; label: string }[]` | ❌ | Optional specs (icons + labels) displayed in a grid. |
| `price` | `string \| number \| null` | ❌ | Displays either a numeric or formatted string price. |
| `ctaLabel` | `string` | ❌ | Text for the button (e.g., “View Details”). |
| `ctaLink` | `string` | ❌ | URL or route for the CTA button. |

### 🧩 Example Usage

```tsx
<UniversalCard
  image="/images/cars/elantra.jpg"
  title="Hyundai Elantra"
  description="Perfect for short city trips."
  specs={[
    { icon: <FaUsers />, label: "4" },
    { icon: <FaGasPump />, label: "Petrol" },
  ]}
  price="50 USD / day"
  ctaLabel="View Details"
  ctaLink="/cars/car-3"
/>
```

---

## 🧱 3. CategorySection

### 🧠 Purpose

A reusable **section wrapper** that takes an array of items and renders multiple `UniversalCard`s inside a responsive grid.

### ✅ Props Reference

| Prop | Type | Required | Description |
|------|------|-----------|--------------|
| `items` | `DisplayItem[]` | ✅ | Array of items to render (cars, packs, etc.). |
| `namespace` | `string` | ✅ | Translation key (e.g., `"carsSection"`). |
| `ctaBasePath` | `string` | ✅ | Base path for CTA links (e.g., `/cars`). |
| `variant` | `"home" \| "page"` | ❌ | Changes layout and grid density. |
| `specsEnabled` | `boolean` | ❌ | Controls whether specs are displayed. Default: `true`. |

### 🧩 Example Usage (Cars Page)

```tsx
<CategorySection
  items={cars}
  namespace="carsSection"
  ctaBasePath="/cars"
  variant="page"
  specsEnabled={true}
/>
```

### 🧩 Example Usage (Home Page)

```tsx
<CategorySection
  items={cars.slice(0, 3)}
  namespace="carsSection"
  ctaBasePath="/cars"
  variant="home"
  specsEnabled={true}
/>
```

---

## 🧠 4. How They Work Together

1. `CategorySection` fetches localized data (`cars`, `travelPacks`, etc.).  
2. Each item is transformed into a normalized format (`DisplayItem`).  
3. The component maps through these items and renders a `UniversalCard` for each.  
4. Layout, spacing, and typography are managed by `SectionWrapper`, `Container`, and `Grid`.

---

## 🧩 5. Best Practices

✅ Use `UniversalCard` when you need a single item preview.  
✅ Use `CategorySection` for grouped cards within pages or home sections.  
✅ Keep data normalization (like converting `price` to string) **outside** the components.  
✅ Use `namespace` for translations (`next-intl`) to avoid text duplication.  
✅ Pass `variant="home"` for smaller grids (3 columns) and `variant="page"` for full pages (4 columns).

---

## 🏗️ 6. Recommended Folder Structure

```
components/ui_v2/
├── components/
│   ├── UniversalCard.tsx
│   └── UniversalCard.styled.ts
├── sections/
│   ├── CategorySection.tsx
│   └── CarsSection.tsx
└── foundation/
    ├── Typography.tsx
    ├── Grid.tsx
    └── Container.tsx
```

---

## 💡 7. Future Scalability

- Add `variant` props to `UniversalCard` for specialized themes.  
- Extend `CategorySection` to handle pagination or lazy loading.  
- Support skeleton loading states.  
- Integrate animation hooks (Framer Motion) for smoother transitions.

---

**Author:** Kanata / Abdulilah  
**Version:** UI V2 — Reusable Architecture  
**Last Updated:** 2025-10-07
