import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { Reveal } from "../components/Reveal";
import { GlassCard } from "../components/GlassCard";
import { PROJECTS, GITHUB_USER } from "../data/siteContent";

export function Projects() {
  return (
    <>
      <Section className="section-page-hero">
        <Container>
          <Reveal>
            <p className="eyebrow">Projects</p>
            <h1 className="page-title">Public GitHub portfolio</h1>
            <p className="page-lead max-800">
              Each card maps to a real repository on{" "}
              <a href={`${GITHUB_USER}?tab=repositories`} className="inline-repo-link" target="_blank" rel="noreferrer">
                github.com/abhishekraj1305
              </a>
              . Cover art is{" "}
              <strong>AI-generated from prompts</strong> (Pollinations) for a unified futuristic look—swap for repo screenshots anytime.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="section-tight-top section-bottom">
        <Container>
          <div className="projects-stack">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.03}>
                <GlassCard className="project-detail-card">
                  <div className="project-detail-grid">
                    <div className="project-detail-media">
                      <img src={p.image} alt="" width={600} height={400} loading="lazy" />
                    </div>
                    <div className="project-detail-copy">
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
