'use client';
import './about.css';

const credentials = [
  {
    num: '3', sup: 'rd',
    title: 'Year with Big 12 Media',
    desc: 'Official tournament media coverage for one of the most prestigious college athletic conferences in the country. Three years running in Kansas City.',
  },
  {
    num: '10', sup: '',
    title: 'Years teaching dance in KC',
    desc: 'Professional hip hop choreographer. Red Bull Dance Your Style — KC Champion 2024. Top 16 USA 2025. Movement is in the DNA of everything Zenematic creates.',
  },
  {
    num: '∞', sup: '',
    title: 'Stories left to tell',
    desc: "Sports, fashion, entertainment, culture. Local brands, global clients. Every project is a new story. We're just getting started.",
  },
];

const values = [
  {
    name: 'Cinematic first',
    desc: "Every project starts with a visual language. We don't shoot and figure it out in the edit. We know the story before the camera rolls. Every frame is intentional — never accidental.",
  },
  {
    name: 'Intention over volume',
    desc: "We don't take every project. We take the right ones and give them everything. Quality over quantity is not a philosophy — it's a practice. It shows in the work.",
  },
  {
    name: 'Culture is the canvas',
    desc: 'Sports, fashion, entertainment, community. We work where culture lives and moves. Our lens is shaped by Vietnam, KC, dance, and a decade of reading rooms and reading crowds.',
  },
  {
    name: 'Built to grow with you',
    desc: "Zenematic isn't a one-time vendor. We build creative partnerships that compound over time. The best work happens when we understand your brand as well as you do.",
  },
];

export default function About() {
  return (
    <main className="about-main">

      {/* Page Hero */}
      <section className="page-hero">
        <p className="page-hero-label">The story behind the studio</p>
        <h1 className="page-hero-headline">Built on movement.<br /><em>Driven by story.</em></h1>
      </section>

      {/* Founder Section */}
      <section className="about-founder-section">
        <div>
          <div className="about-image-frame">
            <div className="about-image-corner-tl" />
            <div className="about-image-corner-br" />
            <span className="about-image-placeholder">
              Replace with a cinematic portrait of Zen<br />On set · Camera in hand · In his element
            </span>
          </div>
          <div className="about-image-caption">
            <span className="about-founder-name">Zen Nguyen</span>
            <span className="about-founder-role">Founder &amp; Creative Director</span>
          </div>
        </div>

        <div className="about-founder-content">
          <div className="section-label">The founder</div>
          <p className="about-intro-name">My name is Zen Nguyen.</p>
          <p className="about-intro-body">I was born in Vietnam, where movement was my first language. Before I ever picked up a camera, I was a dancer — learning how to tell a story with my body, how to command a room without saying a word. That instinct never left me. It just found a new medium.</p>
          <p className="about-intro-body">In 2013, I moved to the United States for college. A new country, a new language, a new lens on the world. Kansas City became home — a city that quietly holds more culture, more hunger, and more talent than most people realize.</p>
          <p className="about-intro-body">I started Zenematic because I believed something: that every brand has a cinematic story inside it. Most never find it. Not because it isn't there — but because nobody looked for it with the right eyes.</p>
          <p className="about-intro-body">I look for it. Every single project.</p>
        </div>
      </section>

      {/* The Name Section */}
      <section className="about-name-section">
        <div className="about-ghost-text">
          ZEN<span>EMATIC</span>
        </div>
        <div>
          <div className="section-label">Why Zenematic?</div>
          <h3 className="about-name-heading">Zen is my name.<br />Cinematic is my obsession.</h3>
          <p className="about-name-body">The two were always going to find each other.</p>
          <p className="about-name-body">But it's more than a name. Zen — the philosophy — is about presence. Intention. Doing one thing with complete focus. That's how we approach every frame we shoot, every story we tell, every brand we work with.</p>
          <p className="about-name-quote">&ldquo;Zenematic isn't just a name. It's a standard.&rdquo;</p>
        </div>
      </section>

      {/* Credentials */}
      <section className="about-credentials-section">
        <div className="section-label">By the numbers</div>
        <div className="about-credentials-grid">
          {credentials.map((c, i) => (
            <div key={i} className="cred-card">
              <p className="cred-number">
                {c.num}{c.sup && <span className="cred-sup">{c.sup}</span>}
              </p>
              <p className="cred-title">{c.title}</p>
              <p className="cred-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="about-values-section">
        <div className="section-label">How we work</div>
        <div>
          {values.map((v, i) => (
            <div key={i} className="about-values-row">
              <span className="values-name">{v.name}</span>
              <p className="values-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Note */}
      <section className="about-team-section">
        <div className="about-team-inner">
          <div className="section-label">The studio</div>
          <p className="about-team-headline">Zenematic is led by Zen Nguyen and built on a growing network of Kansas City's most talented creatives.</p>
          <p className="about-team-body">Editors, photographers, producers, and directors who share one standard: cinematic or nothing. We collaborate with the best in KC to bring every project to life at the level it deserves.</p>
          <p className="about-team-body">We're building something here. Come be part of it.</p>
        </div>
      </section>

      {/* Closer CTA */}
      <section className="about-closer">
        <p className="about-closer-eyebrow">You've heard the story</p>
        <h2 className="about-closer-headline">Now let's write<br /><em>yours.</em></h2>
        <p className="about-closer-sub">Tell us about your project and let's create something worth remembering.</p>
        <a href="/contact" className="closer-btn">Start a conversation</a>
      </section>

    </main>
  );
}