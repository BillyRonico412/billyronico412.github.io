type Region = 'None' | 'Africa' | 'Europe' | 'Asia' | 'Americas' | 'Oceania'

type Pays = {
    name: string,
    population: number,
    region: string,
    capital: string,
    flag: string,
    subregion: string,
    nativeName: string,
    topLevelDomain: string[],
    currencies: string[],
    languages: string[],
    indexBorderCountries: number[]
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

const contentLoading = document.querySelector('#content-loading') as HTMLDivElement
const contentHeader = document.querySelector('#content-header') as HTMLDivElement
const contentAllCard = document.querySelector('#content-all-card') as HTMLDivElement
const contentInfoCard = document.querySelector('#content-info-card') as HTMLDivElement
const main = document.querySelector('main') as HTMLElement

const infoFlag = document.querySelector('#info-flag') as HTMLImageElement
const infoNom = document.querySelector('#info-nom') as HTMLElement
const infoNativeName = document.querySelector('#info-native-name') as HTMLElement
const infoPopulation = document.querySelector('#info-population') as HTMLElement
const infoRegion = document.querySelector('#info-region') as HTMLElement
const infoSubRegion = document.querySelector('#info-sub-region') as HTMLElement
const infoCapital = document.querySelector('#info-capital') as HTMLElement
const infoTopDomain = document.querySelector('#info-top-domain') as HTMLElement
const infoCurrencies = document.querySelector('#info-currencies') as HTMLElement
const infoLanguages = document.querySelector('#info-languages') as HTMLElement
const infoBorderCountries = document.querySelector('#info-border-countries') as HTMLElement

const btnBack = document.querySelector('#btn-back') as HTMLElement


enum Affichage { INFO, PAYS }

new class {

    search: string
    filterRegion: Region
    allPaysAffiche: Pays[]
    allPays: Pays[]
    timeOutSearch: number
    dark: boolean
    affichage: Affichage

    constructor() {
        this.search = ''
        this.filterRegion = 'None'
        this.allPaysAffiche = []
        this.allPays = []
        this.timeOutSearch = 0
        this.dark = false
        this.affichage = Affichage.PAYS
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

            if (this.dark) document.querySelector('html')?.classList.add('dark')
            
            else document.querySelector('html')?.classList.remove('dark')
            
        })

        btnBack.addEventListener('click', () => this.switchAffichage())
    }

    async getallPays() {
        const reponse = await fetch('https://restcountries.eu/rest/v2/all')
        const data: any[] = await reponse.json()
        const allAlpha3Code = data.map(pays => pays.alpha3Code) as string[]
        console.log(data)
        this.allPays = data.map(pays => {
            const name = pays.name as string
            const population = pays.population as number
            const region = pays.region as string
            const capital = pays.capital as string
            const flag = pays.flag as string
            const subregion = pays.subregion as string
            const nativeName = pays.nativeName as string
            const topLevelDomain = pays.topLevelDomain as string[]
            const currencies = pays.currencies.map((item: { name: string }) => item.name) as string[]
            const languages = pays.languages.map((item: { name: string }) => item.name) as string[]
            const indexBorderCountries = pays.borders.map((countrie: string) => allAlpha3Code.indexOf(countrie)) as number[]
            return { name, population, region, capital, flag, subregion, nativeName, topLevelDomain, currencies, languages, indexBorderCountries }
        })
        console.log(this.allPays)
        setTimeout(() => {
            contentLoading.style.display = 'none'
            contentHeader.style.display = 'block'
            main.style.display = 'block'
            contentAllCard.style.display = 'block'
        }, 1000)
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
            const card = document.createElement('div') as HTMLElement
            card.classList.add('card', 'w-72', 'rounded', 'overflow-hidden', 'ombre', 'cursor-pointer')
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
            `

            card.addEventListener('click', () => {
                this.updateInfo(pays)
                this.switchAffichage()
            })

            contentCard.appendChild(card)
        })
    }

    switchAffichage() {
        if (this.affichage === Affichage.PAYS) {
            contentAllCard.style.display = 'none'
            contentInfoCard.style.display = 'block'
            this.affichage = Affichage.INFO
        } else {
            contentAllCard.style.display = 'block'
            contentInfoCard.style.display = 'none'
            this.affichage = Affichage.PAYS
        }
    }

    updateInfo(pays: Pays) {
        infoFlag.src = pays.flag
        infoNom.innerText = pays.name
        infoNativeName.innerText = pays.nativeName
        infoPopulation.innerText = formatNumber(pays.population)
        infoRegion.innerText = pays.region
        infoSubRegion.innerText = pays.subregion
        infoCapital.innerText = pays.capital
        infoTopDomain.innerText = pays.topLevelDomain.reduce((item1, item2) => item1 + ', ' + item2)
        infoCurrencies.innerText = pays.currencies.reduce((item1, item2) => item1 + ', ' + item2)
        infoLanguages.innerText = pays.languages.reduce((item1, item2) => item1 + ', ' + item2)
        this.updateBorderCountries(pays.indexBorderCountries)
    }

    updateBorderCountries(indexPays: number[]) {
        infoBorderCountries.innerHTML = ''

        indexPays.forEach(item => {

            const borderCountrie = document.createElement('li') as HTMLElement
            const buttonCountrie = document.createElement('button') as HTMLButtonElement

            buttonCountrie.innerText = this.allPays[item].name
            buttonCountrie.classList.add('ombre', 'bg-light-bg', 'dark:bg-dark-element', 'font-semibold', 'px-6', 'py-2', 'rounded')
            buttonCountrie.addEventListener('click', () => this.updateInfo(this.allPays[item]))

            infoBorderCountries.appendChild(borderCountrie.appendChild(buttonCountrie))

        })



    }

}()