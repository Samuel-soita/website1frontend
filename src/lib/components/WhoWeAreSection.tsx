"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhoWeAreSection() {
  return (
    <section id="who-we-are" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
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
            Who <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">We Are</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the visionary behind SMIRROR Solutions and our commitment to excellence
          </p>
        </motion.div>

        {/* Founder Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Founder Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">Samuel Soita Watua</h3>
            <p className="text-lg text-blue-400 font-semibold">Founder & CEO</p>
            <p className="text-gray-300 text-lg leading-relaxed">
              A passionate full-stack developer with a vision to democratize access to elite development expertise.
              With extensive experience in TypeScript, React, Node.js, and modern web technologies, Samuel founded SMIRROR Solutions
              to bridge the gap between exceptional technical talent and businesses of all sizes.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              His journey began with a simple belief: technology should empower entrepreneurs and businesses, not complicate their growth.
              This conviction drives everything we do at SMIRROR Solutions.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">Full-Stack Developer</span>
              <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">TypeScript Expert</span>
              <span className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm">Entrepreneur</span>
            </div>
          </motion.div>

          {/* Placeholder for founder image - using a professional icon */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <div className="w-72 h-72 bg-gray-800 rounded-full flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <div className="text-xl font-bold">Samuel Soita Watua</div>
                  <div className="text-sm text-gray-300">Founder & CEO</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Company Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Our Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-bold text-white mb-3">Client-Centric</h4>
              <p className="text-gray-300">Every solution we build starts with understanding your unique needs and goals.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-bold text-white mb-3">Innovation First</h4>
              <p className="text-gray-300">We stay ahead of technology trends to deliver cutting-edge solutions.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-bold text-white mb-3">Partnership Approach</h4>
              <p className="text-gray-300">We work alongside you as partners, not just service providers.</p>
            </div>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              "Empower businesses and individuals through comprehensive technology solutions, from elite development services
              to talent development programs and IT infrastructure management. We believe exceptional technology should be
              accessible to all, not just the privileged few."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}