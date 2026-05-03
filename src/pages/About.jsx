import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { Reveal, RevealStagger, itemFade } from "../components/Reveal";
import { GlassCard } from "../components/GlassCard";
import { AiVisual } from "../components/AiVisual";
import { motion } from "framer-motion";
import { ABOUT, EDUCATION, CERTIFICATIONS, LANGUAGES, HONORS, SITE } from "../data/profile";

export function About() {
  return (
    <>
      <Section className="section-page-hero">
        <Container>
          <Reveal>
            <p className="eyebrow">About</p>
            <h1 className="page-title">Builder of automated data systems</h1>
            <p className="about-location">{SITE.location}</p>
            <p className="page-lead max-800">{ABOUT.summary}</p>
            <p className="page-note max-800">{ABOUT.vision}</p>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="ai-section-grid">
            <Reveal>
              <div>
                <div className="section-kicker">Operating depth</div>
                <h2 className="section-title">Core strengths</h2>
                <p className="section-lead max-720">Where I spend depth: practical systems, measurable outcomes, and tools business teams can adopt.</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <AiVisual variant="core" label="AI data intelligence core" />
            </Reveal>
          </div>
          <ul className="mission-bullets">
            {ABOUT.missionBullets.map((line) => (
              <Reveal key={line}>
                <li>{line}</li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Section className="section-tight-top">
        <Container>
          <Reveal>
            <div className="section-kicker">Proof points</div>
            <h2 className="section-title">Highlighted outcomes</h2>
            <p className="section-lead max-720">Selected narrative anchors—details live on Projects & Experience.</p>
          </Reveal>
          <ul className="philosophy-list">
            {ABOUT.achievementsHighlight.map((line, i) => (
              <Reveal key={line} delay={i * 0.04}>
                <li>{line}</li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <div className="section-kicker">Progression</div>
            <h2 className="section-title">Career journey</h2>
          </Reveal>
          <div className="timeline">
            {ABOUT.journey.map((step, i) => (
              <Reveal key={step.phase} delay={i * 0.05}>
                <div className="timeline-item">
                  <span className="timeline-dot" />
                  <div>
                    <h3 className="timeline-title">{step.phase}</h3>
                    <p className="timeline-body">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <div className="section-kicker">Delivery modes</div>
            <h2 className="section-title">What I do</h2>
            <p className="section-lead max-720">Practical lenses for delivery with stakeholders.</p>
          </Reveal>
          <RevealStagger className="grid-pillars">
            {ABOUT.pillars.map((pillar) => (
              <motion.div key={pillar.title} variants={itemFade}>
                <GlassCard className="pillar-card">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.body}</p>
                </GlassCard>
              </motion.div>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <div className="section-kicker">Foundation</div>
            <h2 className="section-title">Education</h2>
          </Reveal>
          <div className="edu-grid">
            {EDUCATION.map((e) => (
              <Reveal key={e.degree + e.period}>
                <GlassCard className="edu-card">
                  <h3 className="edu-school">{e.school}</h3>
                  <p className="edu-degree">{e.degree}</p>
                  <p className="edu-period">{e.period}</p>
                  {e.note ? <p className="edu-note">{e.note}</p> : null}
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <div className="section-kicker">Credentials</div>
            <h2 className="section-title">Certifications</h2>
          </Reveal>
          <ul className="cert-list">
            {CERTIFICATIONS.map((c) => (
              <Reveal key={c}>
                <li>{c}</li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="about-split">
            <Reveal>
              <GlassCard className="mini-card">
                <h3 className="mini-card-title">Languages</h3>
                <ul className="lang-list">
                  {LANGUAGES.map((l) => (
                    <li key={l.name}>
                      <strong>{l.name}</strong>
                      <span>{l.level}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
            <Reveal delay={0.06}>
              <GlassCard className="mini-card">
                <h3 className="mini-card-title">Honors & awards</h3>
                <ul className="honor-list">
                  {HONORS.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="section-bottom">
        <Container>
          <Reveal>
            <div className="section-kicker">Working philosophy</div>
            <h2 className="section-title">How I work</h2>
          </Reveal>
          <ul className="philosophy-list">
            {ABOUT.philosophy.map((line, i) => (
              <Reveal key={line} delay={i * 0.05}>
                <li>{line}</li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
