/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'Arial', 'sans-serif'],
        inter: ['Inter', 'Arial', 'sans-serif'],
        montserrat: ['Montserrat', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        blockShadow: '3px 2px 25px 0px rgba(190, 190, 190, 0.25)',
      },
    },
  },
  plugins: [],
}