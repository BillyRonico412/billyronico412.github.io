const tableJeu = document.querySelector('#table-jeu') as HTMLTableElement
const espaceJeu = document.querySelector('#espace-jeu') as HTMLDivElement

const btnStep = document.querySelector('#btn-step') as HTMLButtonElement
const btnPlay = document.querySelector('#btn-play') as HTMLButtonElement
const btnPause = document.querySelector('#btn-pause') as HTMLButtonElement


class JeuDeLaVie {

    etatCase: boolean[][]
    longueur: number
    hauteur: number
    dimensionCase: number
    timer: number
    vitesse: number

    constructor() {
        this.longueur = 40
        this.vitesse = 200
        this.dimensionCase = this.calculDimensionCase()
        this.hauteur = this.calculHauteur()
        this.etatCase = []
        this.initCase()
        this.initTable()

        this.timer = 0

        this.fixeEvent()

    }

    fixeEvent() {

        btnStep.addEventListener('click', () => {
            this.etatCase = this.nouvelleVie()
            this.update()
        })

        btnPlay.addEventListener('click', () => {
            this.timer = setInterval(() => {
                this.etatCase = this.nouvelleVie()
                this.update()
            }, this.vitesse)
        })

        btnPause.addEventListener('click', () => {
            clearInterval(this.timer)
        })

    }

    calculDimensionCase(): number {
        return Math.floor(espaceJeu.clientWidth / this.longueur)
    }

    calculHauteur(): number {
        return Math.floor(espaceJeu.clientHeight / this.dimensionCase)
    }

    initCase() {
        for (let i = 0; i < this.hauteur; i++) {
            this.etatCase.push([])
            for (let j = 0; j < this.longueur; j++)
                this.etatCase[i].push(false)
        }
    }

    initTable() {

        for (let i = 0; i < this.hauteur; i++) {
            const tr = document.createElement('tr')
            for (let j = 0; j < this.longueur; j++) {

                const td = document.createElement('td')

                td.style.width = this.dimensionCase + 'px'
                td.style.height = this.dimensionCase + 'px'
                td.classList.add('mort')

                td.addEventListener('click', () => this.changeEtat(i, j))

                tr.appendChild(td)

            }

            tableJeu.appendChild(tr)
        }
    }

    changeEtat(ligne: number, col: number) {
        this.etatCase[ligne][col] = !this.etatCase[ligne][col]
        this.update()
    }

    update() {
        const trs = tableJeu.querySelectorAll('tr')
        for (let i = 0; i < this.hauteur; i++) {
            const tr = trs[i]
            const tds = tr.querySelectorAll('td')
            for (let j = 0; j < this.longueur; j++) {
                const td = tds[j]
                if (this.etatCase[i][j])
                    td.classList.replace('mort', 'vivant')
                else td.classList.replace('vivant', 'mort')
            }
        }
    }

    coordVoisin(ligne: number, col: number): { ligne: number, col: number }[] {
        return [
            {ligne: ligne - 1, col: col - 1},
            {ligne: ligne - 1, col: col},
            {ligne: ligne - 1, col: col + 1},
            {ligne: ligne + 1, col: col - 1},
            {ligne: ligne + 1, col: col},
            {ligne: ligne + 1, col: col + 1},
            {ligne: ligne, col: col - 1},
            {ligne: ligne, col: col + 1},
        ].filter(coord =>
            0 <= coord.ligne && coord.ligne < this.hauteur &&
            0 <= coord.col && coord.col < this.longueur
        )
    }

    nouvelleVie(): boolean[][] {
        const result: boolean[][] = []
        for (let i = 0; i < this.hauteur; i++) {
            result.push([])
            for (let j = 0; j < this.longueur; j++) {
                const nbVoisinVivant = this.coordVoisin(i, j)
                    .filter(coord => this.etatCase[coord.ligne][coord.col] === true)
                    .length
                if (
                    this.etatCase[i][j] &&
                    (nbVoisinVivant === 2 || nbVoisinVivant === 3)
                ) result[i].push(true)
                else if (
                    !this.etatCase[i][j] && nbVoisinVivant === 3
                ) result[i].push(true)
                else result[i].push(false)
            }
        }
        return result
    }

}

console.log(new JeuDeLaVie())