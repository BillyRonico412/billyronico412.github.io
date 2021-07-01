type Region = 'None' | 'Africa' | 'Europe' | 'Asia' | 'Americas' | 'Oceania'

type Carte = {
    name: string,
    population: number,
    region: string,
    capital: string,
    flag: string
}

const formatNumber = (nbre: number) => {
    let result = ''
    String(nbre).split('').reverse().forEach((car, index) => {
        if (index % 3 === 0 && index !== 0) result += ',' + car
        else result += car
    })
    return result.split('').reverse().join('')
}

const contentCard = document.querySelector('.content-card') as HTMLDivElement
const selectRegion = document.querySelector('#select-region') as HTMLSelectElement
const inputSearch = document.querySelector('#input-search-countries') as HTMLInputElement
const btnDark = document.querySelector('#btn-dark') as HTMLButtonElement
const imgMoon = document.querySelector('#img-moon') as HTMLImageElement

new class {

    search: string
    filterRegion: Region
    allPaysAffiche: Carte[]
    allPays: Carte[]
    timeOutSearch: number
    dark:boolean

    constructor() {
        this.search = ''
        this.filterRegion = 'None'
        this.allPaysAffiche = []
        this.allPays = []
        this.timeOutSearch = 0
        this.dark = false
        this.fixeEvent()
        this.constructCard()
    }

    fixeEvent() {
        selectRegion.addEventListener('change', () => {
            this.filterRegion = selectRegion.value as Region
            this.constructCard()
        })

        inputSearch.addEventListener('input', () => {
            clearInterval(this.timeOutSearch)
            this.timeOutSearch = setTimeout(() => {
                this.search = inputSearch.value
                this.constructCard()
            }, 2000)
        })

        btnDark.addEventListener('click', () => {
            this.dark = !this.dark
            if (this.dark) {
                imgMoon.src = './image/moon.svg'
                document.querySelector('html')?.classList.add('dark')
            }
            else {
                imgMoon.src = './image/moon-outline.svg'
                document.querySelector('html')?.classList.remove('dark')
            }
        })
    }

    async getallPays() {
        const reponse = await fetch('https://restcountries.eu/rest/v2/all')
        const data: any[] = await reponse.json()
        this.allPays = data.map(pays => {
            const name = pays.name as string
            const population = pays.population as number
            const region = pays.region as string
            const capital = pays.capital as string
            const flag = pays.flag as string
            return { name, population, region, capital, flag }
        })
    }

    async getallPaysAffiche() {
        if (this.allPays.length === 0) await this.getallPays()
        this.allPaysAffiche = this.allPays.filter(pays => (
            (this.filterRegion === 'None' || this.filterRegion === pays.region) &&
            new RegExp(this.search, 'i').test(pays.name)
        ))
    }

    async constructCard() {
        await this.getallPaysAffiche()
        contentCard.innerHTML = ''
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
            `
        })
    }

}()