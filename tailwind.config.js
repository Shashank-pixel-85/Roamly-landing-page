/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#202b3c',
        coral: '#ff765e',
        sunshine: '#ffc857',
        sea: '#69c9c3',
        cream: '#fffaf3',
      },
      fontFamily: {
        display: ['DM Sans', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(32, 43, 60, 0.10)',
      },
    },
  },
  plugins: [],
}