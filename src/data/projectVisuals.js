import { PROJECTS } from "./siteContent";

const visualBySlug = new Map(PROJECTS.map((project) => [project.slug, project.image]));

export function getProjectVisual(slug) {
  return visualBySlug.get(slug);
}
