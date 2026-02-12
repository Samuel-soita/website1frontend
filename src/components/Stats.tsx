"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "50+",
    label: "Projects Completed",
    description: "Successful deliveries across industries"
  },
  {
    number: "24/7",
    label: "Support Available",
    description: "Round-the-clock technical assistance"
  },
  {
    number: "100%",
    label: "Client Satisfaction",
    description: "Committed to excellence and quality"
  },
  {
    number: "5+",
    label: "Years Experience",
    description: "Proven expertise in web development"
  }
];

export default function Stats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="geometric-bg absolute inset-0 -z-10"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Our track record speaks for itself. Here's what we've achieved together with our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.05,
                transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
              }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-500">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-500">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}