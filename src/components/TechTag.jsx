export function TechTag({ children, className = "" }) {
  return <span className={`tool-chip ${className}`.trim()}>{children}</span>;
}
