/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'brand-1': '#12F7D6',
        'brand-2': '#98FAEC',
        'bg1': '#292F36',
        'bg2': '#1A1E23',
        'grey': '#43454D',
      },
      backgroundImage: {
        'about-bg': "url('./assets/LineBg/LineBg.svg')",
      }
    },
  },
  plugins: [],
}

