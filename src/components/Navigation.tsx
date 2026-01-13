'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' }
  ];

  return (
        <nav
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-gray-700/30"
          style={{ backgroundColor: '#1a1a1a' }}
          role="navigation"
          aria-label="Main navigation"
          suppressHydrationWarning
        >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="group relative"
            aria-label="SMIRROR Solutions Home"
          >
            <div className="flex items-center gap-4">
              <Image
                src="/SM.ICON.png"
                alt="SMIRROR Icon"
                width={56}
                height={56}
                className="object-contain group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  // Fallback to a simple dot if image fails to load
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-xl font-bold text-white tracking-tight">
                SMIRROR LTD
              </span>
            </div>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-400 hover:text-white font-medium text-sm px-3 py-2"
                aria-label={`Navigate to ${item.label} page`}
                title={item.label}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2.5 rounded-lg font-semibold text-sm"
              aria-label="Get consultation - Contact us"
              title="Get Consultation"
            >
              Get Consultation
            </Link>
          </div>

          {/* Mobile Hamburger Menu Button - Right side */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-gray-800 rounded-lg"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            title={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div
              className="md:hidden fixed top-20 right-4 w-64 bg-gray-900/95 backdrop-blur-xl rounded-lg border border-gray-700/50 shadow-2xl overflow-hidden animate-in slide-in-from-top-2 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 space-y-2">
                <div className="text-center mb-4">
                  <span className="text-white font-semibold text-sm">Navigation</span>
                </div>
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-gray-300 hover:text-white py-3 px-4 text-center"
                    onClick={() => setIsMenuOpen(false)}
                    role="menuitem"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="border-t border-gray-700/50 pt-3 mt-4">
                  <Link
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-lg font-semibold text-center"
                    role="menuitem"
                    aria-label="Get consultation - Contact us"
                  >
                    Get Consultation
                  </Link>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </nav>
  );
}