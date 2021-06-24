module.exports = {
  purge: ['./index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "light-grayish-cyan": "hsl(180, 52%, 96%)",
        "light-grayish-cyan-tablet": "hsl(180, 31%, 95%)",
        "dark-grayish-cyan": "hsl(180, 8%, 52%)",
        "very-dark-grayishc-cyan": "hsl(180, 14%, 20%)",
        "desaturated-dark-cyan": "hsl(180, 29%, 50%)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
