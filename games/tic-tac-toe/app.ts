enum EtatCase { V, X, O }
enum Tour { X, O }

class TicTacToe {

    tabCase: EtatCase[][]
    tour: Tour
    taille: number

    constructor() {
        this.taille = 3
        this.tour = Tour.X
        this.tabCase = []
        this.affiche()
        this.initTabCase()
    }

    initTabCase() {
        for (let i = 0; i < this.taille; i++) {
            this.tabCase.push([])
            for (let j = 0; j < this.taille; j++)
                this.tabCase[i].push(EtatCase.V)
        }
    }

    affiche() {

        for (let i = 0; i < this.taille; i++) {
            const divRow = document.createElement('div')
            divRow.classList.add('div-row')
            for (let j = 0; j < this.taille; j++) {
                const divCol = document.createElement('div')
                divCol.addEventListener('click', () => this.clickCase(i, j))
                divCol.classList.add('div-col')
                divRow.appendChild(divCol)
            }
            (document.querySelector('#plateau') as HTMLDivElement).appendChild(divRow)
        }

    }

    clickCase(i: number, j: number) {
        if (this.tabCase[i][j] === EtatCase.V) {
            switch (this.tour) {
                case Tour.X: this.tabCase[i][j] = EtatCase.X
                    break
                case Tour.O: this.tabCase[i][j] = EtatCase.O
                    break
            }
            this.tour = (this.tour === Tour.O) ? Tour.X : Tour.O
            this.updateCase()
        }
    }

    updateCase() {
        const tabDivRow = document.querySelectorAll('.div-row') as NodeListOf<HTMLDivElement>
        for (let i = 0; i < this.taille; i++) {
            const tabDivCol = tabDivRow[i].querySelectorAll('.div-col')
            for (let j = 0; j < this.taille; j++) {
                switch (this.tabCase[i][j]) {
                    case EtatCase.V: tabDivCol[j].innerHTML = ''
                        break
                    case EtatCase.O: tabDivCol[j].innerHTML = 'O'
                        break
                    case EtatCase.X: tabDivCol[j].innerHTML = 'X'
                        break
                }
            }
        }
    }

    testVictoire() {
        
    }

}

new TicTacToe()