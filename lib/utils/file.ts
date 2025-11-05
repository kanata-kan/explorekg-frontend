import fs from "fs/promises";
import path from "path";

export async function loadLocalizedJSON<T>(
  locale: string,
  filename: string,
): Promise<T> {
  const filePath = path.join(
    process.cwd(),
    "data",
    "content",
    locale,
    filename,
  );
  try {
    const file = await fs.readFile(filePath, "utf-8");
    return JSON.parse(file) as T;
  } catch (error) {
    console.error(`❌ Missing or invalid file: ${filePath}`);
    throw error;
  }
}
