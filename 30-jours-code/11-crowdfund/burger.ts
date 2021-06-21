
// Gestion du burger

const hamburger = document.querySelector('#img-burger') as HTMLImageElement
const navigation = document.querySelector('#navigation') as HTMLDivElement

enum EtatBurger { OPEN, CLOSE }

let etatNavigation = EtatBurger.CLOSE

hamburger.addEventListener('click', () => {
    if (etatNavigation === EtatBurger.CLOSE) {
        hamburger.src = './images/icon-close-menu.svg'
        navigation.style.display = 'flex'
        setTimeout(() => {
            navigation.style.opacity = '1'
            navigation.style.width = 'auto'
        }, 1)
    } else {
        hamburger.src = './images/icon-hamburger.svg'
        navigation.style.opacity = '0'
        navigation.style.width = '0'
        setTimeout(() => navigation.style.display = 'none', 300)
    }
    etatNavigation = (etatNavigation === EtatBurger.OPEN) ? EtatBurger.CLOSE : EtatBurger.OPEN
})

window.addEventListener('resize', () => {
    if (innerWidth >= 768 && etatNavigation === EtatBurger.CLOSE) hamburger.click()
    if (innerWidth < 768 && etatNavigation === EtatBurger.OPEN) hamburger.click()
})