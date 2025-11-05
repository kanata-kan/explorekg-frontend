# Travel Packs Documentation

## Overview

The `Travel Packs` feature provides users with curated travel packages, including details such as name, description, features, and duration. This feature is designed to help users explore and choose travel experiences tailored to their preferences.

## Data Structure

Each travel pack is represented as an object with the following properties:

```typescript
{
  id: string; // Unique identifier for the travel pack
  name: string; // Name of the travel pack
  description: string; // Brief description of the travel pack
  coverImage: string; // URL to the cover image
  features: string[]; // List of features included in the travel pack
  duration?: string; // Optional duration of the travel pack
  metadata: {
    title: string; // Metadata title for SEO
    description: string; // Metadata description for SEO
    image: string; // Metadata image for SEO
    path: string; // URL path for the travel pack
  };
}
```

## Components

### TravelPacksSection

- Displays a list of travel packs.
- Dynamically adjusts the number of visible packs based on screen size.

### TravelPackCard

- Represents a single travel pack with its name, description, and features.
- Includes a call-to-action button for more details.

### TravelPackDetailsSection

- Provides detailed information about a specific travel pack.
- Includes sections for features, duration, and additional details.

## Pages

### `/travel-packs`

- Displays all available travel packs.
- Uses the `TravelPacksList` component to render the list.

### `/travel-packs/[id]`

- Displays detailed information about a specific travel pack.
- Uses the `TravelPackDetailsSection` component.

## API Integration

The travel packs data is fetched from the `travel-packs.json` file located in the `data/content` directory. The `getTravelPacks` function in `lib/api.ts` is used to retrieve and validate the data.

## Metadata

The `generateMetadata` function dynamically generates metadata for each travel pack page using the `metadata` property of the travel pack object.

## Styling

- Styled-components are used for consistent and reusable styling.
- Tokens from `styles/tokens` are used for spacing, colors, and breakpoints.

## Testing

- Ensure that all travel packs are displayed correctly on the `/travel-packs` page.
- Validate that the `/travel-packs/[id]` page renders the correct details for a given travel pack.
- Test hover and active states for the `TravelPackCard` component.

## Future Enhancements

- Add user reviews and ratings for each travel pack.
- Implement filtering and sorting options on the `/travel-packs` page.
- Integrate with a backend API for dynamic data fetching.
