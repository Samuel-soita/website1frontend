"use client";

import { motion } from "framer-motion";

export default function MirrorVisual() {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
      
      {/* Main Mirror Surface */}
      <motion.div
        initial={{ rotateY: -30, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative w-full h-full preserve-3d"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
          {/* Reflection Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent skew-x-12 translate-x-full animate-[shimmer_5s_infinite]"></div>
          
          {/* Inner Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-8">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-6xl mb-4"
              >
                🪞
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">The Mirror</h3>
              <p className="text-blue-300 text-sm font-mono uppercase tracking-widest">Transparency in Code</p>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute -z-10 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/5 rounded-xl"
            style={{
              top: `${20 + i * 30}%`,
              right: `${-10 - i * 5}%`,
            }}
          />
        ))}
      </motion.div>

      <style jsx>{`
        .preserve-3d {
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        @keyframes shimmer {
          0% { transform: translateX(-200%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
      `}</style>
    </div>
  );
}
