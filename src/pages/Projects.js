import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { Reveal } from "../components/Reveal";
import { GlassCard } from "../components/GlassCard";
import { AiVisual } from "../components/AiVisual";
import { PROJECTS, GITHUB_USER } from "../data/siteContent";

export function Projects() {
  return (
    <>
      <Section className="section-page-hero">
        <Container>
          <Reveal>
            <p className="eyebrow">Projects</p>
            <h1 className="page-title">Automation, AI, analytics, and data products</h1>
            <p className="page-lead max-800">
              Each system maps to a real repository on{" "}
              <a href={`${GITHUB_USER}?tab=repositories`} className="inline-repo-link" target="_blank" rel="noreferrer">
                github.com/abhishekraj1305
              </a>
              , with problem, solution, impact, stack, and implementation signals for recruiters and technical reviewers.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="section-tight-top section-bottom">
        <Container>
          <Reveal>
            <div className="projects-lab-panel">
              <div>
                <div className="section-kicker">Systems lab</div>
                <h2 className="section-title">Real repositories with AI-era delivery signals</h2>
                <p className="section-lead max-720">
                  The portfolio mixes machine learning, automation, OCR, data engineering, dashboards, scraping, and operational tooling.
                </p>
              </div>
              <AiVisual variant="core" label="AI project systems core" />
            </div>
          </Reveal>
          <div className="projects-stack">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.03}>
                <GlassCard className="project-detail-card">
                  <div className="project-detail-grid">
                    <div className="project-detail-media">
                      <img src={p.image} alt={`${p.title} project visual`} width={600} height={400} loading="lazy" />
                    </div>
                    <div className="project-detail-copy">
                      <span className="project-number">SYS-{String(i + 1).padStart(2, "0")}</span>
                      <h2>{p.title}</h2>
                      <p className="project-tagline">{p.summary}</p>
                      <div className="project-repo-row">
                        <a className="project-repo-link" href={p.repoUrl} target="_blank" rel="noreferrer">
                          Open repository →
                        </a>
                        {p.extraRepos?.map((ex) => (
                          <a key={ex.url} className="project-repo-link secondary" href={ex.url} target="_blank" rel="noreferrer">
                            {ex.label} →
                          </a>
                        ))}
                      </div>
                      <div className="project-block">
                        <span className="label">Problem</span>
                        <p>{p.problem}</p>
                      </div>
                      <div className="project-block">
                        <span className="label">Solution</span>
                        <p>{p.solution}</p>
                      </div>
                      <div className="project-block">
                        <span className="label">Impact</span>
                        <p>{p.impact}</p>
                      </div>
                      <div className="project-block">
                        <span className="label">Tech stack</span>
                        <ul className="chip-row">
                          {p.stack.map((t) => (
                            <li key={t}>{t}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="project-block">
                        <span className="label">Key features</span>
                        <ul className="feature-list">
                          {p.features.map((f) => (
                            <li key={f}>{f}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
