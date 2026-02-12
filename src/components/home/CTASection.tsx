'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
    return (
        <section className="py-32 px-4 sm:px-6 lg:px-8 relative bg-transparent overflow-hidden">
            {/* The "Event Horizon" Background - Reduced opacity to blend with geometric-bg */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.1)_0%,_transparent_60%)] animate-pulse"></div>

                {/* Animated Particles / Lines */}
                <div className="absolute inset-0 opacity-10">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-white/40 h-px"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                width: `${Math.random() * 200 + 50}px`,
                                transform: `rotate(${Math.random() * 360}deg)`,
                            }}
                            animate={{
                                x: [0, Math.random() * 100 - 50],
                                opacity: [0.2, 0.5, 0.2],
                            }}
                            transition={{
                                duration: Math.random() * 5 + 5,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="relative group">
                    {/* Glowing Border Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-[4rem] p-16 md:p-24 text-center border border-white/10 bg-white/[0.03] backdrop-blur-3xl relative overflow-hidden"
                    >
                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-blue-500/50 rounded-tl-[4rem]"></div>
                        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-purple-500/50 rounded-br-[4rem]"></div>

                        <motion.div
                            initial={{ scale: 0.95 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none italic uppercase">
                                Break <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-white to-purple-500">
                                    Dimensions.
                                </span>
                            </h2>

                            <p className="text-gray-400 text-xl md:text-3xl max-w-3xl mx-auto mb-16 font-light tracking-tight leading-relaxed">
                                Legacy systems belong in the past. We build the <span className="text-white font-bold">Infrastructures of Tomorrow</span> — today.
                            </p>
                        </motion.div>

                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center relative">
                            <motion.div
                                whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
                                whileTap={{ scale: 0.95 }}
                                className="relative"
                            >
                                <Link
                                    href="/start-project"
                                    className="relative z-10 px-14 py-6 bg-white text-black text-2xl font-black rounded-2xl flex items-center gap-3 transition-transform overflow-hidden group/btn shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
                                >
                                    <span className="relative z-10">Initiate Project</span>
                                    <span className="text-3xl group-hover/btn:translate-x-3 transition-transform">→</span>

                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-transparent to-purple-500 opacity-0 group-hover/btn:opacity-20 transition-opacity"></div>
                                </Link>
                                <div className="absolute inset-0 bg-white/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href="/contact"
                                    className="px-14 py-6 text-white text-2xl font-bold border-2 border-white/20 hover:border-white/50 rounded-2xl transition-all"
                                >
                                    Consult Expert
                                </Link>
                            </motion.div>
                        </div>

                        <div className="mt-20 flex flex-wrap justify-center gap-10 md:gap-20">
                            {[
                                { label: "Uptime", val: "99.99%" },
                                { label: "Precision", val: "100%" },
                                { label: "Execution", val: "Insta-deploy" }
                            ].map((stat, i) => (
                                <div key={i} className="text-center group/stat">
                                    <div className="text-xs font-mono text-gray-600 uppercase tracking-[0.3em] mb-2 group-hover/stat:text-blue-500 transition-colors">{stat.label}</div>
                                    <div className="text-2xl font-black text-white tracking-tighter">{stat.val}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-white/5 rounded-full scale-[1.5] animate-[spin_60s_linear_infinite]"></div>
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-white/5 rounded-full scale-[1.2] animate-[spin_40s_linear_infinite_reverse]"></div>
                </div>
            </div>
        </section>
    );
}
