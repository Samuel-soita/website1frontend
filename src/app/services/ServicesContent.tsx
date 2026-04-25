"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const HeroBackground = dynamic(() => import("@/components/HeroBackground"), { ssr: false });

export default function ServicesPage() {
  const coreServices = [
    {
      title: "Custom Software Development",
      description: "Building bespoke software solutions tailored to a client's specific business needs, processes, and goals, rather than using off-the-shelf products.",
      examples: ["ERP systems", "CRM tools", "Workflow automation", "Specialized industry applications"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070"
    },
    {
      title: "Web Development",
      description: "Designing, building, and maintaining websites and web applications.",
      examples: ["Front-end Development (UI/UX)", "Back-end Development (APIs, Databases)", "Full-stack Development", "E-commerce Development"],
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964"
    },
    {
      title: "Mobile App Development",
      description: "Creating applications for mobile devices.",
      examples: ["Native Apps (iOS/Android)", "Cross-platform Apps (React Native, Flutter)", "Progressive Web Apps (PWAs)"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070"
    },
    {
      title: "SaaS Development",
      description: "Building and hosting subscription-based software applications that are accessed over the internet.",
      examples: ["Project management tools", "Collaboration platforms", "Analytics dashboards"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"
    },
    {
      title: "Game Development",
      description: "Creating video games for various platforms (PC, console, mobile, VR/AR).",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070"
    },
    {
      title: "Embedded Software Development",
      description: "Designing and programming software for dedicated hardware systems, often found in devices and IoT.",
      examples: ["Firmware for smart devices", "Automotive systems", "Industrial control systems"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070"
    },
    {
      title: "Software Consulting & Strategy",
      description: "Providing expert advice on technology choices, system architecture, digital transformation, and software roadmap planning.",
      examples: ["Feasibility studies", "Market research", "Competitor analysis", "Technology stack recommendations"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
    }
  ];

  const preDevelopmentServices = [
    {
      title: "Software Consulting & Strategy",
      description: "Providing expert advice on technology choices, system architecture, digital transformation, and software roadmap planning.",
      examples: ["Feasibility studies", "Market research", "Competitor analysis", "Technology stack recommendations"],
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069"
    },
    {
      title: "Business Analysis & Requirements Gathering",
      description: "Understanding client's business needs, processes, and translating them into detailed software requirements and specifications.",
      examples: ["User stories", "Functional requirements", "Non-functional requirements", "Requirements documentation"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015"
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive, efficient, and aesthetically pleasing user interfaces and ensuring a seamless user journey.",
      examples: ["Wireframing", "Prototyping", "User flows", "Mockups", "Usability testing"],
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2070"
    },
    {
      title: "Software Architecture Design",
      description: "Defining the high-level structure of a software system, including its components, relationships, and principles.",
      examples: ["Microservices architecture", "Monolithic architecture", "Cloud-native architecture"],
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070"
    }
  ];

  const postDevelopmentServices = [
    {
      title: "Quality Assurance (QA) & Testing",
      description: "Ensuring software quality, functionality, performance, and security through various testing methodologies.",
      examples: ["Manual Testing (Exploratory, UAT)", "Automated Testing (Unit, Integration, Regression)", "Performance Testing", "Security Testing"],
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1974"
    },
    {
      title: "Deployment & DevOps Services",
      description: "Automating the software delivery process, managing infrastructure, and ensuring smooth deployment and operation.",
      examples: ["CI/CD pipeline setup", "Infrastructure as Code (IaC)", "Containerization (Docker, Kubernetes)"],
      image: "https://images.unsplash.com/photo-1618401471353-b98a5efa5634?q=80&w=2002"
    },
    {
      title: "Software Maintenance & Support",
      description: "Ongoing activities to ensure software remains functional, secure, and up-to-date.",
      examples: ["Bug fixes", "Performance optimization", "Security patches", "Feature enhancements", "Technical support", "Monitoring"],
      image: "https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?q=80&w=2070"
    },
    {
      title: "Cloud Computing Services",
      description: "Assisting clients with migrating to, managing, and optimizing their applications and infrastructure on cloud platforms.",
      examples: ["Cloud migration (AWS, Azure, GCP)", "Cloud infrastructure management", "Serverless computing"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
    }
  ];

  const ServiceCard = ({ service, index, colorClass, borderClass, onClick }: { service: any; index: number; colorClass: string; borderClass: string; onClick: () => void }) => {
    // Top to bottom staggered animation instead of side-to-side
    const slideDelay = 0.1 + (index * 0.15);

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.8,
          delay: slideDelay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        onClick={onClick}
        whileHover={{
          y: -8,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        className="group relative bg-[#0a0a0c] border border-gray-800/80 rounded-3xl p-6 shadow-2xl hover:border-gray-600 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col h-full"
      >
        <div className={`absolute inset-0 ${colorClass} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
        
        {/* Card Image Thumbnail */}
        <div className="relative w-full h-56 mb-6 rounded-2xl overflow-hidden ring-1 ring-white/5 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale-[50%] group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 tracking-tight">
            {service.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
            {service.description}
          </p>
          <div className="mt-auto flex items-center text-blue-500 text-sm font-semibold tracking-wide uppercase transition-colors group-hover:text-blue-400">
            <span className="relative">
              Explore Service
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </span>
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </motion.div>
    );
  };

  // State for the Modal
  const [selectedService, setSelectedService] = useState<any | null>(null);

  // Modal Component
  const ServiceModal = () => {
    if (!selectedService) return null;

    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedService(null)}></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-gray-900 border border-gray-700 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        >
          {/* Close Button */}
          <button 
            onClick={() => setSelectedService(null)}
            className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors border border-white/10"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          {/* Modal Image */}
          <div className="w-full md:w-2/5 h-64 md:h-auto relative">
            <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900 hidden md:block"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent md:hidden"></div>
          </div>

          {/* Modal Content */}
          <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-widest mb-6">
              Enterprise Solution
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              {selectedService.title}
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {selectedService.description}
            </p>

            {selectedService.examples && (
              <div>
                <h4 className="text-white font-semibold text-lg mb-4 border-b border-gray-800 pb-2">Key Capabilities & Deliverables</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedService.examples.map((example: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400">
                      <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-10 pt-8 border-t border-gray-800">
               <Link href="#contact" onClick={() => setSelectedService(null)} className="inline-flex items-center justify-center bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 w-full md:w-auto shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                 Start a Dialogue
               </Link>
            </div>
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      <AnimatePresence>
        <ServiceModal />
      </AnimatePresence>

      <main className="pt-16">
        <section className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <HeroBackground />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Services</h1>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Comprehensive software development services from concept to deployment and beyond
              </p>
            </div>

            {/* Modern Sticky Sidebar Layout for Categories */}
            <div className="flex flex-col gap-24 md:gap-32 mb-20 md:mb-32 w-full max-w-7xl mx-auto">
              
              {/* Category 1: Core Engineering */}
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 relative">
                <div className="lg:w-1/3 lg:block">
                  <div className="sticky top-32 lg:pb-16 z-20">
                    <motion.div 
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20 shadow-[inset_0_0_20px_rgba(59,130,246,0.2)] mb-8 border border-blue-500/20">
                         <span className="text-3xl font-light text-blue-400">01</span>
                      </div>
                      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">Core <br /> Engineering</h2>
                      <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                        The bedrock of enterprise digital transformation. We architect, build, and scale proprietary software solutions designed for high-availability and extreme performance.
                      </p>
                    </motion.div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                     {coreServices.map((service, index) => (
                       <div key={service.title} className={index % 2 === 1 ? "md:mt-16" : ""}>
                         <ServiceCard service={service} index={index} colorClass="bg-gradient-to-br from-blue-600 to-indigo-600" borderClass="blue" onClick={() => setSelectedService(service)} />
                       </div>
                     ))}
                  </div>
                </div>
              </div>

              {/* Category 2: Strategy & Design */}
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 relative border-t border-gray-800/50 pt-24 md:pt-32">
                <div className="lg:w-1/3 lg:block">
                  <div className="sticky top-32 lg:pb-16 z-20">
                    <motion.div 
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 shadow-[inset_0_0_20px_rgba(168,85,247,0.2)] mb-8 border border-purple-500/20">
                         <span className="text-3xl font-light text-purple-400">02</span>
                      </div>
                      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">Strategy <br /> & Design</h2>
                      <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                        World-class technical advisory paired with obsessive user-centric design paradigms. Laying the absolute groundwork before a single line of code is written.
                      </p>
                    </motion.div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                     {preDevelopmentServices.map((service, index) => (
                       <div key={service.title} className={index % 2 === 1 ? "md:mt-16" : ""}>
                         <ServiceCard service={service} index={index} colorClass="bg-gradient-to-br from-purple-600 to-pink-600" borderClass="purple" onClick={() => setSelectedService(service)} />
                       </div>
                     ))}
                  </div>
                </div>
              </div>

              {/* Category 3: Infrastructure & Ops */}
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 relative border-t border-gray-800/50 pt-24 md:pt-32">
                <div className="lg:w-1/3 lg:block">
                  <div className="sticky top-32 lg:pb-16 z-20">
                    <motion.div 
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600/20 to-teal-600/20 shadow-[inset_0_0_20px_rgba(16,185,129,0.2)] mb-8 border border-emerald-500/20">
                         <span className="text-3xl font-light text-emerald-400">03</span>
                      </div>
                      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">System <br /> Ops</h2>
                      <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                        Zero-downtime deployment pipelines, exhaustive security auditing, and continuous infrastructure evolution for global-scale applications.
                      </p>
                    </motion.div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                     {postDevelopmentServices.map((service, index) => (
                       <div key={service.title} className={index % 2 === 1 ? "md:mt-16" : ""}>
                         <ServiceCard service={service} index={index} colorClass="bg-gradient-to-br from-emerald-600 to-teal-600" borderClass="green" onClick={() => setSelectedService(service)} />
                       </div>
                     ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Call to Action Card */}
            <motion.div
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.4,
                delay: 1.4,
                ease: [0.25, 0.46, 0.45, 0.94],
                scale: { duration: 1.0, delay: 1.6 }
              }}
              whileHover={{
                y: -10,
                scale: 1.01,
                transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
              }}
              className="bg-gradient-to-br from-gray-800/80 via-gray-800/70 to-gray-900/80 border border-gray-700/70 rounded-2xl p-8 shadow-2xl hover:border-blue-500/60 hover:bg-gray-800/90 hover:shadow-3xl hover:shadow-blue-500/30 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group relative overflow-hidden backdrop-blur-sm max-w-4xl mx-auto text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/15 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-700">Ready to Get Started?</h2>
                <p className="text-gray-300 text-base mb-6 group-hover:text-gray-100 transition-colors duration-700 max-w-2xl mx-auto">
                  Let's discuss your project and find the perfect solution for your business needs.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="#contact"
                    className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg text-base font-semibold transition-all duration-500 transform hover:scale-105 shadow-lg"
                  >
                    Request Consultation
                  </Link>
                  <Link
                    href="/about"
                    className="inline-block border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white px-6 py-3 rounded-lg text-base font-semibold transition-all duration-500 transform hover:scale-105"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
