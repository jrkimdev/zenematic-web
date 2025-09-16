'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { videos } from '@/data/portfolioVideos';

export default function PortfolioPage() {
  const [modalVideo, setModalVideo] = useState<null | typeof videos[0]>(null);

  return (
    <main className="min-h-screen bg-zen-olive pt-32 pb-16">
      <div className="container-padding">
        <h1 className="text-4xl md:text-6xl font-bold text-zen-cream mb-4 text-center">Video Portfolio</h1>
        <div className="flex justify-center mb-12">
          <span className="block w-40 h-1 rounded-full bg-zen-cream opacity-80"></span>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
        {videos.map((video, idx) => (
          <motion.button
            key={idx}
            type="button"
            className="group relative overflow-hidden bg-zen-olive-dark cursor-pointer outline-none p-0 border-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08, duration: 0.5, type: 'spring' }}
            onClick={() => setModalVideo(video)}
            style={{ aspectRatio: '16/9' }}
          >
            <div className="relative w-full h-full aspect-video overflow-hidden">
              <video
                src={video.videoUrl}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                muted
                loop
                playsInline
                autoPlay
                poster="/brand/zen-logo.png"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <h2 className="text-lg md:text-xl font-semibold text-zen-cream mb-1 drop-shadow">
                  {video.title}
                </h2>
                <span className="text-xs uppercase tracking-widest text-zen-cream/70">
                  {video.category}
                </span>
              </div>
              {/* Play icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-16 h-16 text-zen-cream/80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="3" fill="none"/>
                  <polygon points="20,16 34,24 20,32" fill="currentColor" />
                </svg>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Modal - borderless, video only */}
      <AnimatePresence>
        {modalVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setModalVideo(null)}
          >
            <motion.video
              src={modalVideo.videoUrl}
              controls
              autoPlay
              className="w-full max-w-5xl max-h-[95vh] rounded-2xl shadow-none bg-black"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
} 