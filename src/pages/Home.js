import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { GlassCard } from "../components/GlassCard";
import { Reveal, RevealStagger, itemFade } from "../components/Reveal";
import { ButtonLink } from "../components/ButtonLink";
import { SITE, HOME_INTRO, SKILLS_PREVIEW, PROJECTS } from "../data/siteContent";
import { NeuronBackground } from "../components/NeuronBackground";
import profilePhoto from "../me/profile.png";

export function Home() {
  const featured = PROJECTS.filter((p) => p.highlight);

  return (
    <>
      <Section className="section-hero section-hero-neural">
        <NeuronBackground />
        <Container className="hero-foreground">
          <div className="hero-grid">
            <div className="hero-copy">
              <Reveal>
                <p className="eyebrow">Digitization · Automation · Data</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="hero-title">
                  {SITE.name}
                  <span className="hero-title-accent"> builds systems that scale.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="hero-role">{SITE.titleFull}</p>
                <p className="hero-location">{SITE.location}</p>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="hero-lead">{SITE.tagline}</p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="hero-actions">
                  <ButtonLink to="/projects">View projects</ButtonLink>
                  <ButtonLink to="/contact" variant="ghost">
                    Contact
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.15} className="hero-visual">
              <motion.div
                className="hero-profile-ring"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={profilePhoto}
                  alt={SITE.name}
                  width={300}
                  height={300}
                  className="hero-profile-img"
                />
              </motion.div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <h2 className="section-title">Short intro</h2>
            <p className="section-lead max-720">{HOME_INTRO.short}</p>
          </Reveal>
        </Container>
      </Section>

      <Section className="section-tight-top">
        <Container>
          <Reveal>
            <div className="section-head">
              <h2 className="section-title">Highlighted work</h2>
              <ButtonLink to="/projects" variant="ghost" className="section-cta">
                All projects →
              </ButtonLink>
            </div>
          </Reveal>
          <div className="grid-cards">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <GlassCard className="project-card">
                  <div className="project-card-media">
                    <img src={p.image} alt="" width={600} height={400} loading="lazy" />
                  </div>
                  <div className="project-card-body">
                    <h3>{p.title}</h3>
                    <p>{p.summary}</p>
                    {p.repoUrl ? (
                      <a className="project-card-repo" href={p.repoUrl} target="_blank" rel="noreferrer">
                        GitHub →
                      </a>
                    ) : null}
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <h2 className="section-title">Skills preview</h2>
            <p className="section-lead max-720">
              A practical stack for shipping automation in regulated, high-volume environments—not toy demos.
            </p>
          </Reveal>
          <RevealStagger className="skills-grid">
            {SKILLS_PREVIEW.map((skill) => (
              <motion.div key={skill} className="skill-pill" variants={itemFade}>
                {skill}
              </motion.div>
            ))}
          </RevealStagger>
          <Reveal delay={0.12}>
            <div className="cta-panel">
              <div>
                <h3 className="cta-title">Need someone who ships operational software?</h3>
                <p className="cta-sub">Let’s talk systems, integrations, and measurable impact.</p>
              </div>
              <div className="cta-actions">
                <ButtonLink to="/projects">Explore projects</ButtonLink>
                <ButtonLink href={SITE.linkedIn} variant="ghost" target="_blank" rel="noreferrer">
                  LinkedIn
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
