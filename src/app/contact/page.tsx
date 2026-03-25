'use client';

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import BookingModal from "@/components/BookingModal";
import { useState } from "react";

export default function ContactPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState("");

    const handleOpenModal = (planName: string) => {
        setSelectedPlan(planName);
        setIsModalOpen(true);
    };

    return (
        <main className="min-h-screen bg-transparent selection:bg-blue-500/30">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(59,130,246,0.15),transparent_70%)] pointer-events-none -z-10"></div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 mt-10"
                    >
                        <span className="text-blue-400 font-mono text-sm tracking-widest uppercase">Technical Consulting</span>
                    </motion.div>
                    
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-[6rem] font-black text-white mb-6 tracking-tighter leading-none"
                    >
                        Consult An <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-purple-400">Expert.</span>
                    </motion.h1>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-medium"
                    >
                        Stop guessing. We bridge the gap between initial ideation and world-class, scalable deployment.
                    </motion.p>
                </div>
            </section>

            {/* 3-Step Journey */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Engagement Journey</h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">A seamless 3-step technical workflow designed for absolute precision and speed.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Discovery & Audit",
                                desc: "We ruthlessly evaluate your current stack, business logic, and deployment goals to identify bottlenecks before writing code.",
                                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
                            },
                            {
                                step: "02",
                                title: "Strategic Roadmap",
                                desc: "We design a comprehensive architecture plan, choose the elite frameworks (Next.js, Node), and allocate top-tier talent.",
                                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
                            },
                            {
                                step: "03",
                                title: "Execution & Scale",
                                desc: "Relentless execution. We build, test, and deploy your product with 99.99% uptime, standing by as your continuous technical partner.",
                                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden group hover:border-blue-500/30 transition-colors"
                            >
                                {/* Image Cover */}
                                <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-40 transition-opacity duration-700">
                                    <Image 
                                        src={item.image} 
                                        alt={item.title} 
                                        fill 
                                        className="object-cover" 
                                        sizes="(max-width: 768px) 100vw, 33vw" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                                </div>
                                
                                <div className="relative z-10 p-10 h-full flex flex-col justify-end">
                                    <div className="text-6xl font-black text-white/10 mb-6 group-hover:text-blue-500/30 transition-colors">{item.step}</div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed relative z-20">{item.desc}</p>
                                </div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-blue-500/30 transition-colors"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-black/50 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Transparent Investment</h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">Elite engineering without the bloated agency overhead.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Tier 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem]"
                        >
                            <h3 className="text-xl text-gray-400 font-mono mb-2 uppercase">Architecture Audit</h3>
                            <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-5xl font-black text-white">$1,500</span>
                                <span className="text-gray-500">/ one-time</span>
                            </div>
                            <p className="text-gray-400 mb-8 pb-8 border-b border-white/10">Complete tear-down of your codebase, security vulnerabilities, and scalability vectors.</p>
                            <ul className="space-y-4 mb-10">
                                {["Deep Security Review", "Performance Bottleneck ID", "Refactoring Blueprint", "Database Schema Audit"].map((feat, i) => (
                                    <li key={i} className="flex items-center text-sm text-gray-300 gap-3">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> {feat}
                                    </li>
                                ))}
                            </ul>
                            <button 
                                onClick={() => handleOpenModal("Architecture Audit")}
                                className="w-full py-4 rounded-xl border border-white/20 hover:bg-white text-white hover:text-black font-bold transition-all"
                            >
                                Book Audit
                            </button>
                        </motion.div>

                        {/* Tier 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-gradient-to-b from-blue-900/20 to-black border border-blue-500/30 p-10 rounded-[2.5rem] relative transform md:-translate-y-4 shadow-[0_0_50px_rgba(59,130,246,0.15)]"
                        >
                            <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider">POPULAR</div>
                            <h3 className="text-xl text-blue-400 font-mono mb-2 uppercase">MVP Acceleration</h3>
                            <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-5xl font-black text-white">$9,000</span>
                                <span className="text-gray-500">/ delivery</span>
                            </div>
                            <p className="text-gray-400 mb-8 pb-8 border-b border-white/10">From Idea to Reality in roughly 8 weeks. Built to scale instantly for Series A.</p>
                            <ul className="space-y-4 mb-10">
                                {["Full-Stack Next.js/Node build", "Authentication & Database", "Stripe Integration", "Production Deployment", "Priority Email Support"].map((feat, i) => (
                                    <li key={i} className="flex items-center text-sm text-gray-300 gap-3">
                                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_10px_#3b82f6]"></span> {feat}
                                    </li>
                                ))}
                            </ul>
                            <button 
                                onClick={() => handleOpenModal("MVP Acceleration")}
                                className="w-full py-4 rounded-xl bg-white text-black font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                            >
                                Start MVP Build
                            </button>
                        </motion.div>

                        {/* Tier 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem]"
                        >
                            <h3 className="text-xl text-gray-400 font-mono mb-2 uppercase">Dedicated Squad</h3>
                            <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-5xl font-black text-white">$7,200</span>
                                <span className="text-gray-500">/ month</span>
                            </div>
                            <p className="text-gray-400 mb-8 pb-8 border-b border-white/10">A dedicated remote engineering team pushing continuous updates and scale.</p>
                            <ul className="space-y-4 mb-10">
                                {["Fractional CTO", "2 Senior Engineers", "Global Infrastructure Sync", "24/7 SLA Uptime Guarantee", "Unlimited Minor Revisions"].map((feat, i) => (
                                    <li key={i} className="flex items-center text-sm text-gray-300 gap-3">
                                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span> {feat}
                                    </li>
                                ))}
                            </ul>
                            <button 
                                onClick={() => handleOpenModal("Dedicated Squad")}
                                className="w-full py-4 rounded-xl border border-white/20 hover:bg-white text-white hover:text-black font-bold transition-all"
                            >
                                Retain Experts
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

             {/* Outro Contact Form Section */}
             <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
                 <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-16 text-center">
                     <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to initiate?</h2>
                     <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">Bypass the boilerplate. Reach out to our technical leads directly to discuss your system architecture.</p>
                     
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
                         <input type="email" placeholder="Enter your work email..." className="px-6 py-4 rounded-xl bg-black/50 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 w-full sm:w-80" />
                         <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform flex-shrink-0">
                             Contact Engineering
                         </button>
                     </div>
                 </div>
             </section>

            <BookingModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                planName={selectedPlan} 
            />

            <Footer />
        </main>
    );
}
