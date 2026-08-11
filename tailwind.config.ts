import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dracula sóbrio e profissional
        dracula: {
          bg: '#282A36',
          'bg-soft': '#363848',
          current: '#44475A',
          fg: '#F8F8F2',
          'fg-muted': '#B9BCC9',
          comment: '#6272A4',
          cyan: '#8BE9FD',
          green: '#50FA7B',
          orange: '#FFB86C',
          pink: '#FF79C6',
          purple: '#BD93F9',
          red: '#FF5555',
          yellow: '#F1FA8C',
        },
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-ibm-plex-sans)', 'system-ui', 'sans-serif'],
        body: ['var(--font-ibm-plex-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
