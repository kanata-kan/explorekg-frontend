# 🎨 Color System v2.0

Modern, type-safe, scalable color system for the Nomadia Travels project.

## 📊 Quick Stats

```
✅ 200+ Color Tokens
✅ 70 Color Scale Values
✅ 40+ Semantic Tokens
✅ 15 Opacity Levels
✅ 12+ Gradients
✅ 40+ Shadow Definitions
✅ Type-Safe & WCAG Compliant
```

## 🚀 Quick Start

### Basic Usage

```tsx
import styled from "styled-components";
import { alpha } from "@/lib/colorUtils";

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.text.onPrimary};

  &:hover {
    background: ${({ theme }) => theme.colors.primary.hover};
  }
`;
```

### With Utilities

```tsx
const Card = styled.div`
  background: ${({ theme }) => alpha(theme.colors.surface.default, 0.9)};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  box-shadow: ${({ theme }) => theme.shadows.card};
`;
```

## 📚 Documentation

- **[COLOR_SYSTEM_GUIDE.md](./COLOR_SYSTEM_GUIDE.md)** - Complete developer guide
- **[COLOR_TOKENS_REFERENCE.md](./COLOR_TOKENS_REFERENCE.md)** - Full token reference
- **[MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)** - Migration from old system
- **[COLOR_SYSTEM_AUDIT_REPORT.md](./COLOR_SYSTEM_AUDIT_REPORT.md)** - Full audit report

## 🛠️ Developer Tools

### 1. Search for Hardcoded Colors

```bash
./scripts/find-hardcoded-colors.sh components/
```

### 2. VS Code Snippets

Type these prefixes and press `Tab`:

- `themeColor` - Semantic color
- `alpha` - Alpha utility
- `buttonStyled` - Button template
- `cardStyled` - Card template

### 3. ESLint Plugin

```javascript
// Available rules (optional integration)
'color-system/no-hardcoded-colors': 'warn',
'color-system/prefer-alpha-utility': 'warn',
'color-system/prefer-theme-tokens': 'warn',
```

## 🎨 Available Tokens

### Semantic Colors

```typescript
theme.colors.primary.main; // #F97316
theme.colors.secondary.main; // #2563EB
theme.colors.accent.main; // #10B981
theme.colors.success.main; // #16A34A
theme.colors.danger.main; // #DC2626
theme.colors.warning.main; // #F59E0B
theme.colors.info.main; // #3B82F6
```

### Text Colors

```typescript
theme.colors.text.primary; // Main text
theme.colors.text.secondary; // Secondary text
theme.colors.text.tertiary; // Muted text
theme.colors.text.inverse; // Text on dark bg
```

### Backgrounds

```typescript
theme.colors.background.default;
theme.colors.surface.default;
theme.colors.surface.elevated;
```

### Utilities

```typescript
alpha(color, opacity); // Add transparency
darken(color, amount); // Darken color
lighten(color, amount); // Lighten color
mix(color1, color2, weight); // Mix colors
getContrast(fg, bg); // Get contrast ratio
isAccessible(fg, bg, level); // Check WCAG
```

## 📁 File Structure

```
styles/
├── theme.ts                    # Main theme export
├── styled.d.ts                 # TypeScript definitions
└── tokens/
    ├── colorScales.ts          # 70+ colors (9 scales)
    ├── semanticColors.ts       # Semantic mappings
    ├── opacity.ts              # Opacity tokens
    ├── gradients.ts            # Gradient presets
    └── shadows.ts              # Shadow definitions

lib/
└── colorUtils/
    ├── alpha.ts                # Transparency
    ├── darken.ts               # Darken
    ├── lighten.ts              # Lighten
    ├── mix.ts                  # Mix colors
    ├── contrast.ts             # WCAG contrast
    └── manipulate.ts           # Helpers
```

## ✅ Best Practices

### DO ✅

```tsx
// Use semantic colors
background: ${({ theme }) => theme.colors.primary.main};

// Use utilities for transparency
background: ${({ theme }) => alpha(theme.colors.primary.main, 0.5)};

// Use theme shadows
box-shadow: ${({ theme }) => theme.shadows.card};
```

### DON'T ❌

```tsx
// Don't hardcode colors
background: #F97316;

// Don't use raw rgba
background: rgba(249, 115, 22, 0.5);

// Don't hardcode shadows
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
```

## 🎯 Features

- ✅ **Type-Safe** - Full TypeScript support with autocomplete
- ✅ **Theme Support** - Light/Dark mode ready
- ✅ **Scalable** - 9 color scales with 10 shades each
- ✅ **Semantic** - Meaningful color names (primary, danger, etc.)
- ✅ **Accessible** - WCAG AA/AAA compliant options
- ✅ **Performant** - ~6 KB gzipped
- ✅ **Well Documented** - 2,500+ lines of docs
- ✅ **Developer Friendly** - Snippets, tools, and examples

## 📊 System Architecture

```
Layer 4: Component Usage      ← Your components
    ↓
Layer 3: Semantic Colors      ← theme.colors.primary.main
    ↓
Layer 2: Color Scales         ← theme.scales.orange[500]
    ↓
Layer 1: Raw Values           ← #F97316
```

## 🔄 Migration

Migrating from the old system? Check [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)

Quick patterns:

```tsx
// Old
background: #F97316;

// New
background: ${({ theme }) => theme.colors.primary.main};
```

```tsx
// Old
background: rgba(249, 115, 22, 0.5);

// New
background: ${({ theme }) => alpha(theme.colors.primary.main, 0.5)};
```

## 🆘 Support

Need help?

1. Check [COLOR_SYSTEM_GUIDE.md](./COLOR_SYSTEM_GUIDE.md)
2. Review [COLOR_TOKENS_REFERENCE.md](./COLOR_TOKENS_REFERENCE.md)
3. Use TypeScript autocomplete - it knows everything!

## 📈 Stats

```
Total Files Modified:  30+
Lines of Code:         ~3,000
Documentation:         ~2,500 lines
Color Tokens:          200+
Developer Tools:       3
Build Impact:          ~6 KB gzipped
TypeScript Errors:     0
Build Errors:          0
```

## 🎉 Status

**Version:** 2.0  
**Status:** ✅ Production Ready  
**Last Updated:** November 5, 2025  
**Maintainer:** Development Team

---

**Happy Coding! 🎨**
