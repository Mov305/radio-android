/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  content: ['./App.{js,jsx,ts,tsx}', './<custom directory>/**/*.{js,jsx,ts,tsx}','src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
