"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Modal({ isOpen, onClose, title, children, size = 'lg' }: ModalProps) {
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl'
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal - Square Slide Transition */}
          <motion.div
            initial={{ opacity: 0, x: '100%', scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: '100%', scale: 0.8 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.6
            }}
            className={`fixed inset-4 md:inset-8 lg:inset-16 ${sizeClasses[size]} mx-auto my-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl border border-gray-700 shadow-2xl z-50 overflow-hidden`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6">
              <h2 className="text-2xl font-bold text-white">{title}</h2>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}