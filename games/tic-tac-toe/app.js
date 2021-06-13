var EtatCase;
(function (EtatCase) {
    EtatCase[EtatCase["V"] = 0] = "V";
    EtatCase[EtatCase["X"] = 1] = "X";
    EtatCase[EtatCase["O"] = 2] = "O";
})(EtatCase || (EtatCase = {}));
var Tour;
(function (Tour) {
    Tour[Tour["X"] = 0] = "X";
    Tour[Tour["O"] = 1] = "O";
})(Tour || (Tour = {}));
var TicTacToe = /** @class */ (function () {
    function TicTacToe() {
        this.taille = 3;
        this.tour = Tour.X;
        this.tabCase = [];
        this.affiche();
        this.initTabCase();
    }
    TicTacToe.prototype.initTabCase = function () {
        for (var i = 0; i < this.taille; i++) {
            this.tabCase.push([]);
            for (var j = 0; j < this.taille; j++)
                this.tabCase[i].push(EtatCase.V);
        }
    };
    TicTacToe.prototype.affiche = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var divRow = document.createElement('div');
            divRow.classList.add('div-row');
            var _loop_2 = function (j) {
                var divCol = document.createElement('div');
                divCol.addEventListener('click', function () { return _this.clickCase(i, j); });
                divCol.classList.add('div-col');
                divRow.appendChild(divCol);
            };
            for (var j = 0; j < this_1.taille; j++) {
                _loop_2(j);
            }
            document.querySelector('#plateau').appendChild(divRow);
        };
        var this_1 = this;
        for (var i = 0; i < this.taille; i++) {
            _loop_1(i);
        }
    };
    TicTacToe.prototype.clickCase = function (i, j) {
        if (this.tabCase[i][j] === EtatCase.V) {
            switch (this.tour) {
                case Tour.X:
                    this.tabCase[i][j] = EtatCase.X;
                    break;
                case Tour.O:
                    this.tabCase[i][j] = EtatCase.O;
                    break;
            }
            this.tour = (this.tour === Tour.O) ? Tour.X : Tour.O;
            this.updateCase();
        }
    };
    TicTacToe.prototype.updateCase = function () {
        var tabDivRow = document.querySelectorAll('.div-row');
        for (var i = 0; i < this.taille; i++) {
            var tabDivCol = tabDivRow[i].querySelectorAll('.div-col');
            for (var j = 0; j < this.taille; j++) {
                switch (this.tabCase[i][j]) {
                    case EtatCase.V:
                        tabDivCol[j].innerHTML = '';
                        break;
                    case EtatCase.O:
                        tabDivCol[j].innerHTML = 'O';
                        break;
                    case EtatCase.X:
                        tabDivCol[j].innerHTML = 'X';
                        break;
                }
            }
        }
    };
    TicTacToe.prototype.testVictoire = function () {
    };
    return TicTacToe;
}());
new TicTacToe();
