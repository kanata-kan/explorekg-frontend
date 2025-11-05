# 🎨 دليل نظام الألوان - Color System Guide

**Version:** 2.0  
**Last Updated:** November 5, 2025  
**Maintainer:** Development Team

---

## 📋 جدول المحتويات

1. [نظرة عامة](#نظرة-عامة)
2. [البنية الأساسية](#البنية-الأساسية)
3. [استخدام الألوان](#استخدام-الألوان)
4. [Color Utilities](#color-utilities)
5. [أفضل الممارسات](#أفضل-الممارسات)
6. [أمثلة عملية](#أمثلة-عملية)

---

## نظرة عامة

نظام الألوان في المشروع مبني على **4 طبقات** من التجريد لضمان المرونة والصيانة السهلة:

```
┌─────────────────────────────────────┐
│  Layer 4: Component Usage           │  ← استخدام في المكونات
├─────────────────────────────────────┤
│  Layer 3: Semantic Colors           │  ← ألوان ذات معنى (primary, danger)
├─────────────────────────────────────┤
│  Layer 2: Color Scales              │  ← درجات الألوان (orange-500)
├─────────────────────────────────────┤
│  Layer 1: Raw Values                │  ← القيم الأساسية (#F97316)
└─────────────────────────────────────┘
```

### ✨ المبادئ الأساسية:

1. **Single Source of Truth** - مصدر واحد للألوان
2. **Type Safety** - كل الألوان محمية بـ TypeScript
3. **Semantic Naming** - أسماء واضحة ذات معنى
4. **Scale-Based** - نظام درجات متدرج (50-900)
5. **Theme Support** - دعم كامل للـ Light/Dark mode

---

## البنية الأساسية

### 📁 هيكل الملفات

```
styles/
├── theme.ts                    # ← النقطة المركزية
├── styled.d.ts                 # ← TypeScript definitions
├── global.ts                   # ← Global styles
└── tokens/
    ├── colorScales.ts          # ← Layer 2: Color scales (70+ colors)
    ├── semanticColors.ts       # ← Layer 3: Semantic mapping
    ├── opacity.ts              # ← Opacity tokens
    ├── gradients.ts            # ← Gradient presets
    └── shadows.ts              # ← Shadow definitions

lib/
└── colorUtils/
    ├── alpha.ts                # ← إضافة شفافية
    ├── darken.ts               # ← تغميق اللون
    ├── lighten.ts              # ← تفتيح اللون
    ├── mix.ts                  # ← دمج لونين
    ├── contrast.ts             # ← حساب التباين
    └── manipulate.ts           # ← دوال عامة
```

---

## استخدام الألوان

### 1️⃣ الطريقة الأساسية: Semantic Colors

**✅ RECOMMENDED** - استخدم الألوان الدلالية دائماً:

```tsx
import styled from "styled-components";

const Button = styled.button`
  /* ✅ استخدم semantic colors */
  background: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.text.onPrimary};

  &:hover {
    background: ${({ theme }) => theme.colors.primary.hover};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.active};
  }
`;
```

### 2️⃣ استخدام Color Scales مباشرة

للحالات الخاصة، يمكنك الوصول للـ scales:

```tsx
const CustomElement = styled.div`
  /* ⚠️ استخدم فقط عند الضرورة */
  background: ${({ theme }) => theme.scales.orange[100]};
  border: 1px solid ${({ theme }) => theme.scales.orange[300]};
`;
```

### 3️⃣ استخدام Color Utilities

```tsx
import { alpha, darken, lighten } from "@/lib/colorUtils";

const Card = styled.div`
  /* شفافية */
  background: ${({ theme }) => alpha(theme.colors.primary.main, 0.1)};

  /* تغميق */
  border-bottom: 2px solid
    ${({ theme }) => darken(theme.colors.primary.main, 0.2)};

  /* تفتيح */
  box-shadow: 0 4px 12px
    ${({ theme }) => alpha(lighten(theme.colors.primary.main, 0.3), 0.3)};
`;
```

---

## Color Utilities

### 🔧 الدوال المتاحة

#### 1. `alpha(color, opacity)`

إضافة شفافية للون:

```typescript
import { alpha } from "@/lib/colorUtils/alpha";

// مثال
alpha("#F97316", 0.5); // → rgba(249, 115, 22, 0.5)
alpha("rgb(249, 115, 22)", 0.3); // → rgba(249, 115, 22, 0.3)
```

**الاستخدام الشائع:**

- Overlays
- Hover states
- Backgrounds شبه شفافة

#### 2. `darken(color, amount)`

تغميق اللون:

```typescript
import { darken } from "@/lib/colorUtils/darken";

// amount من 0 إلى 1
darken("#F97316", 0.2); // → أغمق بـ 20%
```

**الاستخدام الشائع:**

- Hover states
- Borders
- Shadows

#### 3. `lighten(color, amount)`

تفتيح اللون:

```typescript
import { lighten } from "@/lib/colorUtils/lighten";

lighten("#F97316", 0.3); // → أفتح بـ 30%
```

**الاستخدام الشائع:**

- Light backgrounds
- Subtle highlights
- Disabled states

#### 4. `mix(color1, color2, weight)`

دمج لونين:

```typescript
import { mix } from "@/lib/colorUtils/mix";

// weight من 0 إلى 1
mix("#F97316", "#2563EB", 0.5); // → 50% من كل لون
mix(color1, color2, 0.7); // → 70% من color1
```

**الاستخدام الشائع:**

- Gradient stops
- Color transitions
- Theme blending

#### 5. `getContrast(foreground, background)`

حساب نسبة التباين (WCAG):

```typescript
import { getContrast } from "@/lib/colorUtils/contrast";

const ratio = getContrast("#FFFFFF", "#F97316");
// → 3.18 (needs improvement for AA)
```

#### 6. `isAccessible(foreground, background, level)`

فحص إمكانية الوصول:

```typescript
import { isAccessible } from "@/lib/colorUtils/contrast";

isAccessible("#FFFFFF", "#000000", "AA"); // → true
isAccessible("#FFFFFF", "#F97316", "AAA"); // → false
```

**المستويات:**

- `'AA'` - 4.5:1 للنص العادي، 3:1 للنص الكبير
- `'AAA'` - 7:1 للنص العادي، 4.5:1 للنص الكبير

---

## أفضل الممارسات

### ✅ DO - افعل

```tsx
// 1. استخدم semantic colors
background: ${({ theme }) => theme.colors.primary.main};

// 2. استخدم theme tokens
padding: ${({ theme }) => theme.spacing.md};

// 3. استخدم utilities للتعديلات
background: ${({ theme }) => alpha(theme.colors.surface.default, 0.8)};

// 4. استخدم gradients من theme
background: ${({ theme }) => theme.gradients.hero};

// 5. استخدم shadows من theme
box-shadow: ${({ theme }) => theme.shadows.card};
```

### ❌ DON'T - لا تفعل

```tsx
// ❌ لا تستخدم hex colors مباشرة
background: #F97316;

// ❌ لا تستخدم rgba() مباشرة
background: rgba(249, 115, 22, 0.5);

// ❌ لا تستخدم magic numbers
opacity: 0.753;

// ❌ لا تكرر gradient definitions
background: linear-gradient(135deg, #F97316 0%, #EA580C 100%);

// ❌ لا تكتب box-shadows من الصفر
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
```

---

## أمثلة عملية

### 📦 مثال 1: Button Component

```tsx
import styled from "styled-components";
import { alpha, darken } from "@/lib/colorUtils";

const Button = styled.button<{ $variant?: "primary" | "secondary" | "danger" }>`
  /* Base styles */
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radii.md};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semiBold};
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;

  /* Variant styles */
  ${({ theme, $variant = "primary" }) => {
    const colorMap = {
      primary: theme.colors.primary,
      secondary: theme.colors.secondary,
      danger: theme.colors.danger,
    };

    const color = colorMap[$variant];

    return `
      background: ${color.main};
      color: ${theme.colors.text.onPrimary};
      
      &:hover {
        background: ${color.hover};
        box-shadow: ${theme.shadows.buttonHover};
      }
      
      &:active {
        background: ${color.active};
        transform: translateY(1px);
      }
      
      &:disabled {
        background: ${alpha(color.main, 0.5)};
        cursor: not-allowed;
      }
    `;
  }}
`;
```

### 📦 مثال 2: Card Component

```tsx
import styled from "styled-components";
import { alpha } from "@/lib/colorUtils";

const Card = styled.div<{ $elevated?: boolean }>`
  background: ${({ theme }) => theme.colors.surface.default};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  transition: all 0.3s ease;

  /* Conditional elevation */
  ${({ theme, $elevated }) =>
    $elevated
      ? `
          box-shadow: ${theme.shadows.cardHover};
          border: 1px solid ${theme.colors.border.subtle};
        `
      : `
          box-shadow: ${theme.shadows.card};
          border: 1px solid ${theme.colors.border.default};
        `}

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-color: ${({ theme }) => theme.colors.border.hover};
  }
`;

const CardHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.divider};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.h3};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  margin: 0;
`;

const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.body};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;
```

### 📦 مثال 3: Overlay Component

```tsx
import styled from "styled-components";
import { alpha } from "@/lib/colorUtils";
import { motion } from "framer-motion";

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.overlay.heavy};
  backdrop-filter: blur(4px);
  z-index: 1000;
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: ${({ theme }) => theme.colors.surface.elevated};
  border-radius: ${({ theme }) => theme.radii.xl};
  box-shadow: ${({ theme }) => theme.shadows.modal};

  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;

  padding: ${({ theme }) => theme.spacing.xl};
  z-index: 1001;
