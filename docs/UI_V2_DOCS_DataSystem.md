# 🧭 Kanata UI v2 — Data System Architecture (Overview)

This document describes the **data layer architecture** implemented in **Kanata UI v2** for Nomadia Travels.
It summarizes how all content modules are structured, validated, and organized across the project.

---

## 🏗️ Core Design

The Data Layer is organized around **Zod + Modular Architecture**, meaning each content domain
(such as Cars, Travel Packs, Activities, Gallery, Home, Contact, Our Story, and Services)
is isolated into its own validation schema and API file.

Each module includes:
- A **Validator File**: defines the data schema and validation rules.
- An **API File**: handles data loading and validation before it reaches the UI.
- A **Shared Metadata Schema** reused by all modules.

This design guarantees **type-safety, modularity, and future CMS integration**.

---

## 🧩 Folder Structure

```
lib/
├── api/                 → data loading functions per module
│   ├── cars.ts
│   ├── travelPacks.ts
│   ├── activities.ts
│   ├── gallery.ts
│   ├── home.ts
│   ├── contact.ts
│   ├── ourStory.ts
│   └── services.ts
│
└── validators/          → zod schemas per module
    ├── cars.ts
    ├── travelPacks.ts
    ├── activities.ts
    ├── gallery.ts
    ├── home.ts
    ├── contact.ts
    ├── ourStory.ts
    └── services.ts
```

---

## ⚙️ Validation Principles

- Every module defines a **Zod schema** describing the exact shape of its JSON content.
- Data is loaded via a shared utility (`loadLocalizedJSON`) that handles locale-specific files.
- The schema ensures runtime and compile-time validation simultaneously.
- All schemas reuse a **shared MetadataSchema** (title, description, path, image, alt).

---

## 🧠 Modules Summary

| Module | Purpose | File Pair | Description |
|--------|----------|------------|-------------|
| **Cars** | Car listings and details | `validators/cars.ts` + `api/cars.ts` | Validates name, price, metadata, and technical specs. |
| **Travel Packs** | Predefined travel itineraries | `validators/travelPacks.ts` + `api/travelPacks.ts` | Ensures every pack includes features and CTA data. |
| **Activities** | Local cultural or adventure experiences | `validators/activities.ts` + `api/activities.ts` | Handles duration, location, and optional pricing. |
| **Gallery** | Image collections | `validators/gallery.ts` + `api/gallery.ts` | Validates id, title, caption, and metadata for SEO. |
| **Home** | Landing page content | `validators/home.ts` + `api/home.ts` | Validates hero section, sub-sections, and metadata. |
| **Contact** | Contact information + form | `validators/contact.ts` + `api/contact.ts` | Ensures info, socials, and form fields are valid. |
| **Our Story** | Company story and mission | `validators/ourStory.ts` + `api/ourStory.ts` | Validates narrative content blocks and metadata. |
| **Services** | Offered services list | `validators/services.ts` + `api/services.ts` | Validates title, description, and icon consistency. |

---

## 🧱 Shared Metadata Structure

All pages include a **metadata block** for SEO and sharing consistency.
- title
- description
- path
- image
- alt

This ensures every page has clear semantic data and can be dynamically consumed by the meta system.

---

## 🔍 System Benefits

- **Consistency**: all modules follow the same API + Validator structure.
- **Type-Safety**: Zod provides both runtime and static validation.
- **Scalability**: easily extendable for new modules or CMS sources.
- **Error Transparency**: each invalid JSON logs precise error context.
- **CMS-Ready**: schemas mirror content structure for headless CMS migration.
- **Maintainability**: isolation ensures changes in one domain never break others.

---

## 🧭 Developer Notes

1. Each JSON file lives under `/data/content/{locale}/`.
2. For any new content type, create both:
   - a validator schema under `lib/validators/`
   - an API loader under `lib/api/`
3. Keep naming consistent and reuse `MetadataSchema` wherever applicable.
4. All modules should be validated before rendering to avoid runtime errors.

---

## ✅ Summary

The **Kanata UI v2 Data System** transforms the project’s data layer into
a modular, verifiable, and production-grade architecture.  
It acts as the foundation for scalability, multilingual content handling,
and future integration with dynamic CMS or API-based data sources.

---

© 2025 Kanata UI v2 — Nomadia Travels Data Architecture Guide
