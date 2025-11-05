Here you go, coach-friendly and **English-only**. Paste as `docs/STATUS_UI_CHEATSHEET.md`.

---

# Status UI — Cheatsheet (Global)

## 1) Visual (quick)

```css
app/
  loading.tsx      → <Spinner/>         (server)
  error.tsx        → <ErrorState/>      (client)
  not-found.tsx    → <NotFoundState/>   (server)
  maintenance.tsx  → <MaintenanceState/> (client)

components/ui/status/  (all are "use client")
  status.styles.ts   → theme tokens → UI
  StatusLayout.tsx   → title / description / actions
  Spinner.tsx        → aria-busy loader
  ErrorState.tsx     → message + Try again (reset)
  NotFoundState.tsx  → Go Home link
  MaintenanceState.tsx→ maintenance message
  index.ts           → barrel exports
```

## 2) What/Why (one-liners)

- **loading.tsx**: Suspense fallback; no fetching.
- **error.tsx**: Global Error Boundary; calls `reset()`.
- **not-found.tsx**: Global 404 (triggered via `notFound()`).
- **maintenance.tsx**: Global maintenance mode message.
- **status.styles.ts**: styled-components bound to theme tokens.
- **StatusLayout**: unified shell (title/desc/actions).

## 3) Client vs Server (golden rule)

- Everything under `components/ui/status/*` = **Client** (`"use client"`).
- App pages: `loading` & `not-found` = **Server**, `error` = **Client**.

## 4) Theming (required tokens)

- `colors.primary`, `colors.surface`, `colors.divider`
- `colors.text.primary`, `colors.text.secondary`
- `spacing.sm`, `spacing.lg`, `radii.lg`

**Mapping (short):**
Spinner.arc→primary · Spinner.ring→divider · Title→text.primary · Desc→text.secondary · Button(bg/border/radius)→surface/divider/radii.lg · Layout(gap/pad)→sm/lg

## 5) Overrides (scalable)

- **Route Group**: `(catalog)/error.tsx` or `(catalog)/loading.tsx` override global for that domain.
- **Per-page**: when the page shape is known, add local `loading.tsx` with a matching skeleton.

## 6) Usage (mini)

```ts
// app/loading.tsx
import { Spinner } from "@/components/ui/status";
export default function Loading(){ return <Spinner/> }

// app/error.tsx
"use client";
import { ErrorState } from "@/components/ui/status";
export default function GlobalError({ error, reset }:{error:Error;reset:()=>void}){
  return <ErrorState error={error} onRetry={reset}/>
}

// app/not-found.tsx
import { NotFoundState } from "@/components/ui/status";
export default function NotFound(){ return <NotFoundState/> }

// app/maintenance.tsx
"use client";
import { MaintenanceState } from "@/components/ui/status";
export default function Maintenance(){ return <MaintenanceState/> }
```

## 7) Testing (3 quick checks)

1. **Loading**: add `await new Promise(r=>setTimeout(r,1500))` in a page → spinner shows then hides.
2. **Error**: `if (sp.fail==='1') throw new Error()` and visit `?fail=1` → Error page + **Try again**.
3. **404**: open `/xyz` or call `notFound()` in a loader → Not-Found page.
4. **Maintenance**: toggle maintenance mode → shows maintenance message.

## 8) Pitfalls (avoid)

- Missing `"use client"` in any `status/*` file → `createContext` error.
- Fetching inside `app/loading.tsx`.
- Hard-coded colors instead of tokens.
- Using `legacyBehavior` with `next/link` (style `Link` directly).

## 9) Notes (performance & a11y)

- Keep **global** loading minimal (spinner). Use **local** skeletons for heavy pages.
- Add `priority` to the true LCP image only (logo/hero).
- Spinner exposes `aria-busy`; buttons/links keep keyboard focus styles.

---

If you want a **tiny ASCII diagram** at the top of the file, add:

```text
app/loading  → <Spinner>
app/error    → <ErrorState reset()>
app/not-found→ <NotFoundState>
app/maintenance→ <MaintenanceState>
        ▲               ▲               ▲               ▲
        └── components/ui/status (client, theme-aware)
```
