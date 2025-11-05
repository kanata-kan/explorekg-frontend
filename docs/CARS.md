# Cars Documentation

## Overview

This document provides a comprehensive overview of the `Cars` feature in the Nomadia Travels application. It covers the `CarsPage`, `CarDetailsPage`, and the `CarsSection` component, explaining their purpose, implementation, and integration.

---

## CarsPage

### Purpose

The `CarsPage` displays a list of all available cars for rental. It provides users with an overview of the fleet and allows them to navigate to individual car details.

### File Location

`app/cars/page.tsx`

### Metadata

The page uses `getMetadataStatic` to define static metadata for SEO purposes:

```tsx
export const metadata = getMetadataStatic({
  title: "All Cars",
  description: "Browse all available cars for your Kyrgyzstan adventure.",
  path: "/cars",
});
```

### Implementation

The page renders a `CarsList` component:

```tsx
export default function CarsPage() {
  return (
    <main>
      <CarsList />
    </main>
  );
}
```

---

## CarDetailsPage

### Purpose

The `CarDetailsPage` provides detailed information about a specific car, including its name, description, price, and specifications.

### File Location

`app/cars/[id]/page.tsx`

### Metadata

Dynamic metadata is generated using `getMetadataDynamic`:

```tsx
export async function generateMetadata({ params }: { params: { id: string } }) {
  const car = await getCarById(params.id);

  if (!car) {
    return {};
  }

  return getMetadataDynamic({
    name: car.name,
    description: car.description,
    image: car.coverImage,
    path: `/cars/${car.id}`,
  });
}
```

### Implementation

The page fetches car details dynamically and renders the `CarDetailsSection`:

```tsx
export default async function CarDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const car = await getCarById(params.id);
  if (!car) return notFound();

  return <CarDetailsSection car={car} />;
}
```

---

## CarsSection

### Purpose

The `CarsSection` component is a responsive section designed to display a selection of cars dynamically. It is used on the homepage to showcase available cars for rental.

### File Location

`components/ui/sections/CarsSection.tsx`

### Props

| Prop Name | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| `cars`    | `Car[]`  | An array of car objects to display.    |
| `context` | `string` | Context of the section (e.g., `home`). |

### Behavior

- **Responsive Design**: The number of visible cars adapts to the screen size:
  - Mobile: 1 car
  - Tablet: 2 cars
  - Desktop: 3 cars
- **Dynamic Rendering**: Uses the `useMediaQuery` hook to determine the screen size and adjust the number of visible cars.

### Integration

The `CarsSection` is used on the homepage:

```tsx
<CarsSection cars={cars.slice(0, 3)} context="home" />
```

```bash
app/
├── page.tsx                (HomePage)
│    └── CarsSection (context="home")
│          └── CarCard (view subset)
│
├── cars/
│    ├── page.tsx           (CarsPage)
│    │    └── CarsList
│    │          └── CarsSection (context="page")
│    │                └── CarCard (view full list)
│    │
│    └── [id]/
│         └── page.tsx      (CarDetailsPage)
│               └── CarDetailsSection
│                     ├── HeroSection
│                     ├── CarGallery (images[])
│                     ├── CarSpecs (seats, drive, fuel…)
│                     ├── DescriptionSection
│                     ├── CTASection (Book button)
│                     └── BackLink
│
└── components/
     ├── ui/sections/CarsSection.tsx
     ├── ui/molecules/CarCard.tsx
     ├── ui/molecules/CarGallery.tsx
     └── ui/molecules/CarSpecs.tsx

```

---

## Summary

The `Cars` feature is a critical part of the Nomadia Travels application, providing users with an intuitive and visually appealing way to explore available cars. By leveraging reusable components and dynamic metadata, the implementation ensures scalability and maintainability.

---

## Cars Feature

The `Cars` feature in the Nomadia Travels application is designed to provide users with a seamless experience in browsing and renting cars. It includes dynamic metadata generation for SEO optimization and reusable components for efficient development and maintenance.

### Dynamic Metadata

Dynamic metadata is used in the `CarDetailsPage` to provide search engines with specific information about each car. This includes the car's name, description, image, and a unique path. The metadata is generated based on the car's details fetched from the server.

### Reusable Components

The `Cars` feature utilizes reusable components such as `CarsSection`, `CarCard`, `CarGallery`, and `CarSpecs`. These components are designed to be flexible and reusable across different parts of the application, promoting consistency and reducing development time.

---
