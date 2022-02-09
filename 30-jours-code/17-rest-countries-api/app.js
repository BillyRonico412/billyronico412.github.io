"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const formatNumber = (nbre) => {
    let result = '';
    String(nbre).split('').reverse().forEach((car, index) => {
        if (index % 3 === 0 && index !== 0)
            result += ',' + car;
        else
            result += car;
    });
    return result.split('').reverse().join('');
};
const contentCard = document.querySelector('.content-card');
const selectRegion = document.querySelector('#select-region');
const inputSearch = document.querySelector('#input-search-countries');
const btnDark = document.querySelector('#btn-dark');
const contentLoading = document.querySelector('#content-loading');
const contentHeader = document.querySelector('#content-header');
const contentAllCard = document.querySelector('#content-all-card');
const contentInfoCard = document.querySelector('#content-info-card');
const main = document.querySelector('main');
const infoFlag = document.querySelector('#info-flag');
const infoNom = document.querySelector('#info-nom');
const infoNativeName = document.querySelector('#info-native-name');
const infoPopulation = document.querySelector('#info-population');
const infoRegion = document.querySelector('#info-region');
const infoSubRegion = document.querySelector('#info-sub-region');
const infoCapital = document.querySelector('#info-capital');
const infoTopDomain = document.querySelector('#info-top-domain');
const infoCurrencies = document.querySelector('#info-currencies');
const infoLanguages = document.querySelector('#info-languages');
const infoBorderCountries = document.querySelector('#info-border-countries');
const btnBack = document.querySelector('#btn-back');
var Affichage;
(function (Affichage) {
    Affichage[Affichage["INFO"] = 0] = "INFO";
    Affichage[Affichage["PAYS"] = 1] = "PAYS";
})(Affichage || (Affichage = {}));
new class {
    constructor() {
        this.search = '';
        this.filterRegion = 'None';
        this.allPaysAffiche = [];
        this.allPays = [];
        this.timeOutSearch = 0;
        this.dark = false;
        this.affichage = Affichage.PAYS;
        this.fixeEvent();
        this.constructCard();
    }
    fixeEvent() {
        selectRegion.addEventListener('change', () => {
            this.filterRegion = selectRegion.value;
            this.constructCard();
        });
        inputSearch.addEventListener('input', () => {
            clearInterval(this.timeOutSearch);
            this.timeOutSearch = setTimeout(() => {
                this.search = inputSearch.value;
                this.constructCard();
            }, 2000);
        });
        btnDark.addEventListener('click', () => {
            var _a, _b;
            this.dark = !this.dark;
            if (this.dark)
                (_a = document.querySelector('html')) === null || _a === void 0 ? void 0 : _a.classList.add('dark');
            else
                (_b = document.querySelector('html')) === null || _b === void 0 ? void 0 : _b.classList.remove('dark');
        });
        btnBack.addEventListener('click', () => this.switchAffichage());
    }
    getallPays() {
        return __awaiter(this, void 0, void 0, function* () {
            const reponse = yield fetch('https://restcountries.com/v2/all');
            const data = yield reponse.json();
            const allAlpha3Code = data.map(pays => pays.alpha3Code);
            console.log(data);
            this.allPays = data.map(pays => {
                const name = pays.name;
                const population = pays.population;
                const region = pays.region;
                const capital = pays.capital;
                const flag = pays.flag;
                const subregion = pays.subregion;
                const nativeName = pays.nativeName;
                const topLevelDomain = pays.topLevelDomain;
                const currencies = pays.currencies !== undefined ? pays.currencies.map((item) => item.name) : [];
                const languages = pays.languages.map((item) => item.name);
                const indexBorderCountries = pays.borders !== undefined ? pays.borders.map((countrie) => allAlpha3Code.indexOf(countrie)) : [];
                return {
                    name,
                    population,
                    region,
                    capital,
                    flag,
                    subregion,
                    nativeName,
                    topLevelDomain,
                    currencies,
                    languages,
                    indexBorderCountries
                };
            });
            console.log(this.allPays);
            setTimeout(() => {
                contentLoading.style.display = 'none';
                contentHeader.style.display = 'block';
                main.style.display = 'block';
                contentAllCard.style.display = 'block';
            }, 1000);
        });
    }
    getallPaysAffiche() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.allPays.length === 0)
                yield this.getallPays();
            this.allPaysAffiche = this.allPays.filter(pays => ((this.filterRegion === 'None' || this.filterRegion === pays.region) &&
                new RegExp(this.search, 'i').test(pays.name)));
        });
    }
    constructCard() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getallPaysAffiche();
            contentCard.innerHTML = '';
            this.allPaysAffiche.forEach(pays => {
                const card = document.createElement('div');
                card.classList.add('card', 'w-72', 'rounded', 'overflow-hidden', 'ombre', 'cursor-pointer');
                card.innerHTML = `
                <img src="${pays.flag}" alt="flag-${pays.name}" class="w-full h-48">
                <div class="bg-light-bg dark:bg-dark-element dark:text-white
                px-8 py-8">
                    <h5 class="text-xl font-extrabold mb-4">${pays.name}</h5>
                    <h6>
                        <span class="font-semibold">Population: </span>
                        <span class="ml-1 font-light">${formatNumber(pays.population)}</span>
                    </h6>
                    <h6 class="my-1">
                        <span class="font-semibold">Region: </span>
                        <span class="ml-1 font-light">${pays.region}</span>
                    </h6>
                    <h6>
                        <span class="font-semibold">Capital: </span>
                        <span class="ml-1 font-light">${pays.capital}</span>
                    </h6>
                </div>
            `;
                card.addEventListener('click', () => {
                    this.updateInfo(pays);
                    this.switchAffichage();
                });
                contentCard.appendChild(card);
            });
        });
    }
    switchAffichage() {
        if (this.affichage === Affichage.PAYS) {
            contentAllCard.style.display = 'none';
            contentInfoCard.style.display = 'block';
            this.affichage = Affichage.INFO;
        }
        else {
            contentAllCard.style.display = 'block';
            contentInfoCard.style.display = 'none';
            this.affichage = Affichage.PAYS;
        }
    }
    updateInfo(pays) {
        infoFlag.src = pays.flag;
        infoNom.innerText = pays.name;
        infoNativeName.innerText = pays.nativeName;
        infoPopulation.innerText = formatNumber(pays.population);
        infoRegion.innerText = pays.region;
        infoSubRegion.innerText = pays.subregion;
        infoCapital.innerText = pays.capital;
        infoTopDomain.innerText = pays.topLevelDomain.reduce((item1, item2) => item1 + ', ' + item2);
        infoCurrencies.innerText = pays.currencies.reduce((item1, item2) => item1 + ', ' + item2);
        infoLanguages.innerText = pays.languages.reduce((item1, item2) => item1 + ', ' + item2);
        this.updateBorderCountries(pays.indexBorderCountries);
    }
    updateBorderCountries(indexPays) {
        infoBorderCountries.innerHTML = '';
        indexPays.forEach(item => {
            const borderCountrie = document.createElement('li');
            const buttonCountrie = document.createElement('button');
            buttonCountrie.innerText = this.allPays[item].name;
            buttonCountrie.classList.add('ombre', 'bg-light-bg', 'dark:bg-dark-element', 'font-semibold', 'px-6', 'py-2', 'rounded');
            buttonCountrie.addEventListener('click', () => this.updateInfo(this.allPays[item]));
            infoBorderCountries.appendChild(borderCountrie.appendChild(buttonCountrie));
        });
    }
}();
