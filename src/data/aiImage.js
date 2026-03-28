/**
 * AI-generated images via Pollinations (embed in <img src>; no API key for basic use).
 * Styling suffix keeps a consistent neon / tech look across the site.
 * @see https://image.pollinations.ai/prompt/
 */
export function aiImage(prompt, width = 600, height = 400) {
  const styled = `${prompt}, futuristic digital art, dark background, subtle neon cyan and violet rim light, high detail, no text, no letters, no watermark`;
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(styled)}?width=${width}&height=${height}&nologo=true`;
}
