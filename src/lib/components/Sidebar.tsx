"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const menuItems = [
    {
      label: "Careers",
      href: "/careers",
      description: "Join our team and grow your career"
    },
    {
      label: "Internships",
      href: "/internships",
      description: "Launch your tech career with our programs"
    },
    {
      label: "Vision",
      href: "/vision",
      description: "Our mission, values & commitment"
    },
    {
      label: "Who We Are",
      href: "/who-we-are",
      description: "Meet our founder and team"
    }
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // Delay closing to allow moving to dropdown
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Menu Button - Top Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="fixed top-20 left-4 z-[60]"
      >
        <motion.button
          onClick={toggleDropdown}
          className="bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-3 rounded-lg shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
        </motion.button>

        {/* Dropdown Menu - Animates from first option */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 25,
                duration: 0.3
              }}
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
              className="absolute top-full left-0 mt-2 w-80 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-xl shadow-2xl overflow-hidden z-[60]"
            >
              <div className="p-4 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ 
                      opacity: 0, 
                      x: -20,
                      y: index === 0 ? 0 : -10
                    }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      y: 0
                    }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.08,
                      ease: "easeOut"
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block bg-gradient-to-br from-gray-800/70 via-gray-800/60 to-gray-900/70 border border-gray-700/60 rounded-lg p-4 shadow-lg hover:border-blue-500/60 hover:bg-gray-800/80 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group cursor-pointer relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                      <div className="relative z-10">
                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-500">
                          {item.label}
                        </h3>
                        <p className="text-gray-300 text-sm group-hover:text-gray-100 transition-colors duration-500">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
