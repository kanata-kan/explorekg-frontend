# 🧠 Type System Architecture

This directory contains the **centralized type system** for the entire application. All TypeScript types, interfaces, and enums are organized here in a modular, scalable architecture.

---

## 📁 File Structure

```
types/
├── index.ts              # Central export point (use this for imports)
├── entities.types.ts     # Domain entities (Activity, Car, TravelPack, etc.)
├── api.types.ts          # API requests/responses and data fetching
├── ui.types.ts           # UI components and visual element types
├── system.types.ts       # System configuration, environment, and context
├── helpers.types.ts      # Reusable utility types (DeepPartial, ApiResponse, etc.)
├── enums.ts              # Enums and type-safe constants
├── errors.types.ts       # Error handling and validation types
├── motion.types.ts       # Animation and motion-related types
└── README.md             # This file
```

---

## 🎯 Import Pattern

**Always import from the central index:**

```typescript
import { Activity, Car, ApiResponse, DisplayItem } from "@/types";
```

**Never import from individual files:**

```typescript
// ❌ DON'T DO THIS
import { Activity } from "@/types/entities.types";

// ✅ DO THIS INSTEAD
import { Activity } from "@/types";
```

---

## 📚 Type Categories

### 🏢 Entities (`entities.types.ts`)

Domain objects representing business entities:

```typescript
Activity;
Car;
TravelPack;
GalleryItem;
Service;
HomePage;
ContactPage;
OurStoryPage;
```

**Usage Example:**

```typescript
import { Activity, Car } from "@/types";

const activity: Activity = {
  id: "1",
  name: "Hiking Adventure",
  description: "Explore the mountains",
  // ...
};
```

---

### 🌐 API Types (`api.types.ts`)

Types for API communication:

```typescript
ApiResponse<T>;
PaginatedResponse<T>;
ApiError;
FetchOptions;
ActivitiesAPI;
CarsAPI;
TravelPacksAPI;
```

**Usage Example:**

```typescript
import { ActivitiesAPI, ApiResponse } from "@/types";

async function fetchActivities(): Promise<ActivitiesAPI.GetAllResponse> {
  // ...
}
```

---

### 🎨 UI Types (`ui.types.ts`)

Component props and UI-related types:

```typescript
DisplayItem;
HeroProps;
ButtonProps;
CardProps;
LightboxProps;
TypographyProps;
```

**Usage Example:**

```typescript
import { ButtonProps, DisplayItem } from "@/types";

const MyButton: React.FC<ButtonProps> = ({ variant, children }) => {
  // ...
};
```

---

### ⚙️ System Types (`system.types.ts`)

System configuration and context:

```typescript
PageParams;
ThemeConfig;
Metadata;
RouteConfig;
TranslationNamespace;
FeatureFlags;
```

**Usage Example:**

```typescript
import { PageParams, Metadata } from "@/types";

export default async function Page({ params }: PageParams<{ id: string }>) {
  const { locale, id } = await params;
  // ...
}
```

---

### 🔧 Helper Types (`helpers.types.ts`)

Powerful utility types:

```typescript
DeepPartial<T>; // Make all properties deeply partial
ReadonlyDeep<T>; // Make all properties deeply readonly
NonNullableFields<T>; // Remove null/undefined from all fields
WithId<T>; // Add id property
ApiResponse<T>; // Wrap data in API response
PaginatedResponse<T>; // Paginated data structure
```

**Usage Example:**

```typescript
import { DeepPartial, WithId, ApiResponse } from "@/types";

type PartialActivity = DeepPartial<Activity>;
type ActivityWithId = WithId<{ name: string }>;
type Response = ApiResponse<Activity[]>;
```

---

### 📋 Enums (`enums.ts`)

Type-safe constants:

```typescript
ContentBlockType;
FormFieldType;
TypographyVariant;
SectionVariant;
BaseVariant;
Locale;
StatusType;
LoadingState;
```

**Usage Example:**

```typescript
import { TypographyVariant, Locale } from "@/types";

const variant: TypographyVariant = TypographyVariant.H1;
const locale: Locale = Locale.EN;
```

---

### ❌ Error Types (`errors.types.ts`)

Error handling types:

```typescript
BaseError;
AppError;
FormError;
ValidationErrors;
NetworkError;
Result<T, E>;
AsyncResult<T, E>;
```

**Usage Example:**

```typescript
import { Result, FormError } from "@/types";

function validateForm(): Result<FormData, FormError[]> {
  // ...
}
```

---

### 🎬 Motion Types (`motion.types.ts`)

Animation and motion types:

