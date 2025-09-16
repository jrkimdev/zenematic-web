'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-zen-olive-dark/90 backdrop-blur-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container-padding mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img 
            src="/brand/zen-logo.png" 
            alt="Zenematic" 
            className="h-14 md:h-16 lg:h-20 w-auto"
          />
          <span className="text-xl md:text-2xl font-bold text-zen-cream">
            Zenematic
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map(({ href, label }) => (
            <div key={href} className="relative">
              <Link 
                href={href} 
                className="text-zen-cream/90 hover:text-zen-cream transition-colors py-2"
                onMouseEnter={() => setHoveredPath(href)}
                onMouseLeave={() => setHoveredPath(null)}
              >
                {label}
                {pathname === href && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute left-0 top-full h-[2px] w-full bg-zen-cream"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                <motion.div
                  className="absolute left-0 top-full h-[2px] bg-zen-cream/70"
                  initial={{ width: 0 }}
                  animate={{
                    width: hoveredPath === href ? '100%' : '0%',
                  }}
                  transition={{
                    duration: 0.2,
                    ease: 'easeInOut'
                  }}
                />
              </Link>
            </div>
          ))}
          
          {/* Social Icon */}
          <a 
            href="https://www.instagram.com/zenematickc/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zen-cream/90 hover:text-zen-cream transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          <Link 
            href="/contact" 
            className="px-6 py-2 border border-zen-cream text-zen-cream hover:bg-zen-cream hover:text-zen-olive-dark transition-all rounded-md"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-2">
            <span className={`block w-8 h-0.5 bg-zen-cream transform transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`block w-8 h-0.5 bg-zen-cream transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-8 h-0.5 bg-zen-cream transform transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>

        {/* Mobile Menu */}
        <motion.div 
          className={`fixed inset-0 bg-zen-olive-dark z-40 md:hidden`}
          initial={{ x: '100%' }}
          animate={{ x: menuOpen ? '0%' : '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
        >
          {/* Close Button */}
          <button 
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 p-2"
          >
            <div className="relative w-8 h-8">
              <span className="absolute top-1/2 left-0 w-8 h-0.5 bg-zen-cream transform -rotate-45"></span>
              <span className="absolute top-1/2 left-0 w-8 h-0.5 bg-zen-cream transform rotate-45"></span>
            </div>
          </button>

          <div className="flex flex-col items-center space-y-8 p-8 pt-24">
            {navItems.map(({ href, label }) => (
              <Link 
                key={href}
                href={href}
                className="text-2xl text-zen-cream/90 hover:text-zen-cream"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            
            {/* Social Icon in Mobile Menu */}
            <a 
              href="https://www.instagram.com/zenematickc/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zen-cream/90 hover:text-zen-cream transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                className="w-8 h-8"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            <Link 
              href="/contact"
              className="px-8 py-3 border border-zen-cream text-zen-cream hover:bg-zen-cream hover:text-zen-olive-dark transition-all rounded-md"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </nav>
  );
} 