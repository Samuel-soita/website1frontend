"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const HeroBackground = dynamic(() => import("@/components/HeroBackground"), { ssr: false });

export default function ProjectsPage() {
  const categories = ["All", "Web", "Mobile", "Enterprise", "SaaS", "AI"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const projects = [
    {
      title: "Nexus ERP",
      category: "Enterprise",
      description: "A comprehensive Enterprise Resource Planning system designed for large-scale manufacturing firms, optimizing supply chains and production workflows.",
      tech: ["React", "Node.js", "PostgreSQL", "Docker"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
      outcome: "Increased operational efficiency by 40% and reduced manual entry errors by 65%."
    },
    {
      title: "Aura Marketplace",
      category: "Web",
      description: "A luxury fashion e-commerce platform with high-performance search, real-time inventory, and seamless multi-currency checkout.",
      tech: ["Next.js", "Shopify Engine", "TailwindCSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070",
      outcome: "Achieved a 250% increase in mobile conversions within the first 6 months."
    },
    {
      title: "Pulse Health",
      category: "Mobile",
      description: "A telemedicine application connecting patients with specialists, featuring secure video calls, electronic prescriptions, and health tracking.",
      tech: ["React Native", "WebRTC", "Firebase", "AWS"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070",
      outcome: "Served over 50,000 active patients with a 4.9/5 star rating on App Store."
    },
    {
      title: "Vortex Analytics",
      category: "SaaS",
      description: "Real-time data visualization dashboard for marketing agencies to track cross-platform campaign performance and ROI.",
      tech: ["TypeScript", "D3.js", "GraphQL", "Azure"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070",
      outcome: "Enabled agencies to reduce reporting time from 10 hours to 15 minutes per week."
    },
    {
      title: "Guardian AI",
      category: "AI",
      description: "An intelligent security system that uses machine learning to detect and mitigate cyber threats in real-time for financial institutions.",
      tech: ["Python", "TensorFlow", "Kubernetes", "Kafka"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070",
      outcome: "Successfully identified and blocked 99.9% of unauthorized access attempts."
    },
    {
      title: "Lumina Social",
      category: "Web",
      description: "A community platform for digital creators to share, monetize, and engage with their audience through exclusive content.",
      tech: ["Next.js", "Prisma", "Supabase", "Stripe Connect"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071",
      outcome: "Helped creators generate over $1M in revenue during the beta phase."
    }
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const ProjectModal = () => {
    if (!selectedProject) return null;

    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setSelectedProject(null)} aria-hidden="true"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-[#0a0a0c] border border-gray-800 w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        >
          {/* Close Button */}
          <button 
            onClick={() => setSelectedProject(null)}
            className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors border border-white/10 active:scale-95"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          {/* Modal Content */}
          <div className="w-full md:w-1/2 h-64 md:h-auto relative">
            <img src={selectedProject.image} alt={`Full view of ${selectedProject.title}`} className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent"></div>
          </div>

          <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-widest mb-6">
              {selectedProject.category}
            </div>
            
            <h2 id="modal-title" className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">
              {selectedProject.title}
            </h2>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-3">The Challenge</h4>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t: string) => (
                    <span key={t} className="px-3 py-1 bg-gray-800/50 border border-gray-700 text-gray-300 text-sm rounded-lg font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl">
                <h4 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-2">Outcome</h4>
                <p className="text-white text-lg font-medium">
                  {selectedProject.outcome}
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-800">
               <Link 
                 href="#contact" 
                 onClick={() => setSelectedProject(null)} 
                 className="inline-flex items-center justify-center bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 w-full shadow-xl active:scale-95"
                 aria-label={`Discuss a project similar to ${selectedProject.title}`}
               >
                 Discuss Similar Project
               </Link>
            </div>
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <AnimatePresence>
        {selectedProject && <ProjectModal />}
      </AnimatePresence>

      <main className="pt-24 md:pt-32" role="main">
        <section className="relative py-12 px-4 sm:px-6 lg:px-8" aria-labelledby="projects-hero-title">
          <HeroBackground />
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Immersive Header */}
            <div className="text-center mb-20 md:mb-32">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 id="projects-hero-title" className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase">
                  Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Work</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  A showcase of elite digital solutions delivered for clients across the globe. Engineering excellence at scale.
                </p>
              </motion.div>

              {/* Category Filter */}
              <nav className="mt-12 flex flex-wrap justify-center gap-3" aria-label="Project categories">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    aria-pressed={activeCategory === cat}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border active:scale-95 ${
                      activeCategory === cat 
                        ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/30" 
                        : "bg-gray-900 border-gray-800 text-gray-400 hover:border-gray-600"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </nav>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12" role="list">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.article
                    layout
                    key={project.title}
                    role="listitem"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => setSelectedProject(project)}
                    className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer shadow-2xl"
                    aria-label={`View details for ${project.title}`}
                  >
                    {/* Background Image */}
                    <img 
                      src={project.image} 
                      alt={`Cover for ${project.title}`} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[0.6] group-hover:brightness-[0.4]"
                      loading="lazy"
                    />
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <div className="mb-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="inline-block px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
                          {project.category}
                        </span>
                        <h3 className="text-3xl font-black text-white mb-2 leading-tight uppercase tracking-tighter">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="h-0.5 w-0 bg-blue-500 group-hover:w-full transition-all duration-500" aria-hidden="true"></div>
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>

            {/* Final CTA */}
            <div className="mt-32 text-center">
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#0a0a0c] border border-gray-800 p-12 rounded-3xl inline-block max-w-4xl w-full relative overflow-hidden"
                aria-labelledby="vision-cta-title"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" aria-hidden="true"></div>
                <h2 id="vision-cta-title" className="text-3xl font-bold text-white mb-4">Have a Vision?</h2>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                  Your project could be our next global success story. Let's collaborate and engineer something that sets you apart.
                </p>
                <Link 
                  href="/start-project" 
                  className="inline-block bg-white text-black px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all duration-300 active:scale-95 shadow-xl"
                  aria-label="Start your project with us"
                >
                  Start Your Project
                </Link>
              </motion.section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
