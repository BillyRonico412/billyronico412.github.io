module.exports = {
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-magenta": "hsl(300, 43%, 22%)",
        "light-magenta-bis": "#F7F2F8",
        "soft-pink": "hsl(333, 80%, 67%)",
        "dark-magenta-bis": "hsl(303, 10%, 53%)",
        "light-magenta": "hsl(300, 24%, 96%)"
      }
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
