import { useEffect, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { Reveal } from "../components/Reveal";
import { getCreativeGalleryItems } from "../data/creativeGallery";

export function Creative() {
  const items = useMemo(() => getCreativeGalleryItems(), []);
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
            <h1 className="page-title">Sketches · uploads · AI tiles</h1>
            <p className="page-lead max-800">
              Your files from <code className="gallery-empty-code inline-code">src/websitephoto</code> appear first; additional{" "}
              <strong>AI-generated</strong> pieces extend the grid for a full neon gallery. Scroll sideways—three rows.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="section-tight-top section-bottom creative-gallery-section">
        <Container>
          <Reveal>
            <p className="gallery-scroll-hint">Drag or swipe horizontally · 3-row grid</p>
          </Reveal>
          <div className="gallery-scroller" tabIndex={0} role="region" aria-label="Art gallery, horizontal scroll">
            <div className="gallery-grid-3row">
              {items.map((item, i) => (
                <motion.button
                  type="button"
                  key={item.id}
                  className="gallery-cell"
                  onClick={() => setActive(item)}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px", amount: 0.2 }}
                  transition={{ duration: 0.4, delay: (i % 6) * 0.03 }}
                  whileHover={{ scale: 1.03, zIndex: 2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="gallery-item-shine" aria-hidden />
                  <img src={item.src} alt="" loading="lazy" className="gallery-img" />
                  <div className="gallery-caption">
                    <span className="gallery-title">{item.title}</span>
                    <span className="gallery-medium">{item.medium}</span>
                  </div>
                </motion.button>
              ))}
            </div>
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
                <img src={active.src} alt="" className="modal-img" />
                <div className="modal-meta">
                  <h2>{active.title}</h2>
                  <p className="modal-medium">{active.medium}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
