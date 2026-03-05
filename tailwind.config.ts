import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#0C0A09',
        'accent-orange': '#e85d00',
        'accent-orange-dark': '#b44300',
        'teal-dark': '#052626',
        'teal-mid': '#073838',
        'teal-light': '#094a4a',
        'teal-accent': '#006464',
        'text-primary': '#e8e0d6',
        'text-secondary': '#e8e0d6',
        'text-muted': 'rgba(232, 224, 214, 0.4)',
        'warm-accent': 'rgba(139, 109, 71, 0.3)',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Cormorant Garamond', 'serif'],
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
      animation: {
        'pulse-overlay': 'pulse-overlay 8s ease-in-out infinite',
      },
      keyframes: {
        'pulse-overlay': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
