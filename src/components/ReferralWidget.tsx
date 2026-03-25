"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, ShareIcon, UserPlusIcon } from "@heroicons/react/24/outline";

export default function ReferralWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(true);
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
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-gray-800 hover:bg-gray-700 text-white px-1 py-6 rounded-l-lg shadow-2xl hover:shadow-gray-500/50 transition-all duration-500 group flex items-center justify-center"
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
        className="fixed inset-0 bg-black/60 z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, x: 400, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 400, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-[10%] bottom-[10%] w-full max-w-2xl bg-[#0a0a0a]/95 backdrop-blur-lg border border-white/10 rounded-l-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] z-50 overflow-y-auto"
            >
              <div className="sticky top-0 bg-[#0a0a0a]/95 border-b border-white/10 px-6 py-4 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <UserPlusIcon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white tracking-tight">Partner Referral</h2>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsSubmitted(false);
                  }}
                  className="p-2 text-gray-500 hover:text-white transition-colors"
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
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                      <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 text-red-400 text-sm">
                        {error}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Your Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="referrerName"
                          value={formData.referrerName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Your Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="referrerEmail"
                          value={formData.referrerEmail}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Company Name <span className="text-gray-500 font-normal">(The company you are referring)</span> <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="Acme Corp"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Contact Person
                        </label>
                        <input
                          type="text"
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="(optional)"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Contact Email
                        </label>
                        <input
                          type="email"
                          name="contactEmail"
                          value={formData.contactEmail}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="(optional)"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={2}
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                        placeholder="Tell us why you're referring this company (optional)"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-blue-500 hover:bg-blue-400 text-white px-6 py-4 rounded-xl font-bold transition-all disabled:opacity-50"
                      >
                        {isLoading ? 'Processing...' : 'Submit Referral'}
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