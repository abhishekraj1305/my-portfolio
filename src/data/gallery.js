const thumbImages = import.meta.glob("../websitephoto/optimized/thumbs/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
});

const fullImages = import.meta.glob("../websitephoto/optimized/full/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
});

function titleFromFilename(name) {
  const base = name.replace(/\.[^/.]+$/, "");
  return (
    base
      .replace(/[-_]+/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/\b\w/g, (c) => c.toUpperCase()) || "Artwork"
  );
}

export function getCreativeGalleryItems() {
  return Object.entries(thumbImages)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([path, src]) => {
      const file = path.split("/").pop();
      const fullSrc = Object.entries(fullImages).find(([fullPath]) => fullPath.endsWith(`/${file}`))?.[1] || src;
      return {
        id: file,
        src,
        fullSrc,
        title: titleFromFilename(file),
        medium: "Drawing",
        alt: `${titleFromFilename(file)} artwork by Abhishek Raj`,
      };
    });
}
