'use client';

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
    {
        title: "Secure Payment Gateway",
        category: "FinTech",
        desc: "A robust payment processing platform handling millions in transactions.",
        color: "blue"
    },
    {
        title: "Global Retail Platform",
        category: "E-Commerce",
        desc: "Multi-vendor marketplace with real-time inventory management.",
        color: "purple"
    },
    {
        title: "Telemedicine App",
        category: "Healthcare",
        desc: "HIPAA-compliant video consultation and patient management system.",
        color: "green"
    }
];

export default function FeaturedProjects() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                        <p className="text-gray-400 max-w-xl text-lg">
                            See how we've helped other businesses transform their digital presence.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link href="/projects" className="hidden md:inline-flex px-8 py-4 border border-gray-700 hover:border-blue-500 rounded-xl text-gray-300 hover:text-white transition-all duration-300 font-semibold">
                            View All Projects
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden aspect-video bg-gray-800 border border-gray-700"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 z-10 transition-opacity duration-300 group-hover:opacity-90"></div>

                            {/* Image Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a] text-gray-800">
                                <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50"></div>
                                <span className="absolute text-sm font-mono tracking-widest uppercase opacity-20">Preview Image</span>
                            </div>

                            <div className="absolute bottom-0 left-0 p-8 z-20 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <span className={`px-4 py-1.5 rounded-full text-xs font-bold mb-4 inline-block ${project.color === 'blue' ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' :
                                        project.color === 'purple' ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30' :
                                            'bg-green-600/20 text-green-400 border border-green-500/30'
                                    }`}>
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                                <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                                    {project.desc}
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-blue-400 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    View Case Study <span>→</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/projects" className="inline-flex w-full justify-center px-6 py-4 border border-gray-700 hover:border-blue-500 rounded-xl text-gray-300 hover:text-white transition-all duration-300 font-bold">
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}
