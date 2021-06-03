"use strict";
const titreMenu = document.querySelector('.titre-menu');
const menuNav = document.querySelector('.content-item-menu');
var EtatMenu;
(function (EtatMenu) {
    EtatMenu[EtatMenu["Ouvert"] = 0] = "Ouvert";
    EtatMenu[EtatMenu["Ferme"] = 1] = "Ferme";
})(EtatMenu || (EtatMenu = {}));
let etatMenu = EtatMenu.Ferme;
const functionClickMenu = () => {
    if (innerWidth <= 900) {
        if (etatMenu === EtatMenu.Ferme)
            menuNav.style.top = '55px';
        else
            menuNav.style.top = '-140px';
        etatMenu = etatMenu === EtatMenu.Ouvert ? EtatMenu.Ferme : EtatMenu.Ouvert;
    }
};
titreMenu.addEventListener('click', functionClickMenu);
