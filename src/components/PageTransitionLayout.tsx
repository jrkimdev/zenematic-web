'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import ClientOnly from './ClientOnly';

export default function PageTransitionLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
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
    if (isMounted) {
      setIsTransitioning(true);
      const timeout = setTimeout(() => setIsTransitioning(false), 1500);
      return () => clearTimeout(timeout);
    }
  }, [pathname, isMounted]);

  useEffect(() => {
    if (isTransitioning && isMounted) {
      const interval = setInterval(() => {
        setCurrentPhrase(loadingPhrases[Math.floor(Math.random() * loadingPhrases.length)]);
      }, 400);

      return () => clearInterval(interval);
    }
  }, [isTransitioning, isMounted]);

  return (
    <ClientOnly fallback={<main className="w-full min-h-screen">{children}</main>}>
      <>
        <AnimatePresence mode="wait">
          {isTransitioning && isMounted && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-zen-olive-dark px-4"
          >
            <div className="flex flex-col items-center space-y-4">
              <motion.div
                className="flex space-x-1 md:space-x-2"
                animate={{ x: [-10, 0, -10] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 md:w-4 h-8 md:h-16 bg-zen-cream/20 relative"
                    initial={{ opacity: 0.2 }}
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.2,
                      repeat: Infinity,
                    }}
                  >
                    <div className="absolute top-0 w-full h-1 md:h-2 bg-zen-cream/30"></div>
                    <div className="absolute bottom-0 w-full h-1 md:h-2 bg-zen-cream/30"></div>
                  </motion.div>
                ))}
              </motion.div>
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentPhrase}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-zen-cream text-sm md:text-xl lg:text-2xl font-light tracking-[0.2em] uppercase text-center"
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                >
                  {currentPhrase}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.main
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: isTransitioning ? 0 : 1 }}
        transition={{
          duration: 0.3,
          delay: isTransitioning ? 0 : 1.2
        }}
        className="w-full min-h-screen"
        style={{ 
          visibility: isTransitioning ? 'hidden' : 'visible' 
        }}
      >
        {children}
      </motion.main>
      </>
    </ClientOnly>
  );
} 