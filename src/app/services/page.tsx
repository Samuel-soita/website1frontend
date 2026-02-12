"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const HeroBackground = dynamic(() => import("@/components/HeroBackground"), { ssr: false });

export default function ServicesPage() {
  const coreServices = [
    {
      title: "Custom Software Development",
      description: "Building bespoke software solutions tailored to a client's specific business needs, processes, and goals, rather than using off-the-shelf products.",
      examples: ["ERP systems", "CRM tools", "Workflow automation", "Specialized industry applications"]
    },
    {
      title: "Web Development",
      description: "Designing, building, and maintaining websites and web applications.",
      examples: ["Front-end Development (UI/UX)", "Back-end Development (APIs, Databases)", "Full-stack Development", "E-commerce Development"]
    },
    {
      title: "Mobile App Development",
      description: "Creating applications for mobile devices.",
      examples: ["Native Apps (iOS/Android)", "Cross-platform Apps (React Native, Flutter)", "Progressive Web Apps (PWAs)"]
    },
    {
      title: "SaaS Development",
      description: "Building and hosting subscription-based software applications that are accessed over the internet.",
      examples: ["Project management tools", "Collaboration platforms", "Analytics dashboards"]
    },
    {
      title: "Game Development",
      description: "Creating video games for various platforms (PC, console, mobile, VR/AR)."
    },
    {
      title: "Embedded Software Development",
      description: "Designing and programming software for dedicated hardware systems, often found in devices and IoT.",
      examples: ["Firmware for smart devices", "Automotive systems", "Industrial control systems"]
    },
    {
      title: "Software Consulting & Strategy",
      description: "Providing expert advice on technology choices, system architecture, digital transformation, and software roadmap planning.",
      examples: ["Feasibility studies", "Market research", "Competitor analysis", "Technology stack recommendations"]
    }
  ];

  const preDevelopmentServices = [
    {
      title: "Software Consulting & Strategy",
      description: "Providing expert advice on technology choices, system architecture, digital transformation, and software roadmap planning.",
      examples: ["Feasibility studies", "Market research", "Competitor analysis", "Technology stack recommendations"]
    },
    {
      title: "Business Analysis & Requirements Gathering",
      description: "Understanding client's business needs, processes, and translating them into detailed software requirements and specifications.",
      examples: ["User stories", "Functional requirements", "Non-functional requirements", "Requirements documentation"]
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive, efficient, and aesthetically pleasing user interfaces and ensuring a seamless user journey.",
      examples: ["Wireframing", "Prototyping", "User flows", "Mockups", "Usability testing"]
    },
    {
      title: "Software Architecture Design",
      description: "Defining the high-level structure of a software system, including its components, relationships, and principles.",
      examples: ["Microservices architecture", "Monolithic architecture", "Cloud-native architecture"]
    }
  ];

  const postDevelopmentServices = [
    {
      title: "Quality Assurance (QA) & Testing",
      description: "Ensuring software quality, functionality, performance, and security through various testing methodologies.",
      examples: ["Manual Testing (Exploratory, UAT)", "Automated Testing (Unit, Integration, Regression)", "Performance Testing", "Security Testing"]
    },
    {
      title: "Deployment & DevOps Services",
      description: "Automating the software delivery process, managing infrastructure, and ensuring smooth deployment and operation.",
      examples: ["CI/CD pipeline setup", "Infrastructure as Code (IaC)", "Containerization (Docker, Kubernetes)"]
    },
    {
      title: "Software Maintenance & Support",
      description: "Ongoing activities to ensure software remains functional, secure, and up-to-date.",
      examples: ["Bug fixes", "Performance optimization", "Security patches", "Feature enhancements", "Technical support", "Monitoring"]
    },
    {
      title: "Cloud Computing Services",
      description: "Assisting clients with migrating to, managing, and optimizing their applications and infrastructure on cloud platforms.",
      examples: ["Cloud migration (AWS, Azure, GCP)", "Cloud infrastructure management", "Serverless computing"]
    }
  ];

  const ServiceCard = ({ service, index, colorClass, borderColor }: { service: any; index: number; colorClass: string; borderColor: string }) => {
    // Calculate slide direction based on index (alternating left/right)
    const slideDirection = index % 2 === 0 ? -80 : 80;
    const slideDelay = 0.2 + (index * 0.15);

    return (
      <motion.div
        initial={{ opacity: 0, x: slideDirection, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          duration: 1.0,
          delay: slideDelay,
          ease: [0.25, 0.46, 0.45, 0.94],
          scale: { duration: 0.6, delay: slideDelay + 0.2 }
        }}
        whileHover={{
          y: -12,
          scale: 1.05,
          rotateY: 2,
          transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
        }}
        className="bg-gradient-to-br from-gray-800/70 via-gray-800/60 to-gray-900/70 border border-gray-700/60 rounded-xl p-6 shadow-xl hover:border-blue-500/60 hover:bg-gray-800/80 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group relative overflow-hidden backdrop-blur-sm cursor-pointer h-full flex flex-col"
      >
        <div className={`absolute inset-0 ${colorClass} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl`}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl"></div>
        <div className="relative z-10 text-center">
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-700">
            {service.title}
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-400/0 via-blue-400/60 to-blue-400/0 mx-auto rounded-full group-hover:from-blue-400 group-hover:to-blue-400 transition-all duration-700"></div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen">

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

            {/* Service Category Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Core Software Development Services */}
              <motion.div
                initial={{ opacity: 0, x: -80, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  scale: { duration: 0.8, delay: 0.4 }
                }}
                whileHover={{
                  y: -15,
                  scale: 1.02,
                  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
                className="bg-gradient-to-br from-gray-800/80 via-gray-800/70 to-gray-900/80 border border-gray-700/70 rounded-2xl p-8 shadow-2xl hover:border-blue-500/60 hover:bg-gray-800/90 hover:shadow-3xl hover:shadow-blue-500/30 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group relative overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/15 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                      <span className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-700">I</span>
                    </div>
                    <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-700">Core Development</h2>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 group-hover:text-gray-100 transition-colors duration-700 text-center">
                    Building software from scratch or enhancing existing systems.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {coreServices.slice(0, 4).map((service, index) => (
                      <ServiceCard key={service.title} service={service} index={index} colorClass="bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-purple-600/0" borderColor="blue" />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Pre-Development & Design Services */}
              <motion.div
                initial={{ opacity: 0, y: -80, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  scale: { duration: 0.8, delay: 0.8 }
                }}
                whileHover={{
                  y: -15,
                  scale: 1.02,
                  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
                className="bg-gradient-to-br from-gray-800/80 via-gray-800/70 to-gray-900/80 border border-gray-700/70 rounded-2xl p-8 shadow-2xl hover:border-purple-500/60 hover:bg-gray-800/90 hover:shadow-3xl hover:shadow-purple-500/30 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group relative overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/15 to-pink-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                      <span className="text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-700">II</span>
                    </div>
                    <h2 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-700">Pre-Development</h2>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 group-hover:text-gray-100 transition-colors duration-700 text-center">
                    Planning and design services that lay the groundwork before coding begins.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {preDevelopmentServices.slice(0, 4).map((service, index) => (
                      <ServiceCard key={service.title} service={service} index={index + 6} colorClass="bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-pink-600/0" borderColor="purple" />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Post-Development & Support Services */}
              <motion.div
                initial={{ opacity: 0, x: 80, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 1.0,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  scale: { duration: 0.8, delay: 1.2 }
                }}
                whileHover={{
                  y: -15,
                  scale: 1.02,
                  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
                className="bg-gradient-to-br from-gray-800/80 via-gray-800/70 to-gray-900/80 border border-gray-700/70 rounded-2xl p-8 shadow-2xl hover:border-green-500/60 hover:bg-gray-800/90 hover:shadow-3xl hover:shadow-green-500/30 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group relative overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/0 via-green-600/15 to-emerald-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600/20 to-emerald-600/20 flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                      <span className="text-2xl font-bold text-green-400 group-hover:text-green-300 transition-colors duration-700">III</span>
                    </div>
                    <h2 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-700">Post-Development</h2>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 group-hover:text-gray-100 transition-colors duration-700 text-center">
                    Ongoing support and services provided after the initial development phase.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {postDevelopmentServices.slice(0, 4).map((service, index) => (
                      <ServiceCard key={service.title} service={service} index={index + 10} colorClass="bg-gradient-to-r from-green-600/0 via-green-600/10 to-emerald-600/0" borderColor="green" />
                    ))}
                  </div>
                </div>
              </motion.div>
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
