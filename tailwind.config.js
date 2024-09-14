/** @type {import('tailwindcss').Config} */

// Custom Config
const colors = require('./config/tailwind/colors');


export default {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    backgroundImage: {
      'serbg': "url('/images/ser-bg.jpeg')",
      'hero':"url('/images/bann1.jpeg')",

    },
    extend: {
      fontFamily: {
        monotype: ['Monotype Corsiva', "serif"],
        cairo: [ "Cairo", "sans-serif"]
      },
      colors,
    },
  },
  plugins: [],
}

