"use strict";
const divImgSlide = document.querySelectorAll('.content-img-slide');
const btnChevronsGauche = document.querySelector('.btn-nav-slides .btn-gauche');
const btnChevronsDroit = document.querySelector('.btn-nav-slides .btn-droit');
btnChevronsGauche.addEventListener('click', mouvSlide);
btnChevronsDroit.addEventListener('click', mouvSlide);
let indiceSlide = 0;
function mouvSlide(e) {
    if (this.className === 'btn-gauche')
        if (indiceSlide === 0)
            indiceSlide = divImgSlide.length - 1;
        else
            indiceSlide--;
    else if (indiceSlide === divImgSlide.length - 1)
        indiceSlide = 0;
    else
        indiceSlide++;
    divImgSlide.forEach((imgSlide, index) => {
        if (index === indiceSlide) {
            imgSlide.classList.add('active');
            imgSlide.classList.remove('inactive');
        }
        else {
            imgSlide.classList.add('inactive');
            imgSlide.classList.remove('active');
        }
    });
}
