'use client';

import { motion } from "framer-motion";

const solutions = [
    "Comprehensive Technology Solutions",
    "Custom Software Mastery",
    "Enterprise Digital Transformation",
    "Elite Web Engineering",
    "Scalable Infrastructure",
    "AI-Driven Innovation",
    "Precision Execution",
    "Modern Tech Ecosystems"
];

export default function TechnologyTicker() {
    return (
        <div className="w-full overflow-hidden bg-transparent py-16 border-y border-white/5 relative group">
            {/* Dynamic Glow Masks */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="relative flex overflow-hidden">
                <motion.div
                    animate={{
                        x: ["0%", "-100%"],
                    }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex whitespace-nowrap gap-24 items-center"
                >
                    {/* Main set */}
                    {solutions.map((item, i) => (
                        <div key={i} className="flex items-center gap-8">
                            <span className="text-3xl md:text-5xl font-black text-white/5 group-hover:text-blue-500/40 transition-all duration-700 uppercase tracking-[0.2em] italic">
                                {item}
                            </span>
                            <div className="w-3 h-3 rounded-full bg-blue-500/20" />
                        </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {solutions.map((item, i) => (
                        <div key={`loop-${i}`} className="flex items-center gap-8">
                            <span className="text-3xl md:text-5xl font-black text-white/5 group-hover:text-blue-500/40 transition-all duration-700 uppercase tracking-[0.2em] italic">
                                {item}
                            </span>
                            <div className="w-3 h-3 rounded-full bg-blue-500/20" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
