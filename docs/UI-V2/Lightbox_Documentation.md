# 📸 Lightbox v2 — Documentation (UI_v2)

> The final version of the **Lightbox** system used in `ui_v2`.  
> It supports both **Desktop Lightbox** (with navigation buttons) and **Mobile Lightbox** (swipe-based).  
> Built with **Next.js Image**, **framer-motion**, and **styled-components**, and fully supports i18n.

---

## 🗂️ Structure

```bash
components/ui_v2/foundation/Lightbox/
├── Lightbox.tsx            # Controller: chooses Desktop/Mobile
├── LightboxDesktop.tsx     # Desktop experience (buttons)
├── LightboxMobile.tsx      # Mobile experience (swipe)
└── Lightbox.styld.ts       # All styled elements (desktop + mobile)
```

---

## 🎯 Purpose

- Display gallery images in full-screen overlay.
- **Desktop**: image + info panel + navigation buttons.
- **Mobile**: swipe left/right navigation + close button only.
- Fully localized and theme-adaptive.

---

## 🔌 Imports

```tsx
// Example usage inside GalleryGrid item click:
import Lightbox from "@/components/ui_v2/foundation/Lightbox/Lightbox";
```

---

## 🔐 Types

```ts
export type GalleryItem = {
  id: string;
  title: string;
  caption: string;
  image: string;
  metadata: { alt?: string; path: string };
};
```

---

## 🔧 Public API

### `<Lightbox />`

| Prop         | Type            | Required | Description                                 |
| ------------ | --------------- | -------- | ------------------------------------------- |
| `items`      | `GalleryItem[]` | ✅       | List of images displayed in the lightbox    |
| `startIndex` | `number`        | ✅       | The initial image index                     |
| `onClose`    | `() => void`    | ✅       | Closes the lightbox and resets parent state |

**Behavior**

- Automatically detects mobile/desktop using `window.innerWidth`.
- Uses `LightboxMobile` for small screens, `LightboxDesktop` otherwise.

---

## 💻 LightboxDesktop

- Layout: image on the left, info on the right.
- Controls: Prev / Next / Close.
- Uses `next/image` with `fill` and responsive `sizes`.
- Animated with `framer-motion`.

---

## 📱 LightboxMobile

- Full-screen image display with swipe navigation.
- Supports touch gestures and ESC key to close.
- Lightweight with no navigation buttons.

---

## 🎨 Styling

All styled components are centralized in `Lightbox.styld.ts`.

---

## 🌍 i18n Keys

```json
"lightbox": {
  "viewDetails": "View Details →",
  "prev": "← Prev",
  "next": "Next →",
  "close": "✕ Close"
}
```

---

## 🧩 Example Integration (Gallery)

```tsx
const [open, setOpen] = useState(false);
const [index, setIndex] = useState(0);

return (
  <>
    {/* Gallery grid */}
    {open && (
      <Lightbox
        items={items}
        startIndex={index}
        onClose={() => setOpen(false)}
      />
    )}
  </>
);
```

---

## ⚡ Performance

- Always define `sizes` for images when using `fill`.
- Use `priority` on the first image for faster load.
- Can be dynamically imported if needed.

---

## 🔒 SSR Safety

Use a universal hook for screen detection:

```ts
export function useIsMobile(breakpoint = 1024) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const handler = (e) => setIsMobile(e.matches);
    handler(mql);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [breakpoint]);
  return isMobile;
}
```

---

## 🧪 Tips

- Validate `items.length > 0` before opening.
- Handle index overflow with modulo.
- Optionally disable scroll when open.

---

## 🛠️ Troubleshooting

- Add `sizes` to images to avoid Next.js warnings.
- Ensure all styled components are defined in one file.

---

## ✅ Checklist

- [ ] i18n keys added.
- [ ] `sizes` attribute on images.
- [ ] `useIsMobile` available globally.
- [ ] No duplicated styled components.

---

## 🧭 Changelog

**v2.0.0**

- Split Desktop/Mobile components.
- Added swipe gesture.
- Improved accessibility and localization.
- Added `sizes` for better image optimization.

---

## 📌 Roadmap

- Add focus trap.
- Add keyboard navigation (←/→).
- Lazy-load Mobile version.

---
