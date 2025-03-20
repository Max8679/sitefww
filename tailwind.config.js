/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      mob: { max: "450px" },
      desk: { min: "451px" },
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      blue: "#0070B7",
      darkLiver: "#4E4F4D",
      lightGray: "rgba(213, 213, 212, 0.99)", //#D5D5D4
      graniteGray: "#626262",
      zincDust: "#5B5B5B",
      accentText: "rgb(60, 60, 60)",
    },
    extend: {},
  },
  plugins: [],
};
