// Recuperation des elements du DOM

const titre = document.querySelector('h1') as HTMLHeadingElement
const texteTheme = document.querySelector('h2') as HTMLHeadingElement
const spanTheme = document.querySelectorAll('.change-theme span') as NodeListOf<HTMLSpanElement>

const affichage = document.querySelector('.affichage') as HTMLDivElement

const pad = document.querySelector('.table-btn') as HTMLDivElement

const allPetitButtons = document.querySelectorAll('.btn') as NodeListOf<HTMLDivElement>

const allGrosButtons = document.querySelectorAll('.btn-gros') as NodeListOf<HTMLDivElement>

const boules = document.querySelectorAll('.boule') as NodeListOf<HTMLDivElement>

const attribution = document.querySelector('.attribution') as HTMLDivElement

// Gestion du changement de thèmes

const itemTheme1 = document.querySelector('.item-theme-1') as HTMLDivElement
const itemTheme2 = document.querySelector('.item-theme-2') as HTMLDivElement
const itemTheme3 = document.querySelector('.item-theme-3') as HTMLDivElement

const itemThemes = document.querySelectorAll('.item-theme') as NodeListOf<HTMLDivElement>

type Theme = {
    couleurDeFond: string,
    couleurDesTextes: string,
    couleurAffichage: string,
    couleurPad: string,
    couleurTextBouton1: string,
    couleurTextBouton2: string,
    couleurBouton1: string,
    couleurBouton2: string,
    couleurBouton3: string,
    couleurOmbre1: string,
    couleurOmbre2: string,
    couleurOmbre3: string
}

const theme1: Theme = {
    couleurDeFond: 'hsl(222, 26%, 31%)',
    couleurDesTextes: '#fff',
    couleurAffichage: 'hsl(224, 36%, 15%)',
    couleurPad: 'hsl(223, 31%, 20%)',
    couleurTextBouton1: 'hsl(221, 14%, 31%)',
    couleurTextBouton2: '#fff',
    couleurBouton1: 'hsl(225, 21%, 49%)',
    couleurBouton2: 'hsl(6, 63%, 50%)',
    couleurBouton3: 'hsl(30, 25%, 89%)',
    couleurOmbre1: 'hsl(224, 28%, 35%)',
    couleurOmbre2: 'hsl(6, 70%, 34%)',
    couleurOmbre3: 'hsl(28, 16%, 65%)',
}

const theme2: Theme = {
    couleurDeFond: 'hsl(0, 0%, 90%)',
    couleurDesTextes: 'hsl(60, 10%, 19%)',
    couleurAffichage: 'hsl(0, 0%, 93%)',
    couleurPad: 'hsl(0, 5%, 81%)',
    couleurTextBouton1: 'hsl(60, 10%, 19%)',
    couleurTextBouton2: '#fff',
    couleurBouton1: 'hsl(185, 42%, 37%)',
    couleurBouton2: 'hsl(25, 98%, 40%)',
    couleurBouton3: 'hsl(45, 7%, 89%)',
    couleurOmbre1: 'hsl(185, 58%, 25%)',
    couleurOmbre2: 'hsl(25, 99%, 27%)',
    couleurOmbre3: 'hsl(35, 11%, 61%)',
}

const theme3: Theme = {
    couleurDeFond: 'hsl(268, 75%, 9%)',
    couleurDesTextes: 'hsl(52, 100%, 62%)',
    couleurAffichage: 'hsl(223, 31%, 20%)',
    couleurPad: 'hsl(223, 31%, 20%)',
    couleurTextBouton1: 'hsl(52, 100%, 62%)',
    couleurTextBouton2: '#fff',
    couleurBouton1: 'hsl(281, 89%, 26%)',
    couleurBouton2: 'hsl(176, 100%, 44%)',
    couleurBouton3: 'hsl(268, 47%, 21%)',
    couleurOmbre1: 'hsl(285, 91%, 52%)',
    couleurOmbre2: 'hsl(177, 92%, 70%)',
    couleurOmbre3: 'hsl(290, 70%, 36%)',
}

const listeTheme: Theme[] = [theme1, theme2, theme3]

const changeTheme = (indexThemeChoisi: number) => {

    boules.forEach((boule, indexBoule) => {
        if (indexBoule === indexThemeChoisi) boule.style.visibility = 'visible'
        else boule.style.visibility = 'hidden'
    })

    const themeChoisi = listeTheme[indexThemeChoisi]

    document.body.style.background = themeChoisi.couleurDeFond
    titre.style.color = themeChoisi.couleurDesTextes
    texteTheme.style.color = themeChoisi.couleurDesTextes
    spanTheme.forEach(span => span.style.color = themeChoisi.couleurDesTextes)
    affichage.style.color = themeChoisi.couleurDesTextes
    affichage.style.backgroundColor = themeChoisi.couleurAffichage
    pad.style.backgroundColor = themeChoisi.couleurPad

    allPetitButtons.forEach((btn, index) => {
        if (index === 3) {
            btn.style.color = themeChoisi.couleurTextBouton2
            btn.style.backgroundColor = themeChoisi.couleurBouton1
            btn.style.borderBottomColor = themeChoisi.couleurOmbre1
        } else {
            btn.style.color = themeChoisi.couleurTextBouton1
            btn.style.backgroundColor = themeChoisi.couleurBouton3
            btn.style.borderBottomColor = themeChoisi.couleurOmbre3
        }
    })

    allGrosButtons[0].style.color = themeChoisi.couleurTextBouton2
    allGrosButtons[0].style.backgroundColor = themeChoisi.couleurBouton1
    allGrosButtons[0].style.borderBottomColor = themeChoisi.couleurOmbre1

    allGrosButtons[1].style.color = themeChoisi.couleurTextBouton2
    allGrosButtons[1].style.backgroundColor = themeChoisi.couleurBouton2
    allGrosButtons[1].style.borderBottomColor = themeChoisi.couleurOmbre2

    boules.forEach(boule => boule.style.backgroundColor = themeChoisi.couleurBouton2)
    itemThemes.forEach(itemTheme => itemTheme.style.backgroundColor = themeChoisi.couleurPad)

    attribution.style.color = themeChoisi.couleurDesTextes
    attribution.querySelectorAll('a').forEach(a => a.style.color = themeChoisi.couleurBouton2)

}

itemThemes.forEach((itemTheme, index) => itemTheme.addEventListener('click', () => changeTheme(index)))

changeTheme(0)

