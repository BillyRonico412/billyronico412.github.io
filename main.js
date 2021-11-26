const App = {
    data() {
        return {
            afficheMenu: false,
            selectMenu: 0,
            textInteractive: '',
            animerPipe: false
        }
    },
    methods: {
        interactiveFun() {
            const tabTexte = ["Student", "Developper", "Futur Engineer", "21 Years Old"];

            let indexLecture = 0
            let teteDeLecture = 0
            let boolEcriture = true
            let timerInterval = 0

            const intervalEcriture = setInterval(() => {
                if (boolEcriture) {
                    if (teteDeLecture === tabTexte[indexLecture].length - 1) boolEcriture = false
                    this.textInteractive += tabTexte[indexLecture].charAt(teteDeLecture)
                    teteDeLecture++
                } else {
                    if (timerInterval < 30) {
                        timerInterval++
                        this.animerPipe = true
                    }
                    else if (teteDeLecture !== 0) {
                        this.animerPipe = false
                        teteDeLecture--
                        this.textInteractive = this.textInteractive.slice(0, teteDeLecture)
                    } else {
                        boolEcriture = true
                        timerInterval = 0
                        indexLecture = (indexLecture + 1) % tabTexte.length
                    }
                }
            }, 100)
        }
    },
    created() {
        this.interactiveFun()
    }
}

Vue.createApp(App).mount('#app')

// Changement du texte de l'acceuil


