"use strict";
const tableJeu = document.querySelector('#table-jeu');
const espaceJeu = document.querySelector('#espace-jeu');
const btnStep = document.querySelector('#btn-step');
const btnPlay = document.querySelector('#btn-play');
const btnPause = document.querySelector('#btn-pause');
class JeuDeLaVie {
    constructor() {
        this.longueur = 40;
        this.vitesse = 200;
        this.dimensionCase = this.calculDimensionCase();
        this.hauteur = this.calculHauteur();
        this.etatCase = [];
        this.initCase();
        this.initTable();
        this.timer = 0;
        this.fixeEvent();
    }
    fixeEvent() {
        btnStep.addEventListener('click', () => {
            this.etatCase = this.nouvelleVie();
            this.update();
        });
        btnPlay.addEventListener('click', () => {
            this.timer = setInterval(() => {
                this.etatCase = this.nouvelleVie();
                this.update();
            }, this.vitesse);
        });
        btnPause.addEventListener('click', () => {
            clearInterval(this.timer);
        });
    }
    calculDimensionCase() {
        return Math.floor(espaceJeu.clientWidth / this.longueur);
    }
    calculHauteur() {
        return Math.floor(espaceJeu.clientHeight / this.dimensionCase);
    }
    initCase() {
        for (let i = 0; i < this.hauteur; i++) {
            this.etatCase.push([]);
            for (let j = 0; j < this.longueur; j++)
                this.etatCase[i].push(false);
        }
    }
    initTable() {
        for (let i = 0; i < this.hauteur; i++) {
            const tr = document.createElement('tr');
            for (let j = 0; j < this.longueur; j++) {
                const td = document.createElement('td');
                td.style.width = this.dimensionCase + 'px';
                td.style.height = this.dimensionCase + 'px';
                td.classList.add('mort');
                td.addEventListener('click', () => this.changeEtat(i, j));
                tr.appendChild(td);
            }
            tableJeu.appendChild(tr);
        }
    }
    changeEtat(ligne, col) {
        this.etatCase[ligne][col] = !this.etatCase[ligne][col];
        this.update();
    }
    update() {
        const trs = tableJeu.querySelectorAll('tr');
        for (let i = 0; i < this.hauteur; i++) {
            const tr = trs[i];
            const tds = tr.querySelectorAll('td');
            for (let j = 0; j < this.longueur; j++) {
                const td = tds[j];
                if (this.etatCase[i][j])
                    td.classList.replace('mort', 'vivant');
                else
                    td.classList.replace('vivant', 'mort');
            }
        }
    }
    coordVoisin(ligne, col) {
        return [
            { ligne: ligne - 1, col: col - 1 },
            { ligne: ligne - 1, col: col },
            { ligne: ligne - 1, col: col + 1 },
            { ligne: ligne + 1, col: col - 1 },
            { ligne: ligne + 1, col: col },
            { ligne: ligne + 1, col: col + 1 },
            { ligne: ligne, col: col - 1 },
            { ligne: ligne, col: col + 1 },
        ].filter(coord => 0 <= coord.ligne && coord.ligne < this.hauteur &&
            0 <= coord.col && coord.col < this.longueur);
    }
    nouvelleVie() {
        const result = [];
        for (let i = 0; i < this.hauteur; i++) {
            result.push([]);
            for (let j = 0; j < this.longueur; j++) {
                const nbVoisinVivant = this.coordVoisin(i, j)
                    .filter(coord => this.etatCase[coord.ligne][coord.col] === true)
                    .length;
                if (this.etatCase[i][j] &&
                    (nbVoisinVivant === 2 || nbVoisinVivant === 3))
                    result[i].push(true);
                else if (!this.etatCase[i][j] && nbVoisinVivant === 3)
                    result[i].push(true);
                else
                    result[i].push(false);
            }
        }
        return result;
    }
}
console.log(new JeuDeLaVie());
