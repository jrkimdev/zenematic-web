'use client';

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
    <main style={{ background: 'var(--black)', minHeight: '100vh' }}>

      {/* Page Hero */}
      <section className="page-hero">
        <p className="page-hero-label">The story behind the studio</p>
        <h1 className="page-hero-headline">Built on movement.<br /><em>Driven by story.</em></h1>
      </section>

      {/* Founder Section */}
      <section style={{ padding: '6rem 4rem', background: 'var(--studio)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>
        {/* Image column */}
        <div>
          <div style={{ width: '100%', aspectRatio: '3/4', background: 'var(--shadow)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '40px', height: '40px', borderTop: '0.5px solid var(--gold)', borderLeft: '0.5px solid var(--gold)', opacity: 0.5, zIndex: 1 }} />
            <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '40px', height: '40px', borderBottom: '0.5px solid var(--gold)', borderRight: '0.5px solid var(--gold)', opacity: 0.5, zIndex: 1 }} />
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.1)', textAlign: 'center', lineHeight: 2 }}>
              Replace with a cinematic portrait of Zen<br />On set · Camera in hand · In his element
            </span>
          </div>
          <div style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', color: 'var(--white)', letterSpacing: '0.05em' }}>Zen Nguyen</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Founder &amp; Creative Director</span>
          </div>
        </div>

        {/* Content column */}
        <div style={{ paddingTop: '1rem' }}>
          <div className="section-label">The founder</div>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.35rem', fontWeight: 400, color: 'var(--white)', lineHeight: 1.6, marginBottom: '1.5rem' }}>My name is Zen Nguyen.</p>
          <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.65)', marginBottom: '1.5rem', fontWeight: 300 }}>I was born in Vietnam, where movement was my first language. Before I ever picked up a camera, I was a dancer — learning how to tell a story with my body, how to command a room without saying a word. That instinct never left me. It just found a new medium.</p>
          <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.65)', marginBottom: '1.5rem', fontWeight: 300 }}>In 2013, I moved to the United States for college. A new country, a new language, a new lens on the world. Kansas City became home — a city that quietly holds more culture, more hunger, and more talent than most people realize.</p>
          <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.65)', marginBottom: '1.5rem', fontWeight: 300 }}>I started Zenematic because I believed something: that every brand has a cinematic story inside it. Most never find it. Not because it isn't there — but because nobody looked for it with the right eyes.</p>
          <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.65)', fontWeight: 300 }}>I look for it. Every single project.</p>
        </div>
      </section>

      {/* The Name Section */}
      <section style={{ padding: '8rem 4rem', background: 'var(--black)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(4rem, 8vw, 8rem)', lineHeight: 0.9, color: 'rgba(255,255,255,0.06)', letterSpacing: '-0.02em', userSelect: 'none' }}>
          ZEN<span style={{ display: 'block', color: 'rgba(200,169,110,0.2)' }}>EMATIC</span>
        </div>
        <div>
          <div className="section-label">Why Zenematic?</div>
          <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: '1.5rem', color: 'var(--white)', marginBottom: '1.5rem', lineHeight: 1.3 }}>Zen is my name.<br />Cinematic is my obsession.</h3>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.5)', marginBottom: '1.25rem', fontWeight: 300 }}>The two were always going to find each other.</p>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.5)', marginBottom: '1.25rem', fontWeight: 300 }}>But it&apos;s more than a name. Zen — the philosophy — is about presence. Intention. Doing one thing with complete focus. That&apos;s how we approach every frame we shoot, every story we tell, every brand we work with.</p>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--film)', borderLeft: '1px solid var(--gold)', paddingLeft: '1.5rem', marginTop: '2rem', opacity: 0.8 }}>&ldquo;Zenematic isn&apos;t just a name. It&apos;s a standard.&rdquo;</p>
        </div>
      </section>

      {/* Credentials */}
      <section style={{ padding: '6rem 4rem', background: 'var(--studio)' }}>
        <div className="section-label">By the numbers</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.05)' }}>
          {credentials.map((c, i) => (
            <div key={i} style={{ background: 'var(--studio)', padding: '2.5rem', transition: 'background 0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'var(--shadow)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'var(--studio)'; }}
            >
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3.5rem', fontWeight: 300, color: 'var(--white)', lineHeight: 1, marginBottom: '0.5rem' }}>
                {c.num}{c.sup && <span style={{ fontSize: '1.5rem', color: 'var(--gold)', verticalAlign: 'super' }}>{c.sup}</span>}
              </p>
              <p style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '0.75rem' }}>{c.title}</p>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.3)', lineHeight: 1.7, fontWeight: 300 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '8rem 4rem', background: 'var(--black)' }}>
        <div className="section-label">How we work</div>
        <div>
          {values.map((v, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '4rem', alignItems: 'baseline', padding: '2.5rem 0', borderBottom: '0.5px solid rgba(255,255,255,0.05)', borderTop: i === 0 ? '0.5px solid rgba(255,255,255,0.05)' : 'none', transition: 'padding-left 0.4s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.paddingLeft = '1rem'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.paddingLeft = '0'; }}
            >
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 400, color: 'var(--white)' }}>{v.name}</span>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, fontWeight: 300 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Note */}
      <section style={{ padding: '6rem 4rem', background: 'var(--studio)', borderTop: '0.5px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '700px' }}>
          <div className="section-label">The studio</div>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', color: 'var(--white)', fontWeight: 400, lineHeight: 1.5, marginBottom: '1.25rem' }}>Zenematic is led by Zen Nguyen and built on a growing network of Kansas City&apos;s most talented creatives.</p>
          <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.55)', marginBottom: '1.25rem', fontWeight: 300 }}>Editors, photographers, producers, and directors who share one standard: cinematic or nothing. We collaborate with the best in KC to bring every project to life at the level it deserves.</p>
          <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.55)', fontWeight: 300 }}>We&apos;re building something here. Come be part of it.</p>
        </div>
      </section>

      {/* Closer CTA */}
      <section style={{ padding: '9rem 4rem', background: 'var(--black)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderTop: '0.5px solid rgba(255,255,255,0.04)' }}>
        <p style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1.5rem' }}>You&apos;ve heard the story</p>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--white)', lineHeight: 1.1, marginBottom: '1.5rem' }}>Now let&apos;s write<br /><em style={{ fontStyle: 'italic', color: 'var(--film)' }}>yours.</em></h2>
        <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.3)', marginBottom: '3rem', letterSpacing: '0.05em' }}>Tell us about your project and let&apos;s create something worth remembering.</p>
        <a href="/contact" className="closer-btn">Start a conversation</a>
      </section>

    </main>
  );
}