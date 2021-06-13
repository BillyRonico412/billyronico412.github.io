// Recuperation des elements du DOM
var titre = document.querySelector('h1');
var texteTheme = document.querySelector('h2');
var spanTheme = document.querySelectorAll('.change-theme span');
var affichage = document.querySelector('.affichage');
var pad = document.querySelector('.table-btn');
var allPetitButtons = document.querySelectorAll('.btn');
var allGrosButtons = document.querySelectorAll('.btn-gros');
var boules = document.querySelectorAll('.boule');
var attribution = document.querySelector('.attribution');
// Gestion du changement de thèmes
var itemTheme1 = document.querySelector('.item-theme-1');
var itemTheme2 = document.querySelector('.item-theme-2');
var itemTheme3 = document.querySelector('.item-theme-3');
var itemThemes = document.querySelectorAll('.item-theme');
var theme1 = {
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
    couleurOmbre3: 'hsl(28, 16%, 65%)'
};
var theme2 = {
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
    couleurOmbre3: 'hsl(35, 11%, 61%)'
};
var theme3 = {
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
    couleurOmbre3: 'hsl(290, 70%, 36%)'
};
var listeTheme = [theme1, theme2, theme3];
var changeTheme = function (indexThemeChoisi) {
    boules.forEach(function (boule, indexBoule) {
        if (indexBoule === indexThemeChoisi)
            boule.style.visibility = 'visible';
        else
            boule.style.visibility = 'hidden';
    });
    var themeChoisi = listeTheme[indexThemeChoisi];
    document.body.style.background = themeChoisi.couleurDeFond;
    titre.style.color = themeChoisi.couleurDesTextes;
    texteTheme.style.color = themeChoisi.couleurDesTextes;
    spanTheme.forEach(function (span) { return span.style.color = themeChoisi.couleurDesTextes; });
    affichage.style.color = themeChoisi.couleurDesTextes;
    affichage.style.backgroundColor = themeChoisi.couleurAffichage;
    pad.style.backgroundColor = themeChoisi.couleurPad;
    allPetitButtons.forEach(function (btn, index) {
        if (index === 3) {
            btn.style.color = themeChoisi.couleurTextBouton2;
            btn.style.backgroundColor = themeChoisi.couleurBouton1;
            btn.style.borderBottomColor = themeChoisi.couleurOmbre1;
        }
        else {
            btn.style.color = themeChoisi.couleurTextBouton1;
            btn.style.backgroundColor = themeChoisi.couleurBouton3;
            btn.style.borderBottomColor = themeChoisi.couleurOmbre3;
        }
    });
    allGrosButtons[0].style.color = themeChoisi.couleurTextBouton2;
    allGrosButtons[0].style.backgroundColor = themeChoisi.couleurBouton1;
    allGrosButtons[0].style.borderBottomColor = themeChoisi.couleurOmbre1;
    allGrosButtons[1].style.color = themeChoisi.couleurTextBouton2;
    allGrosButtons[1].style.backgroundColor = themeChoisi.couleurBouton2;
    allGrosButtons[1].style.borderBottomColor = themeChoisi.couleurOmbre2;
    boules.forEach(function (boule) { return boule.style.backgroundColor = themeChoisi.couleurBouton2; });
    itemThemes.forEach(function (itemTheme) { return itemTheme.style.backgroundColor = themeChoisi.couleurPad; });
    attribution.style.color = themeChoisi.couleurDesTextes;
    attribution.querySelectorAll('a').forEach(function (a) { return a.style.color = themeChoisi.couleurBouton2; });
};
itemThemes.forEach(function (itemTheme, index) { return itemTheme.addEventListener('click', function () { return changeTheme(index); }); });
changeTheme(0);
// Gestion de la calculatrice
var pasDejaVirgule = function (text) {
    var dernierVirgule = text.length - 1 - (text.split('').reverse().indexOf('.') === -1 ? text.length : text.split('').reverse().indexOf('.'));
    if (dernierVirgule === -1)
        return true;
    else
        return /[\+\-x\/]/.test(text.slice(dernierVirgule + 1));
};
var expressionEcrit = '';
allPetitButtons.forEach(function (btn, indexBtn) {
    btn.addEventListener('click', function () {
        // Les chiffres
        if (indexBtn === 0)
            expressionEcrit += '7';
        if (indexBtn === 1)
            expressionEcrit += '8';
        else if (indexBtn === 2)
            expressionEcrit += '9';
        else if (indexBtn === 4)
            expressionEcrit += '4';
        else if (indexBtn === 5)
            expressionEcrit += '5';
        else if (indexBtn === 6)
            expressionEcrit += '6';
        else if (indexBtn === 8)
            expressionEcrit += '1';
        else if (indexBtn === 9)
            expressionEcrit += '2';
        else if (indexBtn === 10)
            expressionEcrit += '3';
        else if (indexBtn === 13)
            expressionEcrit += '0';
        // Les operations
        else if (indexBtn === 7 &&
            expressionEcrit.length !== 0 &&
            !('+-x/'.includes(expressionEcrit.charAt(expressionEcrit.length - 1))))
            expressionEcrit += '+';
        else if (indexBtn === 7 &&
            expressionEcrit.length !== 0 &&
            !(expressionEcrit.length === 1 && expressionEcrit[0] === '-') &&
            ('+-x/'.includes(expressionEcrit.charAt(expressionEcrit.length - 1))))
            expressionEcrit = expressionEcrit.slice(0, -1) + '+';
        else if (indexBtn === 11 &&
            (expressionEcrit.length === 0 ||
                !('+-x/'.includes(expressionEcrit.charAt(expressionEcrit.length - 1)))))
            expressionEcrit += '-';
        else if (indexBtn === 11 &&
            expressionEcrit.length !== 0 &&
            ('+-x/'.includes(expressionEcrit.charAt(expressionEcrit.length - 1))))
            expressionEcrit = expressionEcrit.slice(0, -1) + '-';
        else if (indexBtn === 15 &&
            expressionEcrit.length !== 0 &&
            !('+-x/'.includes(expressionEcrit.charAt(expressionEcrit.length - 1))))
            expressionEcrit += 'x';
        else if (indexBtn === 15 &&
            expressionEcrit.length !== 0 &&
            !(expressionEcrit.length === 1 && expressionEcrit[0] === '-') &&
            ('+-x/'.includes(expressionEcrit.charAt(expressionEcrit.length - 1))))
            expressionEcrit = expressionEcrit.slice(0, -1) + 'x';
        else if (indexBtn === 14 &&
            expressionEcrit.length !== 0 &&
            !('+-x/'.includes(expressionEcrit.charAt(expressionEcrit.length - 1))))
            expressionEcrit += '/';
        else if (indexBtn === 14 &&
            expressionEcrit.length !== 0 &&
            !(expressionEcrit.length === 1 && expressionEcrit[0] === '-') &&
            ('+-x/'.includes(expressionEcrit.charAt(expressionEcrit.length - 1))))
            expressionEcrit = expressionEcrit.slice(0, -1) + '/';
        // Delete
        else if (indexBtn === 3 &&
            expressionEcrit !== '')
            expressionEcrit = expressionEcrit.slice(0, -1);
        // Virgule 
        else if (indexBtn === 12 &&
            expressionEcrit.length !== 0 &&
            '0123456789'.includes(expressionEcrit.charAt(expressionEcrit.length - 1)) &&
            pasDejaVirgule(expressionEcrit))
            expressionEcrit += '.';
        else if (indexBtn === 12 &&
            expressionEcrit.length === 0)
            expressionEcrit += '0.';
        affichage.innerText = expressionEcrit === '' ? '0' : expressionEcrit;
    });
});
allGrosButtons[0].addEventListener('click', function () {
    expressionEcrit = '';
    affichage.innerText = expressionEcrit === '' ? '0' : expressionEcrit;
});
var calcul = function (text) {
    var lesNombres, lesOperateurs;
    if (text[0] === '-') {
        lesNombres = text.slice(1).split(/[\+\-\x\/]/);
        lesNombres[0] = '-' + lesNombres[0];
        lesOperateurs = text.slice(1).split('').filter(function (c) { return '+-x/'.includes(c); });
    }
    else {
        lesNombres = text.split(/[\+\-\x\/]/);
        lesOperateurs = text.split('').filter(function (c) { return '+-x/'.includes(c); });
    }
    var calculRec = function (nombres, operateurs) {
        if (operateurs.length === 0)
            return parseFloat(nombres[0]);
        else if (operateurs.indexOf('x') !== -1) {
            var indexMulti = operateurs.indexOf('x');
            var resultMulti = parseFloat(nombres[indexMulti]) * parseFloat(nombres[indexMulti + 1]);
            nombres.splice(indexMulti, 2, String(resultMulti));
            operateurs.splice(indexMulti, 1);
            return calculRec(nombres, operateurs);
        }
        else if (operateurs.indexOf('/') !== -1) {
            var indexDiv = operateurs.indexOf('/');
            var resultDiv = (parseFloat(nombres[indexDiv]) / parseFloat(nombres[indexDiv + 1])).toFixed(3);
            nombres.splice(indexDiv, 2, String(resultDiv));
            operateurs.splice(indexDiv, 1);
            return calculRec(nombres, operateurs);
        }
        else if (operateurs.indexOf('+') !== -1) {
            var indexPlus = operateurs.indexOf('+');
            var resultPlus = parseFloat(nombres[indexPlus]) + parseFloat(nombres[indexPlus + 1]);
            nombres.splice(indexPlus, 2, String(resultPlus));
            operateurs.splice(indexPlus, 1);
            return calculRec(nombres, operateurs);
        }
        else {
            var indexMoins = operateurs.indexOf('-');
            var resultMoins = parseFloat(nombres[indexMoins]) - parseFloat(nombres[indexMoins + 1]);
            nombres.splice(indexMoins, 2, String(resultMoins));
            operateurs.splice(indexMoins, 1);
            return calculRec(nombres, operateurs);
        }
    };
    return calculRec(lesNombres, lesOperateurs);
};
allGrosButtons[1].addEventListener('click', function () {
    if (/[.\+\-x\/]/.test(expressionEcrit[expressionEcrit.length - 1])) {
        var ancienColor_1 = affichage.style.color;
        affichage.style.color = 'red';
        setTimeout(function () { return affichage.style.color = ancienColor_1; }, 400);
    }
    else {
        expressionEcrit = affichage.innerText = String(calcul(expressionEcrit));
    }
});
