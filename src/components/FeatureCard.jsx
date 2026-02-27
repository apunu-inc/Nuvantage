import { motion } from "framer-motion";

export default function FeatureCard({ title, items }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <h3 className="font-semibold text-lg mb-4">{title}</h3>

      <ul className="text-sm text-gray-600 space-y-2">
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </motion.div>
  );
}
