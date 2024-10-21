/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      mob: {"max": "26.125rem"},
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      blue: "#0070B7",
      darkLiver:"#4E4F4D",
      lightGray: "rgba(213, 213, 212, 0.7)", //#D5D5D4
      graniteGray: "#626262",
    },
    extend: {},
  },
  plugins: [],
}

