// 🚗 lib/api/cars.ts

import { loadLocalizedJSON } from "@/lib/utils/file";
import { Car } from "@/types";
import { validateCarArray } from "../validators/cars";

// -----------------------------
// 🚗 Cars
// -----------------------------
export async function getCars(locale: string = "en"): Promise<Car[]> {
  const cars = await loadLocalizedJSON<Car[]>(locale, "cars.json");
  return validateCarArray(cars);
}

export async function getCarById(
  id: string,
  locale: string = "en",
): Promise<Car | null> {
  const all = await getCars(locale);
  return all.find((c) => c.id === id) || null;
}
