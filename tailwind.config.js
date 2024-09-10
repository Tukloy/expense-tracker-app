/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        white: '#F9F8FC',
        gray: '#D9D4E7',
        pink: '#FEC7D7',
        violet: '#8546F0',
        black: '#0E172C'
      }
    },
  },
  plugins: [],
}

