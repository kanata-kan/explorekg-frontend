# 🧭 UI_V2_DOCS_OurStory_Contact_PageSystem.md

### **Nomadia Travels — Pages System (Our Story + Contact)**

---

## 🧩 Overview

This document describes a **modular, unified architecture** for the **Our Story** and **Contact** pages in **UI_V2**.  
It mirrors the style of the section system docs (cards/travel/activities) and focuses on:
- Component structure
- Data flow and i18n
- Styling and theming
- Next.js 15 params pattern
- Form handling and accessibility

Both pages reuse the same **foundation** (Container, Typography, Button, Section wrappers) and **i18n** through `next-intl`.

---

## 🏗️ Architectural Flow

```bash
📂 app/
└── [locale]/
    ├── our-story/
    │   └── page.tsx                     → Async page, awaits params (Next 15)
    └── contact/
        └── page.tsx                     → Async page, awaits params (Next 15)

📂 components/
└── ui_v2/
    ├── foundation/
    │   ├── Container.tsx
    │   ├── Typography.tsx
    │   ├── Button.tsx
    │   └── SectionWrapperImage.styled.ts
    └── sections/
        ├── OurStorySection/
        │   ├── OurStorySection.tsx      → Render logic (client)
        │   └── OurStorySection.styled.ts
        └── ContactSection/
            ├── ContactSection.tsx       → Render logic (client)
            └── ContactSection.styled.ts
```

---

## ⚙️ Core Concepts

### Our Story

- **Goal**: Tell the brand story, animate content elegantly, and drive users to contact.  
- **Structure**:  
  `SectionWrapperImage` (background + overlay) → `StoryContainer` → `StoryTitle` → `Paragraph / QuoteBlock` (loop) → `ClosingText` → `CTAWrapper`.

- **Motion**: `fadeInUp` variants with staggered children for progressive reveal.
- **Theming**: Inverse text colors over a dark overlay; gradients handled by the wrapper.
- **CTA**: Localized button linking to `/{locale}/contact`.

### Contact

- **Goal**: Provide company info + social links + accessible contact form.
- **Structure**:  
  `Section` → `Header (Title + Description)` → `InfoGrid` (Info + Social) → `FormWrapper` (conditional).

- **Form**: Fields normalized in page loader and rendered with accessible labels, focus rings, and keyboard-friendly inputs.
- **Button**: Prominent, brand-colored, responsive; hover/active states for clarity.

---

## 🌍 i18n Integration

- Uses `next-intl`. Pages receive `locale` from route params.  
- Our Story pulls text from `ourStory` namespace (`heading`, blocks, and a translated closing line).  
- Contact pulls text from `contact` namespace (`info`, `socials`, `form`).

**Example JSON (excerpt):**
```json
"ourStory": {
  "closing": "Every great journey begins with a single step."
},
"contact": {
  "info": { "title": "Contact Info", "mapLink": "Open in Maps" },
  "socials": { "title": "Social Links" },
  "form": { "title": "Send us a message", "submit": "Send" }
}
```

---

## 🧠 Component Behavior

### Our Story

| Element          | Responsibility                                         |
|------------------|---------------------------------------------------------|
| `SectionWrapperImage` | Background image + overlay + layout density variant |
| `StoryTitle`     | Title with `$variant`/`$color` transient props          |
| `Paragraph`      | Body text blocks                                        |
| `QuoteBlock`/`QuoteText` | Highlighted headings rendered as blockquote       |
| `ClosingText`    | Final callout                                          |
| `CTAWrapper`     | Houses a localized `Button` → `/[locale]/contact`       |

### Contact

| Element          | Responsibility                                         |
|------------------|---------------------------------------------------------|
| `Section`        | Background gradient + padding + viewport motion         |
| `Title`/`Description` | Header text with i18n                                |
| `InfoGrid`/`InfoCard` | Responsive grid + soft elevation                     |
| `SocialList`     | Wraps external links with hover underline animation     |
| `FormWrapper`    | Optional; rendered only if `data.form` exists           |
| `FormField`      | Label + input/textarea; strong focus states             |
| `SubmitButton`   | Brand-styled primary action; mobile-friendly width      |

