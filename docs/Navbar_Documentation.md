# 🧭 Navbar — Kanata UI v2

Elegant, modular navigation system built with **Next.js App Router**, **Framer Motion**, and **styled-components**.  
Designed for **SSR-friendly** performance and **motion-optimized** interaction on both desktop and mobile.

---

## 🌐 Overview

The **Navbar** component acts as the **global entry interface** for navigation, combining:

- **Desktop navigation bar** with transparent-to-solid scroll effect
- **Responsive drawer menu** for mobile and tablet
- **Animated transitions** powered by Framer Motion
- **Dynamic localization (EN / FR)** through `next-intl`
- **Theme switching** (Light / Dark) via a custom hook
- **Type-safe JSON-driven links** using `@/data/content/{locale}/navLinks.json`

It’s fully **SSR-compatible**, **motion-enhanced**, and **integrated with the global theme tokens**.

---

## 🧩 Architecture

```
Navbar
├── NavbarDesktop.tsx     🖥️  (Desktop layout)
│   ├── Brand
│   ├── NavLinks
│   └── ThemeToggle + LanguageSwitcher
│
├── NavbarResponsive.tsx  📱  (Mobile Drawer)
│   ├── BurgerButton
│   ├── Drawer (Header / Links / Footer)
│   ├── Overlay
│   └── Motion animations
│
└── Navbar.styled.ts      🎨  (Visual layer)
    ├── NavbarWrapper
    ├── Brand / NavLinks
    ├── Drawer / BurgerButton
    └── Overlay / Footer
```

---

## ⚙️ Behavior Logic

| Feature                   | Description                                                                                          |
| ------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Scroll Detection**      | When user scrolls > 40px → Navbar gains a blurred background & shadow.                               |
| **Responsive Switch**     | Below 1024px → switches from `NavbarDesktop` → `NavbarResponsive`.                                   |
| **Dynamic Import**        | Navigation links are auto-loaded from `navLinks.json` depending on locale (EN / FR).                 |
| **Motion Transitions**    | All major elements (`NavbarWrapper`, `Drawer`, `Overlay`) use `Framer Motion` fade/slide animations. |
| **Outside Click Handler** | Closes mobile drawer when clicking outside the drawer area.                                          |
| **Auto Cleanup**          | Event listeners are properly cleaned up on component unmount.                                        |

---

## 🧠 Props Reference

| Prop       | Type                                   | Default | Description                                                |
| ---------- | -------------------------------------- | ------- | ---------------------------------------------------------- |
| `scrolled` | `boolean`                              | `false` | Indicates if the navbar should apply scrolled visual style |
| `locale`   | `string`                               | `"en"`  | Language locale extracted from current route               |
| `navLinks` | `Array<{label: string; href: string}>` | `[]`    | List of navigation items loaded dynamically                |
| `open`     | `boolean`                              | `false` | Drawer open/close state (mobile only)                      |

---

## 🎨 Theming & Visual States

| Mode      | Initial                       | After Scroll                  |
| --------- | ----------------------------- | ----------------------------- |
| **Light** | `rgba(255,255,255,0.4)` glass | `rgba(255,255,255,0.9)` solid |
| **Dark**  | `rgba(15,23,42,0.3)` glass    | `rgba(15,23,42,0.95)` solid   |

- **Blur Intensity:** 20px → 10px after scroll
- **Shadow Depth:** subtle → stronger
- **Border:** becomes visible only after scroll

---

## 🧱 Motion Config

| Element        | Animation                      | Transition                          |
| -------------- | ------------------------------ | ----------------------------------- |
| Navbar Wrapper | `y: -50 → 0`, `opacity: 0 → 1` | `duration: 0.4s`                    |
| Drawer         | `x: 100% → 0`                  | `ease: easeInOut`, `duration: 0.4s` |
| Overlay        | `opacity: 0 → 0.5`             | `duration: 0.3s`                    |
| Drawer Links   | `opacity: 0 → 1`, `x: 10 → 0`  | `staggered (i * 0.05)`              |

---

## 🧭 Internationalization (i18n)

- Uses **Next-Intl** for multilingual routing.
- Locale detected automatically from the pathname:
  ```ts
  const locale = pathname?.split("/")[1] === "fr" ? "fr" : "en";
  ```
- JSON file loaded dynamically:
  ```ts
  import(`@/data/content/${locale}/navLinks.json`);
  ```
- Each locale file has the same structure:
  ```json
  [
    { "label": "Home", "href": "/" },
    { "label": "Cars", "href": "/cars" }
  ]
  ```

---

## 🧩 Example Usage

```tsx
import Navbar from "@/components/ui_v2/navigation/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
```

---

## 🧠 Notes for Developers

- `NavbarWrapper` and `Drawer` are **motion elements**, so transitions are smooth and SSR-safe.
- The `ThemeToggleButton` and `LanguageSwitcher` share a consistent design language across devices.
- The `Overlay` opacity is adaptive for dark/light themes.
- The drawer uses **click-outside detection** with `useRef` for natural mobile UX.
- No external icon library is required — only minimal Unicode icons are used for simplicity.

---

## 🧩 Future Improvements

- 🔄 Add “active route” highlight under the current page link.
- ⚡ Add “scroll progress indicator” integration (optional).
- 🌎 Extend i18n support to additional languages dynamically.
- 🧱 Extract DrawerHeader & DrawerFooter into independent components for cleaner composition.

---

> 💡 **Author:** Kanata (عبدالإله)  
> **Version:** `v2.4`  
> **Updated:** October 2025  
> **Project:** Nomadia Travels – Explore Kyrgyzstan  
> **Stack:** Next.js 15 • TypeScript • Styled-Components • Framer Motion
