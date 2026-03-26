/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // New cinematic color palette from overhaul docs
        'black': '#0a0a0a',
        'studio': '#141414',
        'shadow': '#1e1e1e',
        'film': '#f0ede6',
        'white': '#ffffff',
        'gold': '#c8a96e',
        'gold-dim': 'rgba(200,169,110,0.12)',
        'gray': '#888',
        'gray-dim': 'rgba(255,255,255,0.08)',
        
        // Legacy colors for transition
        'zen-cream': '#f0ede6',
        'zen-olive': '#141414',
        'zen-olive-light': '#1e1e1e',
        'zen-olive-dark': '#0a0a0a',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'serif'],
        'sans': ['Outfit', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'wide': '0.15em',
        'wider': '0.18em',
        'widest': '0.25em',
      }
    },
  },
  plugins: [],
}