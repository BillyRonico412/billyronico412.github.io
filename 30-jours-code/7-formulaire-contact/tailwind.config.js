module.exports = {
  purge: ['./index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "color-red": "hsl(0, 100%, 74%)",
        "color-green": "hsl(154, 59%, 51%)",
        "color-blue": "hsl(248, 32%, 49%)",
        "dark-blue": "hsl(249, 10%, 26%) ",
        "grayish-blue": "hsl(246, 25%, 77%)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
