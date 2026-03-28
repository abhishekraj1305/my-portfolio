import { GALLERY_PHOTOS } from "./galleryPhotos";
import { AI_CREATIVE_TILES } from "./aiGalleryTiles";

/**
 * Your uploads (src/websitephoto) first, then AI tiles so every section has generative coverage.
 */
export function getCreativeGalleryItems() {
  const uploads = GALLERY_PHOTOS.map((p) => ({
    ...p,
    medium: p.medium || "Uploaded",
  }));
  return [...uploads, ...AI_CREATIVE_TILES];
}
