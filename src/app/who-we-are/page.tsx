"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import HeroBackground from "@/components/HeroBackground";
import Sidebar from "@/components/Sidebar";

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen">
      <Sidebar />

      <main className="pt-16">
        <section className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <HeroBackground />
          <div className="max-w-5xl mx-auto relative z-10">
            {/* Header */}
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-white mb-2">
                About Samuel Soita
              </h1>
              <p className="text-gray-300">
                Full-Stack Developer & Founder of SMIRROR Solutions
              </p>
            </div>

            {/* Founder Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{
                y: -8,
                transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
              }}
              className="bg-gradient-to-br from-gray-800/70 via-gray-800/60 to-gray-900/70 border border-gray-700/60 rounded-2xl p-9 shadow-xl mb-8 hover:border-blue-500/60 hover:bg-gray-800/80 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group relative overflow-hidden backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="space-y-5">
                  <h2 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-700">Samuel Soita Watua</h2>
                  <p className="text-blue-400 font-semibold text-xl">Founder & CEO</p>
                  <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-100 transition-colors duration-700">
                    Full-Stack Developer specializing in Python, JavaScript, and modern web technologies.
                    Experienced in building scalable applications and leading development projects.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-44 h-44 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-xl">
                    <div className="text-6xl">👨‍💻</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {[
                { title: "Frontend", skills: "React.js, HTML5, CSS3, Tailwind CSS", icon: "🎨" },
                { title: "Backend", skills: "Python, Node.js, REST APIs", icon: "⚙️" },
                { title: "Databases", skills: "PostgreSQL, MySQL, MongoDB", icon: "💾" }
              ].map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.23, 1, 0.32, 1] }}
                  whileHover={{
                    y: -8,
                    scale: 1.04,
                    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
                  }}
                  className="bg-gradient-to-br from-gray-800/70 via-gray-800/60 to-gray-900/70 border border-gray-700/60 rounded-2xl p-8 shadow-xl hover:border-blue-500/60 hover:bg-gray-800/80 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group cursor-pointer text-center relative overflow-hidden backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                  <div className="relative z-10">
                    <div className="text-5xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">{skill.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-700">{skill.title}</h3>
                    <p className="text-gray-300 text-base group-hover:text-gray-100 transition-colors duration-700">{skill.skills}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white text-center mb-8">Experience</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {[
                  { title: "Freelance Developer", period: "Jan 2024 – Present", desc: "Full-stack web applications, REST APIs, database design" },
                  { title: "IT Intern", period: "Jun 2022 – Sep 2022", desc: "Systems maintenance, database management" }
                ].map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1, ease: [0.23, 1, 0.32, 1] }}
                    whileHover={{
                      y: -8,
                      scale: 1.03,
                      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
                    }}
                    className="bg-gradient-to-br from-gray-800/70 via-gray-800/60 to-gray-900/70 border border-gray-700/60 rounded-2xl p-8 shadow-xl hover:border-blue-500/60 hover:bg-gray-800/80 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group cursor-pointer relative overflow-hidden backdrop-blur-sm"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-700">{exp.title}</h3>
                      <p className="text-blue-400 text-base mb-4 group-hover:text-blue-300 transition-colors duration-700">{exp.period}</p>
                      <p className="text-gray-300 text-base leading-relaxed group-hover:text-gray-100 transition-colors duration-700">{exp.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="text-center">
                <p className="text-gray-300 text-sm">
                  4+ years experience • 5+ major projects • TypeScript, Python, React.js
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{
                y: -8,
                transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
              }}
              className="bg-gradient-to-br from-gray-800/70 via-gray-800/60 to-gray-900/70 border border-gray-700/60 rounded-2xl p-9 shadow-xl mt-8 hover:border-purple-500/60 hover:bg-gray-800/80 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group relative overflow-hidden text-center backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-pink-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-5 group-hover:text-purple-400 transition-colors duration-700">Our Mission</h2>
                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-100 transition-colors duration-700">
                  Democratize access to elite development services through quality, innovation, and partnership.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}