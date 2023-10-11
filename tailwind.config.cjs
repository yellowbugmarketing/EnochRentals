/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Dosis"],
      pricing: ["'Zilla Slab'", "serif"],
      "pricing-secondary": ["'DM Sans'", "sans-serif"],
    },
    extend: {
      colors: {
        secondary: "#8f8f8f",
      },
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
