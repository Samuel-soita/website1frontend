'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, SparklesIcon, ClockIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

export default function ContactCTA() {
  const stats = [
    {
      value: "24/7",
      label: "Support Available",
      icon: ClockIcon,
      color: "from-blue-600 to-blue-700"
    },
    {
      value: "Free",
      label: "Initial Consultation",
      icon: SparklesIcon,
      color: "from-purple-600 to-purple-700"
    },
    {
      value: "100%",
      label: "Client Satisfaction",
      icon: CheckCircleIcon,
      color: "from-blue-600 to-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <SparklesIcon className="w-5 h-5 text-white" />
            <span className="text-white font-medium">Ready to Get Started?</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let's Build Something
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Amazing Together
            </span>
          </h2>

          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can help bring your ideas to life. Get a free consultation and see how we can transform your vision into reality.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="mailto:hello@smirror.solutions"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-3 group"
            >
              <EnvelopeIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Email: hello@smirror.solutions
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="tel:+447847559012"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 flex items-center gap-3 group"
            >
              <PhoneIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Call: +44 7784 559012
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-slate-200 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-3xl mx-auto"
        >
          <p className="text-lg text-blue-100 font-medium">
            "We are available and prepared, tell us the problem you want to solve"
          </p>
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-white/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-6 h-6 bg-blue-300/20 rounded-full"
        animate={{
          y: [0, 25, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
}