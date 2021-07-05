"use strict";
var flecheGaucheCarousel = document.querySelector('#fleche-gauche-carousel');
var flecheDroiteCarousel = document.querySelector('#fleche-droite-carousel');
var contentCarouselImg = document.querySelector('#content-caroussel-img');
var etatFleche = 0;
var mouvImage = function () {
    contentCarouselImg.style.right = etatFleche * 100 + "%";
};
flecheDroiteCarousel.addEventListener('click', function () {
    etatFleche = (etatFleche + 1) % 5;
    mouvImage();
});
flecheGaucheCarousel.addEventListener('click', function () {
    etatFleche = etatFleche === 0 ? 5 : etatFleche - 1;
    mouvImage();
});
