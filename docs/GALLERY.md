# Gallery Page

The `GalleryPage` is a visual showcase of images and media related to Nomadia Travels. It provides users with an immersive experience to explore the beauty of Kyrgyzstan through curated galleries.

## Features

- **Static Site Generation (SSG):** The `GalleryPage` is pre-rendered at build time for optimal performance.
- **Dynamic Routing:** Each gallery item has its own dynamic route for detailed viewing.
- **Reusable Components:**
  - `GalleryCard`: Displays individual gallery items.
  - `GalleryList`: A list of all gallery items dynamically rendered.
  - `GalleryDetailsSection`: Detailed information about a specific gallery item.

## File Structure

The `GalleryPage` and its related components are organized as follows:

```
app/
  gallery/
    page.tsx
    [id]/
      page.tsx
components/
  ui/
    GallerySection/
      GallerySection.tsx
      GallerySection.styled.ts
```

## Data Handling

- **Data Source:** The `gallery.json` file in the `data/content/` directory provides the content for the page.
- **Validation:** The `validateGalleryPage` function ensures the integrity of the data.

## TypeScript Interfaces

The `GalleryPage` relies on the following TypeScript interfaces:

- `GalleryItem` (defined in `types/gallery.ts`)
- `ContentBlock` (defined in `types/common.ts`)

## Example Metadata

```typescript
{
  title: "Gallery",
  path: "/gallery",
  image: "/og-gallery.png",
}
```

## Related Documentation

- [Metadata Usage](./METADATA_USAGE.md)
- [Data Layer](./DATA_LAYER.md)
- [UI Components](./UI_COMPONENTS.md)
