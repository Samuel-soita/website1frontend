'use client';

import { motion } from "framer-motion";

export default function ValuesSection() {
  const values = [
    {
      title: "Communication & Collaboration",
      description: "We foster open dialogue and teamwork to ensure successful project outcomes.",
      color: "from-blue-600 to-blue-700"
    },
    {
      title: "Client-Centric Approach",
      description: "Your success is our priority. We maintain clear communication and transparency throughout the project.",
      color: "from-purple-600 to-purple-700"
    },
    {
      title: "Quality Focus",
      description: "We never compromise on quality, ensuring every deliverable meets our high standards.",
      color: "from-blue-600 to-purple-600"
    },
    {
      title: "Continuous Improvement",
      description: "We constantly evolve our skills and processes to deliver better results.",
      color: "from-purple-600 to-blue-600"
    },
    {
      title: "Adaptability",
      description: "Our flexible approach allows us to adapt quickly to changing requirements.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every aspect of our work, from planning to delivery.",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -120,
      scale: 0.85
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring" as const,
        stiffness: 100,
        damping: 14
      }
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(49, 130, 206, 0.05) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(128, 90, 213, 0.05) 0%, transparent 50%)`
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
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-700 font-medium">Our Core Values</span>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            What Drives Us
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-medium">
            These principles guide every decision we make and every interaction we have,
            ensuring we deliver exceptional results for our clients.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.04,
                x: 15,
                rotateY: 6,
                transition: { duration: 0.3, type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group relative cursor-pointer"
            >
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 border border-gray-700/50 hover:border-green-400/50 h-full relative overflow-hidden transform-gpu">
                {/* Hover Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Accent Line */}
                  <div className={`w-12 h-1 bg-gradient-to-r ${value.color} rounded-full mb-6 group-hover:w-16 transition-all duration-300`} />

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">
              Values in Action
            </h3>
            <p className="text-lg text-white leading-relaxed">
              Every project we undertake reflects these core values. From initial consultation to final delivery,
              we ensure that communication, quality, and client success remain at the forefront of everything we do.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}