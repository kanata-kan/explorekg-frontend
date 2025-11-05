import { loadLocalizedJSON } from "@/lib/utils/file";
import { validateServiceArray } from "../validators/services";
import { Service } from "@/lib/validators/services";

// -----------------------------
// 🛎️ Services
// -----------------------------
export async function getServices(locale: string = "en"): Promise<Service[]> {
  const data = await loadLocalizedJSON<Service[]>(locale, "services.json");
  return validateServiceArray(data);
}
