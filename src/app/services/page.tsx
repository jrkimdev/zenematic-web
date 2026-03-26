'use client';
import './services.css';

const tiers = [
  {
    name: 'Frame',
    price: 'From $800',
    period: '/ project',
    desc: 'A focused, single-deliverable production. One clear intention. Executed with the full Zenematic standard.',
    includes: ['Half-day shoot (4 hours)', 'Photo or short-form video', 'Up to 2 locations', '15 edited photos or 1 reel', '5-day delivery', '1 round of revisions'],
    featured: false,
    badge: '',
  },
  {
    name: 'Feature',
    price: 'From $1,500',
    period: '/ project',
    desc: 'The full Zenematic experience. Strategy included. Photo and video delivered. This is where brands start to look like brands.',
    includes: ['Full-day shoot (8 hours)', 'Creative strategy session', 'Photo + video deliverables', '25 edited photos + 2–3 reels', 'Dedicated creative direction', '7-day delivery', '2 rounds of revisions'],
    featured: true,
    badge: 'Most popular',
  },
  {
    name: 'Signature',
    price: 'From $3,500',
    period: '/ project',
    desc: 'A Zenematic-directed campaign. Multi-day. Fully developed. The kind of work that defines how a brand is seen.',
    includes: ['Multi-day production', 'Full creative strategy and direction', 'Campaign-level content suite', '50+ photos + full video edit', 'Talent and location coordination', 'Priority delivery', 'Unlimited revisions'],
    featured: false,
    badge: '',
  },
];

const specialty = [
  {
    cat: 'Sports and athletics',
    name: 'Tournament and sports coverage',
    desc: 'On-the-ground sports media for tournaments, games, and athletic brands. Built on three years of Big 12 Media experience. Broadcast-quality, athlete-centered storytelling.',
    price: 'Custom pricing — let\'s talk scope',
    custom: true,
  },
  {
    cat: 'Fashion and lifestyle',
    name: 'Editorial and lookbook production',
    desc: 'Photo and video for fashion brands, product launches, and lifestyle campaigns. Studio-lit, direction-led, built to perform on social and in print. Cinematic by default.',
    price: 'Starting from $1,500 / shoot',
    custom: false,
  },
  {
    cat: 'Short-form content',
    name: 'Reels and social content',
    desc: 'Concept to delivery. Each reel is built with a story — not just filmed and edited. Shot to stop the scroll. Optimized for Instagram, TikTok, and YouTube Shorts.',
    price: 'Starting from $800 / reel',
    custom: false,
  },
  {
    cat: 'Events and live',
    name: 'Live event coverage',
    desc: 'Concerts, cultural activations, corporate events, showcases. We capture the energy, the detail, and the human moments that happen between the big ones.',
    price: 'Starting from $1,000 / event',
    custom: false,
  },
];

const rules = [
  { num: '01', title: '50% deposit to book', desc: 'Balance due on delivery. No deposit, no confirmed date. This protects your time and ours.' },
  { num: '02', title: 'Commercial usage', desc: 'Running our work as paid advertising? Add 40% to the project rate. Your content working harder deserves fair compensation.' },
  { num: '03', title: 'Rush delivery', desc: 'Need it in under 48 hours? Rush delivery adds 30% to the editing rate. We will make it happen.' },
  { num: '04', title: 'Travel and location', desc: 'Projects outside KC billed at $0.67/mile plus accommodation if overnight. We will go anywhere the story takes us.' },
  { num: '05', title: 'Revisions policy', desc: 'Revisions included per tier. Additional rounds at $100/hr. We get it right — but scope changes cost time.' },
  { num: '06', title: 'No discounts', desc: 'We do not discount. If the budget is tight, we adjust scope. The standard never changes — only the deliverables.' },
];

const strategyItems = [
  { name: 'Brand story session', desc: 'We find the narrative at the core of your brand — who you are, who you\'re talking to, and what you want them to feel — before a single frame is shot.' },
  { name: 'Content planning', desc: 'A 30-day content roadmap built around your goals. What to post, when, on which platform, and why — with a clear visual direction for each piece.' },
  { name: 'Creative direction', desc: 'Visual language, mood board, shot list, and on-set direction. We take the creative lead so you can focus on being in the work, not managing it.' },
];

