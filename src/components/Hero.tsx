'use client';

import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
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
    >
      {/* Referral Widget */}
      <ReferralWidget />
      {/* Talk to Us Widget */}
      <TalkToUsWidget />

      <div className="max-w-7xl mx-auto w-full relative z-10 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 lg:mb-24">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            {/* Main Headline */}
            <motion.h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
            >
              Elite Full-Stack <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Development
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              We build your vision with precision. Comprehensive digital solutions from specialized experts who let you relax while we handle the technical complexity.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 w-full sm:w-auto"
              >
                <Link
                  href="#contact"
                  className="group relative inline-flex w-full sm:w-auto items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Project
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/projects"
                  className="group relative inline-flex w-full sm:w-auto items-center justify-center border border-gray-700 hover:border-gray-500 bg-gray-900/50 hover:bg-gray-800/50 text-white px-8 py-4 rounded-xl text-lg font-semibold backdrop-blur-sm transition-all duration-300"
                >
                  <span className="relative z-10">View Our Work</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Hero Image */}
          <motion.div
            className="relative flex justify-center items-center"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>

            {/* Main Image Container */}
            <div className="relative z-10 w-full max-w-lg aspect-square rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-xl p-4 shadow-2xl flex justify-center items-center">
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/SM.ICON.png"
                  alt="SMIRROR Solutions Dashboard"
                  fill
                  priority
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>

              {/* Decorative UI Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gray-900/90 backdrop-blur-md border border-gray-700 p-4 rounded-xl shadow-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Status</div>
                    <div className="text-white font-semibold">100% Secure</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Structured Trust Indicators Section */}
        <div className="border-t border-gray-800 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Metric 1 */}
            <div className="flex flex-col items-center md:items-start p-6 rounded-2xl bg-gray-900/30 border border-gray-800 hover:border-gray-700 transition-colors">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-lg font-medium text-gray-300 mb-1">Projects Delivered</div>
              <p className="text-sm text-gray-500 text-center md:text-left">Successful launches across multiple industries</p>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col items-center md:items-start p-6 rounded-2xl bg-gray-900/30 border border-gray-800 hover:border-gray-700 transition-colors">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-lg font-medium text-gray-300 mb-1">Active Support</div>
              <p className="text-sm text-gray-500 text-center md:text-left">Always available to ensure your business runs smoothly</p>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col items-center md:items-start p-6 rounded-2xl bg-gray-900/30 border border-gray-800 hover:border-gray-700 transition-colors">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-lg font-medium text-gray-300 mb-1">Client Satisfaction</div>
              <p className="text-sm text-gray-500 text-center md:text-left">Committed to excellence in every line of code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
