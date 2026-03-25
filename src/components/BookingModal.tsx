'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiX, FiCheck, FiCalendar, FiClock, FiUser, FiMail, FiBriefcase } from "react-icons/fi";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    planName: string;
}

export default function BookingModal({ isOpen, onClose, planName }: BookingModalProps) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        requirements: "",
        date: "",
        time: "",
        name: "",
        email: "",
        company: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleNext = () => setStep((s) => Math.min(s + 1, 3));
    const handlePrev = () => setStep((s) => Math.max(s - 1, 1));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setTimeout(() => {
                onClose();
                setTimeout(() => {
                    setStep(1);
                    setIsSuccess(false);
                    setFormData({ requirements: "", date: "", time: "", name: "", email: "", company: "" });
                }, 500);
            }, 3000);
        }, 1500);
    };

    // Modern SaaS Calendar Input placeholder
    const today = new Date().toISOString().split('T')[0];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 pointer-events-none z-[101] flex items-center justify-center px-4 sm:px-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] shadow-[0_0_100px_rgba(59,130,246,0.15)] w-full max-w-2xl pointer-events-auto relative overflow-hidden"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors z-20"
                            >
                                <FiX className="w-6 h-6" />
                            </button>

                            {isSuccess ? (
                                <div className="p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                                    <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                                        <FiCheck className="w-10 h-10 text-blue-500" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-white mb-4">Consultation Booked.</h2>
                                    <p className="text-gray-400">Your architecture consultation for <span className="text-white font-semibold">{planName}</span> has been confirmed. A calendar invite has been sent to your email.</p>
                                </div>
                            ) : (
                                <div className="p-8 md:p-12">
                                    {/* Header & Progress */}
                                    <div className="mb-10">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-gray-400 mb-6">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                                            {planName} Enrollment
                                        </div>
                                        <h2 className="text-3xl font-bold text-white mb-6">Book Consultation</h2>
                                        
                                        {/* 3 Steps Progress Bar */}
                                        <div className="flex items-center gap-2">
                                            {[1, 2, 3].map((s) => (
                                                <div key={s} className="flex-1">
                                                    <div className={`h-1.5 rounded-full transition-all duration-500 ${step >= s ? 'bg-blue-500 shadow-[0_0_10px_#3b82f6]' : 'bg-white/10'}`} />
                                                    <div className={`text-[10px] font-mono mt-2 uppercase tracking-wider ${step >= s ? 'text-blue-400' : 'text-gray-600'}`}>
                                                        {s === 1 ? 'Requirements' : s === 2 ? 'Schedule' : 'Details'}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Form Steps */}
                                    <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
                                        <AnimatePresence mode="wait">
                                            {step === 1 && (
                                                <motion.div
                                                    key="step1"
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    className="space-y-6"
                                                >
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-300 mb-2">Technical Objectives & Requirements</label>
                                                        <textarea 
                                                            required
                                                            placeholder="Describe your current tech stack, critical bottlenecks, and what you aim to achieve with this consultation..."
                                                            className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all min-h-[150px] resize-y"
                                                            value={formData.requirements}
                                                            onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                                                        />
                                                    </div>
                                                    <div className="flex justify-end pt-4">
                                                        <button type="submit" className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform">
                                                            Continue to Scheduling
                                                        </button>
                                                    </div>
                                                </motion.div>
                                            )}

                                            {step === 2 && (
                                                <motion.div
                                                    key="step2"
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    className="space-y-6"
                                                >
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        {/* Date Selection */}
                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-300 mb-2">Select Date</label>
                                                            <div className="relative">
                                                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                                                    <FiCalendar className="text-gray-500" />
                                                                </div>
                                                                <input 
                                                                    type="date"
                                                                    required
                                                                    min={today}
                                                                    className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all color-scheme-dark"
                                                                    style={{ colorScheme: 'dark' }}
                                                                    value={formData.date}
                                                                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                                                                />
                                                            </div>
                                                        </div>

                                                        {/* Time Selection */}
                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-300 mb-2">Select Time (UTC)</label>
                                                            <div className="relative">
                                                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                                                    <FiClock className="text-gray-500" />
                                                                </div>
                                                                <input 
                                                                    type="time"
                                                                    required
                                                                    className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all"
                                                                    style={{ colorScheme: 'dark' }}
                                                                    value={formData.time}
                                                                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl flex gap-3 text-blue-200 text-sm">
                                                        <span className="text-xl">ℹ️</span>
                                                        <p>Our lead architects typically conduct consultations over Google Meet. The calendar invite will contain the secure lobby link.</p>
                                                    </div>
                                                    <div className="flex justify-between pt-4">
                                                        <button type="button" onClick={handlePrev} className="px-6 py-3 text-gray-400 hover:text-white transition-colors">
                                                            Back
                                                        </button>
                                                        <button type="submit" className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform">
                                                            Final Details
                                                        </button>
                                                    </div>
                                                </motion.div>
                                            )}

                                            {step === 3 && (
                                                <motion.div
                                                    key="step3"
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    className="space-y-6"
                                                >
                                                    <div className="space-y-4">
                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                                                            <div className="relative">
                                                                <FiUser className="absolute inset-y-0 left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                                                <input 
                                                                    type="text" required placeholder="John Doe"
                                                                    className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all"
                                                                    value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                            <div>
                                                                <label className="block text-sm font-medium text-gray-300 mb-2">Work Email</label>
                                                                <div className="relative">
                                                                    <FiMail className="absolute inset-y-0 left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                                                    <input 
                                                                        type="email" required placeholder="john@company.com"
                                                                        className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all"
                                                                        value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                                                                <div className="relative">
                                                                    <FiBriefcase className="absolute inset-y-0 left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                                                    <input 
                                                                        type="text" required placeholder="Acme Corp"
                                                                        className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all"
                                                                        value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="flex justify-between pt-4">
                                                        <button type="button" onClick={handlePrev} className="px-6 py-3 text-gray-400 hover:text-white transition-colors" disabled={isSubmitting}>
                                                            Back
                                                        </button>
                                                        <button 
                                                            type="submit" 
                                                            disabled={isSubmitting}
                                                            className="px-8 py-3 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] disabled:opacity-50 flex items-center gap-2"
                                                        >
                                                            {isSubmitting ? (
                                                                <><span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"></span> Processing...</>
                                                            ) : 'Confirm Booking'}
                                                        </button>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </form>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
