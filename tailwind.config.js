module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  prefix: "",
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    minWidth: {
      '250': '250px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}