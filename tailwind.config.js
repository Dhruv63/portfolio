/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#060709',
          dark: '#030304',
          surface: '#0B0D12',
          elevated: '#11141C',
          card: '#161924',
          hover: '#1D2130',
        },
        champagne: {
          DEFAULT: '#C5A880',
          light: '#E5DFD3',
          soft: '#DFD7C7',
          pale: '#F4EFE6',
          muted: 'rgba(197, 168, 128, 0.35)',
          hairline: 'rgba(197, 168, 128, 0.18)',
        },
        inferno: {
          DEFAULT: '#E05A36',
          glow: 'rgba(224, 90, 54, 0.4)',
          dim: '#85321B',
        },
        mineral: {
          light: '#D1D4DC',
          DEFAULT: '#9C9C9C',
          muted: '#636775',
          dark: '#2A2C35',
        },
        brass: {
          aged: '#C5A059',
          bright: '#E2BF7D',
          dark: '#7E6538',
          faint: 'rgba(197, 160, 89, 0.2)',
        }
      },
      fontFamily: {
        monumental: ['"Parkinson-Condensed"', '"Parkinson"', 'serif'],
        parkinson: ['"Parkinson-Condensed"', '"Parkinson"', 'serif'],
        deco: ['"Cinzel Decorative"', 'serif'],
        marcellus: ['"Marcellus"', 'serif'],
        display: ['"Clash Grotesk"', 'sans-serif'],
        serif: ['"Bodoni Moda"', 'serif'],
        sans: ['"Clash Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        widest: '0.25em',
        monumental: '0.35em',
        epic: '0.5em',
      }
    },
  },
  plugins: [],
}
