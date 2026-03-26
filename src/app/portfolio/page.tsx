'use client';

import React, { useState } from 'react';
import Link from 'next/link';

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

const thumbBg: React.CSSProperties = {
  position: 'absolute', inset: 0,
  background: 'linear-gradient(135deg, #1a1a1a 0%, #111 50%, #1a1a1a 100%)',
};

function FormatBadge({ label, video }: { label: string; video: boolean }) {
  return (
    <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(10,10,10,0.7)', border: '0.5px solid rgba(255,255,255,0.08)', padding: '0.3rem 0.75rem', borderRadius: '999px' }}>
      {video
        ? <div style={{ width: 0, height: 0, borderStyle: 'solid', borderWidth: '3px 0 3px 6px', borderColor: 'transparent transparent transparent rgba(255,255,255,0.4)' }} />
        : <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)', flexShrink: 0 }} />
      }
      <span style={{ fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>{label}</span>
    </div>
  );
}

export default function PortfolioPage() {
  const [hoveredMain, setHoveredMain] = useState<number | null>(null);
  const [hoveredBottom, setHoveredBottom] = useState<number | null>(null);

  return (
    <main style={{ background: 'var(--black)', minHeight: '100vh' }}>

      {/* Page Hero */}
      <section style={{ padding: '13rem 4rem 5rem', background: 'var(--black)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '0.5px solid rgba(255,255,255,0.05)' }}>
        <div>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem', opacity: 0, animation: 'fadeUp 1s ease 0.2s forwards' }}>
            Selected work
          </p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(3.5rem, 7vw, 6rem)', lineHeight: 1.0, color: 'var(--white)', opacity: 0, animation: 'fadeUp 1s ease 0.4s forwards' }}>
            The<br /><em style={{ fontStyle: 'italic', color: 'var(--film)' }}>work.</em>
          </h1>
        </div>
        <div style={{ opacity: 0, animation: 'fadeUp 1s ease 0.6s forwards' }}>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '5rem', fontWeight: 300, color: 'rgba(255,255,255,0.06)', lineHeight: 1 }}>05</p>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', textAlign: 'right', marginTop: '0.25rem' }}>Featured projects</p>
        </div>
      </section>

      {/* Featured Project — Big 12 */}
      <div style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}>
        <div style={{ width: '100%', aspectRatio: '21/9', background: 'var(--shadow)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <div style={thumbBg} />
          <div style={{ position: 'relative', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.08)', textAlign: 'center', lineHeight: 2 }}>
            Replace with your strongest Big 12 tournament image<br />Wide shot · High contrast · Athlete or crowd energy
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.5) 40%, transparent 100%)', padding: '4rem 4rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem', opacity: 0.85 }}>Sports · Big 12 Media · Kansas City</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--white)', lineHeight: 1.1, marginBottom: '0.75rem' }}>
              Three years.<br />Twelve teams.<br />One story at a time.
            </h2>
            <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, maxWidth: '480px', fontWeight: 300 }}>
              Official tournament media for the Big 12 Conference — three consecutive years of on-the-ground coverage in Kansas City. Athlete portraits, game energy, behind-the-scenes access.
            </p>
          </div>
          <div style={{ textAlign: 'right', flexShrink: 0, paddingLeft: '2rem' }}>
            <span style={{ display: 'inline-block', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', border: '0.5px solid rgba(200,169,110,0.3)', color: 'var(--gold)', padding: '0.4rem 1rem', marginBottom: '1rem' }}>Featured work</span>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>Photography · Video</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.75rem', justifyContent: 'flex-end' }}>
              <div style={{ width: 0, height: 0, borderStyle: 'solid', borderWidth: '5px 0 5px 9px', borderColor: 'transparent transparent transparent rgba(255,255,255,0.3)' }} />
              <span style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>View reel</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main 2-column Grid (tall 4:5) */}
      <div style={{ padding: '1px 0 0', background: 'rgba(255,255,255,0.04)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px' }}>
          {mainProjects.map((p, i) => (
            <div key={i}
              style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', background: 'var(--black)' }}
              onMouseEnter={() => setHoveredMain(i)}
              onMouseLeave={() => setHoveredMain(null)}
            >
              <div style={{ width: '100%', aspectRatio: '4/5', background: 'var(--studio)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <div style={thumbBg} />
                <div style={{ position: 'relative', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.07)', textAlign: 'center', lineHeight: 2.2, padding: '2rem', whiteSpace: 'pre-line' }}>{p.placeholder}</div>
              </div>
              <FormatBadge label={p.format} video={p.formatVideo} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.96) 0%, rgba(10,10,10,0.3) 50%, transparent 100%)', padding: hoveredMain === i ? '2.5rem 2.25rem 2.5rem' : '2.5rem 2.25rem 2rem', transition: 'padding 0.4s' }}>
                <p style={{ fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem', opacity: 0.75 }}>{p.cat}</p>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: '1.5rem', color: 'var(--white)', lineHeight: 1.2, marginBottom: '0.6rem' }}>{p.name}</h3>
                {hoveredMain === i && (
                  <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, fontWeight: 300, maxWidth: '340px' }}>{p.tagline}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Work Statement Break */}
      <div style={{ padding: '5rem 4rem', background: 'var(--studio)', borderTop: '1px solid rgba(200,169,110,0.08)', borderBottom: '1px solid rgba(200,169,110,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '4rem' }}>
        <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.4, maxWidth: '600px' }}>
          &ldquo;Every frame is a decision. We make them all with intention.&rdquo;
        </p>
        <div style={{ flexShrink: 0, textAlign: 'right' }}>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '4rem', fontWeight: 300, color: 'var(--white)', lineHeight: 1 }}>3</p>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginTop: '0.25rem' }}>Years — Big 12 Media</p>
        </div>
      </div>

      {/* Bottom 3-column Grid (3:4) */}
      <div style={{ padding: '1px 0 0', background: 'rgba(255,255,255,0.04)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px' }}>
          {bottomProjects.map((p, i) => (
            <div key={i}
              style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', background: 'var(--black)' }}
              onMouseEnter={() => setHoveredBottom(i)}
              onMouseLeave={() => setHoveredBottom(null)}
            >
              <div style={{ width: '100%', aspectRatio: '3/4', background: 'var(--studio)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <div style={thumbBg} />
                <div style={{ position: 'relative', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.07)', textAlign: 'center', lineHeight: 2.2, padding: '2rem', whiteSpace: 'pre-line' }}>{p.placeholder}</div>
              </div>
              <FormatBadge label={p.format} video={p.formatVideo} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.96) 0%, rgba(10,10,10,0.3) 50%, transparent 100%)', padding: hoveredBottom === i ? '1.75rem 1.5rem 2rem' : '1.75rem 1.5rem 1.5rem', transition: 'padding 0.4s' }}>
                <p style={{ fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem', opacity: 0.75 }}>{p.cat}</p>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: '1.2rem', color: 'var(--white)', lineHeight: 1.2, marginBottom: '0.6rem' }}>{p.name}</h3>
                {hoveredBottom === i && (
                  <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, fontWeight: 300, maxWidth: '340px' }}>{p.tagline}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Closer CTA */}
      <section style={{ padding: '9rem 4rem', background: 'var(--black)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <p style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: '1.5rem' }}>Seen enough?</p>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--white)', lineHeight: 1.1, marginBottom: '1.25rem' }}>
          Let&apos;s make something<br /><em style={{ fontStyle: 'italic', color: 'var(--film)' }}>worth remembering.</em>
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.3)', marginBottom: '3rem' }}>
          Tell us about your project and we&apos;ll get back to you within 24 hours.
        </p>
        <Link href="/contact" className="closer-btn">Start a conversation</Link>
      </section>

    </main>
  );
}