---

## 🧩 Next.js 15 — Params Pattern

**All localized pages must await `params`**:

```ts
export default async function Page({
  params,
}: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; // ✅ correct in Next 15
  // ...
}
```

`generateMetadata` follows the same rule:

```ts
export async function generateMetadata({
  params,
}: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  // ...
}
```

> If you don’t await `params`, Next throws:  
> “Route used `params.locale`. `params` should be awaited before using its properties.”

---

## 💅 styled-components — Transient Props

To avoid “unknown prop” warnings (e.g., `variant`, `color`), use **transient props**:

**Usage**
```tsx
<StoryTitle as="h1" $variant="h2" $color="brand">{data.heading}</StoryTitle>
<ClosingText as="p" $variant="body">{t("closing")}</ClosingText>
<SubmitButton as="button" $variant="primary">{data.form.submitText}</SubmitButton>
```

**Typing**
```ts
export const StoryTitle = styled(Typography)<{ $variant?: string; $color?: string }>`…`
export const QuoteText  = styled(Typography)<{ $variant?: string }>`…`
export const ClosingText= styled(Typography)<{ $variant?: string }>`…`
export const SubmitButton = styled(Button)<{ $variant?: string }>`…`
```

> Transient props (`$prop`) are filtered out of the DOM automatically.

---

## 🧩 Data Flow Summary

```
┌────────────────────────────┐
│ app/[locale]/our-story     │
│ - await params(locale)     │
│ - getOurStory(locale)      │
│ - <OurStorySection />      │
└──────────┬─────────────────┘
           │ props
           ▼
┌────────────────────────────┐
│ OurStorySection (client)   │
│ - Motion + Themed wrapper  │
│ - Map blocks → Paragraph/Quote
│ - CTA → /[locale]/contact  │
└────────────────────────────┘
```

```
┌────────────────────────────┐
│ app/[locale]/contact       │
│ - await params(locale)     │
│ - getContact(locale)       │
│ - normalize form fields    │
│ - <ContactSection />       │
└──────────┬─────────────────┘
           │ props
           ▼
┌────────────────────────────┐
│ ContactSection (client)    │
│ - Info + Social grid       │
│ - Optional form            │
│ - Styled Submit button     │
└────────────────────────────┘
```

---

## 🧪 Form Handling (Contact)

- **Normalization** in page loader guarantees safe field shape:
  ```ts
  const fixed = {
    ...contact,
    form: contact.form ? {
      ...contact.form,
      fields: contact.form.fields.map(f => ({
        name: f.name,
        label: f.label,
        type: f.type,
        required: f.required ?? false,
      })),
    } : undefined,
  };
  ```

- **Accessibility**:  
  - `label htmlFor` matches input `id`  
  - clear focus styles, keyboard friendly  
  - `type=email` and `type=tel` trigger correct mobile keyboards

- **Submit**:  
  Submission handler can be integrated later (`action`/server action or API route).

---

## 🎨 Visual & Responsive Notes

- `clamp()` for spacing/typography to reduce hard breakpoints.
- Cards and wrappers elevate on hover with soft shadows.
- Motion uses `will-change` and respects `prefers-reduced-motion` (recommended).
- Buttons switch to full width on small screens.

---

## 🧱 Key Takeaways

- **Single mental model** for both pages: *await params → fetch i18n data → themed client section*.
- **No DOM prop leaks** thanks to transient props.
- **Consistent UX** via shared foundation components.
- **Future-proof** for more static pages (e.g., About, FAQ) reusing the same patterns.

---

## ✅ Quick Checklists

**Our Story**
- [ ] Await `params` in page + metadata  
- [ ] Background wrapper has overlay for contrast  
- [ ] Blocks map to `Paragraph`/`QuoteBlock`  
- [ ] CTA points to `/${locale}/contact`

**Contact**
- [ ] Await `params` in page + normalize form fields  
- [ ] Info/Social cards responsive  
- [ ] Inputs labelled + focus ring visible  
- [ ] Submit button prominent and accessible

---

## 📁 Suggested File Name
`docs/UI-V2/UI_V2_DOCS_OurStory_Contact_PageSystem.md`
