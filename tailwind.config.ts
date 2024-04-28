import type { Config } from "tailwindcss";

const zila = `@import url('https://fonts.googleapis.com/css2?family=Zilla+Slab:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap')`;
const out = `@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap')`;
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./Assets/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'zilla-slab': ['Zilla Slab', 'sans-serif'],
      },
      fontSize : {
        "md-title" : "2.4rem"
      },

      colors: {

        // creation of tailwind color variable
        "navbar-Yellow": "#FFBF69",
        "navbar-pinkBackground": "#FFDDE1",
        "navbar-newblue": "#114B5F",
        "yellow-primary": "#FF9F1C",
        "yellow-primary-hover" : "#f97c07",
        "primary-black-text" : "#1B1B1B",
        "branco-semi": "F9F6EE",
        "light-yellow" :"#FFBF69"
        
        
      }
      
    },
    screens: {

      
      'xsm': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '1xl' : '1366px',
      '2xl': '1536px',
    },
 
   
  },
  plugins: [],
};
export default config;
