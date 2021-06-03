const divImgSlide = document.querySelectorAll('.content-img-slide') as NodeListOf<HTMLDivElement>
const btnChevronsGauche = document.querySelector('.btn-nav-slides .btn-gauche') as HTMLDivElement
const btnChevronsDroit = document.querySelector('.btn-nav-slides .btn-droit') as HTMLDivElement

btnChevronsGauche.addEventListener('click', mouvSlide)
btnChevronsDroit.addEventListener('click', mouvSlide)

let indiceSlide = 0

function mouvSlide(this: HTMLDivElement, e: Event) {
    if (this.className === 'btn-gauche')
        if (indiceSlide === 0) indiceSlide = divImgSlide.length - 1
        else indiceSlide--
    else
        if (indiceSlide === divImgSlide.length - 1) indiceSlide = 0
        else indiceSlide++

    divImgSlide.forEach((imgSlide, index) => {
        if (index === indiceSlide) {
            imgSlide.classList.add('active')
            imgSlide.classList.remove('inactive')
        } else {
            imgSlide.classList.add('inactive')
            imgSlide.classList.remove('active')
        } 
    })
}