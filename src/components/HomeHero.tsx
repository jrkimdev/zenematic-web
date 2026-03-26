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
    <section className="hero relative min-h-screen flex flex-col items-start justify-center cinematic-grain">
      {/* Video Background */}
      <div className="hero-video-bg absolute inset-0">
        <iframe
          src="https://player.vimeo.com/video/1176788727?h=7571921e4c&autoplay=1&loop=1&background=1&muted=1"
          className="hero-video-placeholder absolute w-full h-full object-cover opacity-40"
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
      
      {/* Loading Animation */}
      <AnimatePresence>
        {isLoading && isMounted && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-black"
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
                    className="w-4 h-16 bg-gold/20 relative"
                    initial={{ opacity: 0.2 }}
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.2,
                      repeat: Infinity,
                    }}
                  >
                    <div className="absolute top-0 w-full h-2 bg-gold/30"></div>
                    <div className="absolute bottom-0 w-full h-2 bg-gold/30"></div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.p
                className="text-film text-xl md:text-2xl font-light tracking-[0.2em] uppercase"
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
      
      {/* Hero Content */}
      <div className="hero-content relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 30 : 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="hero-eyebrow">Cinematic Media Studio — Kansas City</p>
          <h1 className="hero-headline">
            We make your brand<br/><em>impossible to ignore.</em>
          </h1>
          <p className="hero-sub">Creative strategy · Production · Storytelling</p>
          
          <div className="hero-actions">
            <Link href="/work" className="btn-primary">
              See our work
            </Link>
            <Link href="/contact" className="btn-secondary">
              Work with us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="scroll-line"></div>
        Scroll
      </motion.div>
    </section>
  );
}