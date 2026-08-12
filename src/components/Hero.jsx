import { motion, useScroll, useTransform } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  fadeIn,
  slideInRight,
} from "../animations/variants";
import heroImage from "../assets/hero.jpg";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);

  // Scroll-based parallax effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={ref} className="bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold leading-tight"
          >
            Protecting Your Interests in <br />
            <span className="text-orange-500">High-Complexity Builds</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-gray-600 text-sm leading-relaxed max-w-md"
          >
            Large-scale projects demand more than just coordination. They
            require technical insight, disciplined governance, and real-world
            experience navigating modern project risk.
          </motion.p>

          <motion.div variants={fadeUp}>
            <motion.button
              className="mt-6 bg-black text-white px-6 py-3 rounded-lg text-sm"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Start a Conversation
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE WITH PARALLAX */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          style={{ y: yParallax }}
          className="bg-orange-100 p-6 rounded-3xl"
        >
          <img
            src={heroImage}
            alt="Infrastructure Team"
            className="rounded-2xl w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
