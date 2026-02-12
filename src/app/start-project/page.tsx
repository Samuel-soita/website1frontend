"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Navigation is invalid in layout
import Footer from "@/components/Footer";
import HeroBackground from "@/components/HeroBackground";

type FormData = {
    clientName: string;
    clientEmail: string;
    companyName: string;
    projectType: string;
    budgetRange: string;
    timeline: string;
    description: string;
    techPreferences: string[];
};

const initialFormData: FormData = {
    clientName: "",
    clientEmail: "",
    companyName: "",
    projectType: "",
    budgetRange: "",
    timeline: "",
    description: "",
    techPreferences: [],
};

const steps = [
    { id: 1, title: "Vision", description: "What do you want to build?" },
    { id: 2, title: "Specifics", description: "Technical preferences" },
    { id: 3, title: "Logistics", description: "Budget & Timeline" },
    { id: 4, title: "Contact", description: "Your details" },
];

export default function StartProject() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleTechToggle = (tech: string) => {
        setFormData((prev) => {
            const prefs = prev.techPreferences.includes(tech)
                ? prev.techPreferences.filter((t) => t !== tech)
                : [...prev.techPreferences, tech];
            return { ...prev, techPreferences: prefs };
        });
    };

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/project/inquiry`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSuccess(true);
            } else {
                // Handle error (ideally show a toast)
                console.error("Submission failed");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen text-white flex flex-col">
                {/* Navigation is in layout */}
                <main className="flex-grow flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-md w-full bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700 text-center"
                    >
                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Project Submitted!</h2>
                        <p className="text-gray-300 mb-8">
                            Thank you for trusting SMIRROR. Our team will review your project details and get back to you within 24 hours.
                        </p>
                        <a href="/" className="inline-block w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition-colors">
                            Return Home
                        </a>
                    </motion.div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen text-white">
            {/* Navigation is in layout */}

            <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex flex-col">
                <HeroBackground />

                <div className="max-w-3xl mx-auto w-full relative z-10">
                    <div className="mb-12 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold mb-4"
                        >
                            Start Your Project
                        </motion.h1>
                        <p className="text-gray-400 text-lg">Let's build something extraordinary together.</p>
                    </div>

                    {/* Progress Steps */}
                    <div className="flex justify-between mb-12 relative">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-800 -z-10 transform -translate-y-1/2 rounded-full"></div>
                        <div
                            className="absolute top-1/2 left-0 h-1 bg-blue-600 -z-10 transform -translate-y-1/2 rounded-full transition-all duration-500"
                            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                        ></div>

                        {steps.map((step) => (
                            <div key={step.id} className="flex flex-col items-center">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${step.id <= currentStep
                                        ? "bg-blue-600 border-blue-600 text-white"
                                        : "bg-gray-900 border-gray-700 text-gray-500"
                                        }`}
                                >
                                    {step.id}
                                </div>
                                <span className={`text-xs mt-2 font-medium ${step.id <= currentStep ? "text-blue-400" : "text-gray-600"}`}>
                                    {step.title}
                                </span>
                            </div>
                        ))}
                    </div>

                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="bg-gray-800/30 backdrop-blur-md border border-gray-700 rounded-3xl p-8 shadow-2xl"
                    >
                        <form onSubmit={handleSubmit}>
                            {currentStep === 1 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-semibold mb-6">Project Vision</h2>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Project Type</label>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {["Web Application", "Mobile App", "E-commerce", "Corporate Website", "SaaS Platform", "Other"].map((type) => (
                                                <div
                                                    key={type}
                                                    onClick={() => setFormData(prev => ({ ...prev, projectType: type }))}
                                                    className={`p-4 rounded-xl border cursor-pointer transition-all ${formData.projectType === type
                                                        ? "bg-blue-600/20 border-blue-500 text-white"
                                                        : "bg-gray-800/50 border-gray-700 hover:border-gray-600 text-gray-300"
                                                        }`}
                                                >
                                                    {type}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                            rows={4}
                                            className="w-full bg-gray-900/50 border border-gray-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                            placeholder="Describe your project, goals, and target audience..."
                                        ></textarea>
                                    </div>
                                </div>
                            )}

                            {currentStep === 2 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-semibold mb-6">Technical Specifics</h2>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-4">Preferred Technologies (Optional)</label>
                                        <div className="flex flex-wrap gap-3">
                                            {["React", "Next.js", "Vue", "Node.js", "Python", "Flutter", "React Native", "AWS", "Firebase"].map((tech) => (
                                                <button
                                                    key={tech}
                                                    type="button"
                                                    onClick={() => handleTechToggle(tech)}
                                                    className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${formData.techPreferences.includes(tech)
                                                        ? "bg-blue-600 border-blue-600 text-white"
                                                        : "bg-transparent border-gray-700 text-gray-400 hover:border-gray-500"
                                                        }`}
                                                >
                                                    {tech}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {currentStep === 3 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-semibold mb-6">Logistics</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">Budget Range (USD)</label>
                                            <select
                                                name="budgetRange"
                                                value={formData.budgetRange}
                                                onChange={handleInputChange}
                                                className="w-full bg-gray-900/50 border border-gray-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                                            >
                                                <option value="">Select Range</option>
                                                <option value="<5k">Less than $5,000</option>
                                                <option value="5k-10k">$5,000 - $10,000</option>
                                                <option value="10k-25k">$10,000 - $25,000</option>
                                                <option value="25k-50k">$25,000 - $50,000</option>
                                                <option value="50k+">$50,000+</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">Timeline</label>
                                            <select
                                                name="timeline"
                                                value={formData.timeline}
                                                onChange={handleInputChange}
                                                className="w-full bg-gray-900/50 border border-gray-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                                            >
                                                <option value="">Select Timeline</option>
                                                <option value="<1mo">Less than 1 month</option>
                                                <option value="1-3mo">1 - 3 months</option>
                                                <option value="3-6mo">3 - 6 months</option>
                                                <option value="6mo+">6 months+</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {currentStep === 4 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-semibold mb-6">Contact Details</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                name="clientName"
                                                value={formData.clientName}
                                                onChange={handleInputChange}
                                                className="w-full bg-gray-900/50 border border-gray-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                name="clientEmail"
                                                value={formData.clientEmail}
                                                onChange={handleInputChange}
                                                className="w-full bg-gray-900/50 border border-gray-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                                                required
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-300 mb-2">Company Name (Optional)</label>
                                            <input
                                                type="text"
                                                name="companyName"
                                                value={formData.companyName}
                                                onChange={handleInputChange}
                                                className="w-full bg-gray-900/50 border border-gray-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="flex justify-between mt-8 pt-6 border-t border-gray-700/50">
                                {currentStep > 1 ? (
                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        className="px-6 py-3 text-gray-400 hover:text-white font-medium transition-colors"
                                    >
                                        Back
                                    </button>
                                ) : (
                                    <div></div>
                                )}

                                {currentStep < steps.length ? (
                                    <button
                                        type="button"
                                        onClick={nextStep}
                                        className="px-8 py-3 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
                                    >
                                        Next Step
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg flex items-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Submitting...
                                            </>
                                        ) : (
                                            "Submit Project"
                                        )}
                                    </button>
                                )}
                            </div>
                        </form>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
