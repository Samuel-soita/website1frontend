'use client';

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";

const ReferralWidget = dynamic(() => import("./ReferralWidget"), {
  ssr: false,
});

const TalkToUsWidget = dynamic(() => import("./TalkToUsWidget"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-black"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.1),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      
      {/* Referral Widget */}
      <ReferralWidget />
      {/* Talk to Us Widget */}
      <TalkToUsWidget />

      <div className="max-w-7xl mx-auto w-full relative z-10 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-blue-400 font-mono text-xs uppercase tracking-widest">Global Software Engineering</span>
            </motion.div>
            
            {/* Main Headline */}
            <motion.h1
              id="hero-heading"
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 leading-[1.05] tracking-tighter"
            >
              Building <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Future Systems
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed font-medium"
            >
              Smirror is a high-impact engineering firm specializing in <span className="text-white">Fintech (M-Pesa)</span>, rapid <span className="text-white">Startup</span> scaling, and enterprise <span className="text-white">Remote SaaS</span> solutions.
            </motion.p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <Link
                href="#contact"
                className="group relative inline-flex w-full sm:w-auto items-center justify-center bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                Book Discovery Call
              </Link>
              <Link
                href="/projects"
                className="group relative inline-flex w-full sm:w-auto items-center justify-center border border-white/10 hover:border-white/30 bg-white/5 text-white px-8 py-4 rounded-xl text-lg font-bold backdrop-blur-md transition-all duration-300"
              >
                Our Global Work
              </Link>
            </div>
          </div>

          {/* Right Side - Visuals Grid */}
          <div className="relative h-[500px] md:h-[600px] w-full">
            {/* SaaS Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: -8 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="absolute top-0 right-0 w-4/5 aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-0 grayscale hover:grayscale-0 transition-all duration-700"
            >
              <Image
                src="/saas_hero.png"
                alt="Remote SaaS Solutions"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </motion.div>

            {/* Fintech Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5, y: 50 }}
              animate={{ opacity: 1, scale: 1, rotate: 8, y: 100 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute top-20 left-0 w-4/5 aspect-[4/3] rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-10 hover:scale-105 transition-transform duration-500"
            >
              <Image
                src="/fintech_hero.png"
                alt="Fintech (M-Pesa) Ecosystem"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest">Live: Fintech Engine</div>
              </div>
            </motion.div>
          </div>
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
