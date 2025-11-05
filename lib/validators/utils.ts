export function hasValues(obj: Record<string, any>, keys: string[]): boolean {
  return keys.every(
    (key) => obj[key] !== undefined && obj[key] !== null && obj[key] !== "",
  );
}

export function validateMetadata(metadata: any): boolean {
  return !!(
    metadata &&
    hasValues(metadata, ["title", "description", "path", "image", "alt"])
  );
}
