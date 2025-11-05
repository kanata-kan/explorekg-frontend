import { loadLocalizedJSON } from "@/lib/utils/file";
import { OurStoryPage, validateOurStoryPage } from "../validators/our-story";

// -----------------------------
// 📖 Our Story
// -----------------------------
export async function getOurStory(
  locale: string = "en",
): Promise<OurStoryPage> {
  const data = await loadLocalizedJSON<OurStoryPage>(locale, "our-story.json");
  return validateOurStoryPage(data);
}
