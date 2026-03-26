import { Metadata } from 'next';
import HomeHero from '@/components/HomeHero';

export const metadata: Metadata = {
  title: 'Zenematic — Cinematic Media Studio Kansas City',
  description: 'Cinematic media studio — Kansas City. We don\'t just produce content. We build the visual language your brand deserves.',
};

const featuredWork = [
  {
    id: 1,
    title: "Three years. Twelve teams.\nOne story at a time.",
    category: "Sports · Big 12 Media · 3 Years",
    image: "/images/big12-hero.jpg",
    imageUrl: "https://images.unsplash.com/photo-1469122312224-c5846569feb1?q=80&w=1000&auto=format&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Precision in every frame.",
    category: "Commercial · Luxury",
    image: "/images/luxury-watches.jpg",
    imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "A brand that moves.",
    category: "Fashion · Editorial",
    image: "/images/fashion-brand.jpg",
    imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeHero />
      
      {/* Credibility Bar */}
      <div className="credibility">
        <span className="cred-text">Trusted by Big 12 Media</span>
        <div className="cred-dot"></div>
        <span className="cred-text">Kansas City brands</span>
        <div className="cred-dot"></div>
        <span className="cred-text">Fashion & entertainment clients</span>
        <div className="cred-dot"></div>
        <span className="cred-text">Available worldwide</span>
      </div>

      {/* What We Do */}
      <section className="services">
        <div className="section-label">What we do</div>
        <div className="services-grid">
          <div className="service-card">
            <p className="service-num">01</p>
            <h3 className="service-title">Creative<br/>Strategy</h3>
            <p className="service-desc">We shape the story before the camera rolls. Brand direction, content planning, narrative — built with intention. Not content. A story worth telling.</p>
          </div>
          <div className="service-card">
            <p className="service-num">02</p>
            <h3 className="service-title">Cinematic<br/>Production</h3>
            <p className="service-desc">Photo and video that commands attention. Every frame considered. Every moment captured with purpose. Shot to the standard of the brands we admire.</p>
          </div>
          <div className="service-card">
            <p className="service-num">03</p>
            <h3 className="service-title">Brand<br/>Storytelling</h3>
            <p className="service-desc">We find the human truth inside every brand and bring it to life. Movement, culture, identity — we speak the visual language of the world you live in.</p>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="work">
        <div className="work-header">
          <h2 className="work-title">Selected<br/>work.</h2>
          <a href="/portfolio" className="work-link">View all work →</a>
        </div>
        <div className="work-grid">
          {featuredWork.map((project) => (
            <div key={project.id} className={`work-card ${project.featured ? 'featured' : ''}`}>
              <div className="work-thumb">
                <div className="work-thumb-bg"></div>
                <span className="work-thumb-label">Replace with {project.category.split(' · ')[0]} hero image</span>
                {/* <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" /> */}
              </div>
              <div className="work-overlay">
                <p className="work-cat">{project.category}</p>
                <p className="work-name">{project.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Studio Statement */}
      <section className="statement">
        <div className="gold-line"></div>
        <p className="statement-quote">"Zenematic was built on a simple belief — that every brand has a cinematic story inside it."</p>
        <p className="statement-body">We bring the eye of a director, the instinct of a storyteller, and the precision of a creative strategist to every project we take on. Based in Kansas City. Built for brands that refuse to be ordinary.</p>
        <a href="/about" className="statement-link">About Zenematic</a>
      </section>

      {/* Closer CTA */}
      <section className="closer">
        <p className="closer-headline">Ready to make<br/>something cinematic?</p>
        <p className="closer-sub">Let's talk about your project.</p>
        <a href="/contact" className="closer-btn">Start a conversation</a>
      </section>
    </main>
  );
}