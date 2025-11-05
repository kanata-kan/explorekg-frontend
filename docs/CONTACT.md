# Contact Page

The `ContactPage` is a key part of the Nomadia Travels application, allowing users to get in touch with the company. This page is designed to be modular, reusable, and visually appealing.

## Features

- **Static Site Generation (SSG):** The `ContactPage` is pre-rendered at build time for optimal performance.
- **Dynamic Metadata:** Metadata for the page is handled using the `getMetadataStatic` utility.
- **Reusable Components:**
  - `ContactSection`: Displays the main contact information and optional forms.
  - `ContactList`: A server component that lists contact methods dynamically.

## File Structure

The `ContactPage` and its related components are organized as follows:

```
app/
  contact/
    page.tsx
    ContactList.tsx
components/
  ui/
    ContactSection/
      ContactSection.tsx
      ContactSection.styled.ts
```

## Data Handling

- **Data Source:** The `contact.json` file in the `data/content/` directory provides the content for the page.
- **Validation:** The `validateContactPage` function ensures the integrity of the data.

## TypeScript Interfaces

The `ContactPage` relies on the following TypeScript interfaces:

- `ContactPage` (defined in `types/contact.ts`)
- `ContentBlock` (defined in `types/common.ts`)

## Example Metadata

```typescript
{
  title: "Contact Us",
  path: "/contact",
  image: "/og-contact.png",
}
```

## Related Documentation

- [Metadata Usage](./METADATA_USAGE.md)
- [Data Layer](./DATA_LAYER.md)
- [UI Components](./UI_COMPONENTS.md)
