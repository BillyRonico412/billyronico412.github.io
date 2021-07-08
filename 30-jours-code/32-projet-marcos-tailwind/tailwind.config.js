module.exports = {
  purge: [
    "./*.html",
    "./pages/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "gray-text": "#fffc",
        "green-text": "#0f0d",
        "green-bg": "#0f02",
        "nav-items-hover": "#fff2"
      },
      backgroundImage: theme => ({
        'fond-1': "url('./images/fond-1.jpg')",
        'fond-2': "url('./images/fond-2.jpg')",
        'fond-3': "url('./images/fond-3.jpg')",
        'img-carousel-description-1': "url('./images/pic_1.jpg')",
        'img-carousel-description-2': "url('./images/pic_2.jpg')",
        'img-carousel-description-3': "url('./images/pic_3.jpg')",
        'img-carousel-description-4': "url('./images/pic_4.jpg')",
        'img-carousel-description-5': "url('./images/pic_5.jpg')",
        'img-carousel-description-6': "url('./images/pic_6.jpg')",
      })
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
