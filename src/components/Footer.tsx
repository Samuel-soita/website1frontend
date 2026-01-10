"use client";

import { useState } from "react";
import Link from "next/link";
import HeroBackground from "./HeroBackground";
import FeedbackWidget from "./FeedbackWidget";
import SupportWidget from "./SupportWidget";
import TalkToUsWidget from "./TalkToUsWidget";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isTalkToUsOpen, setIsTalkToUsOpen] = useState(false);

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Who We Are", href: "/who-we-are" },
    { label: "Vision", href: "/vision" },
    { label: "Careers", href: "/careers" },
    { label: "Internships", href: "/internships" }
  ];

  const serviceCategories = [
    { label: "Custom Software Development", href: "/services" },
    { label: "Web Development", href: "/services" },
    { label: "Mobile App Development", href: "/services" },
    { label: "SaaS Development", href: "/services" },
    { label: "Software Consulting", href: "/services" },
    { label: "UI/UX Design", href: "/services" },
    { label: "QA & Testing", href: "/services" },
    { label: "DevOps Services", href: "/services" },
    { label: "Cloud Computing", href: "/services" },
    { label: "Software Maintenance", href: "/services" }
  ];

  return (
    <footer className="text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden w-full">
      <HeroBackground />
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Main Footer Grid - Full Width */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                SMIRROR Solutions
              </h3>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              We develop and nurture talents from school to the job market.
            </p>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a href="mailto:samuelsoita79@gmail.com" className="hover:text-blue-400 transition-colors duration-300">
                samuelsoita79@gmail.com
              </a>
              <a href="tel:+254768640343" className="hover:text-blue-400 transition-colors duration-300">
                +254 768 640 343
              </a>
              <span>Nairobi, Kenya</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              {serviceCategories.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Resources */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Support & Resources</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <button
                  onClick={() => setIsTalkToUsOpen(true)}
                  className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-300 flex items-center group w-full text-left"
                >
                  <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Contact Us
                </button>
              </li>
              <li>
                <Link
                  href="/internships"
                  className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Apply for Internship
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  View Careers
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-4 pt-4">
              <FeedbackWidget />
              <div className="h-4 w-px bg-gray-700"></div>
              <SupportWidget />
            </div>
          </div>
        </div>

        {/* Bottom Footer - Full Width */}
        <div className="pt-8 border-t border-gray-700/50">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-center lg:text-left">
              <p className="text-sm text-gray-400 font-medium">
                © {currentYear} SMIRROR Solutions. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Talk to Us Widget with external trigger - Hidden button, only modal */}
      <TalkToUsWidget externalOpen={isTalkToUsOpen} onClose={() => setIsTalkToUsOpen(false)} showButton={false} />
    </footer>
  );
}
