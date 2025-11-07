# ✨ UI_V2_TYPOGRAPHY_Responsive.md

## 🧠 Overview

The **Responsive Typography System** in `Kanata UI v2` ensures scalable, elegant, and accessible text rendering across all screen sizes.  
It’s powered by **styled-components**, **theme tokens**, and the modern `clamp()` CSS function.

This system replaces static font sizes with fluid values that adapt seamlessly to various viewport widths — creating perfect balance between **readability**, **aesthetic precision**, and **design scalability**.

---

## 🎯 Objectives

- Provide **responsive text scaling** via `clamp()`.
- Maintain **consistent visual hierarchy** across all sections.
- Ensure **type safety** and clean developer experience (no TS red errors).
- Integrate directly with **theme tokens** for color, font, and weight.

---

## 🧩 Architecture

```bash
components/ui_v2/foundation/
├── Typography.tsx         # Responsive + theme-aware component
├── index.ts               # Exports Typography
styles/
├── tokens/typography.ts   # Font sizes, families, line heights
├── theme.ts               # Connects tokens to global theme
└── styled.d.ts            # Theme typings (TS-safe)
```

---

## 🧱 Core Features

| Feature | Description |
|----------|--------------|
| **Responsive scaling** | Uses `clamp()` to define dynamic font sizes between min–max limits. |
| **Theme-aware colors** | Typography inherits from `theme.colors.text` palette automatically. |
| **Type-safe variants** | Strongly typed variants (`h1`, `h2`, `h3`, `body`, `caption`) prevent misuse. |
| **No overload errors** | Clean TypeScript setup with `as={Component as any}` prevents TS conflicts. |
| **Fluid design** | Automatically adapts typography proportionally on all screen sizes. |

---

## 💡 Example Code

```tsx
<Typography variant="h2" align="center" color="secondary">
  Explore Kyrgyz Culture
</Typography>

<Typography variant="body" align="left" color="muted">
  Experience authentic nomadic traditions and breathtaking landscapes.
</Typography>
```

---

## ⚙️ Theme Integration

```ts
// styles/tokens/typography.ts
export const typography = {
  fontFamily: {
    base: "'Inter', sans-serif",
    heading: "'Plus Jakarta Sans', sans-serif",
  },
  fontSizes: {
    h1: "2.5rem",
    h2: "2rem",
    h3: "1.5rem",
    body: "1rem",
    caption: "0.875rem",
  },
  fontWeights: {
    bold: 700,
    semiBold: 600,
    medium: 500,
    regular: 400,
  },
  lineHeights: {
    tight: 1.2,
    normal: 1.4,
    relaxed: 1.6,
  },
};
```

---

## 🧠 Responsive Logic (clamp)

Each variant uses `clamp(min, preferred, max)`:

| Variant | Formula | Example |
|----------|----------|----------|
| **h1** | `clamp(2rem, 4vw + 1rem, 3.5rem)` | Title in hero section |
| **h2** | `clamp(1.75rem, 3vw + 0.8rem, 2.75rem)` | Section heading |
| **h3** | `clamp(1.25rem, 2.2vw + 0.5rem, 2rem)` | Card subtitle |
| **body** | `clamp(0.95rem, 1vw + 0.6rem, 1.125rem)` | Paragraph text |
| **caption** | `clamp(0.8rem, 0.6vw + 0.5rem, 0.9rem)` | Small text |

---

## 🧱 Component Structure

```tsx
<StyledText
  as={Component as any}
  $variant={variant}
  $align={align}
  $color={color}
  className={className}
  style={style}
>
  {children}
</StyledText>
```

- **`as={Component as any}`** → avoids TS overload errors.  
- **`$variant`** → applies correct font-family, size, and line height.  
- **`$align`** → aligns text (`left`, `center`, `right`).  
- **`$color`** → uses color from `theme.colors.text` palette.  

---

## 🧱 Example Usage in Home Page

```tsx
<Typography variant="h1" align="center" color="primary">
  Welcome to Nomadia Travels
</Typography>

<Typography variant="body" align="center" color="secondary">
  Discover curated adventures crafted for the modern explorer.
</Typography>
```

---

## ✅ Benefits Summary

- **Responsive-first** typography system with no manual breakpoints.  
- **Clean TypeScript integration** (no errors or red highlights).  
- **Unified design language** across all modules (`Cars`, `Travel Packs`, `Activities`).  
- **Future-proof** — easily extendable with `h4`, `quote`, etc.  
- **Fully token-driven** for dark/light theme consistency.

---

## 🧭 Conclusion

The **Responsive Typography System** ensures that Nomadia Travels’ UI remains elegant, accessible, and adaptive across all screen sizes.  
By using **design tokens**, **clamp-based scaling**, and **theme integration**, this architecture creates a long-term, maintainable, and professional typographic foundation for Kanata UI v2.
