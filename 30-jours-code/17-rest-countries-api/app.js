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
const imgMoon = document.querySelector('#img-moon');
new class {
    constructor() {
        this.search = '';
        this.filterRegion = 'None';
        this.allPaysAffiche = [];
        this.allPays = [];
        this.timeOutSearch = 0;
        this.dark = false;
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
            if (this.dark) {
                imgMoon.src = './image/moon.svg';
                (_a = document.querySelector('html')) === null || _a === void 0 ? void 0 : _a.classList.add('dark');
            }
            else {
                imgMoon.src = './image/moon-outline.svg';
                (_b = document.querySelector('html')) === null || _b === void 0 ? void 0 : _b.classList.remove('dark');
            }
        });
    }
    getallPays() {
        return __awaiter(this, void 0, void 0, function* () {
            const reponse = yield fetch('https://restcountries.eu/rest/v2/all');
            const data = yield reponse.json();
            this.allPays = data.map(pays => {
                const name = pays.name;
                const population = pays.population;
                const region = pays.region;
                const capital = pays.capital;
                const flag = pays.flag;
                return { name, population, region, capital, flag };
            });
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
                contentCard.innerHTML += `
            <div class="card w-72 rounded overflow-hidden ombre">
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
            </div>
            `;
            });
        });
    }
}();
