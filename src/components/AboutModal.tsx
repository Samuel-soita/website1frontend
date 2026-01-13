"use client";

import { motion } from "framer-motion";
import Modal from "./Modal";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="About SMIRROR Solutions" size="xl">
      <div className="space-y-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Elite Full-Stack Development Consultancy
          </h3>
          <p className="text-xl text-gray-300">
            Empowering businesses through comprehensive technology solutions
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div>
            <h4 className="text-2xl font-bold text-white mb-4">Our Story</h4>
            <p className="text-gray-300 leading-relaxed mb-4">
              Founded in January 2025 by Samuel Soita Watua, SMIRROR Solutions emerged from a vision to bridge the gap between exceptional development talent and businesses seeking transformative digital solutions.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              We specialize in modern web applications, delivering everything from simple websites to complex full-stack systems. Our approach ensures clients can focus on their core business while we handle the technical complexities.
            </p>
            <p className="text-gray-300 leading-relaxed">
              What sets us apart is our commitment to serving ALL clients - from individual entrepreneurs to enterprise corporations. We believe elite development expertise should be accessible to everyone, not just the privileged few.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-white mb-4">Key Statistics</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: "100%", label: "Modern Stack" },
              { number: "24/7", label: "Global Support" },
              { number: "∞", label: "Client Types" },
              { number: "2025", label: "Founded" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="text-2xl font-bold text-blue-400 mb-1 group-hover:text-blue-300 transition-colors duration-300">{stat.number}</div>
                <div className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          </div>
        </motion.div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-2xl font-bold text-white mb-6">Our Technology Stack</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "TypeScript", "React/Next.js", "Node.js", "PostgreSQL",
              "Python", "AWS", "Docker", "Tailwind CSS"
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="bg-gray-800/40 border border-gray-700 rounded-lg p-3 text-center hover:border-blue-500/50 hover:bg-gray-800/60 transition-all duration-300 group"
              >
                <div className="text-white font-medium text-sm group-hover:text-blue-400 transition-colors duration-300">{tech}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-gray-800/50 rounded-lg p-6 border border-blue-500/30"
        >
          <p className="text-lg text-gray-300 italic">
            "Our journey began with a simple belief: technology should empower, not complicate. Today, we're building the future of digital transformation,
            one client at a time, ensuring that exceptional development services are accessible to all who seek them."
          </p>
        </motion.div>
      </div>
    </Modal>
  );
}