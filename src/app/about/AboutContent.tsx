"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import MirrorVisual from "@/components/about/MirrorVisual";

const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const HeroBackground = dynamic(() => import("@/components/HeroBackground"), { ssr: false });

export default function AboutPage() {
  const philosophyItems = [
    {
      title: "Radical Transparency",
      description: "We operate with total clarity. From cost structures to development pipelines, we show you the 'mirror' of your project at every stage, ensuring no surprises, only results.",
      icon: "🔍",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
    },
    {
      title: "Elite Engineering",
      description: "Functional is the baseline; exceptional is our standard. We architect high-concurrency, secure, and scalable digital systems that serve as the backbone for industry leaders.",
      icon: "🛠️",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070"
    }
  ];

  const founderItems = [
    {
      title: "Visionary Leadership",
      description: "Founded by Samuel Soita Watua, SMIRROR Solutions was built on the principle that elite technology should be accessible to any business with a clear vision and the drive to excel.",
      icon: "👤",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974"
    },
    {
      title: "Technical Mastery",
      description: "With deep expertise in full-stack architecture and system design, Samuel oversees every project to ensure it meets our rigorous standards for performance and security.",
      icon: "💻",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070"
    }
  ];

  const promiseItems = [
    {
      title: "Global Partnership",
      description: "Operating from Nairobi, Kenya, we act as a global extension of your team. Our distributed expertise ensures your project benefits from world-class standards and local agility.",
      icon: "🌍",
      image: "https://images.unsplash.com/photo-1521791136064-7986c295944b?q=80&w=2070"
    },
    {
      title: "Sustainable Scalability",
      description: "We don't just build for today; we engineer for your future. Our solutions are designed to scale seamlessly as your user base and business requirements evolve.",
      icon: "📈",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015"
    }
  ];

  const InfoCard = ({ item, index, colorClass }: { item: any; index: number; colorClass: string }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.8,
          delay: 0.1 + (index * 0.15),
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        whileHover={{
          y: -8,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        className="group relative bg-[#0a0a0c] border border-gray-800/80 rounded-3xl p-6 shadow-2xl hover:border-gray-600 transition-all duration-500 overflow-hidden flex flex-col h-full"
      >
        <div className={`absolute inset-0 ${colorClass} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} aria-hidden="true"></div>
        
        <div className="relative w-full h-56 mb-6 rounded-2xl overflow-hidden ring-1 ring-white/5 shadow-inner">
          <img 
            src={item.image} 
            alt={`Image illustrating ${item.title}`} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80"></div>
          <div className="absolute top-4 right-4 text-3xl" aria-hidden="true">{item.icon}</div>
        </div>

        <div className="relative z-10 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 tracking-tight uppercase">
            {item.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
            {item.description}
          </p>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <main className="pt-24 md:pt-32" role="main">
        <section className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-labelledby="about-hero-title">
          <HeroBackground />
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Header with Visual */}
            <div className="flex flex-col lg:flex-row items-center gap-16 mb-24 md:mb-32">
              <div className="lg:w-1/2 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <h1 id="about-hero-title" className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase">
                    The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Mirror</span>
                  </h1>
                  <p className="text-xl text-gray-300 max-w-2xl leading-relaxed mb-8">
                    At SMIRROR Solutions, we reflect the true potential of your business through elite technology. We aren't just developers; we are your digital reflection in a complex world.
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <Link 
                      href="#contact" 
                      className="bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all duration-300 shadow-xl shadow-white/10 active:scale-95"
                      aria-label="Start a conversation with our team"
                    >
                      Start Your Reflection
                    </Link>
                  </div>
                </motion.div>
              </div>
              <div className="lg:w-1/2" aria-hidden="true">
                <MirrorVisual />
              </div>
            </div>

            {/* Categories Sections */}
            <div className="flex flex-col gap-24 md:gap-32 mb-20 md:mb-32">
              
              {/* Category 1: Our Philosophy */}
              <article className="flex flex-col lg:flex-row gap-12 lg:gap-20 relative" aria-labelledby="philosophy-title">
                <div className="lg:w-1/3">
                  <div className="sticky top-32 lg:pb-16 z-20">
                    <motion.div 
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 shadow-inner mb-8 border border-blue-500/20" aria-hidden="true">
                         <span className="text-3xl font-light text-blue-400">01</span>
                      </div>
                      <h2 id="philosophy-title" className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">Our <br /> Philosophy</h2>
                      <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                        We don't just write code; we architect solutions that mirror your ambition. Excellence is not a goal; it's our standard.
                      </p>
                    </motion.div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {philosophyItems.map((item, index) => (
                       <div key={item.title} className={index % 2 === 1 ? "md:mt-16" : ""}>
                         <InfoCard item={item} index={index} colorClass="bg-gradient-to-br from-blue-600 to-cyan-600" />
                       </div>
                     ))}
                  </div>
                </div>
              </article>

              {/* Category 2: The Founder */}
              <article className="flex flex-col lg:flex-row gap-12 lg:gap-20 relative border-t border-gray-800/50 pt-24 md:pt-32" aria-labelledby="founder-title">
                <div className="lg:w-1/3">
                  <div className="sticky top-32 lg:pb-16 z-20">
                    <motion.div 
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 shadow-inner mb-8 border border-purple-500/20" aria-hidden="true">
                         <span className="text-3xl font-light text-purple-400">02</span>
                      </div>
                      <h2 id="founder-title" className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">The <br /> Founder</h2>
                      <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                        Samuel Soita Watua is a visionary technologist dedicated to engineering elite development pathways for enterprises worldwide.
                      </p>
                    </motion.div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {founderItems.map((item, index) => (
                       <div key={item.title} className={index % 2 === 1 ? "md:mt-16" : ""}>
                         <InfoCard item={item} index={index} colorClass="bg-gradient-to-br from-purple-600 to-pink-600" />
                       </div>
                     ))}
                  </div>
                </div>
              </article>

              {/* Category 3: Our Promise */}
              <article className="flex flex-col lg:flex-row gap-12 lg:gap-20 relative border-t border-gray-800/50 pt-24 md:pt-32" aria-labelledby="promise-title">
                <div className="lg:w-1/3">
                  <div className="sticky top-32 lg:pb-16 z-20">
                    <motion.div 
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-600/20 to-red-600/20 shadow-inner mb-8 border border-orange-500/20" aria-hidden="true">
                         <span className="text-3xl font-light text-orange-400">03</span>
                      </div>
                      <h2 id="promise-title" className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">Our <br /> Promise</h2>
                      <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                        We deliver more than software. We deliver results, ironclad security, and a strategic partnership that ensures your long-term dominance.
                      </p>
                    </motion.div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {promiseItems.map((item, index) => (
                       <div key={item.title} className={index % 2 === 1 ? "md:mt-16" : ""}>
                         <InfoCard item={item} index={index} colorClass="bg-gradient-to-br from-orange-600 to-red-600" />
                       </div>
                     ))}
                  </div>
                </div>
              </article>

            </div>

            {/* Final CTA */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-gradient-to-br from-gray-900 to-[#0a0a0c] border border-gray-800 rounded-3xl p-12 text-center relative overflow-hidden"
              aria-labelledby="cta-title"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5" aria-hidden="true"></div>
              <h2 id="cta-title" className="text-4xl font-bold text-white mb-6">Experience the SMIRROR Effect</h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Ready to see your business vision reflected in high-performance software? Let's build something extraordinary together.
              </p>
              <Link 
                href="#contact" 
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/20 active:scale-95"
                aria-label="Book a consultation with our experts"
              >
                Book a Consultation
              </Link>
            </motion.section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}