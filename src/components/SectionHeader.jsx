export function SectionHeader({
  eyebrow,
  title,
  lead,
  action,
  className = "",
  max = "max-800",
  as: Heading = "h2",
}) {
  return (
    <div className={`section-head ${className}`.trim()}>
      <div className={max}>
        {eyebrow ? <p className="section-kicker">{eyebrow}</p> : null}
        <Heading className={Heading === "h1" ? "page-title" : "section-title"}>{title}</Heading>
        {lead ? <p className={Heading === "h1" ? "page-lead" : "section-lead"}>{lead}</p> : null}
      </div>
      {action ? <div className="section-cta">{action}</div> : null}
    </div>
  );
}
