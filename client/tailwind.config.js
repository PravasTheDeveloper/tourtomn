/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "c-blue":"#0096f2",
        "white":"rgb(250, 250, 250)"
      }
    },
  },
  plugins: [],
}