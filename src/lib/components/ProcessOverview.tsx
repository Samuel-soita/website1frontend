'use client';

import { motion } from "framer-motion";
import { MagnifyingGlassIcon, PencilSquareIcon, CogIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

export default function ProcessOverview() {
  const processes = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "In-depth conversations, requirement gathering, market analysis, project scoping, timeline planning",
      icon: MagnifyingGlassIcon,
      gradient: "from-blue-600 to-blue-700",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "User research, wireframing, interactive prototypes, brand alignment, user flow optimization",
      icon: PencilSquareIcon,
      gradient: "from-purple-600 to-purple-700",
      bgColor: "from-purple-50 to-purple-100"
    },
    {
      step: "03",
      title: "Development",
      description: "Agile methodology, modern technologies, testing, performance optimization, security practices",
      icon: CogIcon,
      gradient: "from-blue-600 to-purple-600",
      bgColor: "from-blue-50 to-purple-100"
    },
    {
      step: "04",
      title: "Quality Assurance",
      description: "Comprehensive testing, bug resolution, performance benchmarking, cross-platform compatibility",
      icon: CheckCircleIcon,
      gradient: "from-purple-600 to-blue-600",
      bgColor: "from-purple-50 to-blue-100"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        type: "spring" as const,
        stiffness: 110,
        damping: 16
      }
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-6">
            <CogIcon className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-medium">Systematic Process</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Proven Methodology
          </h2>
          <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
            We follow a systematic, battle-tested process to deliver high-quality solutions that exceed expectations
            and drive real business results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Connection Line for Desktop */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.06,
                  x: 25,
                  rotateY: 10,
                  transition: { duration: 0.4, type: "spring", stiffness: 300, damping: 22 }
                }}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 border border-gray-700/50 hover:border-cyan-400/50 relative overflow-hidden group cursor-pointer transform-gpu"
              >
                {/* Step Number with Gradient Background */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${process.gradient} text-white text-xl font-bold mb-6 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {process.step}
                </motion.div>

                {/* Icon */}
                <motion.div
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${process.gradient} flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <process.icon className="w-10 h-10 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {process.title}
                </h3>

                {/* Description */}
                <p className="text-white leading-relaxed">
                  {process.description}
                </p>

                {/* Progress Indicator */}
                <div className="mt-6 flex justify-center">
                  <div className={`w-full h-2 bg-gradient-to-r ${process.gradient} rounded-full`} />
                </div>

                {/* Decorative Elements */}
                <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${process.gradient} opacity-10 rounded-full blur-2xl`} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <CheckCircleIcon className="w-8 h-8 text-green-500" />
              <h3 className="text-2xl font-bold text-gray-900">Consistent Excellence</h3>
              <CheckCircleIcon className="w-8 h-8 text-green-500" />
            </div>
            <p className="text-lg text-gray-700">
              Every project follows this systematic approach, ensuring predictable results,
              transparent communication, and exceptional outcomes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}