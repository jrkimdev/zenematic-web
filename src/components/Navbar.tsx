'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/work', label: 'Work' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav className={`fixed w-full z-50 flex justify-between items-center px-16 py-6 transition-all duration-300 ${
      scrolled ? 'bg-gradient-to-b from-black/95 to-transparent' : 'bg-transparent'
    }`}>
      <Link href="/" className="nav-logo">
        ZENE<span>MATIC</span>
      </Link>

      {/* Desktop Navigation */}
      <ul className="nav-links hidden md:flex gap-10 list-none">
        {navItems.map(({ href, label }) => (
          <li key={href}>
            <Link 
              href={href} 
              className={`${pathname === href ? 'active' : ''}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      
      <Link href="/services" className="nav-cta">
        Start a project
      </Link>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="space-y-2">
          <span className={`block w-8 h-0.5 bg-white transform transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-white transform transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </div>
      </button>

      {/* Mobile Menu */}
      <motion.div 
        className={`fixed inset-0 bg-black z-40 md:hidden`}
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
            <span className="absolute top-1/2 left-0 w-8 h-0.5 bg-white transform -rotate-45"></span>
            <span className="absolute top-1/2 left-0 w-8 h-0.5 bg-white transform rotate-45"></span>
          </div>
        </button>

        <div className="flex flex-col items-center space-y-8 p-8 pt-24">
          {navItems.map(({ href, label }) => (
            <Link 
              key={href}
              href={href}
              className="text-2xl text-white/90 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          
          <Link 
            href="/services"
            className="nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Start a project
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}