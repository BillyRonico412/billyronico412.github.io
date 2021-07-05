module.exports = {
  purge: ['./index.html', './app.ts'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      "colors": {
        "dark-element": "hsl(209, 23%, 22%)",
        "dark-bg": "hsl(207, 26%, 17%)",
        "light-text": "hsl(200, 15%, 8%)",
        "light-input": "hsl(0, 0%, 52%)",
        "light-bg": "hsl(0, 0%, 98%)",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
