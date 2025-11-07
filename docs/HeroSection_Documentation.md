# 🦋 HeroSection — Kanata UI v2

> Elegant, responsive hero section built with **Next.js 16**, **Framer Motion v11**, and **styled-components**.  
> Designed for high-performance visual impact with smooth animation and optimized LCP.

---

## 🧱 Overview

The `HeroSection` component is the **visual entry point** for a page — combining:
- A full-screen image background
- Overlay gradient for contrast
- Animated title, subtitle, and CTA
- Responsive alignment and layout logic

It’s fully **SSR-friendly**, **motion-optimized**, and compatible with **Next-Intl** and **theme tokens**.

---

## ⚙️ Props

| Prop | Type | Default | Description |
|------|------|----------|-------------|
| `title` | `string` | — | Main heading displayed at the center of the hero |
| `subtitle` | `string` | — | Secondary text or tagline |
| `heroImage` | `string` | — | Image path for the hero background |
| `ctaText` | `string` | — | Text label for the call-to-action button |
| `ctaLink` | `string` | — | Link (internal or external) triggered by the CTA |
| `align` | `"left" \| "center" \| "right"` | `"center"` | Alignment of hero content |
| `overlay` | `"dark" \| "light" \| "auto"` | `"auto"` | Overlay gradient style |

---

## 🪄 Example Usage

```tsx
import HeroSection from "@/components/ui_v2/HeroSection";

export default function HomePage() {
  return (
    <HeroSection
      title="Explore Kyrgyzstan"
      subtitle="Nomadic culture, vast landscapes, and unforgettable adventures."
      heroImage="/images/home/hero-home.webp"
      ctaText="Start Your Journey"
      ctaLink="/travel-packs"
      align="center"
      overlay="dark"
    />
  );
}
```

---

## 🎨 Visual Structure

```
HeroWrapper (section)
 ├── ImageLayer (background)
 └── Content (motion.div)
     ├── Title (h1)
     ├── Subtitle (p)
     └── HeroCTA (motion.a)
```

---

## 🧠 Behavior

### 🎬 Animations
- Smooth fade-in on mount (`opacity`, `translateY`)
- Hover scaling on CTA (`scale`, `translateY`, `icon rotate`)
- Subtle background zoom on hover for visual depth

### ⚡ Performance
- Uses `priority` and `quality=90` (optimized via `next.config.ts`)
- All motion handled by `framer-motion.create()` (Next 16 compatible)
- Minimal re-rendering due to memoized layout logic

---

## 💡 Best Practices

✅ Use **low-contrast hero images** (subject visible even behind overlay)  
✅ Avoid long text lines — keep subtitle under 100 chars  
✅ Use `"dark"` overlay for bright images and `"light"` for darker ones  
✅ Don’t use multiple HeroSections on the same page  
✅ Combine with `BaseSection` for section continuity  

---

## 🧩 Integration Notes

- **Framer Motion:** uses the new `motion.create()` API  
- **Images:** uses formats from `next.config.ts` (`avif`, `webp`)  
- **Styling:** compatible with theme tokens (colors, radii, spacing)  
- **Accessibility:** hero text and buttons maintain proper color contrast  

---

## 🪶 Commit Reference

```
feat(ui_v2): upgrade HeroSection to Next16-ready architecture
- Added motion.create() integration
- Improved CTA hover interaction
- Updated image quality config for Next 16
- Refined overlay blending and theme contrast
```

---

## 🧾 File Path

```
components/
└── ui_v2/
    ├── HeroSection.tsx
    └── HeroSection.styled.ts
docs/
└── ui_v2/
    └── HeroSection.md
```

---

✨ *This component sets the tone for the user experience.  
Keep it minimal, cinematic, and emotionally engaging.*
