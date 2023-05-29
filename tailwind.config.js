/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      "green-600" : '#00dca6',
    },
    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontWeight: {
        'normal': '400',   // normal font weight
        'medium': '500',   // medium font weight
        'bold': '900',     // bold font weight
      },
      fontSize: {
        'responsive': ['0.875rem', 'sm'],   // default and small font size
        'base': '1rem',                      // base font size
        'lg': '1.125rem',                    // large font size
        'xl': '1.25rem',                     // extra large font size
      },
    },
  },
  plugins: [],
};
