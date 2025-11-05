import { loadLocalizedJSON } from "@/lib/utils/file";
import { HomePage, validateHomePage } from "../validators/home";

// -----------------------------
// 🏠 Home
// -----------------------------
export async function getHome(locale: string = "en"): Promise<HomePage> {
  const data = await loadLocalizedJSON<HomePage>(locale, "home.json");
  return validateHomePage(data);
}
