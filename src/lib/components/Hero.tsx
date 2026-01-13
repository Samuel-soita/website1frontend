'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SparklesIcon, CodeBracketIcon, CpuChipIcon } from "@heroicons/react/24/outline";
import ReferralWidget from "./ReferralWidget";
import TalkToUsWidget from "./TalkToUsWidget";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Referral Widget */}
      <ReferralWidget />
      {/* Talk to Us Widget */}
      <TalkToUsWidget />
      
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden" suppressHydrationWarning>
        {mounted ? (
          <>
            <motion.div
              className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
              initial={false}
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl"
              initial={false}
              animate={{
                x: [0, -60, 0],
                y: [0, 40, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-2xl"
              initial={false}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </>
        ) : (
          <>
            <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-2xl" />
          </>
        )}
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main Headline */}
        <h1
          id="hero-heading"
          className="text-5xl sm:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight relative"
        >
          <div suppressHydrationWarning>
            {mounted ? (
              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span
                  className="block text-white drop-shadow-lg"
                  initial={false}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Professional Web
                </motion.span>
                <motion.span
                  className="block relative"
                  initial={false}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <span className="text-white drop-shadow-lg">
                    Development
                  </span>
                </motion.span>
                <motion.span
                  className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mt-4 drop-shadow-lg font-bold"
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  That Lets You Relax
                </motion.span>
              </motion.div>
            ) : (
              <div>
                <span className="block text-white drop-shadow-lg">
                  Professional Web
                </span>
                <span className="block relative">
                  <span className="text-white drop-shadow-lg">
                    Development
                  </span>
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mt-4 drop-shadow-lg font-bold">
                  That Lets You Relax
                </span>
              </div>
            )}
          </div>
        </h1>

        {/* Subheadline */}
        <div suppressHydrationWarning>
          {mounted ? (
            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-xl sm:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed font-medium"
            >
              We handle everything - from websites to complex web apps.
              You focus on your business, we manage the technology.
            </motion.p>
          ) : (
            <p className="text-xl sm:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
              We handle everything - from websites to complex web apps.
              You focus on your business, we manage the technology.
            </p>
          )}
        </div>

        {/* Enhanced Tech Stack Highlight */}
        <div suppressHydrationWarning>
          {mounted ? (
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mb-10"
            >
              <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
                <motion.div
                  className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 shadow-sm border border-gray-300 hover:border-gray-400 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <CodeBracketIcon className="w-5 h-5 text-gray-600" />
                  <span className="font-medium text-white">TypeScript</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 shadow-sm border border-gray-300 hover:border-gray-400 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className="text-lg">⚛️</span>
                  <span className="font-medium text-white">React</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 shadow-sm border border-gray-300 hover:border-gray-400 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <CpuChipIcon className="w-5 h-5 text-gray-600" />
                  <span className="font-medium text-white">Node.js</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 shadow-sm border border-gray-300 hover:border-gray-400 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className="text-lg">🐍</span>
                  <span className="font-medium text-white">Python</span>
                </motion.div>
              </div>

              {/* Animated accent line */}
              <div className="flex justify-center">
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              </div>
            </motion.div>
          ) : (
            <div className="mb-10">
              <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 shadow-sm border border-gray-300 hover:border-gray-400 transition-all duration-300">
                  <CodeBracketIcon className="w-5 h-5 text-gray-600" />
                  <span className="font-medium text-white">TypeScript</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 shadow-sm border border-gray-300 hover:border-gray-400 transition-all duration-300">
                  <span className="text-lg">⚛️</span>
                  <span className="font-medium text-white">React</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 shadow-sm border border-gray-300 hover:border-gray-400 transition-all duration-300">
                  <CpuChipIcon className="w-5 h-5 text-gray-600" />
                  <span className="font-medium text-white">Node.js</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 shadow-sm border border-gray-300 hover:border-gray-400 transition-all duration-300">
                  <span className="text-lg">🐍</span>
                  <span className="font-medium text-white">Python</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced CTA Buttons */}
        <div suppressHydrationWarning>
          {mounted ? (
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="#contact"
                  className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3"
                >
                  <SparklesIcon className="w-5 h-5" />
                  <span>Get Free Consultation</span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="#portfolio"
                  className="border-2 border-white hover:border-gray-200 text-white hover:text-gray-100 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-200 bg-gray-800/70 backdrop-blur-sm shadow-lg hover:shadow-xl"
                >
                  <span>View Our Work</span>
                </Link>
              </motion.div>
            </motion.div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                href="#contact"
                className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3"
              >
                <SparklesIcon className="w-5 h-5" />
                <span>Get Free Consultation</span>
              </Link>
              <Link
                href="#portfolio"
                className="border-2 border-white hover:border-gray-200 text-white hover:text-gray-100 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-200 bg-gray-800/70 backdrop-blur-sm shadow-lg hover:shadow-xl"
              >
                <span>View Our Work</span>
              </Link>
            </div>
          )}
        </div>

        {/* Enhanced Trust Indicators */}
        <div suppressHydrationWarning>
          {mounted ? (
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              <motion.div
                className="group relative bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-5xl font-bold text-gray-800 mb-3">
                    50+
                  </div>
                  <div className="text-white font-medium text-lg">Projects Completed</div>
                  <motion.div
                    className="w-full h-1 bg-gray-400 mt-4 rounded-full"
                    initial={false}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
              <motion.div
                className="group relative bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-5xl font-bold text-gray-800 mb-3">
                    24/7
                  </div>
                  <div className="text-white font-medium text-lg">Support Available</div>
                  <motion.div
                    className="w-full h-1 bg-gray-400 mt-4 rounded-full"
                    initial={false}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
              <motion.div
                className="group relative bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-5xl font-bold text-gray-800 mb-3">
                    100%
                  </div>
                  <div className="text-white font-medium text-lg">Client Satisfaction</div>
                  <motion.div
                    className="w-full h-1 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 mt-4 rounded-full"
                    initial={false}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="group relative bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-5xl font-bold text-gray-800 mb-3">50+</div>
                  <div className="text-white font-medium text-lg">Projects Completed</div>
                  <div className="w-full h-1 bg-gray-400 mt-4 rounded-full"></div>
                </div>
              </div>
              <div className="group relative bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-5xl font-bold text-gray-800 mb-3">24/7</div>
                  <div className="text-white font-medium text-lg">Support Available</div>
                  <div className="w-full h-1 bg-gray-400 mt-4 rounded-full"></div>
                </div>
              </div>
              <div className="group relative bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-5xl font-bold text-gray-800 mb-3">100%</div>
                  <div className="text-white font-medium text-lg">Client Satisfaction</div>
                  <div className="w-full h-1 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 mt-4 rounded-full"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div suppressHydrationWarning>
        {mounted ? (
          <motion.div
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-8 h-14 border-2 border-gray-400 rounded-full flex justify-center bg-white/20 backdrop-blur-sm"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-4 bg-gray-600 rounded-full mt-3"
              />
            </motion.div>
            <motion.p
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="text-white text-sm mt-2"
            >
              Scroll to explore
            </motion.p>
          </motion.div>
        ) : (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-8 h-14 border-2 border-gray-400 rounded-full flex justify-center bg-white/20 backdrop-blur-sm">
              <div className="w-1.5 h-4 bg-gray-600 rounded-full mt-3" />
            </div>
            <p className="text-white text-sm mt-2">Scroll to explore</p>
          </div>
        )}
      </div>
    </section>
  );
}