```typescript
MotionVariantConfig;
StaggerConfig;
AnimationPreset;
UseMotionReturn;
Variants;
Transition;
```

**Usage Example:**

```typescript
import { MotionVariantConfig, AnimationPreset } from "@/types";

const config: MotionVariantConfig = {
  direction: "up",
  distance: 30,
  duration: 0.5,
};
```

---

## ✍️ Naming Conventions

### Types and Interfaces

- Use **PascalCase** for all type names
- Use descriptive, clear names (e.g., `ActivityDetailsProps`, not `Props`)
- Suffix with the category when needed (e.g., `ApiResponse`, `FormError`)

### Enums

- Use **PascalCase** for enum names
- Use **UPPERCASE** for enum values
- Export both the object and the type

```typescript
export const Locale = {
  EN: "en",
  FR: "fr",
} as const;

export type Locale = (typeof Locale)[keyof typeof Locale];
```

---

## 🚫 What NOT to Do

### ❌ Don't define types locally in components

**Bad:**

```typescript
// MyComponent.tsx
type Props = { name: string }; // ❌
```

**Good:**

```typescript
// types/ui.types.ts
export type MyComponentProps = { name: string }; // ✅

// MyComponent.tsx
import { MyComponentProps } from "@/types";
```

### ❌ Don't use `any`

**Bad:**

```typescript
function process(data: any) {} // ❌
```

**Good:**

```typescript
function process<T>(data: T) {} // ✅
// or
function process(data: unknown) {} // ✅
```

### ❌ Don't duplicate type definitions

If a type exists in this system, use it. Don't redefine it.

---

## ➕ Adding New Types

### Step 1: Determine the category

- Is it a domain entity? → `entities.types.ts`
- Is it API-related? → `api.types.ts`
- Is it a UI component prop? → `ui.types.ts`
- Is it a system config? → `system.types.ts`
- Is it a reusable utility? → `helpers.types.ts`
- Is it a constant? → `enums.ts`

### Step 2: Add the type with documentation

```typescript
/**
 * Brief description of what this type represents
 */
export type MyNewType = {
  id: string;
  name: string;
};
```

### Step 3: Export from index.ts (if needed)

Most exports are automatic via `export *`, but check for conflicts.

---

## 🔄 Type Composition

Prefer **composition** over duplication:

```typescript
// ✅ Good
export type BaseEntity = {
  id: string;
  metadata: Metadata;
};

export type Activity = BaseEntity & {
  name: string;
  description: string;
};

// ❌ Bad - duplicating id and metadata
export type Activity = {
  id: string;
  metadata: Metadata;
  name: string;
  description: string;
};
```

---

## 🧪 Type Safety Best Practices

### 1. Use `unknown` instead of `any`

```typescript
function parse(data: unknown) {
  if (typeof data === "string") {
    // TypeScript knows it's a string here
  }
}
```

### 2. Use type guards

```typescript
function isActivity(obj: unknown): obj is Activity {
  return typeof obj === "object" && obj !== null && "name" in obj;
}
```

### 3. Use generics for reusability

```typescript
function wrapInResponse<T>(data: T): ApiResponse<T> {
  return { data, status: 200 };
}
```

### 4. Prefer `readonly` for constants

```typescript
export type Config = {
  readonly apiUrl: string;
  readonly timeout: number;
};
```

---

## 📖 Examples

### Example 1: Page Component

```typescript
import { PageParams, Activity } from "@/types";

type Props = PageParams<{ id: string }>;

export default async function ActivityPage({ params }: Props) {
  const { locale, id } = await params;
  // ...
}
```

### Example 2: API Function

```typescript
import { ActivitiesAPI, FetchOptions } from "@/types";

export async function getAllActivities(
  locale: string,
  options?: FetchOptions
): Promise<ActivitiesAPI.GetAllResponse> {
  // ...
}
```

### Example 3: Component Props

```typescript
import { DisplayItem, BaseVariant } from "@/types";

type Props = {
  items: DisplayItem[];
  variant?: BaseVariant;
};

export default function ItemsList({ items, variant = "default" }: Props) {
  // ...
}
```

---

## 🎓 Philosophy

> **"Types are the silent architecture of your codebase."**

Well-designed types make your code:

- ✅ Safer (catch errors at compile time)
- ✅ More maintainable (self-documenting)
- ✅ Easier to refactor (IDE support)
- ✅ Faster to develop (IntelliSense autocomplete)

---

## 📝 Summary

- **Always import from `@/types`**
- **Never use `any`**
- **Document your types**
- **Use composition over duplication**
- **Follow naming conventions**
- **Add types to the appropriate category file**

---

**Questions?** Check the main documentation or consult the team.
