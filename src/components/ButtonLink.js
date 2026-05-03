import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

export function ButtonLink({ to, href, children, variant = "primary", className = "", target, rel }) {
  const cls = `btn btn-${variant} ${className}`.trim();
  const tap = { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } };

  if (href) {
    return (
      <motion.a href={href} className={cls} target={target} rel={rel} {...tap}>
        {children}
      </motion.a>
    );
  }
  return (
    <MotionLink to={to} className={cls} {...tap}>
      {children}
    </MotionLink>
  );
}
