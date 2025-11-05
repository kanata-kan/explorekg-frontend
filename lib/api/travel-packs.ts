import { loadLocalizedJSON } from "@/lib/utils/file";
import { TravelPack, validateTravelPacks } from "../validators/travel-packs";

export async function getTravelPacks(
  locale: string = "en",
): Promise<TravelPack[]> {
  const data = await loadLocalizedJSON<TravelPack[]>(
    locale,
    "travel-packs.json",
  );
  return validateTravelPacks(data);
}

export async function getTravelPackById(
  id: string,
  locale: string = "en",
): Promise<TravelPack | null> {
  const all = await getTravelPacks(locale);
  return all.find((p) => p.id === id) || null;
}
