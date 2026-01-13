'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' }
  ];

  return (
    <nav 
      className="fixed top-0 left-0 right-0 bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl z-50 shadow-2xl"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo with Glow Effect */}
          <Link 
            href="/" 
            className="group relative"
            aria-label="SMIRROR Solutions Home"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-lg">
              SMIRROR
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-500 rounded-full shadow-lg shadow-blue-500/25"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
          </Link>

          {/* Search Bar - Compact */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <label htmlFor="main-search" className="sr-only">Search services and documentation</label>
            <div className="relative w-full">
              <input
                id="main-search"
                type="search"
                placeholder="Search services, docs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                aria-label="Search services and documentation"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" aria-hidden="true">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Desktop Navigation with Enhanced Hover Effects */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-300 group overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                style={{ animationDelay: `${index * 100}ms` }}
                aria-label={`Navigate to ${item.label} page`}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}

            {/* Enhanced CTA Button */}
            <Link
              href="#contact"
              className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-400/40 overflow-hidden group ml-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label="Get started - Contact us"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Search Button */}
            <button className="p-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 transition-all duration-300">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg hover:bg-gray-800/50 transition-all duration-300 group"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            >
              <svg className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden pb-4 animate-in slide-in-from-top-2 duration-300" role="menu">
            {/* Mobile Search */}
            <div className="mb-3">
              <label htmlFor="mobile-search" className="sr-only">Search</label>
              <div className="relative">
                <input
                  id="mobile-search"
                  type="search"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  aria-label="Search"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-1 bg-gray-800/50 backdrop-blur-lg rounded-xl p-2 border border-gray-700/50">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-300 font-medium transform hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                  role="menuitem"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 text-center mt-2 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={() => setIsMenuOpen(false)}
                role="menuitem"
                aria-label="Get started - Contact us"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}