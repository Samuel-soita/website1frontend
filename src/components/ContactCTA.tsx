'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative bg-transparent overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 mt-6">
            <span className="text-gray-400 font-mono text-sm tracking-widest uppercase">Direct Channel</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tighter">
            System Implementation.
          </h2>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto font-medium">
            Bypass the boilerplate. Speak directly with our lead architects to discuss your technical requirements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pb-6"
        >
          <Link
            href="mailto:hello@smirror.solutions"
            className="w-full sm:w-auto bg-white hover:bg-gray-200 text-black px-8 py-3 rounded-xl text-lg font-bold transition-all shadow-lg flex items-center justify-center gap-3"
          >
            <EnvelopeIcon className="w-5 h-5" />
            hello@smirror.solutions
          </Link>
          <Link
            href="tel:+447847559012"
            className="w-full sm:w-auto border border-white/20 text-white hover:bg-white/5 px-8 py-3 rounded-xl text-lg font-bold transition-all flex items-center justify-center gap-3"
          >
            <PhoneIcon className="w-5 h-5 text-gray-400" />
            +44 7784 559012
          </Link>
        </motion.div>
      </div>
    </section>
  );
}