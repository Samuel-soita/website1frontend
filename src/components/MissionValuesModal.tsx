"use client";

import { motion } from "framer-motion";
import Modal from "./Modal";

interface MissionValuesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MissionValuesModal({ isOpen, onClose }: MissionValuesModalProps) {
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
    <Modal isOpen={isOpen} onClose={onClose} title="Our Mission & Core Values" size="xl">
      <div className="space-y-8">
        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-8">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                "Empower businesses and individuals through comprehensive technology solutions, from elite development services
                to talent development programs and IT infrastructure management."
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                "Become the world's most trusted technology partner, democratizing access to elite development expertise,
                nurturing emerging tech talent, and delivering comprehensive business solutions that drive sustainable growth."
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Core Values Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Core Values</h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The principles that guide everything we do at SMIRROR Solutions
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 gap-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                x: 8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center hover:border-gray-600 transition-all duration-300 cursor-pointer group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-${value.color === 'from-yellow-500 to-orange-500' ? 'orange' : value.color === 'from-blue-500 to-purple-500' ? 'blue' : value.color === 'from-green-500 to-teal-500' ? 'green' : 'purple'}-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className={`text-3xl mb-3 group-hover:scale-110 transition-transform duration-300`}>{value.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{value.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Values Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div>
            <h4 className="text-2xl font-bold text-white mb-4">Why Values Matter</h4>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our core values aren't just words on a page—they're the foundation of everything we build and every relationship we nurture.
              They guide us in delivering not just solutions, but meaningful transformations.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Every decision we make, from project planning to client interactions, is filtered through these values to ensure
              we consistently deliver excellence that matters.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-white mb-4">Living Our Values</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-blue-400 mt-1">•</div>
                <div>
                  <strong className="text-white">Excellence:</strong>
                  <span className="text-gray-300 ml-2">Rigorous testing and code reviews</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-purple-400 mt-1">•</div>
                <div>
                  <strong className="text-white">Innovation:</strong>
                  <span className="text-gray-300 ml-2">Continuous learning and cutting-edge tech</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-green-400 mt-1">•</div>
                <div>
                  <strong className="text-white">Integrity:</strong>
                  <span className="text-gray-300 ml-2">Transparent communication and honest feedback</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-pink-400 mt-1">•</div>
                <div>
                  <strong className="text-white">Growth:</strong>
                  <span className="text-gray-300 ml-2">Mentorship and skill development programs</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Closing Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg p-6 border border-gray-600"
        >
          <p className="text-lg text-gray-300 italic mb-4">
            "Our values aren't just words on a page—they're the foundation of everything we build and every relationship we nurture.
            They guide us in delivering not just solutions, but meaningful transformations."
          </p>
          <p className="text-sm text-gray-400">— Samuel Soita Watua, Founder & CEO</p>
        </motion.div>
      </div>
    </Modal>
  );
}