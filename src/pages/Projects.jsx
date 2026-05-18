import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { Reveal } from "../components/Reveal";
import { AiVisual } from "../components/AiVisual";
import { SectionHeader } from "../components/SectionHeader";
import { CaseStudyCard } from "../components/CaseStudyCard";
import { ProjectCard } from "../components/ProjectCard";
import { CASE_STUDY_PROJECTS, LEARNING_ARCHIVE_PROJECTS } from "../data/projects";
import { GITHUB_USER } from "../data/profile";

export function Projects() {
  return (
    <>
      <Section className="section-page-hero">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Projects"
              title="Case studies, not just repo links"
              as="h1"
              lead={
                <>
                  Strongest work first: data engineering, warehousing, automation, AI, analytics, OCR, scraping, and data products with role, workflow, impact, and proof. Full source history remains on{" "}
              <a href={`${GITHUB_USER}?tab=repositories`} className="inline-repo-link" target="_blank" rel="noreferrer">
                github.com/abhishekraj1305
              </a>
                  .
                </>
              }
            />
          </Reveal>
        </Container>
      </Section>

      <Section className="section-tight-top section-bottom">
        <Container>
          <Reveal>
            <div className="projects-lab-panel">
              <div>
                <div className="section-kicker">Systems lab</div>
                <h2 className="section-title">Pipeline proof with honest constraints</h2>
                <p className="section-lead max-720">
                  Recruiters should see what was built, which layer it belongs to, what I owned, what impact it had, and which claims need interview context.
                </p>
              </div>
              <AiVisual variant="core" label="AI project systems core" />
            </div>
          </Reveal>
          <div className="projects-stack">
            {CASE_STUDY_PROJECTS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.03}>
                <CaseStudyCard project={p} index={i} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.08}>
            <SectionHeader
              className="section-title-spaced"
              eyebrow="Learning archive"
              title="Lower-signal repos kept honest"
              lead="These still show practice and breadth, but they should not compete with the strongest case studies for recruiter attention."
            />
          </Reveal>
          <div className="grid-cards">
            {LEARNING_ARCHIVE_PROJECTS.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.03}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
