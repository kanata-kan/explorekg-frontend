# 🔄 دليل الهجرة: Migration Guide

**From:** Old Color System (v1)  
**To:** New Token-Based System (v2)  
**Date:** November 5, 2025

---

## 📋 جدول المحتويات

1. [نظرة عامة](#نظرة-عامة)
2. [التغييرات الأساسية](#التغييرات-الأساسية)
3. [دليل الهجرة خطوة بخطوة](#دليل-الهجرة-خطوة-بخطوة)
4. [Mapping Table](#mapping-table)
5. [أمثلة عملية](#أمثلة-عملية)
6. [الأخطاء الشائعة](#الأخطاء-الشائعة)

---

## نظرة عامة

### ما الذي تغير؟

#### ❌ النظام القديم (v1)

```tsx
// Hardcoded colors
background: #F97316;
background: rgba(249, 115, 22, 0.5);

// Direct theme access
color: ${({ theme }) => theme.colors.primary};
```

#### ✅ النظام الجديد (v2)

```tsx
// Semantic tokens
background: ${({ theme }) => theme.colors.primary.main};

// Utility functions
background: ${({ theme }) => alpha(theme.colors.primary.main, 0.5)};
```

---

## التغييرات الأساسية

### 1. Color Structure

| Old (v1)                    | New (v2)                     |
| --------------------------- | ---------------------------- |
| `theme.colors.primary`      | `theme.colors.primary.main`  |
| `theme.colors.primaryHover` | `theme.colors.primary.hover` |
| `theme.colors.text.muted`   | `theme.colors.text.tertiary` |
| `theme.colors.accent`       | `theme.colors.accent.main`   |
| Hardcoded `rgba()`          | `alpha()` function           |

### 2. New Features

✨ **Added:**

- Color Scales (`theme.scales.orange[500]`)
- Opacity Tokens (`theme.opacity.medium`)
- Gradients (`theme.gradients.hero`)
- Enhanced Shadows (`theme.shadows.cardHover`)
- Color Utilities (`alpha`, `darken`, `lighten`, `mix`)

---

## دليل الهجرة خطوة بخطوة

### Step 1: Update Imports

#### Before:

```tsx
import styled from "styled-components";
```

#### After:

```tsx
import styled from "styled-components";
import { alpha, darken, lighten } from "@/lib/colorUtils";
```

### Step 2: Replace Hardcoded Colors

#### Before:

```tsx
const Button = styled.button`
  background: #f97316;
  color: #ffffff;
  border: 1px solid #ea580c;
`;
```

#### After:

```tsx
const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.text.onPrimary};
  border: 1px solid ${({ theme }) => theme.colors.primary.hover};
`;
```

### Step 3: Replace rgba() with alpha()

#### Before:

```tsx
const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
`;
```

#### After:

```tsx
import { alpha } from "@/lib/colorUtils";

const Overlay = styled.div`
  background: ${({ theme }) => theme.colors.overlay.medium};
  backdrop-filter: blur(4px);

  /* OR with custom opacity: */
  background: ${({ theme }) => alpha(theme.colors.background.default, 0.75)};
`;
```

### Step 4: Update Nested Color Properties

#### Before:

```tsx
const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text.primary};
  border: 1px solid ${({ theme }) => theme.colors.divider};
`;
```

#### After:

```tsx
const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface.default};
  color: ${({ theme }) => theme.colors.text.primary}; // ✅ unchanged
  border: 1px solid ${({ theme }) => theme.colors.border.default};
`;
```

### Step 5: Replace Manual Darken/Lighten

#### Before:

```tsx
const Button = styled.button`
  background: #f97316;

  &:hover {
    background: #ea580c; /* manually darkened */
  }
`;
```

#### After:

```tsx
import { darken } from "@/lib/colorUtils";

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary.main};

  &:hover {
    /* Option 1: Use semantic token */
    background: ${({ theme }) => theme.colors.primary.hover};

    /* Option 2: Use utility */
    background: ${({ theme }) => darken(theme.colors.primary.main, 0.1)};
  }
`;
```

---

## Mapping Table

### Semantic Colors Mapping

| Old Property            | New Property                |
| ----------------------- | --------------------------- |
| `colors.primary`        | `colors.primary.main`       |
| `colors.primaryHover`   | `colors.primary.hover`      |
| `colors.secondary`      | `colors.secondary.main`     |
| `colors.accent`         | `colors.accent.main`        |
| `colors.danger`         | `colors.danger.main`        |
| `colors.success`        | `colors.success.main`       |
| `colors.background`     | `colors.background.default` |
| `colors.backgroundAlt`  | `colors.background.alt`     |
| `colors.surface`        | `colors.surface.default`    |
| `colors.surfaceAlt`     | `colors.surface.alt`        |
| `colors.text.primary`   | ✅ unchanged                |
| `colors.text.secondary` | ✅ unchanged                |
| `colors.text.muted`     | `colors.text.tertiary` ⚠️   |
| `colors.divider`        | `colors.border.default`     |
| `colors.overlay`        | `colors.overlay.medium`     |

### ⚠️ Breaking Changes

```tsx
// ❌ REMOVED
theme.colors.text.muted
// ✅ USE INSTEAD
theme.colors.text.tertiary
// OR keep alias
theme.colors.text.muted  // still works via alias

// ❌ REMOVED
theme.colors.primary (direct string)
// ✅ USE INSTEAD
theme.colors.primary.main

// ❌ REMOVED
rgba(249, 115, 22, 0.5)
// ✅ USE INSTEAD
alpha(theme.colors.primary.main, 0.5)
```

---

## أمثلة عملية

### Example 1: Button Migration

#### Before (v1):

```tsx
const PrimaryButton = styled.button`
  background: #f97316;
  color: #ffffff;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.3);

  &:hover {
    background: #ea580c;
    box-shadow: 0 4px 12px rgba(249, 115, 22, 0.4);
  }

  &:active {
    background: #c2410c;
  }

  &:disabled {
    background: rgba(249, 115, 22, 0.5);
    cursor: not-allowed;
  }
`;
```

#### After (v2):

```tsx
import { alpha } from "@/lib/colorUtils";

const PrimaryButton = styled.button`
  background: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.text.onPrimary};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.button};

  &:hover {
    background: ${({ theme }) => theme.colors.primary.hover};
    box-shadow: ${({ theme }) => theme.shadows.buttonHover};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.active};
  }

  &:disabled {
    background: ${({ theme }) => alpha(theme.colors.primary.main, 0.5)};
    cursor: not-allowed;
  }
`;
```

**Changes:**

- ✅ Hardcoded colors → Semantic tokens
- ✅ `rgba()` → `alpha()` utility
- ✅ Magic numbers → Theme tokens
- ✅ Manual shadows → Theme shadows

---

### Example 2: Card Migration

#### Before (v1):

```tsx
const Card = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    border-color: #d1d5db;
  }
`;

const CardTitle = styled.h3`
  color: #111827;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 12px 0;
`;

const CardDescription = styled.p`
  color: #6b7280;
  font-size: 1rem;
  line-height: 1.6;
`;
```

#### After (v2):

```tsx
const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface.default};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: all 0.2s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    border-color: ${({ theme }) => theme.colors.border.hover};
  }
`;

const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.h3};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
`;

const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-size: ${({ theme }) => theme.typography.fontSizes.body};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;
```

---

### Example 3: Overlay/Modal Migration

#### Before (v1):

```tsx
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
`;

const Modal = styled.div`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  padding: 32px;
`;
```

#### After (v2):

```tsx
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.overlay.medium};
  backdrop-filter: blur(4px);
`;

const Modal = styled.div`
  background: ${({ theme }) => theme.colors.surface.elevated};
  border-radius: ${({ theme }) => theme.radii.xl};
  box-shadow: ${({ theme }) => theme.shadows.modal};
  padding: ${({ theme }) => theme.spacing.xl};
`;
```

---

### Example 4: Status Badge Migration

#### Before (v1):

```tsx
const SuccessBadge = styled.span`
  background: rgba(22, 163, 74, 0.1);
  color: #16a34a;
  border: 1px solid rgba(22, 163, 74, 0.2);
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 0.875rem;
`;

const DangerBadge = styled.span`
  background: rgba(220, 38, 38, 0.1);
  color: #dc2626;
  border: 1px solid rgba(220, 38, 38, 0.2);
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 0.875rem;
`;
```

#### After (v2):

```tsx
import { alpha } from "@/lib/colorUtils";

type BadgeVariant = "success" | "danger" | "warning" | "info";

const Badge = styled.span<{ $variant: BadgeVariant }>`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 0.875rem;
  font-weight: ${({ theme }) => theme.typography.fontWeights.semiBold};

  ${({ theme, $variant }) => {
    const colorMap = {
      success: theme.colors.success,
      danger: theme.colors.danger,
      warning: theme.colors.warning,
      info: theme.colors.info,
    };

    const color = colorMap[$variant];

    return `
      background: ${alpha(color.main, 0.1)};
      color: ${color.main};
      border: 1px solid ${alpha(color.main, 0.2)};
    `;
  }}
`;

// Usage:
// <Badge $variant="success">Active</Badge>
// <Badge $variant="danger">Error</Badge>
```

**Benefits:**

- ✅ Single component for all variants
- ✅ Type-safe variant selection
- ✅ Consistent styling
- ✅ Easy to maintain

---

## الأخطاء الشائعة

### ❌ Error 1: Accessing Old Properties

```tsx
// ❌ WRONG
background: ${({ theme }) => theme.colors.primary};

// ✅ CORRECT
background: ${({ theme }) => theme.colors.primary.main};
```

### ❌ Error 2: Using Hardcoded rgba()

```tsx
// ❌ WRONG
background: rgba(249, 115, 22, 0.5);

// ✅ CORRECT
import { alpha } from '@/lib/colorUtils';
background: ${({ theme }) => alpha(theme.colors.primary.main, 0.5)};
```

### ❌ Error 3: text.muted Instead of text.tertiary

```tsx
// ⚠️ DEPRECATED (but still works via alias)
color: ${({ theme }) => theme.colors.text.muted};

// ✅ PREFERRED
color: ${({ theme }) => theme.colors.text.tertiary};
```

### ❌ Error 4: Hardcoded Box Shadows

```tsx
// ❌ WRONG
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

// ✅ CORRECT
box-shadow: ${({ theme }) => theme.shadows.md};
```

### ❌ Error 5: Manual Color Calculations

```tsx
// ❌ WRONG - manually calculated darker color
background: #EA580C;  /* darker than #F97316 */

// ✅ CORRECT
import { darken } from '@/lib/colorUtils';
background: ${({ theme }) => darken(theme.colors.primary.main, 0.1)};
```

---

## 🔍 Search & Replace Patterns

### Using VS Code Find & Replace

#### Pattern 1: rgba() → alpha()

**Find (Regex):**

```regex
rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)
```

**Manual Review:** Check each case - some need `theme.colors.overlay.medium`, others need `alpha(color, opacity)`

#### Pattern 2: Hex Colors

**Find (Regex):**

```regex
#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})
```

**Manual Review:** Map to appropriate semantic color

#### Pattern 3: color="muted" → color="tertiary"

**Find:**

```
color="muted"
```

**Replace:**

```
color="tertiary"
```

---

## ✅ Checklist

Use this checklist when migrating a component:

- [ ] Remove all hardcoded hex colors
- [ ] Replace `rgba()` with `alpha()` utility
- [ ] Update property names (`.primary` → `.primary.main`)
- [ ] Replace `text.muted` with `text.tertiary`
- [ ] Use theme shadows instead of hardcoded
- [ ] Use theme spacing/radii tokens
- [ ] Add color utility imports if needed
- [ ] Test in both light and dark mode
- [ ] Verify accessibility (contrast ratios)
- [ ] Remove unused color variables

---

## 🆘 Need Help?

1. Check [COLOR_SYSTEM_GUIDE.md](./COLOR_SYSTEM_GUIDE.md)
2. Review [COLOR_TOKENS_REFERENCE.md](./COLOR_TOKENS_REFERENCE.md)
3. Look at migrated examples in `components/ui_v2/`
4. Use TypeScript autocomplete - it knows all tokens!

**Migration completed! 🎉**
