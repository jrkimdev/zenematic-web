'use client';

import React from 'react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <main className="pt-20 min-h-screen">
      <section className="container-padding mx-auto py-12">
        <h1 className="text-5xl font-bold mb-8">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <p>Email: info@zenematickc.com</p>
              <p>Phone: 913-293-9447</p>
              <p>Location: Kansas City, MO</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 bg-zen-dark/50 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 bg-zen-dark/50 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Project Details</label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-2 bg-zen-dark/50 rounded-md"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
} 