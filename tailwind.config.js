module.exports = {
  purge: ['./index.html'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "noir-menu": "#040B14",
        "bleu-clair": "#149DDD",
        "bleu-fonce": "#173B6C",
        "noir-text": "#050D18"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
