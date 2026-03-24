'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const services = [
    {
        title: "Fintech (M-Pesa Ecosystem)",
        desc: "Specialized engineering for East Africa's leading financial infrastructure. we build secure, scalable payment gateways and financial services.",
        image: "/fintech_hero.png",
        gradient: "from-blue-600/20 to-blue-800/20",
        border: "border-blue-500/30",
        details: ["M-Pesa API Integration", "Secure Payment Vaults", "Real-time Settlement Systems"]
    },
    {
        title: "Startup Acceleration",
        desc: "Elite talent matching and rapid development teams. We provide the technical backbone for fast-moving startups to hire and scale in weeks.",
        image: "/hover.jpeg",
        gradient: "from-purple-600/20 to-purple-800/20",
        border: "border-purple-500/30",
        details: ["Fast Hiring Pipelines", "MVP to Market in 30 Days", "Fractional CTO Support"]
    },
    {
        title: "Enterprise Remote SaaS",
        desc: "Global-scale software solutions architected for remote reliability. We build the platforms that power modern, distributed businesses.",
        image: "/saas_hero.png",
        gradient: "from-pink-600/20 to-pink-800/20",
        border: "border-pink-500/30",
        details: ["Global Infrastructure", "Multi-region Sync", "Advanced Security Protocols"]
    }
];

export default function ServicesOverview() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-purple-400 uppercase tracking-tighter"
                    >
                        Engineering Excellence
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-500 max-w-2xl mx-auto text-xl font-medium"
                    >
                        We don't just build software. We engineer digital assets that scale with your ambitions.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group cursor-pointer"
                        >
                            <div className={`h-full p-10 rounded-[2.5rem] border transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] relative overflow-hidden ${hoveredIndex === index
                                ? 'bg-white/5 border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.05)] scale-105 z-20'
                                : 'bg-transparent border-white/5 grayscale group-hover:grayscale-0'
                                }`}>
                                {/* Background Image */}
                                {service.image && (
                                    <div className={`absolute inset-0 z-0 transition-opacity duration-700 ${hoveredIndex === index ? 'opacity-20' : 'opacity-5'}`}>
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/40"></div>
                                    </div>
                                )}

                                <div className="relative z-10">
                                    <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${hoveredIndex === index ? 'text-white' : 'text-gray-400'
                                        }`}>
                                        {service.title}
                                    </h3>
                                    <p className={`text-lg leading-relaxed mb-6 transition-all duration-500 ${hoveredIndex === index ? 'text-white opacity-100' : 'text-gray-600 opacity-60'
                                        }`}>
                                        {service.desc}
                                    </p>
                                </div>

                                <div className="mt-8">
                                    <AnimatePresence>
                                        {hoveredIndex === index && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.4 }}
                                                className="space-y-4 overflow-hidden"
                                            >
                                                <div className="h-px w-1/2 bg-gradient-to-r from-blue-500/50 to-transparent mb-4" />
                                                {service.details.map((detail, dIndex) => (
                                                    <motion.div
                                                        key={dIndex}
                                                        initial={{ x: -20, opacity: 0 }}
                                                        animate={{ x: 0, opacity: 1 }}
                                                        transition={{ delay: dIndex * 0.1 }}
                                                        className="flex items-center gap-3 text-blue-400 font-mono text-sm tracking-tight"
                                                    >
                                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
                                                        {detail}
                                                    </motion.div>
                                                ))}
                                                <a href="/services" className="mt-6 text-white font-bold inline-flex items-center group">
                                                    Explore Capability
                                                    <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                                                </a>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Background Glow */}
                            <div className={`absolute -inset-2 bg-gradient-to-br ${service.gradient} blur-[100px] opacity-0 transition-opacity duration-700 ${hoveredIndex === index ? 'opacity-10' : ''
                                }`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
