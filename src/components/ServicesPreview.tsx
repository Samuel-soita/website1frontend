'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { GlobeAltIcon, WrenchScrewdriverIcon, CpuChipIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export default function ServicesPreview() {
  const services = [
    {
      title: "Website Development",
      description: "Custom sites from scratch with TypeScript & modern tech",
      price: "From $2,500",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile-First"],
      icon: GlobeAltIcon,
      gradient: "from-blue-600 to-blue-700",
      bgGradient: "from-blue-50 to-blue-100",
      delay: 0.1
    },
    {
      title: "Website Maintenance",
      description: "Ongoing support, updates, and optimization",
      price: "From $8K/month",
      features: ["Regular Updates", "Security Patches", "Performance Monitoring", "24/7 Support"],
      icon: WrenchScrewdriverIcon,
      gradient: "from-purple-600 to-purple-700",
      bgGradient: "from-purple-50 to-purple-100",
      delay: 0.2
    },
    {
      title: "Full-Stack Applications",
      description: "Complex web apps, e-commerce, business software",
      price: "From $10,000",
      features: ["Complete Solutions", "Database Design", "API Integration", "Scalable Architecture"],
      icon: CpuChipIcon,
      gradient: "from-blue-600 to-purple-600",
      bgGradient: "from-blue-50 to-purple-100",
      delay: 0.3
    },
    {
      title: "IT Outsourcing",
      description: "Dedicated teams and project-based development",
      price: "From $25K/month",
      features: ["Expert Developers", "Flexible Scaling", "Project Management", "Quality Assurance"],
      icon: UserGroupIcon,
      gradient: "from-purple-600 to-blue-600",
      bgGradient: "from-purple-50 to-blue-100",
      delay: 0.4
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        type: "spring" as const,
        stiffness: 120,
        damping: 18
      }
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
            <GlobeAltIcon className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-medium">Complete Solutions</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Web Solutions for All Clients
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-medium">
            From simple websites to complex enterprise applications - we serve everyone who needs web development.
            No project too small, no challenge too big.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                x: 20,
                rotateY: 8,
                transition: { duration: 0.4, type: "spring", stiffness: 300, damping: 25 }
              }}
              className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border border-gray-700/50 hover:border-purple-400/50 relative overflow-hidden group cursor-pointer transform-gpu"
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="p-8 relative z-10">
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Price */}
                <div className={`text-3xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-6`}>
                  {service.price}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: service.delay + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-gray-700"
                    >
                      <motion.div
                        className={`w-5 h-5 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center mr-3`}
                        whileHover={{ scale: 1.2 }}
                      >
                        <span className="text-white text-xs">✓</span>
                      </motion.div>
                      <span className="text-sm font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="#contact"
                    className={`block w-full bg-gradient-to-r ${service.gradient} hover:shadow-lg text-white text-center py-3 px-6 rounded-xl font-semibold transition-all duration-200 shadow-md`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl" />
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-lg" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              All Clients Welcome - No Restrictions
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you're an individual with a personal website idea, a small business needing an online presence,
              or a large enterprise requiring complex web applications - we're here for you.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#contact"
              className="inline-block bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
            >
              Start Your Project Today
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}