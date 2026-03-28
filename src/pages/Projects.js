import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { Reveal } from "../components/Reveal";
import { GlassCard } from "../components/GlassCard";
import { PROJECTS } from "../data/siteContent";

export function Projects() {
  return (
    <>
      <Section className="section-page-hero">
        <Container>
          <Reveal>
            <p className="eyebrow">Projects</p>
            <h1 className="page-title">Systems, not slide decks</h1>
            <p className="page-lead max-800">
              Each engagement below maps a business friction to an engineered outcome: clearer state, fewer manual hops, and reporting people trust.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="section-tight-top">
        <Container>
          <div className="projects-stack">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.04}>
                <GlassCard className="project-detail-card">
                  <div className="project-detail-grid">
                    <div className="project-detail-media">
                      <img src={p.image} alt="" width={600} height={400} loading="lazy" />
                    </div>
                    <div className="project-detail-copy">
                      <h2>{p.title}</h2>
                      <p className="project-tagline">{p.summary}</p>
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
