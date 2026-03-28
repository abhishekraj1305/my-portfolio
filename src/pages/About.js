import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { Reveal, RevealStagger, itemFade } from "../components/Reveal";
import { GlassCard } from "../components/GlassCard";
import { motion } from "framer-motion";
import { ABOUT } from "../data/siteContent";

export function About() {
  return (
    <>
      <Section className="section-page-hero">
        <Container>
          <Reveal>
            <p className="eyebrow">About</p>
            <h1 className="page-title">Professional summary</h1>
            <p className="page-lead max-800">{ABOUT.summary}</p>
            <p className="page-note max-800">{ABOUT.vision}</p>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
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
            <h2 className="section-title">What I do</h2>
            <p className="section-lead max-720">
              Three lenses I use when engaging stakeholders—so automation sticks after launch week.
            </p>
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

      <Section className="section-bottom">
        <Container>
          <Reveal>
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
