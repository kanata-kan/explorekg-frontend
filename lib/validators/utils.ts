import type { Metadata } from "@/types";

export function hasValues(obj: Record<string, any>, keys: string[]): boolean {
  return keys.every(
    (key) => obj[key] !== undefined && obj[key] !== null && obj[key] !== ""
  );
}

export function validateMetadata(metadata: unknown): metadata is Metadata {
  if (typeof metadata !== "object" || metadata === null) {
    return false;
  }

  const meta = metadata as Record<string, any>;
  return !!(
    metadata &&
    hasValues(meta, ["title", "description", "path", "image", "alt"])
  );
}
