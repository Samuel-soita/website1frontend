"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, ShareIcon, UserPlusIcon } from "@heroicons/react/24/outline";

export default function ReferralWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    companyName: "",
    contactName: "",
    contactEmail: "",
    message: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/referral`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          referrerName: formData.referrerName,
          referrerEmail: formData.referrerEmail,
          companyName: formData.companyName || undefined,
          clientName: formData.contactName || undefined,
          clientEmail: formData.contactEmail || undefined,
          message: formData.message || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit referral');
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
        setShowForm(false);
        setIsSubmitted(false);
        setFormData({
          referrerName: "",
          referrerEmail: "",
          companyName: "",
          contactName: "",
          contactEmail: "",
          message: ""
        });
      }, 3000);
    } catch (err: any) {
      console.error('Referral error:', err);
      setError(err.message || 'Failed to submit. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Floating Referral Button - Small Side Button */}
      <motion.button
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-1.5 py-8 rounded-l-lg shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 group flex items-center justify-center"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        whileHover={{ scale: 1.05 }}
      >
        <span className="font-medium text-xs tracking-tight">Give Referral</span>
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-lg"></div>
      </motion.button>

      {/* Referral Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
        onClick={() => {
          setIsOpen(false);
          setShowForm(false);
          setIsSubmitted(false);
        }}
        className="fixed inset-0 bg-black/50 z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, x: 400, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 400, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-lg bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-l border-gray-700 shadow-2xl z-50 overflow-y-auto"
            >
              <div className="sticky top-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700 px-6 py-4 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                    <UserPlusIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Refer SMIRROR Solutions</h2>
                    <p className="text-gray-400 text-xs">Help others discover our services</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setShowForm(false);
                    setIsSubmitted(false);
                  }}
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-300"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                    <p className="text-gray-300">Your referral has been submitted successfully.</p>
                  </motion.div>
                ) : !showForm ? (
                  /* Refer Us Story */
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-4">
                        <ShareIcon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">Refer SMIRROR Solutions</h3>
                      <p className="text-gray-300 text-lg">Help others discover exceptional development services</p>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-gradient-to-br from-gray-800/60 via-gray-800/50 to-gray-900/60 border border-gray-700/50 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                          <span className="text-blue-400">💼</span>
                          Why Refer Us?
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                          SMIRROR Solutions delivers professional development services that transform businesses. 
                          We help companies build scalable web applications, modern APIs, and robust systems that drive growth.
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-gray-800/60 via-gray-800/50 to-gray-900/60 border border-gray-700/50 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                          <span className="text-purple-400">🎯</span>
                          What We Offer
                        </h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2 mt-1">▸</span>
                            <span>Full-stack web development (TypeScript, React, Node.js, Python)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2 mt-1">▸</span>
                            <span>API development & integration services</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2 mt-1">▸</span>
                            <span>Database design & optimization</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2 mt-1">▸</span>
                            <span>IT consulting & technical expertise</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2 mt-1">▸</span>
                            <span>Professional team training programs</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-gray-800/60 via-gray-800/50 to-gray-900/60 border border-gray-700/50 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                          <span className="text-green-400">🤝</span>
                          How Referrals Work
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                          Simply provide the company details below, and we'll reach out to introduce our services professionally. 
                          We'll keep you updated on the progress and thank you for helping us grow our network.
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setShowForm(true)}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30"
                    >
                      Submit a Referral
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 text-red-400 text-sm">
                        {error}
                      </div>
                    )}
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="referrerName"
                        value={formData.referrerName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Your Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="referrerEmail"
                        value={formData.referrerEmail}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Company to Refer <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Company name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Contact Person Name
                      </label>
                      <input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Contact person name (optional)"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Contact Email
                      </label>
                      <input
                        type="email"
                        name="contactEmail"
                        value={formData.contactEmail}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="contact@company.com (optional)"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Tell us why you're referring this company (optional)"
                      />
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="flex-1 bg-gray-800/50 border border-gray-700 hover:bg-gray-800 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-4 rounded-lg font-semibold transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30"
                      >
                        {isLoading ? 'Submitting...' : 'Submit Referral'}
                      </button>
                    </div>

                    <p className="text-xs text-gray-400 text-center">
                      We'll reach out to the referred company and keep you updated.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}