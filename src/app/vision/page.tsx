"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import HeroBackground from "@/components/HeroBackground";
import Sidebar from "@/components/Sidebar";

export default function VisionPage() {
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
    <div className="min-h-screen">
      <Sidebar />

      <main className="pt-16">
        <section className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <HeroBackground />
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 relative z-10">
              <h1 className="text-3xl font-bold text-white mb-2">Our Vision & Values</h1>
              <p className="text-gray-300">Principles guiding our work</p>
            </div>

            <div className="space-y-8 relative z-10">
              {/* Mission Card - Enhanced */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
                }}
                className="bg-gradient-to-br from-gray-800/70 via-gray-800/60 to-gray-900/70 border border-gray-700/60 rounded-2xl p-9 shadow-xl hover:border-blue-500/60 hover:bg-gray-800/80 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group relative overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-white mb-5 group-hover:text-blue-400 transition-colors duration-700">Mission</h2>
                  <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-100 transition-colors duration-700">
                    Empower businesses through quality technology solutions and democratize access to elite development expertise.
                  </p>
                </div>
              </motion.div>

              {/* Vision Card - Enhanced */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
                }}
                className="bg-gradient-to-br from-gray-800/70 via-gray-800/60 to-gray-900/70 border border-gray-700/60 rounded-2xl p-9 shadow-xl hover:border-purple-500/60 hover:bg-gray-800/80 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group relative overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-pink-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-white mb-5 group-hover:text-purple-400 transition-colors duration-700">Vision</h2>
                  <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-100 transition-colors duration-700">
                    Become the world's most trusted technology partner, delivering sustainable growth through innovation.
                  </p>
                </div>
              </motion.div>

              {/* Core Values Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1, ease: [0.23, 1, 0.32, 1] }}
                    whileHover={{
                      y: -8,
                      scale: 1.04,
                      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
                    }}
                    className="bg-gradient-to-br from-gray-800/70 via-gray-800/60 to-gray-900/70 border border-gray-700/60 rounded-2xl p-8 shadow-xl hover:border-blue-500/60 hover:bg-gray-800/80 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group cursor-pointer relative overflow-hidden text-center backdrop-blur-sm"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                    <div className="relative z-10">
                      <div className="text-6xl mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">{value.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-700">{value.title}</h3>
                      <p className="text-gray-300 text-base leading-relaxed group-hover:text-gray-100 transition-colors duration-700">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}