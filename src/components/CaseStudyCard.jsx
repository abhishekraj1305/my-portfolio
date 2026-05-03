import { GlassCard } from "./GlassCard";
import { TechTag } from "./TechTag";

function TextBlock({ label, children }) {
  if (!children) return null;
  return (
    <div className="project-block">
      <span className="label">{label}</span>
      <p>{children}</p>
    </div>
  );
}

export function CaseStudyCard({ project, index, compact = false }) {
  return (
    <GlassCard className={`case-study-card${compact ? " case-study-card-compact" : ""}`}>
      <div className="case-study-grid">
        <div className="project-detail-media">
          <img
            src={project.image}
            alt={project.alt || `${project.title} case study visual`}
            width={720}
            height={480}
            loading="lazy"
          />
        </div>
        <div className="project-detail-copy">
          <span className="project-number">CASE-{String(index + 1).padStart(2, "0")}</span>
          <h2>{project.title}</h2>
          <p className="project-tagline">{project.summary}</p>

          <div className="project-repo-row">
            {project.repoUrl ? (
              <a className="project-repo-link" href={project.repoUrl} target="_blank" rel="noreferrer">
                Repository →
              </a>
            ) : null}
            {project.demoUrl ? (
              <a className="project-repo-link secondary" href={project.demoUrl} target="_blank" rel="noreferrer">
                Demo →
              </a>
            ) : null}
            {project.extraRepos?.map((ex) => (
              <a key={ex.url} className="project-repo-link secondary" href={ex.url} target="_blank" rel="noreferrer">
                {ex.label} →
              </a>
            ))}
          </div>

          <TextBlock label="Problem">{project.problem}</TextBlock>
          <TextBlock label="My role">{project.role}</TextBlock>
          <TextBlock label="Architecture / workflow">{project.workflow || project.solution}</TextBlock>
          <TextBlock label="Business impact">{project.impact}</TextBlock>
          <TextBlock label="Proof">{project.proof}</TextBlock>
          {!compact ? <TextBlock label="What I learned">{project.learned}</TextBlock> : null}

          <div className="project-block">
            <span className="label">Tech stack</span>
            <div className="chip-row" aria-label={`${project.title} technology stack`}>
              {project.stack.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
