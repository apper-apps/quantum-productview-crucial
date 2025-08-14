/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'amazon': {
          'dark': '#232F3E',
          'orange': '#FF9900',
          'blue': '#146EB4',
          'light-blue': '#007185',
          'yellow': '#FEBD69',
          'gray': '#F3F3F3',
          'light-gray': '#EAEDED',
        }
      },
      fontFamily: {
        'amazon': ['Arial', 'sans-serif'],
      },
      animation: {
        'pulse-scale': 'pulse-scale 0.6s ease-out',
        'add-to-cart': 'add-to-cart 0.3s ease-out',
      },
      keyframes: {
        'pulse-scale': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' }
        },
        'add-to-cart': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' }
        }
      }
    },
  },
  plugins: [],
}