`;
```

### 📦 مثال 4: Status Badge

```tsx
import styled from "styled-components";
import { alpha } from "@/lib/colorUtils";

type BadgeVariant = "success" | "danger" | "warning" | "info";

const Badge = styled.span<{ $variant: BadgeVariant }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};

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
// <Badge $variant="warning">Pending</Badge>
```

---

## 🎯 Quick Reference

### Semantic Colors

```typescript
// Brand Colors
theme.colors.primary.main; // #F97316 (light) | #FB923C (dark)
theme.colors.secondary.main; // #2563EB (light) | #3B82F6 (dark)
theme.colors.accent.main; // #10B981 (light) | #22C55E (dark)

// Status Colors
theme.colors.success.main; // #16A34A
theme.colors.danger.main; // #DC2626
theme.colors.warning.main; // #F59E0B
theme.colors.info.main; // #3B82F6

// Text Colors
theme.colors.text.primary; // #111827 (light) | #F9FAFB (dark)
theme.colors.text.secondary; // #374151 (light) | #E2E8F0 (dark)
theme.colors.text.tertiary; // #6B7280 (light) | #94A3B8 (dark)
theme.colors.text.muted; // alias for tertiary

// Backgrounds
theme.colors.background.default; // #FAFAFA (light) | #0F172A (dark)
theme.colors.surface.default; // #FFFFFF (light) | #1E293B (dark)
theme.colors.surface.elevated; // #FFFFFF (light) | #334155 (dark)
```

