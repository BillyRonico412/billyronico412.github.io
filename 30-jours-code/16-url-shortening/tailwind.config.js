module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "color-alert": "hsl(0, 87%, 67%)",
        "gris": "hsl(0, 0%, 75%)",
        "grayish-violet": "hsl(257, 7%, 63%)",
        "very-dark-blue": "hsl(255, 11%, 22%)",
        "very-dark-violet": "hsl(260, 8%, 14%)",
        "cyan": "hsl(180, 66%, 49%)",
        "cyan-white": "hsl(180, 66%, 70%)",
        "dark-violet": "hsl(257, 27%, 26%)"
      },
      backgroundImage: theme => ({
        'shorten-mobile': "url('./images/bg-shorten-mobile.svg')",
        'shorten-desktop': "url('./images/bg-shorten-desktop.svg')",
        'boost-mobile': "url('./images/bg-boost-mobile.svg')",
        'boost-desktop': "url('./images/bg-boost-desktop.svg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
