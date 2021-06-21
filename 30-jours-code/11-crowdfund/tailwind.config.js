module.exports = {
  purge: ['./index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "moderate-cyan": "hsl(176, 50%, 47%)",
        "dark-cyan": "hsl(176, 72%, 28%)", 
        "black": "hsl(0, 0%, 0%)",                   
        "dark-gray": "hsl(0, 0%, 48%)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
