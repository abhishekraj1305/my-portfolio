import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { Reveal } from "../components/Reveal";
import { CREATIVE_ITEMS } from "../data/siteContent";

export function Creative() {
  const [active, setActive] = useState(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    if (active) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close]);

  return (
    <>
      <Section className="section-page-hero">
        <Container>
          <Reveal>
            <p className="eyebrow">Creative</p>
            <h1 className="page-title">Sketches · scribbles · digital</h1>
            <p className="page-lead max-800">
              Visual thinking outside the IDE—studies, gesture work, and Procreate pieces that keep observation and hand skills sharp alongside engineering.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="section-tight-top section-bottom">
        <Container>
          <div className="gallery-grid">
            {CREATIVE_ITEMS.map((item, i) => (
              <Reveal key={item.id} delay={(i % 4) * 0.04}>
                <motion.button
                  type="button"
                  className="gallery-item"
                  onClick={() => setActive(item)}
                  whileHover={{ scale: 1.03, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                >
                  <span className="gallery-item-shine" aria-hidden />
                  <img src={item.src} alt="" width={400} height={400} loading="lazy" className="gallery-img" />
                  <div className="gallery-caption">
                    <span className="gallery-title">{item.title}</span>
                    <span className="gallery-medium">{item.medium}</span>
                  </div>
                </motion.button>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <AnimatePresence>
        {active && (
          <motion.div
            className="modal-backdrop"
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              className="modal-panel glass-card"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button type="button" className="modal-close" onClick={close} aria-label="Close">
                ×
              </button>
              <div className="modal-body">
                <img src={active.src} alt="" width={400} height={400} className="modal-img" />
                <div className="modal-meta">
                  <h2>{active.title}</h2>
                  <p className="modal-medium">{active.medium}</p>
                  <p className="modal-hint">Replace placeholders with your final exports when ready.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
