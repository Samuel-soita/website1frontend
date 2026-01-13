"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroBackground from "@/components/HeroBackground";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        <section className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <HeroBackground />
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">About SMIRROR Solutions</h1>
            <p className="text-gray-300">Full-stack development consultancy</p>
          </div>

            <div className="space-y-8 max-w-6xl mx-auto">
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
                  <h2 className="text-3xl font-bold text-white mb-5 group-hover:text-blue-400 transition-colors duration-700">Our Mission</h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6 group-hover:text-gray-100 transition-colors duration-700">
                    Democratize access to elite development services through quality, innovation, and partnership. We serve all clients from individuals to enterprises.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/who-we-are"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30"
                    >
                      Meet Our Team
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link
                      href="/vision"
                      className="inline-flex items-center px-6 py-3 bg-gray-800/50 border border-gray-700 hover:border-blue-500 hover:bg-gray-800/70 text-white rounded-lg font-semibold transition-all duration-500 transform hover:scale-105"
                    >
                      Our Vision
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Services Cards - Professional Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.03,
                    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
                  }}
                  className="bg-gradient-to-br from-gray-800/70 via-gray-800/60 to-gray-900/70 border border-gray-700/60 rounded-2xl p-9 shadow-xl hover:border-blue-500/60 hover:bg-gray-800/80 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group cursor-pointer relative overflow-hidden backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600/30 to-purple-600/30 flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                        <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-700">What We Do</h3>
                    </div>
                    <ul className="space-y-4 text-gray-300 text-base mb-6 group-hover:text-gray-100 transition-colors duration-700">
                      <li className="flex items-start group/item">
                        <span className="text-blue-400 mr-3 mt-1 group-hover/item:scale-125 transition-transform duration-300">▸</span>
                        <span>Full-stack web applications</span>
                      </li>
                      <li className="flex items-start group/item">
                        <span className="text-blue-400 mr-3 mt-1 group-hover/item:scale-125 transition-transform duration-300">▸</span>
                        <span>API development & integration</span>
                      </li>
                      <li className="flex items-start group/item">
                        <span className="text-blue-400 mr-3 mt-1 group-hover/item:scale-125 transition-transform duration-300">▸</span>
                        <span>Database design & optimization</span>
                      </li>
                      <li className="flex items-start group/item">
                        <span className="text-blue-400 mr-3 mt-1 group-hover/item:scale-125 transition-transform duration-300">▸</span>
                        <span>Responsive web interfaces</span>
                      </li>
                    </ul>
                    <Link
                      href="/services"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300 group/link"
                    >
                      Explore Services
                      <svg className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.03,
                    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
                  }}
                  className="bg-gradient-to-br from-gray-800/70 via-gray-800/60 to-gray-900/70 border border-gray-700/60 rounded-2xl p-9 shadow-xl hover:border-purple-500/60 hover:bg-gray-800/80 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group cursor-pointer relative overflow-hidden backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-pink-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600/30 to-pink-600/30 flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                        <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-700">Our Approach</h3>
                    </div>
                    <ul className="space-y-4 text-gray-300 text-base mb-6 group-hover:text-gray-100 transition-colors duration-700">
                      <li className="flex items-start group/item">
                        <span className="text-purple-400 mr-3 mt-1 group-hover/item:scale-125 transition-transform duration-300">▸</span>
                        <span>Modern development practices</span>
                      </li>
                      <li className="flex items-start group/item">
                        <span className="text-purple-400 mr-3 mt-1 group-hover/item:scale-125 transition-transform duration-300">▸</span>
                        <span>Modern development practices</span>
                      </li>
                      <li className="flex items-start group/item">
                        <span className="text-purple-400 mr-3 mt-1 group-hover/item:scale-125 transition-transform duration-300">▸</span>
                        <span>Agile & collaborative</span>
                      </li>
                      <li className="flex items-start group/item">
                        <span className="text-purple-400 mr-3 mt-1 group-hover/item:scale-125 transition-transform duration-300">▸</span>
                        <span>Quality-focused delivery</span>
                      </li>
                    </ul>
                    <Link
                      href="/who-we-are"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300 group/link"
                    >
                      Meet The Team
                      <svg className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Additional Content Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
                  }}
                  className="bg-gradient-to-br from-gray-800/70 via-gray-800/60 to-gray-900/70 border border-gray-700/60 rounded-2xl p-9 shadow-xl hover:border-green-500/60 hover:bg-gray-800/80 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group cursor-pointer relative overflow-hidden backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600/0 via-green-600/10 to-emerald-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-600/30 to-emerald-600/30 flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                        <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-700">Our Services</h3>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6 group-hover:text-gray-100 transition-colors duration-700">
                      We offer comprehensive technology solutions including web development, API integration, database management, and IT consulting.
                    </p>
                    <Link
                      href="/services"
                      className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold transition-colors duration-300 group/link"
                    >
                      Explore Services
                      <svg className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
                  }}
                  className="bg-gradient-to-br from-gray-800/70 via-gray-800/60 to-gray-900/70 border border-gray-700/60 rounded-2xl p-9 shadow-xl hover:border-orange-500/60 hover:bg-gray-800/80 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group cursor-pointer relative overflow-hidden backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/0 via-orange-600/10 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-600/30 to-red-600/30 flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                        <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-700">Why Choose Us</h3>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6 group-hover:text-gray-100 transition-colors duration-700">
                      We deliver exceptional quality with modern development practices and a commitment to your success.
                    </p>
                    <Link
                      href="/who-we-are"
                      className="inline-flex items-center text-orange-400 hover:text-orange-300 font-semibold transition-colors duration-300 group/link"
                    >
                      Learn More
                      <svg className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}