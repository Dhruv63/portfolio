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
          DEFAULT: '#08090C',
          dark: '#040507',
          surface: '#0E1015',
          elevated: '#13151D',
          hover: '#191C27',
        },
        champagne: {
          DEFAULT: '#C5A880',
          light: '#E5DFD3',
          soft: '#DFD7C7',
          pale: '#F4EFE6',
          muted: 'rgba(197, 168, 128, 0.35)',
          hairline: 'rgba(197, 168, 128, 0.18)',
        },
        mineral: {
          light: '#D1D4DC',
          DEFAULT: '#8E919D',
          muted: '#5C5F6D',
          dark: '#3A3C45',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        widest: '0.25em',
        monumental: '0.35em',
      }
    },
  },
  plugins: [],
}
