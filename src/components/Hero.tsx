'use client';

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const ReferralWidget = dynamic(() => import("./ReferralWidget"), {
  ssr: false,
});

const TalkToUsWidget = dynamic(() => import("./TalkToUsWidget"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="hero-heading"
      suppressHydrationWarning
    >
      {/* Referral Widget */}
      <ReferralWidget />
      {/* Talk to Us Widget */}
      <TalkToUsWidget />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Main Headline */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
            >
              <span className="block">Professional Web</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Development
              </span>
              <span className="block text-xl sm:text-2xl lg:text-3xl font-medium mt-4 text-gray-300">
                That Lets You Relax
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              We handle everything - from websites to complex web apps.
              You focus on your business, we manage the technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#contact"
                  className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-500 hover:via-purple-500 hover:to-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 overflow-hidden"
                >
                  <span className="relative z-10">Get Free Consultation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/projects"
                  className="group relative border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-xl text-lg font-semibold backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-500 overflow-hidden"
                >
                  <span className="relative z-10">View Our Projects</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
              </motion.div>
            </div>

            {/* Trust Indicators - Mobile Only */}
            <div className="grid grid-cols-3 gap-4 lg:hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="group bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="text-2xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">50+</div>
                <div className="text-xs text-white/70">Projects</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="group bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="text-2xl font-bold text-white mb-1 group-hover:text-green-300 transition-colors duration-300">24/7</div>
                <div className="text-xs text-white/70">Support</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="text-2xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors duration-300">100%</div>
                <div className="text-xs text-white/70">Satisfaction</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center items-center"
          >
            {/* Main Hero Image */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative max-w-md mx-auto"
            >
              {/* Animated Background Elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-lg animate-pulse delay-1000"></div>

              {/* Hero Image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 group">
                <Image
                  src="/SM.ICON.png"
                  alt="SMIRROR Hero Image"
                  fill
                  sizes="(max-width: 768px) 320px, 384px"
                  loading="eager"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-4 -left-6 w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl opacity-80 shadow-lg"
                >
                  <div className="w-full h-full flex items-center justify-center text-white text-base">⚡</div>
                </motion.div>

                <motion.div
                  animate={{
                    rotate: [0, -3, 3, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute bottom-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl opacity-80 shadow-lg"
                >
                  <div className="w-full h-full flex items-center justify-center text-white text-xs">🚀</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden lg:block mt-20"
        >
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-purple-500/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-blue-400/60 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 group-hover:from-blue-500/20 group-hover:via-blue-500/30 group-hover:to-purple-500/20 transition-all duration-500 rounded-3xl"></div>
              <div className="relative z-10 text-center">
                <div className="text-5xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-500 drop-shadow-lg">50+</div>
                <div className="text-white/90 font-medium text-lg group-hover:text-white transition-colors duration-500">Projects Completed</div>
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent mt-4 rounded-full group-hover:from-blue-400/50 group-hover:via-blue-400 group-hover:to-purple-400/50 transition-all duration-500"></div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative bg-gradient-to-br from-green-500/10 via-green-500/5 to-blue-500/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-green-400/60 shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-blue-500/0 group-hover:from-green-500/20 group-hover:via-green-500/30 group-hover:to-blue-500/20 transition-all duration-500 rounded-3xl"></div>
              <div className="relative z-10 text-center">
                <div className="text-5xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors duration-500 drop-shadow-lg">24/7</div>
                <div className="text-white/90 font-medium text-lg group-hover:text-white transition-colors duration-500">Support Available</div>
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent mt-4 rounded-full group-hover:from-green-400/50 group-hover:via-green-400 group-hover:to-blue-400/50 transition-all duration-500"></div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-pink-500/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-purple-400/60 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-pink-500/0 group-hover:from-purple-500/20 group-hover:via-purple-500/30 group-hover:to-pink-500/20 transition-all duration-500 rounded-3xl"></div>
              <div className="relative z-10 text-center">
                <div className="text-5xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-500 drop-shadow-lg">100%</div>
                <div className="text-white/90 font-medium text-lg group-hover:text-white transition-colors duration-500">Client Satisfaction</div>
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent mt-4 rounded-full group-hover:from-purple-400/50 group-hover:via-purple-400 group-hover:to-pink-400/50 transition-all duration-500"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
