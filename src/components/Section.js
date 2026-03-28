export function Section({ children, className = "", id }) {
  return (
    <section className={`section ${className}`.trim()} id={id}>
      {children}
    </section>
  );
}
