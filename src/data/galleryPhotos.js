const galleryContext = require.context("../websitephoto", false, /\.(png|jpe?g|webp|gif)$/i);

function titleFromFilename(name) {
  const base = name.replace(/\.[^/.]+$/, "");
  return base
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase()) || "Artwork";
}

const sortedKeys = galleryContext.keys().sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

export const GALLERY_PHOTOS = sortedKeys.map((key) => {
  const file = key.replace(/^\.\//, "");
  return {
    id: file,
    src: galleryContext(key),
    title: titleFromFilename(file),
    medium: "Drawing",
  };
});
