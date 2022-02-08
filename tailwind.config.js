module.exports = {
  purge: ['./index.html', './main.js'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "noir-menu": "#040B14",
        "bleu-clair": "#149DDD",
        "bleu-fonce": "#173B6C",
        "noir-text": "#050D18",
        "bleu-transparent": "#DFF3FC",
        "bleu-clair-section": "#F5F8FDAA"
      },
      screens: {
        "tablet": "720px",
        "desktop": "1440px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
