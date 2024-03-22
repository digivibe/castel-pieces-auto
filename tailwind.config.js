/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sacramento: ['Sacramento', 'cursive'],
        manrope: ['Manrope', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      transform: ['will-change'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-outline-gray': {
          '-webkit-text-stroke': '2px #222222',
          'text-stroke': '2px #222222',
        },
        '.text-outline-green': {
          '-webkit-text-stroke': '2px rgb(74 222 128)',
          'text-stroke': '2px rgb(74 222 128)',
        },
        '.text-outline-white': {
          '-webkit-text-stroke': '2px #ffffff',
          'text-stroke': '2px #ffffff',
        },

      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    require('flowbite/plugin')
  ],
}