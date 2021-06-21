// Gestion du burger
var hamburger = document.querySelector('#img-burger');
var navigation = document.querySelector('#navigation');
var EtatBurger;
(function (EtatBurger) {
    EtatBurger[EtatBurger["OPEN"] = 0] = "OPEN";
    EtatBurger[EtatBurger["CLOSE"] = 1] = "CLOSE";
})(EtatBurger || (EtatBurger = {}));
var etatNavigation = EtatBurger.CLOSE;
hamburger.addEventListener('click', function () {
    if (etatNavigation === EtatBurger.CLOSE) {
        hamburger.src = './images/icon-close-menu.svg';
        navigation.style.display = 'flex';
        setTimeout(function () {
            navigation.style.opacity = '1';
            navigation.style.width = 'auto';
        }, 1);
    }
    else {
        hamburger.src = './images/icon-hamburger.svg';
        navigation.style.opacity = '0';
        navigation.style.width = '0';
        setTimeout(function () { return navigation.style.display = 'none'; }, 300);
    }
    etatNavigation = (etatNavigation === EtatBurger.OPEN) ? EtatBurger.CLOSE : EtatBurger.OPEN;
});
window.addEventListener('resize', function () {
    if (innerWidth >= 768 && etatNavigation === EtatBurger.CLOSE)
        hamburger.click();
    if (innerWidth < 768 && etatNavigation === EtatBurger.OPEN)
        hamburger.click();
});
