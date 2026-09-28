/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        carbon: {
          950: '#070A0F',
          900: '#0B0F17',
          850: '#101622',
          800: '#161E2E',
          700: '#222F46',
          600: '#334155',
        },
        cyanAccent: {
          DEFAULT: '#00F2FE',
          glow: 'rgba(0, 242, 254, 0.15)',
          muted: '#38BDF8',
        },
        amberAccent: {
          DEFAULT: '#F59E0B',
          glow: 'rgba(245, 158, 11, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
};
