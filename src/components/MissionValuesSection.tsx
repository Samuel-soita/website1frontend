"use client";

import { motion } from "framer-motion";

export default function MissionValuesSection() {
  const values = [
    {
      icon: "🏆",
      title: "Excellence",
      description: "We deliver exceptional quality that exceeds expectations in every project we undertake.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "We stay ahead of technology trends and best practices to deliver cutting-edge solutions.",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: "🤝",
      title: "Integrity",
      description: "We maintain transparent communication and honest assessments in all our interactions.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: "📈",
      title: "Growth",
      description: "We help clients and team members reach their full potential through continuous development.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="mission-values" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Mission & Values</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The principles that guide everything we do at SMIRROR Solutions
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-8 lg:p-12 text-center">
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-5xl mx-auto">
                "Empower businesses and individuals through comprehensive technology solutions, from elite development services
                to talent development programs and IT infrastructure management."
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8 lg:p-12 text-center">
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-5xl mx-auto">
                "Become the world's most trusted technology partner, democratizing access to elite development expertise,
                nurturing emerging tech talent, and delivering comprehensive business solutions that drive sustainable growth."
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Core Values</h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The principles that guide our decisions and shape our culture
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 rounded-xl p-6 h-full hover:border-gray-500 transition-all duration-300 hover:shadow-lg hover:shadow-gray-800/50">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`text-5xl mb-4 bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}
                >
                  {value.icon}
                </motion.div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600 rounded-lg p-6 max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 italic">
              "Our values aren't just words on a page—they're the foundation of everything we build and every relationship we nurture.
              They guide us in delivering not just solutions, but meaningful transformations."
            </p>
            <p className="text-sm text-gray-400 mt-4">— Samuel Soita Watua, Founder & CEO</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}