### Common Patterns

```typescript
// Hover states
background: ${({ theme }) => theme.colors.primary.main};
&:hover {
  background: ${({ theme }) => theme.colors.primary.hover};
}

// Transparent backgrounds
background: ${({ theme }) => alpha(theme.colors.primary.main, 0.1)};

// Borders
border: 1px solid ${({ theme }) => theme.colors.border.default};

// Shadows
box-shadow: ${({ theme }) => theme.shadows.card};

// Gradients
background: ${({ theme }) => theme.gradients.hero};
```

---

## 📚 المزيد من الموارد

- [COLOR_TOKENS_REFERENCE.md](./COLOR_TOKENS_REFERENCE.md) - مرجع كامل لجميع التوكنات
- [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md) - دليل الهجرة من النظام القديم
- [COLOR_SYSTEM_AUDIT_REPORT.md](./COLOR_SYSTEM_AUDIT_REPORT.md) - التقرير الشامل

---

## 🆘 الدعم

إذا واجهت أي مشاكل أو لديك أسئلة:

1. تحقق من [COLOR_TOKENS_REFERENCE.md](./COLOR_TOKENS_REFERENCE.md)
2. راجع الأمثلة في هذا الدليل
3. افحص الملفات في `styles/tokens/`
4. استخدم TypeScript autocomplete في VS Code

**Happy Coding! 🎨**
