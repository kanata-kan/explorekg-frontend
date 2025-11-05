export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  caption: string;
  metadata: {
    title: string;
    description: string;
    path: string;
    image: string;
    alt: string;
  };
}
