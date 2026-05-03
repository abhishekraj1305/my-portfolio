import { motion } from "framer-motion";

const cardVariants = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -4, transition: { type: "spring", stiffness: 400, damping: 25 } },
};

export function GlassCard({ children, className = "" }) {
  return (
    <motion.div
      className={`glass-card ${className}`.trim()}
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.99 }}
    >
      {children}
    </motion.div>
  );
}
