# 🎨 مرجع شامل: Color Tokens Reference

**Version:** 2.0  
**Generated:** November 5, 2025  
**Total Tokens:** 200+

---

## 📋 جدول المحتويات

1. [Color Scales (70+ colors)](#color-scales)
2. [Semantic Colors (40+ tokens)](#semantic-colors)
3. [Opacity Levels (15+ values)](#opacity-levels)
4. [Gradients (12+ presets)](#gradients)
5. [Shadows (40+ definitions)](#shadows)

---

## Color Scales

### 🎨 كامل Color Scales بالقيم الدقيقة

#### Orange Scale (Primary Brand)

```typescript
orange: {
  50:  '#FFF7ED',  // ← lightest
  100: '#FFEDD5',
  200: '#FED7AA',
  300: '#FDBA74',
  400: '#FB923C',
  500: '#F97316',  // ← main brand color
  600: '#EA580C',
  700: '#C2410C',
  800: '#9A3412',
  900: '#7C2D12',  // ← darkest
}
```

**Usage:**

- `500` - Main brand color
- `50-200` - Light backgrounds
- `600-700` - Hover/active states
- `800-900` - Dark mode variants

---

#### Blue Scale (Secondary)

```typescript
blue: {
  50:  '#EFF6FF',
  100: '#DBEAFE',
  200: '#BFDBFE',
  300: '#93C5FD',
  400: '#60A5FA',
  500: '#3B82F6',
  600: '#2563EB',  // ← secondary color
  700: '#1D4ED8',
  800: '#1E40AF',
  900: '#1E3A8A',
}
```

---

#### Emerald/Green Scale (Accent & Success)

```typescript
emerald: {
  50:  '#ECFDF5',
  100: '#D1FAE5',
  200: '#A7F3D0',
  300: '#6EE7B7',
  400: '#34D399',
  500: '#10B981',  // ← accent color
  600: '#059669',
  700: '#047857',
  800: '#065F46',
  900: '#064E3B',
}

green: {
  50:  '#F0FDF4',
  100: '#DCFCE7',
  200: '#BBF7D0',
  300: '#86EFAC',
  400: '#4ADE80',
  500: '#22C55E',
  600: '#16A34A',  // ← success color
  700: '#15803D',
  800: '#166534',
  900: '#14532D',
}
```

---

#### Red Scale (Danger)

```typescript
red: {
  50:  '#FEF2F2',
  100: '#FEE2E2',
  200: '#FECACA',
  300: '#FCA5A5',
  400: '#F87171',
  500: '#EF4444',
  600: '#DC2626',  // ← danger color
  700: '#B91C1C',
  800: '#991B1B',
  900: '#7F1D1D',
}
```

---

#### Amber Scale (Warning)

```typescript
amber: {
  50:  '#FFFBEB',
  100: '#FEF3C7',
  200: '#FDE68A',
  300: '#FCD34D',
  400: '#FBBF24',
  500: '#F59E0B',  // ← warning color
  600: '#D97706',
  700: '#B45309',
  800: '#92400E',
  900: '#78350F',
}
```

---

#### Gray Scale (Neutral)

```typescript
gray: {
  50:  '#F9FAFB',
  100: '#F3F4F6',
  200: '#E5E7EB',
  300: '#D1D5DB',
  400: '#9CA3AF',
  500: '#6B7280',  // ← muted text
  600: '#4B5563',
  700: '#374151',  // ← secondary text
  800: '#1F2937',
  900: '#111827',  // ← primary text (light mode)
}
```

---

#### Slate Scale (Dark Mode Surfaces)

```typescript
slate: {
  50:  '#F8FAFC',
  100: '#F1F5F9',
  200: '#E2E8F0',  // ← text secondary (dark)
  300: '#CBD5E1',
  400: '#94A3B8',  // ← text tertiary (dark)
  500: '#64748B',
  600: '#475569',  // ← borders (dark)
  700: '#334155',
  800: '#1E293B',  // ← surface (dark)
  900: '#0F172A',
}
```

---

#### Navy Scale (Dark Mode Backgrounds)

```typescript
navy: {
  850: '#0B1120',  // ← custom shade
  900: '#0A0F1E',
  950: '#020617',  // ← background (dark)
}
```

---

## Semantic Colors

### 🎯 Light Theme

#### Brand & Core Colors

```typescript
primary: {
  main: '#F97316',      // orange-500
  hover: '#EA580C',     // orange-600
  active: '#C2410C',    // orange-700
  light: '#FFEDD5',     // orange-100
  lighter: '#FFF7ED',   // orange-50
  dark: '#C2410C',      // orange-700
}

secondary: {
  main: '#2563EB',      // blue-600
  hover: '#1D4ED8',     // blue-700
  active: '#1E40AF',    // blue-800
  light: '#DBEAFE',     // blue-100
  lighter: '#EFF6FF',   // blue-50
}

accent: {
  main: '#10B981',      // emerald-500
  hover: '#059669',     // emerald-600
  active: '#047857',    // emerald-700
  light: '#D1FAE5',     // emerald-100
  lighter: '#ECFDF5',   // emerald-50
}
```

#### Status Colors

```typescript
success: {
  main: '#16A34A',      // green-600
  hover: '#15803D',     // green-700
  active: '#166534',    // green-800
  light: '#DCFCE7',     // green-100
  lighter: '#F0FDF4',   // green-50
}

danger: {
  main: '#DC2626',      // red-600
  hover: '#B91C1C',     // red-700
  active: '#991B1B',    // red-800
  light: '#FEE2E2',     // red-100
  lighter: '#FEF2F2',   // red-50
}

warning: {
  main: '#F59E0B',      // amber-500
  hover: '#D97706',     // amber-600
  active: '#B45309',    // amber-700
  light: '#FEF3C7',     // amber-100
  lighter: '#FFFBEB',   // amber-50
}

info: {
  main: '#3B82F6',      // blue-500
  hover: '#2563EB',     // blue-600
  active: '#1D4ED8',    // blue-700
  light: '#DBEAFE',     // blue-100
  lighter: '#EFF6FF',   // blue-50
}
```

#### Backgrounds & Surfaces

```typescript
background: {
  default: '#FAFAFA',   // Subtle gray
  paper: '#FFFFFF',     // Pure white
  elevated: '#FFFFFF',  // Pure white
  alt: '#F3F4F6',       // gray-100
  section: '#F9FAFB',   // gray-50
}

surface: {
  default: '#FFFFFF',   // Pure white
  hover: '#F9FAFB',     // gray-50
  active: '#F3F4F6',    // gray-100
  alt: '#F3F4F6',       // gray-100
}
```

#### Text Colors

```typescript
text: {
  primary: '#111827',    // gray-900 - Main text
  secondary: '#374151',  // gray-700 - Secondary text
  tertiary: '#6B7280',   // gray-500 - Muted text
  muted: '#6B7280',      // alias for tertiary
  disabled: '#9CA3AF',   // gray-400
  inverse: '#F9FAFB',    // gray-50 - Text on dark bg

  // Text on colored backgrounds
  onPrimary: '#FFFFFF',
  onAccent: '#FFFFFF',
  onDanger: '#FFFFFF',

  // Links
  link: '#2563EB',       // blue-600
  linkHover: '#1D4ED8',  // blue-700

  // Semantic text
  brand: '#F97316',      // orange-500
  accent: '#10B981',     // emerald-500
  success: '#16A34A',    // green-600
  danger: '#DC2626',     // red-600
  error: '#DC2626',      // alias for danger
}
```

#### Borders & Dividers

```typescript
border: {
  default: '#E5E7EB',    // gray-200
  strong: '#D1D5DB',     // gray-300
  subtle: '#F3F4F6',     // gray-100
  hover: '#D1D5DB',      // gray-300
  focus: '#F97316',      // orange-500
  divider: '#E5E7EB',    // alias for default
}
```

#### Overlays

```typescript
overlay: {
  light: 'rgba(0, 0, 0, 0.5)',
  medium: 'rgba(0, 0, 0, 0.75)',
  heavy: 'rgba(0, 0, 0, 0.85)',
}
```

#### Brand Aliases

```typescript
brand: {
  primary: '#F97316',    // orange-500
  secondary: '#2563EB',  // blue-600
  tertiary: '#10B981',   // emerald-500
  main: '#F97316',       // alias
  hover: '#EA580C',      // orange-600
  text: '#F97316',       // orange-500
  bg: '#FFF7ED',         // orange-50
}
```

---

### 🌙 Dark Theme

#### Brand & Core Colors (Dark Mode Adjusted)

```typescript
primary: {
  main: '#FB923C',      // orange-400 (lighter for dark)
  hover: '#F97316',     // orange-500
  active: '#EA580C',    // orange-600
  light: '#7C2D12',     // orange-900
  lighter: '#7C2D12',   // orange-900
  dark: '#FDBA74',      // orange-300
}

secondary: {
  main: '#3B82F6',      // blue-500
  hover: '#60A5FA',     // blue-400
  active: '#2563EB',    // blue-600
  light: '#1E3A8A',     // blue-900
  lighter: '#1E3A8A',   // blue-900
}

accent: {
  main: '#22C55E',      // green-500
  hover: '#4ADE80',     // green-400
  active: '#16A34A',    // green-600
  light: '#14532D',     // green-900
  lighter: '#14532D',   // green-900
}
```

#### Backgrounds & Surfaces (Dark)

```typescript
background: {
  default: '#020617',   // navy-950
  paper: '#1E293B',     // slate-800
  elevated: '#334155',  // slate-700
  alt: '#0A0F1E',       // navy-900
  section: '#0B1120',   // navy-850
}

surface: {
  default: '#1E293B',   // slate-800
  hover: '#334155',     // slate-700
  active: '#475569',    // slate-600
  alt: '#0F172A',       // slate-900
}
```

#### Text Colors (Dark)

```typescript
text: {
  primary: '#F9FAFB',    // gray-50
  secondary: '#E2E8F0',  // slate-200
  tertiary: '#94A3B8',   // slate-400
  muted: '#94A3B8',      // alias
  disabled: '#64748B',   // slate-500
  inverse: '#111827',    // gray-900

  onPrimary: '#FFFFFF',
  onAccent: '#FFFFFF',
  onDanger: '#FFFFFF',

  link: '#60A5FA',       // blue-400
  linkHover: '#93C5FD',  // blue-300

  brand: '#FB923C',      // orange-400
  accent: '#22C55E',     // green-500
  success: '#22C55E',    // green-500
  danger: '#F87171',     // red-400
  error: '#F87171',      // alias
}
```

---

## Opacity Levels

```typescript
opacity: {
  // Direct values
  transparent: 0,
  ghost: 0.05,
  whisper: 0.1,
  subtle: 0.15,
  light: 0.25,
  medium: 0.5,
  strong: 0.75,
  nearSolid: 0.9,
  solid: 1,

  // Backdrop variations
  backdrop: {
    light: 0.5,
    medium: 0.75,
    heavy: 0.85,
  },

  // Shadows (multi-level)
  shadow: {
    xs: 0.05,
    sm: 0.1,
    md: 0.15,
    lg: 0.2,
    xl: 0.25,
  },
}
```

---

## Gradients

### Brand Gradients

```typescript
gradients: {
  // Primary brand gradients
  primaryToAccent: 'linear-gradient(135deg, #F97316 0%, #10B981 100%)',
  primaryLight: 'linear-gradient(135deg, #FFEDD5 0%, #FFF7ED 100%)',
  primaryDark: 'linear-gradient(135deg, #EA580C 0%, #C2410C 100%)',
  primaryBright: 'linear-gradient(135deg, #FB923C 0%, #F97316 50%, #EA580C 100%)',

  // Accent gradients
  accentLight: 'linear-gradient(135deg, #D1FAE5 0%, #ECFDF5 100%)',
  accentBright: 'linear-gradient(135deg, #34D399 0%, #10B981 50%, #059669 100%)',
  accentGreen: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',

  // Status gradients
  success: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
  danger: 'linear-gradient(135deg, #F87171 0%, #DC2626 100%)',
  warning: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
  info: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)',

  // Utility gradients
  hero: 'linear-gradient(135deg, #F97316 0%, #EA580C 50%, #C2410C 100%)',
  surface: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(249,115,22,0.05) 100%)',
  overlayBottom: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)',
  overlayFull: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%)',
  shimmer: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
}
```

---

## Shadows

### Basic Elevations

```typescript
shadows: {
  none: 'none',
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
}
```

### Semantic Shadows

```typescript
// Component-specific shadows
card: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08)',
cardHover: '0 8px 16px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1)',
button: '0 1px 2px rgba(0, 0, 0, 0.08)',
buttonHover: '0 4px 8px rgba(0, 0, 0, 0.12)',
modal: '0 20px 40px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.2)',
dropdown: '0 8px 16px rgba(0, 0, 0, 0.15)',
navbar: '0 2px 8px rgba(0, 0, 0, 0.08)',
footer: '0 -2px 8px rgba(0, 0, 0, 0.05)',
```

### Inner Shadows

```typescript
innerXs: 'inset 0 1px 2px rgba(0, 0, 0, 0.05)',
innerSm: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
innerMd: 'inset 0 3px 6px rgba(0, 0, 0, 0.08)',
innerLg: 'inset 0 4px 8px rgba(0, 0, 0, 0.1)',
```

### Colored Shadows (Brand)

```typescript
primaryGlow: '0 4px 16px rgba(249, 115, 22, 0.3)',
primaryGlowStrong: '0 8px 24px rgba(249, 115, 22, 0.5)',
accentGlow: '0 4px 16px rgba(16, 185, 129, 0.3)',
accentGlowStrong: '0 8px 24px rgba(16, 185, 129, 0.5)',
dangerGlow: '0 4px 16px rgba(220, 38, 38, 0.3)',
dangerGlowStrong: '0 8px 24px rgba(220, 38, 38, 0.5)',
successGlow: '0 4px 16px rgba(22, 163, 74, 0.3)',
infoGlow: '0 4px 16px rgba(59, 130, 246, 0.3)',
```

### Focus States

```typescript
focus: '0 0 0 3px rgba(249, 115, 22, 0.2)',
focusAccent: '0 0 0 3px rgba(16, 185, 129, 0.2)',
focusDanger: '0 0 0 3px rgba(220, 38, 38, 0.2)',
```

---

## 📊 Usage Statistics

```
Total Color Tokens: 200+
├─ Color Scales: 70 colors (7 scales × 10 shades)
├─ Semantic Colors: 40+ tokens
├─ Opacity Levels: 15 values
├─ Gradients: 12 presets
└─ Shadows: 40+ definitions
```

---

## 🔍 Quick Search

### By Use Case

**Buttons:**

- Primary: `theme.colors.primary.main`
- Hover: `theme.colors.primary.hover`
- Shadow: `theme.shadows.button`

**Cards:**

- Background: `theme.colors.surface.default`
- Border: `theme.colors.border.default`
- Shadow: `theme.shadows.card`

**Text:**

- Main: `theme.colors.text.primary`
- Secondary: `theme.colors.text.secondary`
- Muted: `theme.colors.text.tertiary`

**Backgrounds:**

- Page: `theme.colors.background.default`
- Section: `theme.colors.background.section`
- Elevated: `theme.colors.surface.elevated`

**Status:**

- Success: `theme.colors.success.main`
- Error: `theme.colors.danger.main`
- Warning: `theme.colors.warning.main`

---

## 📝 Notes

1. **Light values** (`50-400`) for backgrounds
2. **Medium values** (`500-600`) for main colors
3. **Dark values** (`700-900`) for text and borders
4. Always use semantic colors when possible
5. Direct scale access for edge cases only

**Last Updated:** November 5, 2025  
**Maintainer:** Development Team
