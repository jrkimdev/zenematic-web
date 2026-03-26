'use client';

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

const S = {
  tierBase: { background: 'var(--studio)', padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column' as const, position: 'relative' as const, transition: 'background 0.4s' },
  tierFeatured: { background: 'var(--shadow)', borderTop: '1px solid var(--gold)' },
  specCard: { background: 'var(--black)', padding: '2.75rem', transition: 'background 0.4s' },
  ruleCard: { background: 'var(--studio)', padding: '2rem' },
};

export default function Services() {
  return (
    <main style={{ background: 'var(--black)', minHeight: '100vh' }}>

      {/* Page Hero */}
      <section className="page-hero">
        <p className="page-hero-label">What we offer</p>
        <h1 className="page-hero-headline">Every project starts with <em>intention.</em><br />Every deliverable is built to last.</h1>
        <p className="page-hero-sub">Cinematic media studio — Kansas City. We don&apos;t just produce content. We build the visual language your brand deserves.</p>
      </section>

      {/* Production Tiers */}
      <section style={{ padding: '7rem 4rem', background: 'var(--studio)' }}>
        <div className="section-label">Production packages</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.05)' }}>
          {tiers.map((tier, i) => (
            <div key={i} style={{ ...S.tierBase, ...(tier.featured ? S.tierFeatured : {}) }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = tier.featured ? '#222' : '#181818'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = tier.featured ? 'var(--shadow)' : 'var(--studio)'; }}
            >
              {tier.badge && (
                <span style={{ display: 'inline-block', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', border: '0.5px solid rgba(200,169,110,0.3)', padding: '0.3rem 0.8rem', marginBottom: '1.5rem', alignSelf: 'flex-start' }}>{tier.badge}</span>
              )}
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: '2.2rem', color: 'var(--white)', marginBottom: '0.25rem', lineHeight: 1 }}>{tier.name}</p>
              <p style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)', marginBottom: '1.75rem', textTransform: 'uppercase' }}>
                <strong style={{ fontSize: '1.1rem', color: 'var(--film)', fontWeight: 400, letterSpacing: 0, marginRight: '0.25rem' }}>{tier.price}</strong>{tier.period}
              </p>
              <hr style={{ border: 'none', borderTop: '0.5px solid rgba(255,255,255,0.07)', marginBottom: '1.75rem' }} />
              <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, marginBottom: '1.75rem', fontWeight: 300 }}>{tier.desc}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2.5rem', flex: 1 }}>
                {tier.includes.map((item, j) => (
                  <li key={j} style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'baseline', gap: '0.75rem', fontWeight: 300 }}>
                    <span style={{ color: 'rgba(200,169,110,0.4)', flexShrink: 0, fontSize: '0.7rem' }}>—</span>{item}
                  </li>
                ))}
              </ul>
              <a href="/contact" style={{ display: 'inline-block', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', border: tier.featured ? 'none' : '0.5px solid rgba(255,255,255,0.12)', padding: '0.8rem 1.5rem', textAlign: 'center', transition: 'all 0.3s', marginTop: 'auto', color: tier.featured ? 'var(--black)' : 'rgba(255,255,255,0.5)', background: tier.featured ? 'var(--gold)' : 'transparent' }}>Inquire →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Specialty Services */}
      <section style={{ padding: '7rem 4rem', background: 'var(--black)' }}>
        <div className="section-label">Specialty services</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.05)' }}>
          {specialty.map((s, i) => (
            <div key={i} style={{ ...S.specCard }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'var(--studio)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'var(--black)'; }}
            >
              <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem', opacity: 0.7 }}>{s.cat}</p>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: '1.5rem', color: 'var(--white)', marginBottom: '0.75rem', lineHeight: 1.2 }}>{s.name}</h3>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: 300 }}>{s.desc}</p>
              <p style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: s.custom ? 'var(--gold)' : 'rgba(255,255,255,0.3)' }}>{s.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Retainer */}
      <section style={{ padding: '5rem 4rem', background: 'var(--studio)', borderTop: '0.5px solid rgba(255,255,255,0.05)', borderBottom: '0.5px solid rgba(255,255,255,0.05)' }}>
        <div style={{ background: 'var(--black)', border: '0.5px solid rgba(200,169,110,0.15)', padding: '4rem', display: 'grid', gridTemplateColumns: '1fr auto', gap: '5rem', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.25rem', opacity: 0.7 }}>Monthly retainer</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '2.2rem', color: 'var(--white)', marginBottom: '1rem', lineHeight: 1.1 }}>Zenematic on demand.</h2>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.9, marginBottom: '2rem', fontWeight: 300, maxWidth: '500px' }}>Your brand, covered every month. Consistent cinematic content — planned, shot, and delivered on a recurring schedule. No briefs from scratch each time. We know your brand.</p>
            <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem 2rem' }}>
              {['2 shoot days per month', 'Monthly strategy session', '30+ edited photos', '4 reels per month', 'Priority scheduling', 'Dedicated creative direction'].map((item, i) => (
                <li key={i} style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', display: 'flex', alignItems: 'baseline', gap: '0.75rem', fontWeight: 300 }}>
                  <span style={{ color: 'rgba(200,169,110,0.4)', flexShrink: 0, fontSize: '0.7rem' }}>—</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ textAlign: 'right', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>Starting from</p>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '3.5rem', color: 'var(--white)', lineHeight: 1 }}>$2,500</p>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1.5rem' }}>per month</p>
            <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em', marginBottom: '1.5rem' }}>3-month minimum commitment</p>
            <a href="/contact" className="closer-btn" style={{ whiteSpace: 'nowrap' }}>Let&apos;s talk →</a>
          </div>
        </div>
      </section>

      {/* Creative Strategy Add-On */}
      <section style={{ padding: '7rem 4rem', background: 'var(--black)' }}>
        <div style={{ border: '0.5px solid rgba(255,255,255,0.06)', padding: '4rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
          <div>
            <div className="section-label">Add-on service</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '2rem', color: 'var(--white)', marginBottom: '1.25rem', lineHeight: 1.2 }}>Creative strategy and direction</h2>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.9, fontWeight: 300, marginBottom: '1.5rem' }}>Not just what to shoot — but what to say, how to say it, and why it will land. Strategy sessions can be added to any package or booked standalone.</p>
            <p style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Standalone sessions <strong style={{ color: 'var(--film)', fontWeight: 400, fontSize: '0.9rem' }}>from $350</strong></p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {strategyItems.map((item, i) => (
              <div key={i} style={{ paddingBottom: '1.5rem', borderBottom: i < strategyItems.length - 1 ? '0.5px solid rgba(255,255,255,0.05)' : 'none' }}>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', color: 'var(--white)', marginBottom: '0.4rem' }}>{item.name}</p>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, fontWeight: 300 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules */}
      <section style={{ padding: '5rem 4rem', background: 'var(--studio)', borderTop: '0.5px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.04)' }}>
          {rules.map((r, i) => (
            <div key={i} style={{ ...S.ruleCard }}>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.85rem', color: 'var(--gold)', opacity: 0.5, marginBottom: '0.75rem' }}>{r.num}</p>
              <p style={{ fontSize: '0.82rem', fontWeight: 500, color: 'var(--white)', marginBottom: '0.5rem' }}>{r.title}</p>
              <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, fontWeight: 300 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closer CTA */}
      <section style={{ padding: '9rem 4rem', background: 'var(--black)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <p style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: '1.5rem' }}>Not sure which is right for you?</p>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', color: 'var(--white)', lineHeight: 1.15, marginBottom: '1.25rem' }}>Tell us about your project.<br /><em style={{ fontStyle: 'italic', color: 'var(--film)' }}>We will build the right package together.</em></h2>
        <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.3)', marginBottom: '3rem' }}>No templates. No one-size-fits-all. Just a conversation about what your brand needs.</p>
        <a href="/contact" className="closer-btn">Start a conversation</a>
      </section>

    </main>
  );
}