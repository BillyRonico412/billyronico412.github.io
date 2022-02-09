// Notre App Vue

const App = Vue.createApp({
    data() {
        return {
            afficheMenu: false,
            textInteractive: '',
            animerPipe: false,
            idSection: 0,
            idCompetence: 0
        }
    },
    watch: {
        idSection() {
            this.afficheMenu = false
        }
    },
    methods: {

        // Gestion du texte interactive dans l'acceuil
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
                    } else if (teteDeLecture !== 0) {
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
        },

    },
    created() {
        this.interactiveFun()
    },
    mounted() {
        // Intersection observer
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log(entry.target.id)
                    switch (entry.target.id) {
                        case "h1-acceuil":
                            this.idSection = 0
                            break
                        case "a-propos":
                            this.idSection = 1
                            break
                        case "competences":
                            this.idSection = 2
                            break
                        case "contact":
                            this.idSection = 4
                            break
                    }
                }
            })
        }, {threshold: 0.6})

        obs.observe(document.querySelector("#h1-acceuil"))
        obs.observe(document.querySelector("#a-propos"))
        obs.observe(document.querySelector("#competences"))
        obs.observe(document.querySelector("#contact"))
    },
    components: {
        "barre-progression": {
            template: `
                <div class="lg:w-2/5">
                    <div class="flex font-bold">
                        <div class="">{{ text }}</div>
                        <div class="ml-auto">{{ progress }}%</div>
                    </div>
                    <div class="bg-bleu-transparent h-2 ombre">
                        <div class="bg-bleu-clair h-2" ref="progress"></div>
                    </div>
                </div>
            `,
            props: {
                progress: Number,
                text: String
            },
            mounted() {
                this.$refs.progress.style.width = `${this.progress}%`
            }
        }
    }
})

App.mount('#app')

// Initialisation de Sal.js

sal()