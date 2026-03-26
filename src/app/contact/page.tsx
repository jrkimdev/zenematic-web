'use client';

import React, { useState } from 'react';

const baseField: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  borderBottom: '0.5px solid rgba(255,255,255,0.07)',
  padding: '1.25rem 0',
  gap: '0.4rem',
  transition: 'border-color 0.3s',
};

const baseInput: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  outline: 'none',
  fontFamily: 'Outfit, sans-serif',
  fontSize: '0.9rem',
  fontWeight: 300,
  color: 'var(--film)',
  padding: 0,
  width: '100%',
};

const infoItem: React.CSSProperties = {
  padding: '1.25rem 0',
  borderBottom: '0.5px solid rgba(255,255,255,0.05)',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.3rem',
};

function FormField({ id, label, focused, onFocus, onBlur, children }: {
  id: string; label: string; focused: boolean;
  onFocus: () => void; onBlur: () => void; children: React.ReactNode;
}) {
  return (
    <div style={{ ...baseField, borderBottomColor: focused ? 'rgba(200,169,110,0.4)' : 'rgba(255,255,255,0.07)' }}>
      <label htmlFor={id} style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: focused ? 'var(--gold)' : 'rgba(255,255,255,0.25)', transition: 'color 0.3s' }}>
        {label}
      </label>
      <div onFocus={onFocus} onBlur={onBlur}>{children}</div>
    </div>
  );
}

