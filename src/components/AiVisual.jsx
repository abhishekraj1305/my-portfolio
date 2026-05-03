const robotImage = `${import.meta.env.BASE_URL}assets/ai-robot-hologram.svg`;
const dataCoreImage = `${import.meta.env.BASE_URL}assets/ai-data-core.svg`;

export function AiVisual({ variant = "robot", label = "AI automation layer" }) {
  const isCore = variant === "core";
  const src = isCore ? dataCoreImage : robotImage;

  return (
    <aside className={`ai-visual ai-visual-${variant}`} aria-label={label}>
      <div className="ai-visual-orbit" aria-hidden />
      <div className="ai-visual-orbit ai-visual-orbit-secondary" aria-hidden />
      <img src={src} alt={label} loading="lazy" />
      <div className="ai-visual-scan" aria-hidden />
    </aside>
  );
}
