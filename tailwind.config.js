/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f4ff',
          100: '#ebe9ff',
          200: '#d7d3ff',
          300: '#b7b0ff',
          400: '#918aff',
          500: '#6C63FF', // Main brand purple
          600: '#5750cc',
          700: '#463da6',
          800: '#362f80',
          900: '#2b2666',
        },
        secondary: {
          50: '#f0fdfb',
          100: '#ccfbf5',
          200: '#99f6ea',
          300: '#5cecd7',
          400: '#2ddcc1',
          500: '#00C9A7', // Main brand teal
          600: '#00a086',
          700: '#00806b',
          800: '#006353',
          900: '#005144',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        dark: '#121212',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(108, 99, 255, 0.35)',
        'soft': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};