'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomeHero() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  const loadingPhrases = [
    "Frame by Frame",
    "Crafting Stories",
    "Rolling Camera",
    "Creating Magic",
    "Setting the Scene",
    "Lights, Camera, Action",
    "Making Moments",
    "Capturing Dreams",
    "Visual Poetry",
    "Through the Lens"
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isLoading && isMounted) {
      const interval = setInterval(() => {
        setCurrentPhrase(loadingPhrases[Math.floor(Math.random() * loadingPhrases.length)]);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isLoading, isMounted]);

  return (
    <section className="relative min-h-screen flex items-center justify-start pt-24 md:pt-0">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zen-olive-dark to-zen-olive"></div>
      
      {/* Loading Animation */}
      <AnimatePresence>
        {isLoading && isMounted && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-zen-olive-dark" // Changed from z-50 to z-40
          >
            <div className="flex flex-col items-center space-y-4">
              <motion.div
                className="flex space-x-1"
                animate={{ x: [-20, 0, -20] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-4 h-16 bg-zen-cream/20 relative"
                    initial={{ opacity: 0.2 }}
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.2,
                      repeat: Infinity,
                    }}
                  >
                    <div className="absolute top-0 w-full h-2 bg-zen-cream/30"></div>
                    <div className="absolute bottom-0 w-full h-2 bg-zen-cream/30"></div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.p
                className="text-zen-cream text-xl md:text-2xl font-light tracking-[0.2em] uppercase"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {currentPhrase}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1067553636?h=351310eca8&autoplay=1&loop=1&background=1&muted=1"
          className="absolute w-[100vw] h-[100vh] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-40"
          style={{
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            aspectRatio: '16/9',
          }}
          allow="autoplay; fullscreen"
          allowFullScreen
          frameBorder="0"
          onLoad={() => {
            if (isMounted) {
              setTimeout(() => setIsLoading(false), 1000);
            }
          }}
        />
      </div>
      
      {/* Hero Content */}
      <motion.div 
        className="relative z-10 w-full px-6 md:px-16 lg:px-24 xl:px-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 30 : 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-col items-center gap-6 md:gap-8">
            <img 
              src="/brand/zen-logo.png" 
              alt="Zenematic Logo" 
              className="h-40 sm:h-56 md:h-72 lg:h-96 xl:h-[28rem] w-auto"
            />
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mt-8 md:mt-10 text-center text-white/90">
            Digital Story-Telling.
          </p>
        </motion.div>
        <motion.div 
          className="mt-8 md:mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link 
            href="/contact" 
            className="inline-flex items-center group"
          >
            <span className="text-lg md:text-xl text-zen-cream/90 group-hover:text-zen-cream transition-colors">
              Get In Touch
            </span>
            <span className="ml-2 w-6 h-6 md:w-8 md:h-8 rounded-full border border-zen-cream/30 inline-flex items-center justify-center group-hover:bg-zen-cream/10 transition-colors">
              <svg 
                className="w-3 h-3 md:w-4 md:h-4 text-zen-cream/90 group-hover:text-zen-cream transition-colors" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
} 