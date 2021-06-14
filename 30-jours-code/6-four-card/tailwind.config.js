module.exports = {
  purge: [
    './index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "color-border-1": "hsl(0, 78%, 62%)",
        "color-border-2": "hsl(180, 62%, 55%)",
        "color-border-3": "hsl(34, 97%, 64%)",
        "color-border-4": "hsl(212, 86%, 64%)",
        "color-bg": "hsl(0, 0%, 98%)",
        "color-text": "hsl(234, 12%, 34%)",
        "color-text-2": "hsl(229, 6%, 66%)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
