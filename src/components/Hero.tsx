'use client';

import Link from "next/link";
import dynamic from "next/dynamic";

const ReferralWidget = dynamic(() => import("./ReferralWidget"), {
  ssr: false,
});

const TalkToUsWidget = dynamic(() => import("./TalkToUsWidget"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Referral Widget */}
      <ReferralWidget />
      {/* Talk to Us Widget */}
      <TalkToUsWidget />
      

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main Headline */}
        <h1
          id="hero-heading"
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          <span className="block">Professional Web</span>
          <span className="block">Development</span>
          <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold mt-4 text-gray-200">
            That Lets You Relax
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
          We handle everything - from websites to complex web apps.
          You focus on your business, we manage the technology.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link
            href="#contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Free Consultation
          </Link>
          <Link
            href="#portfolio"
            className="border-2 border-white/80 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl"
          >
            <span>View Our Work</span>
          </Link>
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-white/20 hover:border-white/30 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-5xl font-bold text-white mb-3">50+</div>
              <div className="text-white font-medium text-lg">Projects Completed</div>
              <div className="w-full h-1 bg-white/20 mt-4 rounded-full"></div>
            </div>
          </div>
          <div className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-white/20 hover:border-white/30 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-5xl font-bold text-white mb-3">24/7</div>
              <div className="text-white font-medium text-lg">Support Available</div>
              <div className="w-full h-1 bg-white/20 mt-4 rounded-full"></div>
            </div>
          </div>
          <div className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-white/20 hover:border-white/30 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-5xl font-bold text-white mb-3">100%</div>
              <div className="text-white font-medium text-lg">Client Satisfaction</div>
              <div className="w-full h-1 bg-gradient-to-r from-purple-400/0 via-purple-400/50 to-purple-400/0 mt-4 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
