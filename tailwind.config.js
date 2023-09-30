module.exports = {
  prefix: "",
  content: ["./src/**/*.{html,js,ts}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      right: "right",
      top: "top",
      "center-hero": "990px -82px",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "secondary-button": "#01C4E7",
      "modal-gray": "#1A1A1A",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      secondary: "#ff259f",
      "primary-gray": "#1A1A1A",
    }),
    extend: {
      spacing: {
        128: "600px",
        118: "709px",
        98: "28rem",
        97: "26rem",
        99: "800px",
        95: "30rem",
      },
    },
    fontFamily: {
      "gotham-bold": ["Gotham ultra"],
      "gotham-light": ["Gotham light"],
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      outlineNone: ["active"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
