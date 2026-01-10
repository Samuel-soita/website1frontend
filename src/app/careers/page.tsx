"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroBackground from "@/components/HeroBackground";
import Sidebar from "@/components/Sidebar";

export default function CareersPage() {
  const positions = [
    {
      title: "Senior Full-Stack Developer",
      type: "Full-time",
      location: "Remote",
      description: "Lead development of complex web applications using TypeScript, React, and Node.js.",
      requirements: ["5+ years experience", "TypeScript expertise", "Team leadership"]
    },
    {
      title: "Frontend Developer",
      type: "Full-time",
      location: "Remote",
      description: "Build beautiful, responsive user interfaces with React and modern CSS frameworks.",
      requirements: ["3+ years experience", "React proficiency", "UI/UX focus"]
    },
    {
      title: "Backend Developer",
      type: "Full-time",
      location: "Remote",
      description: "Design and implement scalable APIs and database solutions.",
      requirements: ["3+ years experience", "Node.js/Python", "Database design"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Sidebar />
      <Navigation />

      <main className="pt-16">
        <section className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <HeroBackground />
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-white mb-2">Careers at SMIRROR Solutions</h1>
              <p className="text-gray-300 text-lg">Join our team and shape the future of web development</p>
            </div>

            <div className="space-y-8">
              {/* Benefits Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-gray-800/70 via-gray-800/60 to-gray-900/70 backdrop-blur-sm rounded-2xl p-9 shadow-lg border border-gray-700/60"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Why Work With Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: "💼", title: "Remote Work", desc: "Work from anywhere in the world" },
                    { icon: "📈", title: "Growth", desc: "Career development opportunities" },
                    { icon: "🎓", title: "Learning", desc: "Continuous skill development" },
                    { icon: "🤝", title: "Team Culture", desc: "Collaborative and supportive" }
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="text-3xl">{benefit.icon}</div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">{benefit.title}</h3>
                        <p className="text-gray-300 text-sm">{benefit.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Open Positions */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Open Positions</h2>
                <div className="space-y-6">
                  {positions.map((position, index) => (
                    <motion.div
                      key={position.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      whileHover={{ y: -5, transition: { duration: 0.3 } }}
                      className="bg-gradient-to-br from-gray-800/70 via-gray-800/60 to-gray-900/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-700/60 hover:border-blue-500/60 hover:bg-gray-800/80 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-500">
                            {position.title}
                          </h3>
                          <div className="flex flex-wrap gap-3 text-sm">
                            <span className="text-blue-400">{position.type}</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-300">{position.location}</span>
                          </div>
                        </div>
                        <Link
                          href="#contact"
                          className="mt-4 md:mt-0 inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-500 transform hover:scale-105 shadow-lg"
                        >
                          Apply Now
                        </Link>
                      </div>
                      <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-500">
                        {position.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {position.requirements.map((req, reqIndex) => (
                          <span
                            key={reqIndex}
                            className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-full text-xs text-gray-300"
                          >
                            {req}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-gradient-to-br from-blue-600/10 via-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-9 shadow-lg border border-blue-500/30 text-center"
              >
                <h2 className="text-2xl font-bold text-white mb-4">Don't See a Match?</h2>
                <p className="text-gray-300 mb-6">
                  We're always looking for talented developers. Send us your resume and we'll keep you in mind for future opportunities.
                </p>
                <Link
                  href="#contact"
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-500 transform hover:scale-105 shadow-lg"
                >
                  Submit General Application
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
