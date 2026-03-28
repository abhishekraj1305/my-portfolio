import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { Reveal } from "../components/Reveal";
import { ButtonLink } from "../components/ButtonLink";
import { GlassCard } from "../components/GlassCard";
import { SITE } from "../data/siteContent";

export function Contact() {
  return (
    <>
      <Section className="section-page-hero">
        <Container>
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h1 className="page-title">Let’s build the next system</h1>
            <p className="page-lead max-720">
              Open to roles and collaborations where automation, data integrity, and Microsoft-centric stacks matter. Prefer async first—clear briefs,
              crisp follow-ups.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="section-tight-top section-bottom">
        <Container>
          <Reveal>
            <GlassCard className="contact-card">
              <div className="contact-grid">
                <div>
                  <span className="label">Email</span>
                  <a className="contact-link" href={SITE.email}>
                    {SITE.emailDisplay}
                  </a>
                  <p className="contact-note">Best for attachments, longer context, or formal intros.</p>
                </div>
                <div>
                  <span className="label">LinkedIn</span>
                  <a className="contact-link" href={SITE.linkedIn} target="_blank" rel="noreferrer">
                    linkedin.com/in/abhishekraj1305
                  </a>
                  <p className="contact-note">Fastest path to see background, mutuals, and timely responses.</p>
                </div>
              </div>
              <div className="contact-cta-row">
                <ButtonLink href={SITE.linkedIn} target="_blank" rel="noreferrer">
                  Message on LinkedIn
                </ButtonLink>
                <ButtonLink href={SITE.email} variant="ghost">
                  Send email
                </ButtonLink>
              </div>
            </GlassCard>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
