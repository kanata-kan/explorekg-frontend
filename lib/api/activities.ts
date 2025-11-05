import { loadLocalizedJSON } from "@/lib/utils/file";
import { validateActivityArray } from "../validators/activities";
import { Activity } from "@/types";

// -----------------------------
// 🎯 Activities
// -----------------------------
export async function getActivities(
  locale: string = "en",
): Promise<Activity[]> {
  const data = await loadLocalizedJSON<Activity[]>(locale, "activities.json");
  return validateActivityArray(data);
}

export async function getActivityById(
  id: string,
  locale: string = "en",
): Promise<Activity | null> {
  const all = await getActivities(locale);
  return all.find((a) => a.id === id) || null;
}
