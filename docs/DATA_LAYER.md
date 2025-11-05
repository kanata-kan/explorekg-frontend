# 📘 Data Layer — Epic 5 (Nomadia Travels)

This document explains how the **Data Layer** is designed and implemented.  
It helps any engineer quickly understand the **flow, architecture, and contracts** between JSON → API → Fetch → Validation → UI.

---

## 1. Purpose

- Provide a **clear contract** between frontend and backend (even if backend = JSON for now).
- Ensure **type safety** and **data validation**.
- Keep the system **scalable** (easily switch from JSON → CMS/DB in the future).
- Guarantee **data quality** before reaching the UI.

---

## 2. Folder Structure

```yaml
data/content/ → Raw JSON
(cars, travel-packs, activities, gallery, our-story, contact, home)
app/api/* → API Routes wrapping JSON (standard responses)

lib/api.ts → fetchAPI<T>() + wrappers (getCars, getActivities, getTravelPacks…)
types/ → TypeScript interfaces

(Car, TravelPack, Activity, GalleryItem, StoryPage, ContactPage…)
lib/validators.ts → Validation logic (check required fields, metadata…)

tests/ → Validation tests (valid/invalid cases)
```

## 3. Tasks Breakdown

5.1 — JSON Schemas

```ts
//Defined schemas for all resources:

cars.json
travel-packs.json
activities.json
gallery.json
our-story.json
contact.json
services.json
home.json
Rule: JSON contains content only, SEO metadata handled separately.
```

## Example (activity):

```json
{
  "id": "activity-1",
  "name": "Beshbarmak Cooking",
  "description": "Learn to cook the national dish with locals.",
  "coverImage": "/images/activities/beshbarmak.jpg",
  "duration": "2h",
  "metadata": {
    "title": "Beshbarmak Cooking | Activities",
    "description": "Hands-on workshop to cook Beshbarmak in Kyrgyzstan.",
    "path": "/activities/activity-1",
    "image": "/images/activities/beshbarmak.jpg",
    "alt": "Tourist cooking Beshbarmak with locals"
  }
}
```

## 5.2 — API Wrapper & Fetch

Created API routes in /app/api/{resource}/route.ts returning:

```json
  { "status": "success", "data": [...] }
```

```ts
Built fetchAPI<T>() inside lib/api.ts:
```

Supports SSR, SSG, ISR via options { cache, revalidate }.
Added wrappers:

```ts
getCars();
//-----------
getTravelPacks();
//-----------
getActivities();
//-----------
getGallery();
//-----------
getOurStory();
//-----------
getContact();
//-----------
getHome();
```

Tested caching strategies:

```ts
Cars → ISR (1m)

Travel Packs → ISR (12h)

//Activities, Gallery, Contact → SSG
//Home, Our Story → SSR
```

## 5.3 — Validation & Type Safety

```bash
Added types/ for each schema (Car, TravelPack, Activity, GalleryItem, StoryPage…).
Added validators.ts:
Checks required fields (id, title, path, …).
Ensures arrays not empty (images, features, …).
Confirms metadata exists (title, description, image, alt).
Connected validators with wrappers inside lib/api.ts.
Built tests (tests/data-validation.test.ts) for valid/invalid cases.
```

## 4. Data Flow

```bash
flowchart TD
  A[data/content/*.json] --> B[API Routes (/api/*)]
  B --> C[lib/api.ts<br/>fetchAPI<T>() + wrappers]
  C --> D[types/<br/>interfaces]
  C --> E[lib/validators.ts<br/>validate*()]
  D --> F[Pages (app/*)]
  E --> F[Pages (app/*)]

  Example Flow: getCars()

fetchAPI<Car[]>("cars") → fetch JSON.
Run validateCar() on each item.
Return safe Car[] to the UI.
```

### 5. Engineering Wins

Consistency → unified response format.
Type Safety → TypeScript enforces schema.
Validation → catch invalid data before UI.
Scalability → swap JSON → CMS/DB with minimal changes.
Clarity → any engineer can understand the flow in < 5 minutes.

## 6. Status

✅ Completed: Tasks 5.1 → 5.3
🔜 Next step: Integrate with real backend (Strapi / MongoDB).

---

# Updated to include the latest data flow and validation logic for new features like Travel Packs and Gallery
