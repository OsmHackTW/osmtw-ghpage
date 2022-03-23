const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  media: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      red: colors.red,
      blue: colors.blue,
      green: colors.emerald,
      yellow: colors.yellow,
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      amber: colors.amber,
      fuchsia: colors.fuchsia,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
      teal: colors.teal,
      "fern-green": {
        DEFAULT: "#4F7942",
        50: "#C9DEC3",
        100: "#BAD5B2",
        200: "#9DC391",
        300: "#7FB170",
        400: "#659A54",
        500: "#4F7942",
        600: "#395830",
        700: "#24371E",
        800: "#0E160C",
        900: "#000000",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: ["gatsby-plugin-postcss"],
};
