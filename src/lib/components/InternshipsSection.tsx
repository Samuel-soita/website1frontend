"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function InternshipsSection() {
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
    }
  ];

  return (
    <section id="internships" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
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
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Internship</span> Programs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Launch your career in tech with our comprehensive apprenticeship and internship programs
          </p>
        </motion.div>

        {/* Program Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Why Choose SMIRROR?</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Our internship programs are designed to provide you with real-world experience and the skills employers are looking for.
                  Unlike traditional internships, you'll work on actual client projects from day one.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-green-400">
                    <span className="mr-3">✅</span>
                    <span>Paid internships with competitive compensation</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <span className="mr-3">✅</span>
                    <span>Flexible remote work options</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <span className="mr-3">✅</span>
                    <span>Direct mentorship from experienced developers</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <span className="mr-3">✅</span>
                    <span>Portfolio-worthy projects for your resume</span>
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
          </div>
        </motion.div>

        {/* Program Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Program Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                    <p className="text-blue-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Application CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
            <p className="text-xl text-gray-300 mb-6">
              Join our next cohort and transform your career in tech. Applications are now open!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Apply Now
              </Link>
              <Link
                href="#contact"
                className="border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              📧 Contact us at hello@smirror.solutions for program details
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}