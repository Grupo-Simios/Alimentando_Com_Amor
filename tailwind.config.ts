import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./Assets/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {

      colors: {

        // creation of tailwind color variable
        "navbar-Yellow": "#FFBF69",
        "navbar-pinkBackground": "#FFDDE1",
        "navbar-newblue": "#114B5F",
        "yellow-primary": "#FF9F1C",
        "yellow-primaty-hover" : "#f97c07",
        "primary-black-text" : "#1B1B1B"
      }
      
    },
    screens: {
      'xsm': '480px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
 
   
  },
  plugins: [],
};
export default config;
