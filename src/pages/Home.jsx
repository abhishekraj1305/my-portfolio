import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { Reveal, RevealStagger, itemFade } from "../components/Reveal";
import { CTAButton } from "../components/CTAButton";
import { AiVisual } from "../components/AiVisual";
import { SectionHeader } from "../components/SectionHeader";
import { SkillBadge } from "../components/SkillBadge";
import { StatCard } from "../components/StatCard";
import { ProjectCard } from "../components/ProjectCard";
import { SITE, HOME_INTRO } from "../data/profile";
import { SKILLS_PREVIEW, CAPABILITIES, SYSTEM_HIGHLIGHTS, ROLE_TRACKS } from "../data/skills";
import { HERO_STATS } from "../data/stats";
import { FEATURED_PROJECTS } from "../data/projects";
import { EXPERIENCE_POSITIONS } from "../data/experience";
import { NeuronBackground } from "../components/NeuronBackground";
import fullProfilePhoto from "../me/ful.png";

export function Home() {
  const currentRole = EXPERIENCE_POSITIONS.find((job) => job.current);
  const heroCyberLayer = `${import.meta.env.BASE_URL}assets/image-from-rawpixel-id-16021281-png.png`;

  return (
    <>
      <Section className="section-hero section-hero-neural">
        <NeuronBackground />
        <Container className="hero-foreground">
          <img className="hero-cyber-bg" src={heroCyberLayer} alt="" aria-hidden="true" loading="eager" />
          <div className="hero-grid">
            <div className="hero-copy">
              <Reveal>
                <p className="eyebrow">Data engineering · Data science · Automation</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="hero-title">
                  <span>{SITE.name}</span>
                  <span className="hero-title-sub">Data Engineer + AI/ML Automation</span>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="hero-role">{SITE.titleFull}</p>
                <p className="hero-location">{SITE.location}</p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="hero-badges" aria-label="Core roles">
                  <span>Data Scientist</span>
                  <span>Data Engineer</span>
                  <span>Python Automation</span>
                  <span>Power Platform</span>
                </div>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="hero-lead">{SITE.tagline}</p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="hero-actions">
                  <CTAButton to="/projects">Explore technical work</CTAButton>
                  <CTAButton to="/contact" variant="ghost">
                    Start a conversation
                  </CTAButton>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.15} className="hero-visual">
              <div className="hero-identity-stage">
                <div className="hero-neuron-orbits" aria-hidden>
                  <span />
                  <span />
                  <span />
                </div>
                <motion.div
                  className="hero-profile-ring"
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img
                    src={fullProfilePhoto}
                    alt={`${SITE.name}, ${SITE.title}`}
                    width={480}
                    height={720}
                    className="hero-profile-img"
                  />
                </motion.div>
                <div className="hero-terminal" aria-label="Technical focus">
                  <span className="terminal-dot" />
                  <code>python + sql + power_platform + graph_api</code>
                  <code>pyspark + adf + delta_lake + airflow</code>
                  <strong>{currentRole?.role || "Digital Transformation Specialist"}</strong>
                  <small>{currentRole?.org || "Enterprise automation"}</small>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="section-tight-bottom">
        <Container>
          <RevealStagger className="stats-grid">
            {HERO_STATS.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </RevealStagger>
        </Container>
      </Section>

      <Section className="section-tight-top">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Recruiter tracks"
              title="One profile, four hiring angles"
              lead="The portfolio is organized so hiring teams can quickly map my work to data engineering, data science, automation, and Power Platform delivery."
            />
          </Reveal>
          <RevealStagger className="capability-grid">
            {ROLE_TRACKS.map((track) => (
              <motion.article key={track.title} className="capability-card glass-card" variants={itemFade}>
                <span className="card-orbit" aria-hidden />
                <h3>{track.title}</h3>
                <p>{track.body}</p>
                <div className="chip-row capability-tags">
                  {track.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="ai-section-grid">
            <Reveal>
              <div>
                <div className="section-kicker">Recruiter signal</div>
                <h2 className="section-title">Data engineering meets AI/ML automation</h2>
                <p className="section-lead max-800">{HOME_INTRO.short}</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <AiVisual variant="robot" label="AI automation robot assistant" />
            </Reveal>
          </div>
          <RevealStagger className="capability-grid">
            {CAPABILITIES.map((capability) => (
              <motion.article key={capability.title} className="capability-card glass-card" variants={itemFade}>
                <span className="card-orbit" aria-hidden />
                <h3>{capability.title}</h3>
                <p>{capability.body}</p>
                <div className="chip-row capability-tags">
                  {capability.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      <Section className="section-tight-top">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Selected builds"
              title="Highlighted technical work"
              action={
                <CTAButton to="/projects" variant="ghost">
                All projects →
                </CTAButton>
              }
            />
          </Reveal>
          <div className="grid-cards">
            {FEATURED_PROJECTS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="ai-section-grid ai-section-grid-flip">
            <Reveal>
              <AiVisual variant="core" label="AI neural data core visual" />
            </Reveal>
            <Reveal delay={0.08}>
              <div>
                <div className="section-kicker">Execution stack</div>
                <h2 className="section-title">Skills that map to enterprise outcomes</h2>
                <p className="section-lead max-720">
                  A practical stack for shipping automation in regulated, high-volume environments, not toy demos.
                </p>
              </div>
            </Reveal>
          </div>
          <RevealStagger className="skills-grid">
            {SKILLS_PREVIEW.map((skill) => (
              <motion.div key={skill} variants={itemFade}>
                <SkillBadge>{skill}</SkillBadge>
              </motion.div>
            ))}
          </RevealStagger>
          <Reveal delay={0.12}>
            <div className="systems-panel">
              {SYSTEM_HIGHLIGHTS.map((line, i) => (
                <div key={line} className="system-line">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <p>{line}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="cta-panel">
              <div>
                <h3 className="cta-title">Need someone who can digitize messy business processes?</h3>
                <p className="cta-sub">Let’s talk Python automation, Power Platform, data pipelines, dashboards, and measurable impact.</p>
              </div>
              <div className="cta-actions">
                <CTAButton to="/projects">Explore projects</CTAButton>
                <CTAButton href={SITE.linkedIn} variant="ghost" target="_blank" rel="noreferrer">
                  LinkedIn
                </CTAButton>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
