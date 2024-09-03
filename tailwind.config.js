/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      'ibm': ['IBM Plex Mono', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '0rem',
      },
      // maxWidth: {
      //   '2xl': '1920px',
      // },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1650px',
      },
    },
    extend: {
      colors: {
        'brand-1': '#12F7D6',
        'brand-2': '#98FAEC',
        'brand-3': '#59E9E9',
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

