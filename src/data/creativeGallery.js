import { GALLERY_PHOTOS } from "./galleryPhotos";

/**
 * Your uploads (src/websitephoto) only.
 */
export function getCreativeGalleryItems() {
  const uploads = GALLERY_PHOTOS.map((p) => ({
    ...p,
    medium: p.medium || "Uploaded",
  }));
  return uploads;
}
