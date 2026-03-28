import { Link } from "react-router-dom";
import { SITE } from "../data/siteContent";

export function Footer() {
  const y = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">{SITE.name}</p>
          <p className="footer-sub">{SITE.title}</p>
        </div>
        <div className="footer-links">
          <Link to="/projects">Projects</Link>
          <a href={SITE.linkedIn} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <Link to="/contact">Contact</Link>
        </div>
        <p className="footer-copy">© {y} · Built for clarity and impact.</p>
      </div>
    </footer>
  );
}
