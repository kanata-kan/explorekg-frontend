# 🧱 Kanata UI v2 — Layout & Spacing System

This document defines the **Layout Architecture** used in **Kanata UI v2**,  
covering Container, Grid, and SectionWrapper — the core structure of all pages.

---

## 🎯 Purpose

The Layout System provides a **consistent spatial rhythm** (both vertical & horizontal)  
across all pages and components.

It ensures:
- Predictable spacing between sections.  
- Flexible and responsive grids.  
- Consistent container widths and paddings.  
- Theme-aware layouts that adapt to light/dark mode.

---

## 🧩 Core Philosophy

> “Typography gives voice.  
> Layout gives breathing.” — Kanata Design Principle

The Layout System controls **space**, not **content**.  
Every pixel of margin or padding is derived from design tokens —  
ensuring scalability and aesthetic harmony across breakpoints.

---

## 🧱 Tokens Involved

| Token Group | Used For | Example |
|--------------|-----------|----------|
| `layout.container` | Defines global container widths & padding | `maxWidth.xl = 1200px` |
| `layout.section.spacing` | Vertical rhythm between sections | `default.md = 48px` |
| `spacing` | Internal gaps between elements | `lg = 24px` |
| `breakpoints` | Responsive control points | `md = 768px`, `xl = 1280px` |
| `radii` | Corner smoothness for cards & wrappers | `lg = 12px` |

---

## 🧭 Components Overview

### 1️⃣ Container

**Path:** `components/ui_v2/foundation/Container.tsx`

Responsible for defining the **maximum readable width**  
and applying horizontal padding based on device size.

```tsx
<Container>
  <p>Content centered within the readable area.</p>
</Container>
```

**Features**
- Auto-adjusts padding via tokens.  
- Fluid mode available via `fluid` prop.  
- Centers content horizontally.

---

### 2️⃣ SectionWrapper

**Path:** `components/ui_v2/foundation/SectionWrapper.tsx`

Controls **vertical spacing (padding-block)** between sections  
using `variant` presets: `tight`, `default`, or `loose`.

```tsx
<SectionWrapper variant="default">
  <Container>
    <h2>Default Section</h2>
    <p>This section has balanced vertical rhythm.</p>
  </Container>
</SectionWrapper>
```

**Variants**

| Variant | Use Case | Vertical Spacing |
|----------|-----------|------------------|
| `tight` | small sub-sections (e.g., feature list) | 24–32px |
| `default` | standard sections | 48–64px |
| `loose` | large blocks like Hero or CTA | 72–96px |

---

### 3️⃣ Grid

**Path:** `components/ui_v2/foundation/Grid.tsx`

Handles **horizontal distribution** of elements  
using responsive, token-based spacing and columns.

```tsx
<Grid columns={3} gap="lg">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>
```

**Props**

| Prop | Type | Description |
|------|------|-------------|
| `columns` | `number` | Fixed column count (optional). |
| `gap` | `keyof spacing` | Gap between grid items. |
| `align` | `"start" \| "center" \| "end"` | Vertical alignment. |
| `justify` | `"start" \| "center" \| "end" \| "between"` | Horizontal alignment. |
| `responsive` | `boolean` | Enables auto-fit layout. |

**Logic**
```css
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: theme.spacing.md;
```

Responsive behavior:
- Desktop → 3–4 columns.  
- Tablet → 2 columns.  
- Mobile → 1 column.

---

## 🧩 Architectural Relationship

```
Layout (page.tsx)
│
├── SectionWrapper (variant: tight | default | loose)
│     │
│     └── Container (max-width + padding)
│           │
│           └── Grid (columns + gap)
│                 ├── Card
│                 │     ├── Typography
│                 │     └── Button
│                 ├── Card
│                 └── Card
```

**Vertical Rhythm →** controlled by `SectionWrapper`  
**Horizontal Rhythm →** controlled by `Grid`  
**Spatial Boundaries →** controlled by `Container`

Together they form the **Kanata Layout Triad**.

---

## 🧠 Visual Rhythm Logic

Each section breathes with its own rhythm:

| Layout Layer | Direction | Token | Description |
|---------------|------------|---------|-------------|
| `SectionWrapper` | Vertical | `layout.section.spacing` | Controls top & bottom padding. |
| `Grid` | Horizontal | `spacing` | Defines gaps between cards/items. |
| `Container` | Both | `layout.container.padding` | Maintains edge consistency. |

---

## 💡 Example Integration

```tsx
<SectionWrapper variant="default">
  <Container>
    <h2>Our Top Destinations</h2>
    <Grid columns={3} gap="lg">
      <Card>
        <h3>Adventure Tours</h3>
        <p>Join our guided trips through the mountains.</p>
        <Button variant="primary">Explore</Button>
      </Card>
      <Card>
        <h3>Nomadic Life</h3>
        <p>Stay with locals and learn their culture.</p>
        <Button variant="secondary">Learn More</Button>
      </Card>
      <Card>
        <h3>Yurt Experience</h3>
        <p>Live the authentic Kyrgyz lifestyle.</p>
        <Button variant="ghost">Discover</Button>
      </Card>
    </Grid>
  </Container>
</SectionWrapper>
```

---

## 🧱 Dark / Light Adaptation

Because every element inherits from the theme object,  
the layout automatically adapts to color mode (light/dark)  
without duplicating styles.

| Mode | Example |
|------|----------|
| **Light** | White surface, soft shadows, black text. |
| **Dark** | Navy surface, soft contrast, white text. |

---

## 🧩 Consistency Principles

1. **Token-Driven:** All spacing and widths derive from `theme.layout` or `theme.spacing`.  
2. **Responsive by Design:** No fixed pixel layouts — only scalable values.  
3. **Composable:** Container + Grid + SectionWrapper can nest anywhere.  
4. **Visual Rhythm:** Tight, Default, Loose = breathing system.  
5. **Separation of Concerns:**  
   - Container = boundaries  
   - SectionWrapper = rhythm  
   - Grid = alignment  

---

## ✅ Summary

> The Layout System is the *spatial engine* of Kanata UI.  
> It unifies structure, rhythm, and adaptability —  
> providing a professional-grade foundation for any page or component.

**Core Trio:**  
🧱 `Container` → sets the frame  
🧩 `Grid` → distributes the content  
📐 `SectionWrapper` → maintains rhythm  

Together, they define the **breathing architecture** of Kanata UI v2.

---

**Author:** Kanata Architect  
**Phase:** `2.2 → Layout & Spacing System`  
**Status:** ✅ Completed
