/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Lato: ["Lato", "sans-serif"],
      OpenSans: ['"Open Sans"', "serif"],
      Roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
