'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SimpleHomeHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-start pt-24 md:pt-0">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zen-olive-dark to-zen-olive"></div>
      
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
        />
      </div>
      
      {/* Hero Content */}
      <div 
        className="relative z-10 w-full px-6 md:px-16 lg:px-24 xl:px-32"
        style={{ 
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      >
        <div
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-in-out 0.2s'
          }}
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
        </div>
        <div 
          className="mt-8 md:mt-12 flex justify-center"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out 0.6s'
          }}
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
        </div>
      </div>
    </section>
  );
}
