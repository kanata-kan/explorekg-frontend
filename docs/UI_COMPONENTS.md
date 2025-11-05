# 📘 UI Components Library — Explore Kyrgyzstan

## 🎯 Purpose

This document explains the **UI architecture** of the project.  
It is designed for **onboarding new engineers** so they can quickly understand how the UI is structured, how to extend it, and how to build new components/pages in a consistent way.

---

## 🏗️ UI Architecture (Atomic Design)

Our UI system follows an **atomic design–inspired hierarchy**:

1. **Foundation (Base Styling)**
   - Pure layout & style utilities.
   - Examples: `Container.styled.ts`, `Grid.styled.ts`, `SectionWrapper.styled.ts`.

2. **Atoms**
   - Small, reusable building blocks.
   - Examples: `Button.tsx`, `Input.tsx`, `Label.tsx`, `Title.tsx`.

3. **Molecules**
   - Small groups of atoms combined into a meaningful UI element.
   - Examples: `ContactForm.tsx`, `Card.tsx`.

4. **Sections**
   - Page sections composed of molecules & atoms.
   - Examples: `HeroSection.tsx`, `GallerySection.tsx`, `ContactSection.tsx`.

5. **Pages**
   - Located in `/app/`.
   - Each page is responsible for:
     - Routing
     - Metadata (SEO)
     - Data fetching
     - Rendering sections

---

## 📂 Folder Structure

```bash
components/
└── ui/
    ├── foundation/    # Base styled utilities
    ├── atoms/         # Reusable small components
    ├── molecules/     # Components combining atoms
    ├── sections/      # Page-level sections
    ├── gallery/       # Domain-specific (GalleryGrid, Lightbox…)
    ├── skeleton/      # Loading placeholders
    └── status/        # Error / status components
app/
└── contact/           # Example page
    └── page.tsx
```

## 📐 UI Flow Diagram

```css
[ app/page.tsx ]
        |
        v
[ Section (HeroSection, ContactSection, GallerySection) ]
        |
        v
[ Molecules (ContactForm, Card, Grid) ]
        |
        v
[ Atoms (Input, Button, Label, Title) ]
        |
        v
[ Foundation (Container, Grid, SectionWrapper) ]

```

## 🔄 How to Add a New UI Component

Case 1: Add a New Page (/app/new-page)
Create a folder in /app/ → /app/new-page/page.tsx.
Add metadata using getMetadataStatic.
Render one or more Sections.

```tsx
// app/new-page/page.tsx
import NewSection from "@/components/ui/sections/NewSection";
import { getMetadataStatic } from "@/lib/metadata/static";

export const metadata = getMetadataStatic({
  title: "New Page | Explore Kyrgyzstan",
  description: "Description for the new page",
  path: "/new-page",
  image: "/og-newpage.png",
});

export default function NewPage() {
  return <NewSection />;
}
```

## Case 2: Add a New Section

1- Create a file in /components/ui/sections/.
2- Use foundation + atoms/molecules inside.
3- Export it and import into the desired page.

## Case 4: Add a New Atom

Place inside /components/ui/atoms/.

Keep it stateless & reusable (e.g., Input, Button).

Style with styled-components.

## 📝 Best Practices

```bash
Keep responsibilities clear:
Page = routing + data fetching.
Section = layout composition.
Molecule = functional component.
Atom = minimal building block.
Use foundation utilities (Container, Grid) for consistency.
Always type props with TypeScript.
Keep domain-specific components in their folder (e.g., gallery/).
Update documentation (UI_COMPONENTS.md) when adding major components.
```

## 🚀 Summary

```bash
The UI system is modular, layered, and scalable.
Every engineer can add new pages/sections/components by following the flow.
This ensures consistency, reusability, and clarity across the project.
```
