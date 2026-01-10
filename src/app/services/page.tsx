"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroBackground from "@/components/HeroBackground";
import Sidebar from "@/components/Sidebar";

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

  const ServiceCard = ({ service, index, colorClass, borderColor }: { service: any; index: number; colorClass: string; borderColor: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{
        y: -8,
        scale: 1.03,
        transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
      }}
      className="bg-gradient-to-br from-gray-800/70 via-gray-800/60 to-gray-900/70 border border-gray-700/60 rounded-2xl p-9 shadow-xl hover:border-blue-500/60 hover:bg-gray-800/80 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group relative overflow-hidden backdrop-blur-sm"
    >
      <div className={`absolute inset-0 ${colorClass} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl`}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-700">
          {service.title}
        </h3>
        <p className="text-gray-300 text-base leading-relaxed mb-5 group-hover:text-gray-100 transition-colors duration-700">
          {service.description}
        </p>
        {service.examples && (
          <div className="space-y-2">
            <p className="text-sm font-semibold text-gray-400 mb-3 group-hover:text-gray-300 transition-colors duration-700">Examples:</p>
            <ul className="space-y-2">
              {service.examples.map((example: string, idx: number) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                  className="flex items-start text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-700 group/item"
                >
                  <span className={`text-blue-400 mr-3 mt-1 text-base group-hover/item:scale-125 transition-transform duration-300`}>▸</span>
                  <span>{example}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen">
      <Sidebar />
      <Navigation />

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

            {/* Core Software Development Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">I. Core Software Development Services</h2>
                <div className="h-1 flex-1 bg-gradient-to-l from-blue-600 to-purple-600 rounded-full"></div>
              </div>
              <p className="text-gray-300 mb-8 text-lg max-w-4xl">
                Fundamental services related to building software from scratch or enhancing existing systems.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coreServices.map((service, index) => (
                  <ServiceCard key={service.title} service={service} index={index} colorClass="bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-purple-600/0" borderColor="blue" />
                ))}
              </div>
            </motion.div>

            {/* Pre-Development & Design Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">II. Pre-Development & Design Services</h2>
                <div className="h-1 flex-1 bg-gradient-to-l from-purple-600 to-pink-600 rounded-full"></div>
              </div>
              <p className="text-gray-300 mb-8 text-lg max-w-4xl">
                Services that lay the groundwork before coding begins.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {preDevelopmentServices.map((service, index) => (
                  <ServiceCard key={service.title} service={service} index={index} colorClass="bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-pink-600/0" borderColor="purple" />
                ))}
              </div>
            </motion.div>

            {/* Post-Development & Support Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-1 w-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">III. Post-Development & Support Services</h2>
                <div className="h-1 flex-1 bg-gradient-to-l from-green-600 to-emerald-600 rounded-full"></div>
              </div>
              <p className="text-gray-300 mb-8 text-lg max-w-4xl">
                Services provided after the initial development phase.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {postDevelopmentServices.map((service, index) => (
                  <ServiceCard key={service.title} service={service} index={index} colorClass="bg-gradient-to-r from-green-600/0 via-green-600/10 to-emerald-600/0" borderColor="green" />
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-blue-600/10 via-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-9 shadow-lg border border-blue-500/30 text-center"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss your project and find the perfect solution for your business needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="#contact"
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-500 transform hover:scale-105 shadow-lg"
                >
                  Request a Consultation
                </Link>
                <Link
                  href="/about"
                  className="inline-block border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-500 transform hover:scale-105"
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
