import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { Reveal } from "../components/Reveal";
import { ButtonLink } from "../components/ButtonLink";
import { GlassCard } from "../components/GlassCard";
import { SITE, LINKS, CONTACT } from "../data/siteContent";

export function Contact() {
  const portfolioLinks = [
    LINKS.github,
    LINKS.behance,
    LINKS.dataSciencePortfolio,
  ];

  return (
    <>
      <Section className="section-page-hero">
        <Container>
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h1 className="page-title">Let’s collaborate</h1>
            <p className="page-lead max-720">
              Open to AI, automation, analytics, and digital transformation conversations. Based in {SITE.location}. Alumni network:{" "}
              <strong>{CONTACT.school}</strong>.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="section-tight-top section-bottom">
        <Container>
          <Reveal>
            <GlassCard className="contact-card contact-card-wide">
              <div className="contact-grid contact-grid-3">
                <div>
                  <span className="label">Email</span>
                  <a className="contact-link" href={SITE.email}>
                    {SITE.emailDisplay}
                  </a>
                  <p className="contact-note">Best for formal intros, CVs, and longer context.</p>
                </div>
                <div>
                  <span className="label">Mobile</span>
                  <a className="contact-link" href={CONTACT.phoneTel}>
                    {CONTACT.phoneDisplay}
                  </a>
                  <p className="contact-note">WhatsApp-friendly; mention how you found me.</p>
                </div>
                <div>
                  <span className="label">LinkedIn</span>
                  <a className="contact-link" href={SITE.linkedIn} target="_blank" rel="noreferrer">
                    linkedin.com/in/abhishekraj1305
                  </a>
                  <p className="contact-note">Fastest path for DMs and opportunity threads.</p>
                </div>
              </div>

              <div className="contact-portfolio-block">
                <span className="label">Portfolios & code</span>
                <ul className="contact-link-list">
                  {portfolioLinks.map((item) => (
                    <li key={item.href}>
                      <a href={item.href} target="_blank" rel="noreferrer" className="contact-link contact-link-inline">
                        {item.label}
                      </a>
                      <span className="contact-url-muted">{item.href.replace(/^https?:\/\//, "")}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="contact-cta-row">
                <ButtonLink href={SITE.linkedIn} target="_blank" rel="noreferrer">
                  Message on LinkedIn
                </ButtonLink>
                <ButtonLink href={SITE.email} variant="ghost">
                  Send email
                </ButtonLink>
                <ButtonLink href={CONTACT.phoneTel} variant="ghost">
                  Call / WhatsApp
                </ButtonLink>
              </div>
            </GlassCard>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
