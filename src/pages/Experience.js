import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { Reveal, RevealStagger, itemFade } from "../components/Reveal";
import { GlassCard } from "../components/GlassCard";
import { motion } from "framer-motion";
import { EXPERIENCE } from "../data/siteContent";

export function Experience() {
  return (
    <>
      <Section className="section-page-hero">
        <Container>
          <Reveal>
            <p className="eyebrow">Experience</p>
            <h1 className="page-title">Impact in digitization</h1>
            <p className="page-lead max-800">{EXPERIENCE.narrative}</p>
          </Reveal>
        </Container>
      </Section>

      <Section className="section-tight-top">
        <Container>
          <Reveal>
            <GlassCard className="role-card">
              <div className="role-card-top">
                <div>
                  <h2 className="role-title">{EXPERIENCE.role}</h2>
                  <p className="role-meta">{EXPERIENCE.org}</p>
                  <p className="role-tenure">{EXPERIENCE.tenure}</p>
                </div>
                <span className="role-badge">Current focus</span>
              </div>
            </GlassCard>
          </Reveal>

          <div className="exp-grid">
            <Reveal delay={0.06}>
              <GlassCard className="exp-panel">
                <h3 className="exp-panel-title">What moved the needle</h3>
                <p className="exp-panel-sub">Outcomes stakeholders could feel in operations and reviews.</p>
                <ul className="impact-list">
                  {EXPERIENCE.achievements.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
            <Reveal delay={0.1}>
              <GlassCard className="exp-panel">
                <h3 className="exp-panel-title">How I operated</h3>
                <p className="exp-panel-sub">Day-to-day ownership, not a generic JD list.</p>
                <ul className="duty-list">
                  {EXPERIENCE.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <h2 className="section-title section-title-spaced">Tools I deploy in production</h2>
            <p className="section-lead max-720">The boring, reliable layer recruiters actually care about.</p>
          </Reveal>
          <RevealStagger className="tools-grid">
            {EXPERIENCE.tools.map((t) => (
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
