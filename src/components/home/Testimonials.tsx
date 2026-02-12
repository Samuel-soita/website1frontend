'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const testimonials = [
    {
        quote: "SMIRROR Solutions transformed our legacy system into a modern, scalable platform. Their attention to detail is unmatched.",
        author: "Sarah J.",
        role: "CTO, FinTech Startup",
        icon: null,
        stats: ["40% Speed Increase", "Zero Downtime Deploy", "Modern Stack"]
    },
    {
        quote: "The team delivered our mobile app ahead of schedule and it looks absolutely stunning. User engagement has doubled.",
        author: "David M.",
        role: "Founder, RetailBrand",
        icon: null,
        stats: ["2x Conversion Rate", "iOS & Android Support", "Premium UI"]
    },
    {
        quote: "Professional, transparent, and incredibly skilled. They felt like a true extension of our internal team.",
        author: "James L.",
        role: "Product Manager, TechCorp",
        icon: null,
        stats: ["Seamless Integration", "24/7 Support", "Expert Guidance"]
    }
];

export default function Testimonials() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter"
                    >
                        Powering <span className="text-blue-500">Industry Leaders</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-500 text-xl font-medium"
                    >
                        Built for those who demand precision and performance.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative group cursor-pointer"
                        >
                            <div className={`h-full p-10 rounded-[2.5rem] border transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${hoveredIndex === i
                                ? 'bg-white/5 border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.05)] scale-105 z-20'
                                : 'bg-transparent border-white/5 grayscale group-hover:grayscale-0'
                                }`}>
                                <div className="flex justify-between items-center mb-8">
                                    <div className={`text-6xl font-serif transition-colors duration-500 ${hoveredIndex === i ? 'text-blue-500/20' : 'text-white/5'
                                        }`}>"</div>
                                </div>

                                <p className={`text-lg mb-8 italic leading-relaxed font-medium transition-all duration-500 ${hoveredIndex === i ? 'text-white' : 'text-gray-600'
                                    }`}>
                                    {t.quote}
                                </p>

                                <div className="mt-auto">
                                    <AnimatePresence>
                                        {hoveredIndex === i && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.4 }}
                                                className="mb-8 space-y-2 overflow-hidden"
                                            >
                                                <div className="h-px w-1/2 bg-blue-500/30 mb-4" />
                                                {t.stats.map((stat, sIndex) => (
                                                    <motion.div
                                                        key={sIndex}
                                                        initial={{ x: -10, opacity: 0 }}
                                                        animate={{ x: 0, opacity: 1 }}
                                                        transition={{ delay: sIndex * 0.1 }}
                                                        className="text-blue-400 font-mono text-xs uppercase tracking-widest"
                                                    >
                                                        {stat}
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg">
                                            {t.author.charAt(0)}
                                        </div>
                                        <div>
                                            <div className={`font-bold text-lg transition-colors duration-500 ${hoveredIndex === i ? 'text-white' : 'text-gray-400'
                                                }`}>
                                                {t.author}
                                            </div>
                                            <div className="text-xs text-blue-500 font-bold uppercase tracking-widest">{t.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Background Glow */}
                            <div className={`absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-[100px] opacity-0 transition-opacity duration-700 ${hoveredIndex === i ? 'opacity-10' : ''
                                }`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
