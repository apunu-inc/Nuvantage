import { motion } from "framer-motion";
import { fadeUp } from "../animations/variants";

export default function AnimatedSection({ children, className, style }) {
  return (
    <motion.section
      className={className}
      style={style}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.section>
  );
}
