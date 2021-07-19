module.exports = {
  purge: ['./index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-intro-mail": "hsl(217, 28%, 15%)",
        "dark-main-bg": "hsl(218, 28%, 13%)",
        "dark-footer-bg": "hsl(216, 53%, 9%)",
        "dark-testimonal-bg": "hsl(219, 30%, 18%)",
        "cyan": "hsl(176, 68%, 64%)",
        "blue": "hsl(198, 60%, 50%)",
        "light-red": "hsl(0, 100%, 63%)"
      },
      spacing: {
        "svg-acceuil": "500px",
        "top-svg-acceuil": "440px"
      },
      maxWidth: {
        "xxs": "200px"
      }
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
