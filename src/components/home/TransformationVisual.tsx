'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function TransformationVisual() {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center">
      <div className="relative w-full max-w-[500px] aspect-square">
        {/* Layer 1: Idea / Wireframe */}
        <motion.div
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-[10%] left-[5%] w-[70%] aspect-[4/3] bg-black/40 backdrop-blur-md border-2 border-dashed border-gray-600 rounded-2xl p-6 shadow-2xl z-10"
        >
          <div className="w-1/3 h-4 bg-gray-700/50 rounded mb-6"></div>
          <div className="w-full h-24 border border-gray-600/50 rounded-lg flex items-center justify-center mb-4">
            <span className="text-gray-500 font-mono text-xs">Wireframe</span>
          </div>
          <div className="flex gap-4">
            <div className="w-1/2 h-8 bg-gray-700/50 rounded"></div>
            <div className="w-1/2 h-8 bg-gray-700/50 rounded"></div>
          </div>
        </motion.div>

        {/* Layer 2: Code / Architecture */}
        <motion.div
          initial={{ opacity: 0, x: 0, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute top-[30%] left-[15%] w-[70%] aspect-[4/3] bg-[#0d1117] border border-gray-700 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 overflow-hidden"
        >
          <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-3">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <div className="ml-2 text-gray-500 font-mono text-xs">system.ts</div>
          </div>
          <div className="space-y-2 font-mono text-[10px] sm:text-xs">
            <div className="text-blue-400"><span className="text-purple-400">import</span> {'{'} Core {'}'} <span className="text-purple-400">from</span> <span className="text-green-300">'@smirror/engine'</span>;</div>
            <div className="text-gray-400 mt-2"><span className="text-purple-400">export const</span> <span className="text-blue-300">init</span> = <span className="text-purple-400">async</span> () ={'>'} {'{'}</div>
            <div className="text-gray-400 ml-4"><span className="text-purple-400">await</span> Core.<span className="text-blue-300">deploy</span>({'{'}</div>
            <div className="text-green-300 ml-8">scale: <span className="text-orange-400">'global'</span>,</div>
            <div className="text-green-300 ml-8">performance: <span className="text-orange-400">'max'</span></div>
            <div className="text-gray-400 ml-4">{'}'});</div>
            <div className="text-gray-400">{'}'};</div>
          </div>
        </motion.div>

        {/* Layer 3: Live Product */}
        <motion.div
          initial={{ opacity: 0, x: 50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute top-[50%] left-[25%] w-[70%] aspect-[4/3] bg-white border border-white/20 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-30 overflow-hidden group"
        >
          <Image 
            src="/saas_hero.png" 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-700" 
            alt="Live Software System" 
            sizes="(max-width: 768px) 300px, 400px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <div>
              <div className="text-white font-bold text-sm sm:text-base">Live Dashboard</div>
              <div className="text-green-400 font-mono text-xs flex items-center gap-2 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                System Operational
              </div>
            </div>
          </div>
        </motion.div>

        {/* Connecting Lines/Arrows */}
        <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{ filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))' }}>
           {/* These lines are just decorative to imply connection, exact coordinates aren't critical */}
           <motion.path 
             d="M 120 180 Q 180 250 250 220" 
             fill="transparent" 
             stroke="url(#gradient)" 
             strokeWidth="2"
             strokeDasharray="4 4"
             initial={{ pathLength: 0 }}
             animate={{ pathLength: 1 }}
             transition={{ duration: 1.5, delay: 1 }}
           />
           <defs>
             <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
               <stop offset="0%" stopColor="#3b82f6" />
               <stop offset="100%" stopColor="#a855f7" />
             </linearGradient>
           </defs>
        </svg>

      </div>
    </div>
  );
}
