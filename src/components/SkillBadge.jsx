export function SkillBadge({ children, className = "" }) {
  return <span className={`skill-pill ${className}`.trim()}>{children}</span>;
}
