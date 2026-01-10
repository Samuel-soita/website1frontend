"use client";

import { motion } from "framer-motion";
import Modal from "./Modal";

interface WhoWeAreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WhoWeAreModal({ isOpen, onClose }: WhoWeAreModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Who We Are" size="xl">
      <div className="space-y-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Meet the Vision Behind SMIRROR Solutions
          </h3>
          <p className="text-xl text-gray-300">
            Passionate about democratizing elite development expertise
          </p>
        </motion.div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          <div>
            <h4 className="text-2xl font-bold text-white mb-4">Samuel Soita Watua</h4>
            <p className="text-lg text-blue-400 font-semibold mb-4">Founder & CEO</p>
            <p className="text-gray-300 leading-relaxed mb-4">
              A passionate full-stack developer with a vision to democratize access to elite development expertise.
              With extensive experience in TypeScript, React, Node.js, and modern web technologies, Samuel founded SMIRROR Solutions
              to bridge the gap between exceptional technical talent and businesses of all sizes.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              His journey began with a simple belief: technology should empower entrepreneurs and businesses, not complicate their growth.
              This conviction drives everything we do at SMIRROR Solutions.
            </p>

            <div className="space-y-3">
              <h5 className="text-lg font-semibold text-white">Expertise</h5>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">Full-Stack Developer</span>
                <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">TypeScript Expert</span>
                <span className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm">Entrepreneur</span>
                <span className="bg-orange-600/20 text-orange-300 px-3 py-1 rounded-full text-sm">Tech Innovator</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="w-64 h-64 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-56 h-56 bg-gray-800 rounded-full flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-5xl mb-3">👨‍💻</div>
                  <div className="text-xl font-bold">Samuel Soita Watua</div>
                  <div className="text-sm text-gray-300">Founder & CEO</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Company Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-2xl font-bold text-white mb-6">Our Philosophy</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Client-Centric", desc: "Understanding unique needs and goals" },
              { title: "Innovation First", desc: "Ahead of technology trends" },
              { title: "Partnership Approach", desc: "Working alongside as partners" }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center hover:border-gray-600 transition-all duration-300 group"
              >
                <h5 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{value.title}</h5>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg p-6 border border-blue-500/20"
        >
          <h4 className="text-2xl font-bold text-white mb-4">Our Mission</h4>
          <p className="text-xl text-gray-300 leading-relaxed">
            "Empower businesses and individuals through comprehensive technology solutions, from elite development services
            to talent development programs and IT infrastructure management. We believe exceptional technology should be
            accessible to all, not just the privileged few."
          </p>
        </motion.div>
      </div>
    </Modal>
  );
}