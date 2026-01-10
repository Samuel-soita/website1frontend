"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
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
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">SMIRROR Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Elite full-stack development consultancy empowering businesses through comprehensive technology solutions
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">Our Story</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Founded in January 2025 by Samuel Soita Watua, SMIRROR Solutions emerged from a vision to bridge the gap between exceptional development talent and businesses seeking transformative digital solutions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We specialize in modern web applications, delivering everything from simple websites to complex full-stack systems. Our approach ensures clients can focus on their core business while we handle the technical complexities.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              What sets us apart is our commitment to serving ALL clients - from individual entrepreneurs to enterprise corporations. We believe elite development expertise should be accessible to everyone, not just the privileged few.
            </p>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600">
                <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-gray-300">Modern Stack</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Global Support</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600">
                <div className="text-3xl font-bold text-green-400 mb-2">∞</div>
                <div className="text-gray-300">Client Types</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600">
                <div className="text-3xl font-bold text-orange-400 mb-2">2025</div>
                <div className="text-gray-300">Founded</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 text-lg max-w-4xl mx-auto">
            Our journey began with a simple belief: technology should empower, not complicate. Today, we're building the future of digital transformation,
            one client at a time, ensuring that exceptional development services are accessible to all who seek them.
          </p>
        </motion.div>
      </div>
    </section>
  );
}