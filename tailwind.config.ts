import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '400px',
      },
      colors: {
        inferno: '#FF5500',
        scorch: '#CC3300',
        blaze: '#FF8C00',
        ember: '#FF6B1A',
        void: '#080808',
        ash: '#0F0D0C',
        mid: '#191411',
        steel: '#2A1F1A',
        muted: '#AAAAAA',
        light: '#D4C8C0',
        bone: '#F0EDE8',
        card: '#F5F0E8',
        'card-border': '#E0D8CC',
        'card-hover': '#D4C8BC',
        'card-num': '#C8C0B4',
        'card-title': '#0A0A0A',
        'card-body': '#666666',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
      },
      boxShadow: {
        inferno: '0 4px 24px rgba(255, 85, 0, 0.35)',
        'inferno-lg': '0 8px 40px rgba(255, 85, 0, 0.4)',
      },
      animation: {
        'ticker': 'ticker 30s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
