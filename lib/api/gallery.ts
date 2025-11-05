import { loadLocalizedJSON } from "@/lib/utils/file";
import { validateGalleryArray } from "../validators/gallery";
import { GalleryItem } from "@/types";

// -----------------------------
// 🖼️ Gallery
// -----------------------------
export async function getGallery(
  locale: string = "en",
): Promise<GalleryItem[]> {
  const data = await loadLocalizedJSON<GalleryItem[]>(locale, "gallery.json");
  return validateGalleryArray(data);
}

export async function getGalleryItemById(
  id: string,
  locale: string = "en",
): Promise<GalleryItem | null> {
  const all = await getGallery(locale);
  return all.find((g) => g.id === id) || null;
}
