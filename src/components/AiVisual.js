const robotImage = "/assets/ai-robot-hologram.svg";
const dataCoreImage = "/assets/ai-data-core.svg";

export function AiVisual({ variant = "robot", label = "AI automation layer" }) {
  const isCore = variant === "core";
  const src = isCore ? dataCoreImage : robotImage;

  return (
    <aside className={`ai-visual ai-visual-${variant}`} aria-label={label}>
      <div className="ai-visual-orbit" aria-hidden />
      <img src={src} alt={label} loading="lazy" />
      <div className="ai-visual-scan" aria-hidden />
      <div className="ai-visual-caption">
        <span>{isCore ? "Neural data core" : "Automation co-pilot"}</span>
        <strong>{isCore ? "Predict · Clean · Explain" : "Sense · Automate · Report"}</strong>
      </div>
    </aside>
  );
}
