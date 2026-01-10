"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, QuestionMarkCircleIcon, BookOpenIcon, ChatBubbleLeftIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"faq" | "contact">("faq");

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer comprehensive software development services including custom software, web development, mobile apps, SaaS development, consulting, UI/UX design, QA testing, DevOps, and cloud computing services."
    },
    {
      question: "What technologies do you use?",
      answer: "We specialize in modern web development using React, Next.js, Node.js, Python, PostgreSQL, and modern cloud technologies. Our tech stack is designed for scalability and maintainability."
    },
    {
      question: "How do I get started with a project?",
      answer: "You can contact us through our 'Talk to Us' widget, fill out the contact form, or reach out directly. We'll schedule a consultation to understand your needs and provide a customized solution."
    },
    {
      question: "Do you offer internships?",
      answer: "Yes! We have a comprehensive internship program designed to develop and nurture talents from school to the job market. Check our Internships page for more details and to apply."
    },
    {
      question: "What is your pricing model?",
      answer: "Our pricing varies based on project scope and requirements. We offer flexible engagement models from fixed-price projects to ongoing maintenance contracts. Contact us for a customized quote."
    }
  ];

  const supportOptions = [
    {
      icon: ChatBubbleLeftIcon,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: EnvelopeIcon,
      title: "Email Support",
      description: "Send us an email and we'll respond within 24 hours",
      action: "Send Email",
      color: "from-purple-600 to-purple-700"
    },
    {
      icon: PhoneIcon,
      title: "Phone Support",
      description: "Call us directly for immediate assistance",
      action: "Call Now",
      color: "from-green-600 to-green-700"
    }
  ];

  return (
    <>
      {/* Support Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-500 flex items-center gap-2 group"
      >
        <QuestionMarkCircleIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
        Support
      </button>

      {/* Support Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-2xl z-50 overflow-y-auto max-h-[90vh]"
            >
              <div className="sticky top-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700 px-6 py-4 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                    <QuestionMarkCircleIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Support Center</h2>
                    <p className="text-gray-400 text-xs">Get help and answers to your questions</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-300"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                {/* Tabs */}
                <div className="flex gap-2 mb-6 border-b border-gray-700">
                  <button
                    onClick={() => setActiveTab("faq")}
                    className={`px-4 py-2 font-semibold transition-all duration-300 relative ${
                      activeTab === "faq"
                        ? "text-blue-400"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    FAQ
                    {activeTab === "faq" && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                      />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab("contact")}
                    className={`px-4 py-2 font-semibold transition-all duration-300 relative ${
                      activeTab === "contact"
                        ? "text-blue-400"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Contact Support
                    {activeTab === "contact" && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                      />
                    )}
                  </button>
                </div>

                {/* FAQ Tab */}
                {activeTab === "faq" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="space-y-4"
                  >
                    {faqs.map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gray-800/50 border border-gray-700 rounded-lg p-5 hover:border-blue-500/60 hover:bg-gray-800/70 transition-all duration-300"
                      >
                        <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                          <BookOpenIcon className="w-5 h-5 text-blue-400" />
                          {faq.question}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Contact Support Tab */}
                {activeTab === "contact" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {supportOptions.map((option, index) => {
                        const Icon = option.icon;
                        return (
                          <motion.div
                            key={option.title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="bg-gradient-to-br from-gray-800/70 via-gray-800/60 to-gray-900/70 border border-gray-700 rounded-xl p-6 hover:border-blue-500/60 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group cursor-pointer"
                          >
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${option.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                              {option.title}
                            </h3>
                            <p className="text-gray-300 text-sm mb-4">{option.description}</p>
                            {option.title === "Email Support" && (
                              <a
                                href="mailto:samuelsoita79@gmail.com"
                                className="inline-block text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors duration-300"
                              >
                                {option.action} →
                              </a>
                            )}
                            {option.title === "Phone Support" && (
                              <a
                                href="tel:+254768640343"
                                className="inline-block text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors duration-300"
                              >
                                {option.action} →
                              </a>
                            )}
                            {option.title === "Live Chat" && (
                              <button
                                onClick={() => {
                                  // This could open a chat widget
                                  alert("Live chat feature coming soon!");
                                }}
                                className="text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors duration-300"
                              >
                                {option.action} →
                              </button>
                            )}
                          </motion.div>
                        );
                      })}
                    </div>

                    <div className="bg-blue-600/10 border border-blue-500/30 rounded-xl p-6 mt-6">
                      <h3 className="text-lg font-bold text-white mb-2">Need More Help?</h3>
                      <p className="text-gray-300 text-sm mb-4">
                        Our support team is available 24/7 to assist you with any questions or issues.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <a
                          href="mailto:samuelsoita79@gmail.com"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-all duration-300"
                        >
                          <EnvelopeIcon className="w-4 h-4" />
                          Email Us
                        </a>
                        <a
                          href="tel:+254768640343"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-semibold transition-all duration-300"
                        >
                          <PhoneIcon className="w-4 h-4" />
                          Call Us
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
