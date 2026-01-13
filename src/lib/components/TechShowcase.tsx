'use client';

import { motion } from "framer-motion";
import { CodeBracketIcon, CpuChipIcon, CloudIcon, ServerIcon } from "@heroicons/react/24/outline";

export default function TechShowcase() {
  const technologies = [
    {
      name: "TypeScript",
      level: "expert",
      description: "Primary language, type-safe, maintainable code",
      icon: CodeBracketIcon,
      color: "from-gray-600 to-gray-700",
      bgColor: "from-gray-50 to-gray-100"
    },
    {
      name: "React/Next.js",
      level: "expert",
      description: "Modern UI with TypeScript",
      icon: "⚛️",
      color: "from-gray-600 to-gray-700",
      bgColor: "from-gray-50 to-gray-100"
    },
    {
      name: "Node.js/Express",
      level: "expert",
      description: "Backend APIs with TypeScript",
      icon: CpuChipIcon,
      color: "from-gray-600 to-gray-700",
      bgColor: "from-gray-50 to-gray-100"
    },
    {
      name: "Python/FastAPI",
      level: "expert",
      description: "Data & AI solutions",
      icon: "🐍",
      color: "from-gray-600 to-gray-700",
      bgColor: "from-gray-50 to-gray-100"
    },
    {
      name: "PostgreSQL",
      level: "expert",
      description: "Database design & optimization",
      icon: ServerIcon,
      color: "from-gray-600 to-gray-700",
      bgColor: "from-blue-50 to-purple-100"
    },
    {
      name: "Tailwind CSS",
      level: "expert",
      description: "Modern responsive styling",
      icon: "🎨",
      color: "from-gray-600 to-gray-700",
      bgColor: "from-gray-50 to-gray-100"
    },
    {
      name: "Docker/K8s",
      level: "advanced",
      description: "Container & orchestration",
      icon: "🐳",
      color: "from-gray-600 to-gray-700",
      bgColor: "from-blue-50 to-cyan-100"
    },
    {
      name: "AWS/GCP",
      level: "advanced",
      description: "Cloud infrastructure",
      icon: CloudIcon,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-gray-50 to-gray-100"
    }
  ];

  const getLevelStars = (level: string) => {
    const count = level === "expert" ? 3 : 2;
    return "⭐".repeat(count);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.04) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.04) 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.03) 0%, transparent 50%)`
        }} />
      </div>

      {/* Floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border border-blue-400/20 rounded-lg rotate-45"
          animate={{
            rotate: [45, 135, 45],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-24 h-24 border border-purple-400/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Modern Technology Stack
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-medium">
            We build reliable, maintainable, and scalable web applications using cutting-edge technologies
            and industry best practices that stand the test of time.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.08,
                x: 15,
                rotateY: 5,
                transition: { duration: 0.4, type: "spring", stiffness: 300, damping: 20 }
              }}
              className={`bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 border border-gray-700/50 hover:border-blue-400/50 relative overflow-hidden group cursor-pointer transform-gpu`}
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-2xl shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {typeof tech.icon === 'string' ? (
                    <span className="text-2xl">{tech.icon}</span>
                  ) : (
                    <tech.icon className="w-8 h-8 text-white" />
                  )}
                </motion.div>

                {/* Tech Name */}
                <h3 className="font-bold text-white mb-2 text-lg">{tech.name}</h3>

                {/* Level Indicator */}
                <div className="flex justify-center mb-3">
                  <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${tech.color} text-white text-xs font-medium`}>
                    {tech.level.toUpperCase()}
                  </div>
                </div>

                {/* Stars */}
                <div className="text-yellow-400 text-sm mb-3 flex justify-center">
                  {getLevelStars(tech.level).split('').map((star, starIndex) => (
                    <motion.span
                      key={starIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + starIndex * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {star}
                    </motion.span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm text-white leading-relaxed">{tech.description}</p>
              </div>

              {/* Enhanced Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-all duration-500 group-hover:scale-110" />
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500 group-hover:scale-125" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-gray-200">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <p className="text-lg text-white font-semibold drop-shadow-md">
              Every project built with industry best practices and cutting-edge technology
            </p>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}