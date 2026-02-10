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
        'dark-primary': '#0a0a0a',
        'accent-orange': '#e85d00',
        'accent-orange-dark': '#b44300',
        'teal-dark': '#052626',
        'teal-mid': '#073838',
        'teal-light': '#094a4a',
        'teal-accent': '#006464',
        'text-primary': '#ffffff',
        'text-secondary': '#e0e0e0',
        'text-muted': '#b0b0b0',
      },
      fontFamily: {
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
