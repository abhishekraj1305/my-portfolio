import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { Reveal, RevealStagger, itemFade } from "../components/Reveal";
import { GlassCard } from "../components/GlassCard";
import { AiVisual } from "../components/AiVisual";
import { motion } from "framer-motion";
import { EXPERIENCE_HEADLINE, EXPERIENCE_POSITIONS, SKILLS_ALL } from "../data/siteContent";

export function Experience() {
  return (
    <>
      <Section className="section-page-hero">
        <Container>
          <Reveal>
            <p className="eyebrow">Experience</p>
            <h1 className="page-title">Enterprise impact across data, automation, and transformation</h1>
            <p className="page-lead max-800">{EXPERIENCE_HEADLINE.narrative}</p>
            <p className="page-note max-800">{EXPERIENCE_HEADLINE.tenureSummary}</p>
          </Reveal>
        </Container>
      </Section>

      <Section className="section-tight-top section-bottom">
        <Container>
          <Reveal>
            <div className="experience-command">
              <div>
                <div className="section-kicker">Command layer</div>
                <h2 className="section-title">Automation impact timeline</h2>
                <p className="section-lead max-720">
                  Roles below show where AI, Python, SQL, Power Platform, Azure, and business process digitization were applied.
                </p>
              </div>
              <AiVisual variant="robot" label="AI automation operator" />
            </div>
          </Reveal>
          <div className="exp-timeline">
            {EXPERIENCE_POSITIONS.map((job, i) => (
              <Reveal key={job.id} delay={Math.min(i * 0.04, 0.24)}>
                <GlassCard className={`exp-job-card${job.current ? " exp-job-current" : ""}`}>
                  <div className="exp-job-header">
                    <div>
                      <span className="project-number">ROLE-{String(i + 1).padStart(2, "0")}</span>
                      <h2 className="exp-job-role">{job.role}</h2>
                      <p className="exp-job-org">{job.org}</p>
                      <p className="exp-job-meta">
                        {job.period}
                        {job.location ? ` · ${job.location}` : ""}
                      </p>
                    </div>
                    {job.current && <span className="role-badge">Current</span>}
                  </div>
                  <div className="exp-job-body">
                    <span className="label">Responsibilities & achievements</span>
                    <ul className="duty-list exp-job-list">
                      {job.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                    {job.impact.length > 0 && (
                      <>
                        <span className="label">Impact</span>
                        <ul className="impact-list exp-job-list">
                          {job.impact.map((x) => (
                            <li key={x}>{x}</li>
                          ))}
                        </ul>
                      </>
                    )}
                    {job.tools.length > 0 && (
                      <>
                        <span className="label">Tools</span>
                        <div className="exp-job-tools">
                          {job.tools.map((t) => (
                            <span key={t} className="tool-chip tool-chip-sm">
                              {t}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.06}>
            <div className="section-kicker">Technical surface area</div>
            <h2 className="section-title section-title-spaced">Stack & strengths</h2>
            <p className="section-lead max-720">
              A consolidated view—roles above show where each capability was applied in production or internship settings.
            </p>
          </Reveal>
          <RevealStagger className="tools-grid">
            {SKILLS_ALL.map((t) => (
              <motion.span key={t} className="tool-chip" variants={itemFade}>
                {t}
              </motion.span>
            ))}
          </RevealStagger>
        </Container>
      </Section>
    </>
  );
}
