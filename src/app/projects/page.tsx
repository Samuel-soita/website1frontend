"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroBackground from "@/components/HeroBackground";

export default function Projects() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <HeroBackground />
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                Our Projects
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
                Discover our portfolio of successful web development projects
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300 group"
              >
                <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">E-commerce Platform</h3>
                <p className="text-white/80 mb-4">
                  A full-featured online store with secure payments and inventory management.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-500/20 text-blue-300 text-sm px-3 py-1 rounded-full">Next.js</span>
                  <span className="bg-purple-500/20 text-purple-300 text-sm px-3 py-1 rounded-full">Stripe</span>
                  <span className="bg-green-500/20 text-green-300 text-sm px-3 py-1 rounded-full">PostgreSQL</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300 group"
              >
                <div className="w-full h-48 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-16 h-16 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Chatbot</h3>
                <p className="text-white/80 mb-4">
                  An intelligent chatbot integrated with various services for customer support.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-500/20 text-orange-300 text-sm px-3 py-1 rounded-full">Python</span>
                  <span className="bg-blue-500/20 text-blue-300 text-sm px-3 py-1 rounded-full">React</span>
                  <span className="bg-purple-500/20 text-purple-300 text-sm px-3 py-1 rounded-full">TensorFlow</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300 group"
              >
                <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-16 h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Healthcare System</h3>
                <p className="text-white/80 mb-4">
                  A secure and efficient system for managing patient records and appointments.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-500/20 text-green-300 text-sm px-3 py-1 rounded-full">Angular</span>
                  <span className="bg-blue-500/20 text-blue-300 text-sm px-3 py-1 rounded-full">Node.js</span>
                  <span className="bg-purple-500/20 text-purple-300 text-sm px-3 py-1 rounded-full">MongoDB</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-16"
            >
              <Link
                href="/services"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30"
              >
                View Our Services →
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}