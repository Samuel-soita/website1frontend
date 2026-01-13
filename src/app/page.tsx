"use client";

import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import HeroBackground from "@/components/HeroBackground";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* Services Section */}
      <section 
        className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
        aria-labelledby="services-heading"
      >
        <HeroBackground />
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 id="services-heading" className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Professional Services
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Specialized technology solutions for modern businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Web Development", desc: "Custom websites & applications", href: "/services" },
              { title: "Full-Stack Solutions", desc: "Complete software systems", href: "/services" },
              { title: "IT Consulting", desc: "Technical expertise & guidance", href: "/services" },
              { title: "All Services", desc: "Comprehensive technology solutions", href: "/services" }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } }}
                className="bg-gradient-to-br from-gray-800/70 via-gray-800/60 to-gray-900/70 border border-gray-700/60 rounded-2xl p-9 shadow-xl hover:border-blue-500/60 hover:bg-gray-800/80 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group relative overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                <Link href={service.href} className="block relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-700">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed mb-4 group-hover:text-gray-100 transition-colors duration-700">
                    {service.desc}
                  </p>
                  <div className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <span className="text-sm font-semibold">Learn more →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
