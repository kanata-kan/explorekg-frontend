# Activities Page Documentation

## Overview

The Activities page allows users to browse and view detailed information about various activities available for their Kyrgyzstan adventure. Each activity includes details such as name, description, duration, location, group size, and price.

## Structure

### Page: `app/activities/page.tsx`

- Displays a list of all activities using the `ActivitiesList` component.
- Metadata is dynamically generated using `getMetadataStatic`.

### Dynamic Page: `app/activities/[id]/page.tsx`

- Displays detailed information about a specific activity using the `ActivityDetailsSection` component.
- Metadata is dynamically generated using `getMetadataDynamic`.

### Components

#### `ActivitiesSection`

- Location: `components/ui/ActivitiesSection/ActivitiesSection.tsx`
- Displays a grid of activity cards.
- Props:
  - `activities`: Array of activity objects.
  - `context`: Determines the layout (e.g., `home` or `page`).

#### `ActivityCard`

- Location: `components/ui/ActivitiesSection/ActivityCard.tsx`
- Displays a single activity card with an image, name, and description.
- Props:
  - `activity`: Activity object.
  - `imageHref`: Optional image URL.
  - `ctaVisible`: Whether to show the call-to-action button.
  - `ctaPath`: Path for the call-to-action button.
  - `ctaLabel`: Label for the call-to-action button.

#### `ActivityDetailsSection`

- Location: `components/ui/ActivitiesSection/ActivityDetailsSection.tsx`
- Displays detailed information about a specific activity.
- Props:
  - `activity`: Activity object.

## API

### `getActivities`

- Fetches all activities.
- Location: `lib/api.ts`

### `getActivityById`

- Fetches a specific activity by ID.
- Location: `lib/api.ts`

## JSON Structure

Example JSON for an activity:

```json
{
  "id": "activity-1",
  "name": "Beshbarmak Cooking Class",
  "description": "Learn how to prepare Beshbarmak, the national Kyrgyz dish, in a cozy guest house setting.",
  "coverImage": "/images/activities/beshbarmak.jpg",
  "duration": "1.5 hours",
  "location": "Naryn Oblast Historical Museum / Guest House",
  "groupSize": "4+ participants (or 1 on request)",
  "price": "12€/person",
  "metadata": {
    "title": "Beshbarmak Cooking Class",
    "description": "Discover Kyrgyz cuisine by learning how to cook Beshbarmak with locals.",
    "path": "/activities/activity-1",
    "image": "/images/activities/beshbarmak.jpg",
    "alt": "Cooking class preparing Beshbarmak in Kyrgyzstan"
  }
}
```

## Metadata

- Metadata for the Activities page and dynamic activity pages is generated using `getMetadataStatic` and `getMetadataDynamic` respectively.

## Notes

- Ensure all activity images are optimized and stored in the `/public/images/activities/` directory.
- Follow the JSON structure for adding new activities.
