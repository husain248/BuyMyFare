const DEFAULT_WIDTH = 1920;
const DEFAULT_QUALITY = 75;

function getFallbackMimeType(src: string) {
  const lower = src.toLowerCase();
  if (lower.endsWith(".png")) return "image/png";
  if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "image/jpeg";
  if (lower.endsWith(".avif")) return "image/avif";
  if (lower.endsWith(".webp")) return "image/webp";
  return "image/*";
}

export function getOptimizedBackgroundImage(
  src: string,
  width = DEFAULT_WIDTH,
  quality = DEFAULT_QUALITY
) {
  if (!src || !src.startsWith("/")) {
    return `url("${src}")`;
  }

  const optimized = `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
  const fallbackMime = getFallbackMimeType(src);

  return `image-set(url("${optimized}") type("image/webp"), url("${src}") type("${fallbackMime}"))`;
}
