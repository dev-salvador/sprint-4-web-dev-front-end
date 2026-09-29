/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        light: '#EDEFE9',
        dark: '#0A1220',
        'dark-2': '#101B2E',
        'dark-3': '#0D1725',
        accent: '#FF6A39',
        signal: '#4FD8CB',
        canopy: '#6FBE86',
        muted: '#8FA0B3',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        pulseTag: { '0%,100%': { opacity: 0.55 }, '50%': { opacity: 1 } },
      },
      animation: { marquee: 'marquee 40s linear infinite', pulseTag: 'pulseTag 3s ease-in-out infinite' },
    },
  },
  plugins: [],
}
