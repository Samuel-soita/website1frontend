"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "🎨",
    title: "Modern Design",
    description: "Beautiful, responsive designs that work perfectly on all devices and provide exceptional user experiences."
  },
  {
    icon: "⚡",
    title: "Fast Performance",
    description: "Optimized code and modern technologies ensure lightning-fast loading and smooth interactions."
  },
  {
    icon: "🔒",
    title: "Secure & Reliable",
    description: "Built with security best practices and reliable infrastructure to protect your data and users."
  },
  {
    icon: "🔧",
    title: "Custom Solutions",
    description: "Tailored solutions designed specifically for your business needs and growth objectives."
  },
  {
    icon: "📱",
    title: "Mobile First",
    description: "Mobile-optimized designs that provide seamless experiences across all device types."
  },
  {
    icon: "🚀",
    title: "Scalable Architecture",
    description: "Built to grow with your business, easily scalable as your needs evolve over time."
  }
];

export default function Features() {
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
            Why Choose SMIRROR LTD
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We combine cutting-edge technology with proven methodologies to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
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
                scale: 1.02,
                transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
              }}
              className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-500">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}