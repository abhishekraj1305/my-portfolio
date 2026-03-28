import { Link } from "react-router-dom";
import { SITE, LINKS } from "../data/siteContent";

export function Footer() {
  const y = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">{SITE.name}</p>
          <p className="footer-sub">{SITE.title}</p>
          <p className="footer-loc">{SITE.location}</p>
        </div>
        <div className="footer-links">
          <Link to="/projects">Projects</Link>
          <a href={SITE.linkedIn} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={LINKS.github.href} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <Link to="/contact">Contact</Link>
        </div>
        <p className="footer-copy">© {y} · Built for clarity and impact.</p>
      </div>
    </footer>
  );
}
