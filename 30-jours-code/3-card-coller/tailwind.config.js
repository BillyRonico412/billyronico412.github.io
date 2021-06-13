module.exports = {
  purge: [
    './index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "color-carte-1": "hsl(31, 77%, 52%)",
        "color-carte-2": "hsl(184, 100%, 22%)",
        "color-carte-3": "hsl(179, 100%, 13%)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
