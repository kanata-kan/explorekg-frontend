import { loadLocalizedJSON } from "@/lib/utils/file";
import { validateContactPage } from "../validators/contact";
import { ContactPage } from "@/lib/validators/contact";

// -----------------------------
// 📞 Contact
// -----------------------------
export async function getContact(locale: string = "en"): Promise<ContactPage> {
  const data = await loadLocalizedJSON<ContactPage>(locale, "contact.json");
  return validateContactPage(data);
}
