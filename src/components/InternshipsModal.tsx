"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Modal from "./Modal";

interface InternshipsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InternshipsModal({ isOpen, onClose }: InternshipsModalProps) {
  const programFeatures = [
    {
      icon: "🎓",
      title: "Structured Learning",
      description: "6-12 month comprehensive training programs designed for real skill development."
    },
    {
      icon: "💼",
      title: "Real Projects",
      description: "Hands-on experience working on actual client projects, not just tutorials."
    },
    {
      icon: "🛠️",
      title: "Technical Skills",
      description: "Master TypeScript, React, Node.js, and modern development practices."
    },
    {
      icon: "🤝",
      title: "Soft Skills Development",
      description: "Communication, teamwork, and professional development training."
    },
    {
      icon: "🎯",
      title: "Career Guidance",
      description: "Industry-relevant experience and personalized mentorship."
    },
    {
      icon: "🚀",
      title: "Portfolio Building",
      description: "Create impressive projects that showcase your abilities to employers."
    }
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Former Intern, Now Junior Developer",
      content: "The SMIRROR internship program gave me the confidence and skills to land my dream job. Working on real projects was invaluable.",
      avatar: "👨‍💻"
    },
    {
      name: "Sarah Chen",
      role: "Full-Stack Developer",
      content: "The mentorship I received was exceptional. They didn't just teach me code—they taught me how to think like a developer.",
      avatar: "👩‍💻"
    },
    {
      name: "Michael Rodriguez",
      role: "Software Engineer",
      content: "Best investment in my career. The program taught me industry best practices and gave me real-world experience.",
      avatar: "👨‍💻"
    }
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Internship Programs" size="xl">
      <div className="space-y-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Launch Your Career in Tech
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive apprenticeship and internship programs designed for real skill development and career growth
          </p>
        </motion.div>

        {/* Program Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gray-800/50 border border-blue-500/30 rounded-xl p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-bold text-white mb-4">Why Choose SMIRROR?</h4>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our internship programs are designed to provide you with real-world experience and the skills employers are looking for.
                Unlike traditional internships, you'll work on actual client projects from day one.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-green-400">
                  <span className="mr-3">✅</span>
                  <span className="text-gray-300">Paid internships with competitive compensation</span>
                </div>
                <div className="flex items-center text-green-400">
                  <span className="mr-3">✅</span>
                  <span className="text-gray-300">Flexible remote work options</span>
                </div>
                <div className="flex items-center text-green-400">
                  <span className="mr-3">✅</span>
                  <span className="text-gray-300">Direct mentorship from experienced developers</span>
                </div>
                <div className="flex items-center text-green-400">
                  <span className="mr-3">✅</span>
                  <span className="text-gray-300">Portfolio-worthy projects for your resume</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-48 h-48 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-6xl">🚀</div>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Launch Your Career</h4>
              <p className="text-gray-300">Join the next generation of tech innovators</p>
            </div>
          </div>
        </motion.div>

        {/* Program Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-2xl font-bold text-white mb-6 text-center">Program Features</h4>
          <div className="grid grid-cols-1 gap-4">
            {programFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{
                  x: 8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-all duration-300 cursor-pointer group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="text-center">
                    <div className="text-3xl mb-3">{feature.icon}</div>
                    <h5 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{feature.title}</h5>
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{feature.description}</p>
                  </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Program Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div>
            <h4 className="text-2xl font-bold text-white mb-4">Program Structure</h4>
            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-600">
                <h5 className="text-lg font-semibold text-blue-400 mb-2">Phase 1: Foundation (Weeks 1-4)</h5>
                <p className="text-gray-300 text-sm">TypeScript fundamentals, Git workflow, and development environment setup.</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-600">
                <h5 className="text-lg font-semibold text-purple-400 mb-2">Phase 2: Core Development (Weeks 5-12)</h5>
                <p className="text-gray-300 text-sm">React, Node.js, database design, and full-stack project work.</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-600">
                <h5 className="text-lg font-semibold text-green-400 mb-2">Phase 3: Advanced Projects (Weeks 13-24)</h5>
                <p className="text-gray-300 text-sm">Real client projects, deployment, and portfolio development.</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-white mb-4">What You'll Learn</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                <span className="text-gray-300">Modern JavaScript & TypeScript</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                <span className="text-gray-300">React & Next.js development</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                <span className="text-gray-300">Node.js & API development</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                <span className="text-gray-300">Database design & management</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                <span className="text-gray-300">DevOps & deployment</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                <span className="text-gray-300">Agile development practices</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                <span className="text-gray-300">Professional communication</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h4 className="text-2xl font-bold text-white mb-6 text-center">Success Stories</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  x: 8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-all duration-300 cursor-pointer group"
              >
                  <div className="text-center">
                    <div className="text-3xl mb-3">{testimonial.avatar}</div>
                    <h5 className="text-lg font-semibold text-white mb-1 group-hover:text-green-400 transition-colors duration-300">{testimonial.name}</h5>
                    <p className="text-green-400 text-sm mb-3 group-hover:text-green-300 transition-colors duration-300">{testimonial.role}</p>
                    <p className="text-gray-300 italic text-sm group-hover:text-gray-200 transition-colors duration-300">"{testimonial.content}"</p>
                  </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Application CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center bg-gray-800/50 border border-blue-500/30 rounded-xl p-8"
        >
          <h4 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h4>
          <p className="text-xl text-gray-300 mb-6">
            Join our next cohort and transform your career in tech. Applications are now open!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              onClick={onClose}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Apply Now
            </Link>
            <Link
              href="#contact"
              onClick={onClose}
              className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            📧 Contact us at hello@smirror.solutions for program details
          </p>
        </motion.div>
      </div>
    </Modal>
  );
}