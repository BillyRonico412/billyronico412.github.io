module.exports = {
  purge: ['./index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "strong-cyan": "hsl(171, 66%, 44%)",
        "light-blue": "hsl(233, 100%, 69%)",
        "dark-grayish-blue": "hsl(210, 10%, 33%)",
        "grayish-blue": "hsl(201, 11%, 66%)",
        "color-bg": "#FFFFFF"
      },
      backgroundImage: theme => ({
        'header-mobile': "url('./images/bg-header-mobile.png')",
        'header-desktop': "url('./images/bg-header-desktop.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
