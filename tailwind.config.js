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
    },
    extend: {
      colors,
    },
  },
  plugins: [],
}

