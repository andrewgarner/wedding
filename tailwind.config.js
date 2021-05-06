const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      green: {
        DEFAULT: "#717b70",
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      animation: {
        load: "load .25s ease-in-out .25s forwards",
      },
      gridTemplateRows: {
        page: "auto auto 1fr auto",
      },
    },
    fontFamily: {
      sans: [
        "Cormorant Garamond",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
  variants: {
    extend: {
      margin: ["first-of-type"],
    },
  },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant("first-of-type", ({ modifySelectors, separator }) =>
        modifySelectors(
          ({ className }) =>
            `.${e(`first-of-type${separator}${className}`)}:first-of-type`
        )
      );
    }),
  ],
};
