/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#002231',
        font: '#f0faff',
        accent: '#d4f7e0',
      }
    }
  },
  plugins: [],
}
