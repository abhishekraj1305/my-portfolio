import { GlassCard } from "./GlassCard";
import { TechTag } from "./TechTag";

export function ProjectCard({ project }) {
  return (
    <GlassCard className="project-card">
      <div className="project-card-media">
        <img
          src={project.image}
          alt={project.alt || `${project.title} project interface visual`}
          width={720}
          height={480}
          loading="lazy"
        />
      </div>
      <div className="project-card-body">
        <span className="project-card-label">{project.highlight ? "Featured case study" : "Project"}</span>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="project-card-tags" aria-label={`${project.title} technologies`}>
          {project.stack.slice(0, 4).map((tech) => (
            <TechTag key={tech} className="tool-chip-sm">
              {tech}
            </TechTag>
          ))}
        </div>
        {project.repoUrl ? (
          <a className="project-card-repo" href={project.repoUrl} target="_blank" rel="noreferrer">
            View proof →
          </a>
        ) : null}
      </div>
    </GlassCard>
  );
}
