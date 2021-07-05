    const flecheGaucheCarousel = document.querySelector('#fleche-gauche-carousel') as HTMLElement
    const flecheDroiteCarousel = document.querySelector('#fleche-droite-carousel') as HTMLElement
    const contentCarouselImg = document.querySelector('#content-caroussel-img') as HTMLElement

    let etatFleche = 0

    const mouvImage = () => {
        contentCarouselImg.style.right = `${etatFleche * 100}%`
    }

    flecheDroiteCarousel.addEventListener('click', () => {
        etatFleche = (etatFleche + 1) % 5
        mouvImage()
    })

    flecheGaucheCarousel.addEventListener('click', () => {
        etatFleche = etatFleche === 0 ? 5 : etatFleche - 1
        mouvImage()
    })
