const defaultColors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...defaultColors,
        primary: "#000000",
        primaryLight: "#14213D",
        secondary: "#ECA72C",
      },
      fontFamily: {
        // rubik: '"Rubik Wet Paint"',
        // rubik: '"Permanent Marker"',
        Marker: '"Permanent Marker"',
        lobster: '"Indie Flower"',
      },
    },
  },
  plugins: [],
};
