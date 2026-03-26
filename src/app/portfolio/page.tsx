'use client';

import React from 'react';
import Link from 'next/link';
import './portfolio.css';

const mainProjects = [
  {
    cat: 'Commercial · Luxury · Product',
    name: 'Precision in every frame.',
    tagline: 'Cinematic product media for a luxury watch dealer — Rolex and Audemars Piguet. Dark, detailed, premium. Shot to match the standard of the product itself.',
    format: 'Reel + Gallery',
    formatVideo: true,
    placeholder: 'Replace with your darkest, most cinematic watch macro shot\nRolex or AP · Black background · Detail-forward',
  },
  {
    cat: 'Fashion · Editorial · Lifestyle',
    name: 'A brand that moves.',
    tagline: 'Editorial and lookbook production for a KC fashion brand. Studio-lit, direction-led, built to perform on social and in print.',
    format: 'Reel',
    formatVideo: true,
    placeholder: 'Replace with your strongest fashion editorial frame\nStudio-lit · Model in motion · Clean background',
  },
];

const bottomProjects = [
  {
    cat: 'Events · Live · Culture',
    name: "The energy doesn't lie.",
    tagline: 'Live event and concert coverage — scale, atmosphere, and the moments between the big ones.',
    format: 'Reel',
    formatVideo: true,
    placeholder: 'Replace with your best concert or event shot\nStage lights · Crowd energy · Atmospheric',
  },
  {
    cat: 'Commercial · Brands · KC',
    name: 'Local brands. Cinematic standard.',
    tagline: 'Brand and commercial media for KC businesses. Every client gets the same cinematic eye — regardless of size.',
    format: 'Gallery',
    formatVideo: false,
    placeholder: 'Replace with your strongest commercial or brand still\nProduct · Business · KC brand',
  },
  {
    cat: 'Performance · Culture · Movement',
    name: 'Movement is the story.',
    tagline: 'Performance and dance documentation — bringing the same cinematic eye that defines everything we shoot to the world that raised us.',
    format: 'Reel',
    formatVideo: true,
    placeholder: 'Replace with a performance or dance frame\nStage · Movement · Dramatic lighting',
  },
];

function FormatBadge({ label, video }: { label: string; video: boolean }) {
  return (
    <div className="format-badge">
      {video
        ? <div className="format-badge-play" />
        : <div className="format-badge-dot" />
      }
      <span className="format-badge-label">{label}</span>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <main className="work-page-main">

      {/* Page Hero */}
      <section className="work-page-hero">
        <div>
          <p className="work-hero-label">Selected work</p>
          <h1 className="work-hero-h1">The<br /><em>work.</em></h1>
        </div>
        <div className="work-hero-count-wrap">
          <p className="work-hero-count">05</p>
          <p className="work-hero-count-label">Featured projects</p>
        </div>
      </section>

      {/* Featured Project — Big 12 */}
      <div className="work-featured-wrap">
        <div className="work-featured-image">
          <div className="work-thumb-bg" />
          <div className="work-featured-placeholder">
            Replace with your strongest Big 12 tournament image<br />Wide shot · High contrast · Athlete or crowd energy
          </div>
        </div>
        <div className="work-page-featured-overlay">
          <div>
            <p className="work-featured-cat">Sports · Big 12 Media · Kansas City</p>
            <h2 className="work-featured-title">
              Three years.<br />Twelve teams.<br />One story at a time.
            </h2>
            <p className="work-featured-desc">
              Official tournament media for the Big 12 Conference — three consecutive years of on-the-ground coverage in Kansas City. Athlete portraits, game energy, behind-the-scenes access.
            </p>
          </div>
          <div className="work-page-featured-right">
            <span className="work-featured-badge">Featured work</span>
            <p className="work-featured-format-label">Photography · Video</p>
            <div className="work-featured-play-row">
              <div className="work-featured-play-icon" />
              <span className="work-featured-play-text">View reel</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main 2-column Grid (tall 4:5) */}
      <div className="work-grid-wrapper">
        <div className="work-page-main-grid">
          {mainProjects.map((p, i) => (
            <div key={i} className="work-card-item">
              <div className="work-card-image tall">
                <div className="work-thumb-bg" />
                <div className="work-card-placeholder">{p.placeholder}</div>
              </div>
              <FormatBadge label={p.format} video={p.formatVideo} />
              <div className="work-card-overlay">
                <p className="work-card-cat">{p.cat}</p>
                <h3 className="work-card-title">{p.name}</h3>
                <p className="work-card-tagline">{p.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Work Statement Break */}
      <div className="work-page-statement">
        <p className="work-statement-quote">
          &ldquo;Every frame is a decision. We make them all with intention.&rdquo;
        </p>
        <div className="work-statement-stat">
          <p className="work-statement-stat-num">3</p>
          <p className="work-statement-stat-label">Years — Big 12 Media</p>
        </div>
      </div>

      {/* Bottom 3-column Grid (3:4) */}
      <div className="work-grid-wrapper">
        <div className="work-page-bottom-grid">
          {bottomProjects.map((p, i) => (
            <div key={i} className="work-card-item">
              <div className="work-card-image short">
                <div className="work-thumb-bg" />
                <div className="work-card-placeholder">{p.placeholder}</div>
              </div>
              <FormatBadge label={p.format} video={p.formatVideo} />
              <div className="work-card-overlay bottom">
                <p className="work-card-cat">{p.cat}</p>
                <h3 className="work-card-title small">{p.name}</h3>
                <p className="work-card-tagline">{p.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Closer CTA */}
      <section className="work-page-closer">
        <p className="work-closer-eyebrow">Seen enough?</p>
        <h2 className="work-closer-headline">Let&apos;s make something<br /><em>worth remembering.</em></h2>
        <p className="work-closer-sub">Tell us about your project and we&apos;ll get back to you within 24 hours.</p>
        <Link href="/contact" className="closer-btn">Start a conversation</Link>
      </section>

    </main>
  );
}