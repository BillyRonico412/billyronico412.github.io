module.exports = {
  purge: [
    './index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "cyan": "hsl(179, 62%, 43%)",
        "bright-yellow": "hsl(71, 73%, 54%)",
        "light-gray": "hsl(204, 43%, 93%)",
        "grayish-blue": "hsl(218, 22%, 67%)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
