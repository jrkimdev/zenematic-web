import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-logo">
        ZENE<span className="footer-logo-accent">MATIC</span>
      </div>
      <ul className="footer-nav">
        <li><Link href="/portfolio">Work</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><a href="https://instagram.com/zenematic.studio" target="_blank" rel="noopener noreferrer">Instagram</a></li>
      </ul>
      <p className="footer-copy">© 2025 Zenematic Studio — Kansas City</p>
    </footer>
  );
}
