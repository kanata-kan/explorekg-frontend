🟦 Detailed Schema — Theme Flow in Project

This document explains how theme tokens (colors, spacing, radii, breakpoints, layout) flow through the system into ThemeProviderWrapper, and how both server and client components consume them.

## 1. Visual Flow

```css
[ tokens/ ]                                      [ theme.ts ]            [ layout.tsx ]
 colors.ts   ──────┐
 spacing.ts  ──────┼──► spacing: xs, sm, md…    lightTheme ──────────┐
 radii.ts    ──────┼──► radii: sm, md, lg       darkTheme            │
 breakpoints.ts ───┼──► breakpoints: sm, md…                         ▼
 layout.ts   ──────┘      layout: container + section       ThemeProviderWrapper
                                                                     ▼
                                                          [ All Components in App ]
                                                                     │
                                         ┌───────────────────────────┼─────────────────────────┐
                                         ▼                           ▼                         ▼
                               Server Components             Client Components           Shared UI
                          (CSS Variables in GlobalStyle)      (props.theme)              (both work)
```

## 2. Tokens Overview

```ts
//colors.ts
(primary, secondary, accent, background, surface, danger);
(text.primary, text.secondary, text.muted, text.inverse);
```

divider

````ts
//spacing.ts
xs=4px, sm=8px, md=16px, lg=24px, xl=48px


```ts```
//radii.ts
sm=4px, md=8px, lg=12px
````

```ts
//breakpoints.ts
sm=640px, md=768px, lg=1024px, xl=1280px, 2xl=1440px
``
layout.ts
container.padding.mobile|md|lg
container.maxWidth.md|lg|xl|2xl
section.spacing.tight|default|loose
```

## 3. Usage Patterns

3.1 Client Component (styled-components)

```tsx
//Use props.theme from ThemeProvider:
const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.container.maxWidth.xl};
  padding-inline: ${({ theme }) => theme.layout.container.padding.md};
  margin-inline: auto;
`;
```

3.2 Server Component (CSS Variables)

```tsx
Use CSS variables generated in GlobalStyle:
<h2 style={{ color: "var(--color-text-primary)" }}>
  Server-Safe Title
</h2>
```

3.3 Variants / Patterns

```css
SectionWrapper → variant: tight | default | loose
Button → variant: primary | secondary | danger
FullBleed → edge-to-edge with optional inner Container
```

## 4. Key Principles

```bash
Centralization → All tokens are defined once in /styles/tokens/.
Consistency → Components consume tokens only, never hardcoded values.
Scalability → Adding new tokens (e.g., typography, shadows) does not break existing components.
Dual Flow →
Server components consume CSS variables (GlobalStyle).
Client components consume props.theme.
```

✅ With this schema, any engineer can build new UI components following project-wide design rules, without digging into internal theme files.

---

# Updated to include new tokens and their usage in the project
