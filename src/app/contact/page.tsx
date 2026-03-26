'use client';

import React from 'react';
import './contact.css';

function FormField({ id, label, children }: {
  id: string; label: string; children: React.ReactNode;
}) {
  return (
    <div className="form-field">
      <label htmlFor={id} className="form-label">{label}</label>
      {children}
    </div>
  );
}

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <main className="contact-main">
      <div className="contact-grid">

        {/* LEFT PANEL */}
        <div className="contact-left-panel">
          <div className="contact-glow" />

          <div>
            <p className="contact-eyebrow">Get in touch</p>
            <h1 className="contact-headline">
              Let&apos;s make<br />something<br /><em>cinematic.</em>
            </h1>
            <p className="contact-sub">
              Tell us about your project. Whether you have a full brief or just an idea — we want to hear it. We&apos;ll get back to you within 24 hours.
            </p>

            <div className="contact-info">
              <div className="contact-info-item first">
                <span className="contact-info-label">Email</span>
                <span className="contact-info-value">
                  <a href="mailto:hello@zenematic.studio" className="contact-info-link">hello@zenematic.studio</a>
                </span>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-label">Phone</span>
                <span className="contact-info-value">
                  <a href="tel:9132939447" className="contact-info-link">913-293-9447</a>
                </span>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-label">Based in</span>
                <span className="contact-info-value">Kansas City, Missouri</span>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-label">Available</span>
                <span className="contact-info-value">Worldwide</span>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-label">Response time</span>
                <span className="contact-info-value">Within 24 hours</span>
              </div>
            </div>
          </div>

          <div className="contact-social">
            <div className="contact-social-list">
              {[
                { href: 'https://instagram.com/zenematic.studio', label: 'Instagram' },
                { href: 'https://vimeo.com', label: 'Vimeo' },
              ].map(({ href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="contact-social-link">
                  {label} <span className="contact-social-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT PANEL — FORM */}
        <div className="contact-right-panel">
          <div className="contact-form-header">
            <p className="contact-form-eyebrow">Start a project</p>
            <h2 className="contact-form-title">Tell us what you&apos;re<br />working on.</h2>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">

            <div className="contact-form-name-row">
              <FormField id="first-name" label="First name">
                <input type="text" id="first-name" name="first_name" placeholder="Your first name" required className="form-input" />
              </FormField>
              <FormField id="last-name" label="Last name">
                <div className="form-last-name-pad">
                  <input type="text" id="last-name" name="last_name" placeholder="Your last name" required className="form-input" />
                </div>
              </FormField>
            </div>

            <FormField id="email" label="Email address">
              <input type="email" id="email" name="email" placeholder="your@email.com" required className="form-input" />
            </FormField>

            <FormField id="company" label="Company / Brand">
              <input type="text" id="company" name="company" placeholder="Who are we working with?" className="form-input" />
            </FormField>

            <FormField id="project-type" label="Project type">
              <div className="form-select-wrap">
                <select id="project-type" name="project_type" required className="form-input" style={{ cursor: 'pointer', appearance: 'none' as const }}>
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
                <span className="form-select-arrow">↓</span>
              </div>
            </FormField>

            <FormField id="budget" label="Budget range">
              <div className="form-select-wrap">
                <select id="budget" name="budget" required className="form-input" style={{ cursor: 'pointer', appearance: 'none' as const }}>
                  <option value="" disabled>Approximate investment</option>
                  <option value="under1k">Under $1,000</option>
                  <option value="1k-2.5k">$1,000 – $2,500</option>
                  <option value="2.5k-5k">$2,500 – $5,000</option>
                  <option value="5k-10k">$5,000 – $10,000</option>
                  <option value="10k+">$10,000+</option>
                </select>
                <span className="form-select-arrow">↓</span>
              </div>
            </FormField>

            <FormField id="message" label="Tell us about your project">
              <textarea id="message" name="message" required rows={4}
                placeholder="What are you trying to create? Share as much or as little as you’d like — we’ll figure out the rest together."
                className="form-input form-textarea" />
            </FormField>

            <div className="contact-form-footer">
              <p className="contact-response-note">
                We respond within 24 hours.<br />No templates. Just a real conversation.
              </p>
              <button type="submit" className="contact-submit-btn">
                Send it <span>→</span>
              </button>
            </div>

            <p className="contact-footer-note">
              zenematic.studio · Kansas City · Available worldwide
            </p>

          </form>
        </div>

      </div>
    </main>
  );
}