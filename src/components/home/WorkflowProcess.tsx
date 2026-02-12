'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const steps = [
    {
        id: "01",
        title: "Deep Discovery",
        desc: "We dive into your business logic, identifying hidden bottlenecks and untapped opportunities before writing a single line of code.",
        icon: null,
        details: ["Architecture Audit", "Market Positioning", "User Persona Mapping"],
        color: "from-blue-500 to-cyan-400"
    },
    {
        id: "02",
        title: "Precision Build",
        desc: "Using elite TypeScript frameworks, we construct modular, high-scale systems that feel light but carry heavyweight performance.",
        icon: null,
        details: ["Modular Architecture", "Real-time Sync", "Edge Computing"],
        color: "from-purple-500 to-pink-500"
    },
    {
        id: "03",
        title: "Velocity Launch",
        desc: "Instant deployment with 99.9% uptime. We don't just 'launch'; we propel your business into its next phase of growth.",
        icon: null,
        details: ["CI/CD Mastery", "Scalability Testing", "Global CDN"],
        color: "from-orange-500 to-red-500"
    }
];

export default function WorkflowProcess() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
                    >
                        <span className="text-blue-400 font-mono text-sm tracking-widest uppercase">The methodology</span>
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
                        We Handle The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">Chaos.</span>
                    </h2>
                    <p className="text-gray-500 text-xl font-medium max-w-2xl mx-auto">
                        Our process isn't a checklist; it's a high-performance engine designed for clarity and speed.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 min-h-[500px]">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group h-full"
                        >
                            <div className={`relative h-full p-10 rounded-[3rem] border transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${hoveredIndex === index
                                ? 'bg-white/5 border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.05)] scale-105 z-20'
                                : 'bg-transparent border-white/5 grayscale group-hover:grayscale-0'
                                }`}>
                                <div className="flex justify-between items-start mb-8">
                                    <span className={`text-6xl font-black transition-colors duration-500 ${hoveredIndex === index ? 'text-white' : 'text-white/10'
                                        }`}>
                                        {step.id}
                                    </span>
                                </div>

                                <h3 className={`text-3xl font-bold mb-6 transition-all duration-500 ${hoveredIndex === index ? 'text-white translate-x-2' : 'text-gray-400 translate-x-0'
                                    }`}>
                                    {step.title}
                                </h3>

                                <p className={`text-lg leading-relaxed transition-all duration-500 ${hoveredIndex === index ? 'text-white opacity-100' : 'text-gray-600 opacity-60'
                                    }`}>
                                    {step.desc}
                                </p>

                                <div className="mt-8">
                                    <AnimatePresence>
                                        {hoveredIndex === index && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.4 }}
                                                className="space-y-3 overflow-hidden"
                                            >
                                                <div className="h-px w-1/2 bg-gradient-to-r from-white/20 to-transparent mb-4" />
                                                {step.details.map((detail, dIndex) => (
                                                    <motion.div
                                                        key={dIndex}
                                                        initial={{ x: -20, opacity: 0 }}
                                                        animate={{ x: 0, opacity: 1 }}
                                                        transition={{ delay: dIndex * 0.1 }}
                                                        className="flex items-center gap-3 text-blue-400 font-mono text-xs tracking-wider"
                                                    >
                                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
                                                        {detail}
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {hoveredIndex === index && (
                                    <motion.div
                                        layoutId="pulse"
                                        className="absolute inset-x-0 -bottom-4 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-sm"
                                    />
                                )}
                            </div>

                            <div className={`absolute -inset-2 bg-gradient-to-br ${step.color} blur-[100px] opacity-0 transition-opacity duration-700 ${hoveredIndex === index ? 'opacity-10' : ''
                                }`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
