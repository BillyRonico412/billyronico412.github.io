const titreMenu = document.querySelector('.titre-menu') as HTMLDivElement
const menuNav = document.querySelector('.content-item-menu') as HTMLDivElement

enum EtatMenu { Ouvert, Ferme }

let etatMenu: EtatMenu = EtatMenu.Ferme

const functionClickMenu = () => {
    if (innerWidth <= 900) {

        if (etatMenu === EtatMenu.Ferme)
            menuNav.style.top = '55px'
        else menuNav.style.top = '-140px'

        etatMenu = etatMenu === EtatMenu.Ouvert ? EtatMenu.Ferme : EtatMenu.Ouvert

    }
}

titreMenu.addEventListener('click', functionClickMenu)