export default function Services() {
  return (
    <main className="svc-main">

      {/* Page Hero */}
      <section className="page-hero">
        <p className="page-hero-label">What we offer</p>
        <h1 className="page-hero-headline">Every project starts with <em>intention.</em><br />Every deliverable is built to last.</h1>
        <p className="page-hero-sub">Cinematic media studio — Kansas City. We don&apos;t just produce content. We build the visual language your brand deserves.</p>
      </section>

      {/* Production Tiers */}
      <section className="svc-tiers-section">
        <div className="section-label">Production packages</div>
        <div className="svc-tiers-grid">
          {tiers.map((tier, i) => (
            <div key={i} className={`tier-card${tier.featured ? ' featured' : ''}`}>
              {tier.badge && <span className="tier-badge">{tier.badge}</span>}
              <p className="tier-name">{tier.name}</p>
              <p className="tier-price-row">
                <strong className="tier-price">{tier.price}</strong>{tier.period}
              </p>
              <hr className="tier-divider" />
              <p className="tier-desc">{tier.desc}</p>
              <ul className="tier-includes">
                {tier.includes.map((item, j) => (
                  <li key={j} className="tier-item">
                    <span className="tier-dash">—</span>{item}
                  </li>
                ))}
              </ul>
              <a href="/contact" className={`tier-cta${tier.featured ? ' featured' : ''}`}>Inquire →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Specialty Services */}
      <section className="svc-spec-section">
        <div className="section-label">Specialty services</div>
        <div className="svc-spec-grid">
          {specialty.map((s, i) => (
            <div key={i} className="spec-card">
              <p className="spec-cat">{s.cat}</p>
              <h3 className="spec-name">{s.name}</h3>
              <p className="spec-desc">{s.desc}</p>
              <p className={`spec-price${s.custom ? ' custom' : ''}`}>{s.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Retainer */}
      <section className="svc-retainer-section">
        <div className="svc-retainer-inner">
          <div>
            <p className="retainer-eyebrow">Monthly retainer</p>
            <h2 className="retainer-headline">Zenematic on demand.</h2>
            <p className="retainer-desc">Your brand, covered every month. Consistent cinematic content — planned, shot, and delivered on a recurring schedule. No briefs from scratch each time. We know your brand.</p>
            <ul className="svc-retainer-list">
              {['2 shoot days per month', 'Monthly strategy session', '30+ edited photos', '4 reels per month', 'Priority scheduling', 'Dedicated creative direction'].map((item, i) => (
                <li key={i} className="retainer-item">
                  <span className="retainer-dash">—</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="svc-retainer-price">
            <p className="retainer-from">Starting from</p>
            <p className="retainer-amount">$2,500</p>
            <p className="retainer-period">per month</p>
            <p className="retainer-commitment">3-month minimum commitment</p>
            <a href="/contact" className="closer-btn">Let&apos;s talk →</a>
          </div>
        </div>
      </section>

      {/* Creative Strategy Add-On */}
      <section className="svc-strategy-section">
        <div className="svc-strategy-inner">
          <div>
            <div className="section-label">Add-on service</div>
            <h2 className="strategy-headline">Creative strategy and direction</h2>
            <p className="strategy-desc">Not just what to shoot — but what to say, how to say it, and why it will land. Strategy sessions can be added to any package or booked standalone.</p>
            <p className="strategy-price-note">Standalone sessions <strong className="strategy-price-strong">from $350</strong></p>
          </div>
          <div className="strategy-list">
            {strategyItems.map((item, i) => (
              <div key={i} className="strategy-item">
                <p className="strategy-item-name">{item.name}</p>
                <p className="strategy-item-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="svc-rules-section">
        <div className="svc-rules-grid">
          {rules.map((r, i) => (
            <div key={i} className="rule-card">
              <p className="rule-num">{r.num}</p>
              <p className="rule-title">{r.title}</p>
              <p className="rule-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closer CTA */}
      <section className="svc-closer">
        <p className="svc-closer-eyebrow">Not sure which is right for you?</p>
        <h2 className="svc-closer-headline">Tell us about your project.<br /><em>We will build the right package together.</em></h2>
        <p className="svc-closer-sub">No templates. No one-size-fits-all. Just a conversation about what your brand needs.</p>
        <a href="/contact" className="closer-btn">Start a conversation</a>
      </section>

    </main>
  );
}