module.exports = {
  purge: ['./index.html'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "lime-green": "hsl(163, 72%, 41%)",
        "bright-red": "hsl(356, 69%, 56%)",
        "facebook-border": "hsl(208, 92%, 53%)",
        "twitter-border": "hsl(203, 89%, 53%)",
        "youTube-border": "hsl(348, 97%, 39%)",
        'dark-bg': "hsl(230, 17%, 14%)",
        "dark-top-bg": "hsl(232, 19%, 15%)",
        "dark-card-bg": "hsl(228, 28%, 20%)",
        "dark-text-2": "hsl(228, 34%, 66%)",
        "dark-text-1": "hsl(0, 0%, 100%)",
        "light-top-bg": "hsl(225, 100%, 98%)",
        "light-card-bg": "hsl(227, 47%, 96%)",
        "light-text-2": "hsl(228, 12%, 44%)",
        "light-text-1": "hsl(230, 17%, 14%)",
        "color-degrade-toggle-1": "hsl(210, 78%, 56%)",
        "color-degrade-toggle-2": "hsl(146, 55%, 53%)",
        "toggle-light": "hsl(230, 22%, 74%)"
      }
    },
  },
  variants: {
    extend: {
      opacity: ["dark"]
    },
  },
  plugins: [],
}