export default function Contact() {
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const f = (id: string) => ({
    onFocus: () => setFocused(id),
    onBlur: () => setFocused(null),
  });

  return (
    <main style={{ background: 'var(--black)', minHeight: '100vh' }}>

      <div style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>

        {/* LEFT PANEL */}
        <div style={{ background: 'var(--studio)', padding: '12rem 4rem 5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRight: '0.5px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
          {/* Gold gradient glow */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '40%', background: 'radial-gradient(ellipse at bottom left, rgba(200,169,110,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '2rem', opacity: 0, animation: 'fadeUp 1s ease 0.2s forwards' }}>
              Get in touch
            </p>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(3rem, 5vw, 5rem)', lineHeight: 1.05, color: 'var(--white)', marginBottom: '2rem', opacity: 0, animation: 'fadeUp 1s ease 0.4s forwards' }}>
              Let&apos;s make<br />something<br /><em style={{ fontStyle: 'italic', color: 'var(--film)' }}>cinematic.</em>
            </h1>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.9, maxWidth: '380px', fontWeight: 300, marginBottom: '3.5rem', opacity: 0, animation: 'fadeUp 1s ease 0.6s forwards' }}>
              Tell us about your project. Whether you have a full brief or just an idea — we want to hear it. We&apos;ll get back to you within 24 hours.
            </p>

            <div style={{ opacity: 0, animation: 'fadeUp 1s ease 0.8s forwards' }}>
              <div style={{ ...infoItem, borderTop: '0.5px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>Email</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--film)', fontWeight: 300 }}>
                  <a href="mailto:hello@zenematic.studio" style={{ color: 'var(--film)', textDecoration: 'none' }}>hello@zenematic.studio</a>
                </span>
              </div>
              <div style={infoItem}>
                <span style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>Phone</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--film)', fontWeight: 300 }}>
                  <a href="tel:9132939447" style={{ color: 'var(--film)', textDecoration: 'none' }}>913-293-9447</a>
                </span>
              </div>
              <div style={infoItem}>
                <span style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>Based in</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--film)', fontWeight: 300 }}>Kansas City, Missouri</span>
              </div>
              <div style={infoItem}>
                <span style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>Available</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--film)', fontWeight: 300 }}>Worldwide</span>
              </div>
              <div style={infoItem}>
                <span style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>Response time</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--film)', fontWeight: 300 }}>Within 24 hours</span>
              </div>
            </div>
          </div>

          <div style={{ opacity: 0, animation: 'fadeUp 1s ease 1s forwards' }}>
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem' }}>
              {[
                { href: 'https://instagram.com/zenematic.studio', label: 'Instagram' },
                { href: 'https://vimeo.com', label: 'Vimeo' },
              ].map(({ href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {label} <span style={{ fontSize: '0.6rem' }}>↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT PANEL — FORM */}
        <div style={{ background: 'var(--black)', padding: '12rem 4rem 5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ marginBottom: '2.5rem', opacity: 0, animation: 'fadeUp 1s ease 0.4s forwards' }}>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem', opacity: 0.7 }}>Start a project</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1.75rem', color: 'var(--white)', lineHeight: 1.2 }}>Tell us what you&apos;re<br />working on.</h2>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 0, opacity: 0, animation: 'fadeUp 1s ease 0.6s forwards' }}>

            {/* First + Last name row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px' }}>
              <FormField id="first-name" label="First name" focused={focused === 'first-name'} {...f('first-name')}>
                <input type="text" id="first-name" name="first_name" placeholder="Your first name" required style={{ ...baseInput }} />
              </FormField>
              <FormField id="last-name" label="Last name" focused={focused === 'last-name'} {...f('last-name')}>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <input type="text" id="last-name" name="last_name" placeholder="Your last name" required style={{ ...baseInput }} />
                </div>
              </FormField>
            </div>

            <FormField id="email" label="Email address" focused={focused === 'email'} {...f('email')}>
              <input type="email" id="email" name="email" placeholder="your@email.com" required style={{ ...baseInput }} />
            </FormField>

            <FormField id="company" label="Company / Brand" focused={focused === 'company'} {...f('company')}>
              <input type="text" id="company" name="company" placeholder="Who are we working with?" style={{ ...baseInput }} />
            </FormField>

            <FormField id="project-type" label="Project type" focused={focused === 'project-type'} {...f('project-type')}>
              <div style={{ position: 'relative' }}>
                <select id="project-type" name="project_type" required style={{ ...baseInput, cursor: 'pointer', appearance: 'none' }}>
                  <option value="" disabled>What are you looking for?</option>
                  <option value="photo">Photo production</option>
                  <option value="video">Video production</option>
                  <option value="reels">Reels / short-form content</option>
                  <option value="event">Event coverage</option>
                  <option value="sports">Sports coverage</option>
                  <option value="fashion">Fashion / editorial</option>
                  <option value="retainer">Monthly content retainer</option>
                  <option value="strategy">Creative strategy</option>
                  <option value="other">Something else</option>
                </select>
                <span style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)', pointerEvents: 'none' }}>↓</span>
              </div>
            </FormField>

            <FormField id="budget" label="Budget range" focused={focused === 'budget'} {...f('budget')}>
              <div style={{ position: 'relative' }}>
                <select id="budget" name="budget" required style={{ ...baseInput, cursor: 'pointer', appearance: 'none' }}>
                  <option value="" disabled>Approximate investment</option>
                  <option value="under1k">Under $1,000</option>
                  <option value="1k-2.5k">$1,000 – $2,500</option>
                  <option value="2.5k-5k">$2,500 – $5,000</option>
                  <option value="5k-10k">$5,000 – $10,000</option>
                  <option value="10k+">$10,000+</option>
                </select>
                <span style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)', pointerEvents: 'none' }}>↓</span>
              </div>
            </FormField>

            <FormField id="message" label="Tell us about your project" focused={focused === 'message'} {...f('message')}>
              <textarea id="message" name="message" required rows={4}
                placeholder="What are you trying to create? Share as much or as little as you'd like — we'll figure out the rest together."
                style={{ ...baseInput, resize: 'none', lineHeight: 1.7 }} />
            </FormField>

            <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
              <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)', lineHeight: 1.6, letterSpacing: '0.03em' }}>
                We respond within 24 hours.<br />No templates. Just a real conversation.
              </p>
              <button type="submit" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontFamily: 'Outfit, sans-serif', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--black)', background: 'var(--gold)', border: 'none', padding: '1rem 2rem', cursor: 'pointer', transition: 'background 0.3s', whiteSpace: 'nowrap' }}>
                Send it <span>→</span>
              </button>
            </div>

            <p style={{ marginTop: '1.25rem', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.15)', textAlign: 'right' }}>
              zenematic.studio · Kansas City · Available worldwide
            </p>

          </form>
        </div>

      </div>
    </main>
  );
}