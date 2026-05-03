import { motion } from "framer-motion";
import { itemFade } from "./Reveal";

export function StatCard({ value, label, detail }) {
  return (
    <motion.article className="stat-card" variants={itemFade}>
      <span className="stat-value">{value}</span>
      <strong>{label}</strong>
      <p>{detail}</p>
    </motion.article>
  );
}
