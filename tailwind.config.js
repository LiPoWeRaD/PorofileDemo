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
        'html': '#E54F26',
        'css': '#0C73B8',
        'js': '#E7A020',
        'react': '#28A9E0',
      },
      backgroundImage: {
        'about-bg': "url('./assets/LineBg/LineBg.svg')",
        'skills-bg': "url('./assets/skills/Skills.jpg')",
        'works-bg': "url('./assets/works/works.jpeg')",
      }
    },
  },
  plugins: [],
}

