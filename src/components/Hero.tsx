'use client';

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";

const ReferralWidget = dynamic(() => import("./ReferralWidget"), { ssr: false });
const TalkToUsWidget = dynamic(() => import("./TalkToUsWidget"), { ssr: false });
import TransformationVisual from "./home/TransformationVisual";

const orbitImages = [
  "/saas_hero.png",
  "/fintech_hero.png",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
];

export default function Hero() {
  return (
    <>
      <style>{`
        @keyframes orbit {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes counter-orbit {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-orbit {
          animation: orbit 60s linear infinite;
        }
        .animate-counter-orbit {
          animation: counter-orbit 60s linear infinite;
        }
        .orbit-item-0 { transform: rotate(0deg) translateY(-220px); }
        .orbit-item-1 { transform: rotate(120deg) translateY(-220px); }
        .orbit-item-2 { transform: rotate(240deg) translateY(-220px); }
        @media (min-width: 768px) {
          .orbit-item-0 { transform: rotate(0deg) translateY(-400px); }
          .orbit-item-1 { transform: rotate(120deg) translateY(-400px); }
          .orbit-item-2 { transform: rotate(240deg) translateY(-400px); }
        }
      `}</style>
      <section
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent pt-20"
        aria-labelledby="hero-heading"
      >

      {/* Referral Widget */}
      <ReferralWidget />
      {/* Talk to Us Widget */}
      <TalkToUsWidget />

      {/* Orbiting Background Images */}
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] animate-orbit pointer-events-none opacity-50 z-0">
        <div className="absolute inset-0 rounded-full border border-white/5 border-dashed"></div>
        {orbitImages.map((src, i) => {
          const angle = i * 120;
          return (
            <div
              key={i}
              className={`absolute top-1/2 left-1/2 origin-center orbit-item-${i}`}
            >
              <div 
                className="w-40 h-32 md:w-72 md:h-52 -ml-20 -mt-16 md:-ml-36 md:-mt-26 animate-counter-orbit rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.15)] border border-white/10 relative"
              >
                  <div className="w-full h-full relative" style={{ transform: `rotate(-${angle}deg)` }}>
                    <Image src={src} fill className="object-cover" alt="Hero background visual" sizes="(max-width: 768px) 160px, 288px" />
                  </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.15),transparent_60%)] pointer-events-none z-0"></div>

      {/* Central "Mirror" Logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none mix-blend-screen opacity-20">
        <Image src="/hover.jpeg" width={500} height={500} alt="SMIRROR" className="rounded-full shadow-[0_0_150px_rgba(59,130,246,0.3)] object-cover" />
      </div>

      {/* Two-Column SaaS Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto mt-10 lg:mt-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pointer-events-auto pt-10 pb-20">
        
        {/* Left Column: Text & CTAs */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="relative text-center lg:text-left z-20"
        >

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
            <span className="text-blue-300 font-mono text-xs uppercase tracking-widest">Global Software Engineering</span>
          </motion.div>
          
          {/* Main Headline */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white mb-8 leading-[1.05] tracking-tighter"
          >
            From Idea to Reality—<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              Built the Way You Envisioned.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl lg:text-2xl text-[#888888] mb-12 max-w-2xl mx-auto lg:mx-0 leading-[1.5] font-medium tracking-tight"
          >
            At <span className="text-white">Smirror Ltd</span>, we turn your concepts into scalable, high-performing products—without losing your original vision.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center"
          >
            <Link
              href="/start-project"
              className="group relative inline-flex w-full sm:w-auto items-center justify-center bg-white text-black px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Build With Us</span>
            </Link>
            <Link
              href="/projects"
              className="group relative inline-flex w-full sm:w-auto items-center justify-center border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl text-lg font-bold backdrop-blur-md transition-all duration-300 hover:scale-105"
            >
              <span>View Our Work</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column: Transformation Visual */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
           className="relative z-20 hidden md:block"
        >
          <TransformationVisual />
        </motion.div>
      </div>

      </section>
    </>
  );
}
