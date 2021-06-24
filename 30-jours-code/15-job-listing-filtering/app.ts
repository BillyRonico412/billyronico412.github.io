const allData = [
    {
        "id": 1,
        "company": "Photosnap",
        "logo": "./images/photosnap.svg",
        "new": true,
        "featured": true,
        "position": "Senior Frontend Developer",
        "role": "Frontend",
        "level": "Senior",
        "postedAt": "1d ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["HTML", "CSS", "JavaScript"],
        "tools": []
    },
    {
        "id": 2,
        "company": "Manage",
        "logo": "./images/manage.svg",
        "new": true,
        "featured": true,
        "position": "Fullstack Developer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1d ago",
        "contract": "Part Time",
        "location": "Remote",
        "languages": ["Python"],
        "tools": ["React"]
    },
    {
        "id": 3,
        "company": "Account",
        "logo": "./images/account.svg",
        "new": true,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2d ago",
        "contract": "Part Time",
        "location": "USA Only",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"]
    },
    {
        "id": 4,
        "company": "MyHome",
        "logo": "./images/myhome.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "5d ago",
        "contract": "Contract",
        "location": "USA Only",
        "languages": ["CSS", "JavaScript"],
        "tools": []
    },
    {
        "id": 5,
        "company": "Loop Studios",
        "logo": "./images/loop-studios.svg",
        "new": false,
        "featured": false,
        "position": "Software Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript"],
        "tools": ["Ruby", "Sass"]
    },
    {
        "id": 6,
        "company": "FaceIt",
        "logo": "./images/faceit.svg",
        "new": false,
        "featured": false,
        "position": "Junior Backend Developer",
        "role": "Backend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "UK Only",
        "languages": ["Ruby"],
        "tools": ["RoR"]
    },
    {
        "id": 7,
        "company": "Shortly",
        "logo": "./images/shortly.svg",
        "new": false,
        "featured": false,
        "position": "Junior Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["HTML", "JavaScript"],
        "tools": ["Sass"]
    },
    {
        "id": 8,
        "company": "Insure",
        "logo": "./images/insure.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["JavaScript"],
        "tools": ["Vue", "Sass"]
    },
    {
        "id": 9,
        "company": "Eyecam Co.",
        "logo": "./images/eyecam-co.svg",
        "new": false,
        "featured": false,
        "position": "Full Stack Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "3w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript", "Python"],
        "tools": ["Django"]
    },
    {
        "id": 10,
        "company": "The Air Filter Company",
        "logo": "./images/the-air-filter-company.svg",
        "new": false,
        "featured": false,
        "position": "Front-end Dev",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "1mo ago",
        "contract": "Part Time",
        "location": "Worldwide",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"]
    }
]

class Profil {
    id: number
    company: string
    logo: string
    boolNew: boolean
    featured: boolean
    position: string
    role: string
    level: string
    postedAt: string
    contract: string
    location: string
    languages: string[]
    tools: string[]

    constructor(
        id: number,
        company: string,
        logo: string,
        boolNew: boolean,
        featured: boolean,
        position: string,
        role: string,
        level: string,
        postedAt: string,
        contract: string,
        location: string,
        languages: string[],
        tools: string[]
    ) {
        this.id = id
        this.company = company
        this.logo = logo
        this.boolNew = boolNew
        this.featured = featured
        this.position = position
        this.role = role
        this.level = level
        this.postedAt = postedAt
        this.contract = contract
        this.location = location
        this.languages = languages
        this.tools = tools
    }

    createHTML() {
        return `
        <div class="card card-${this.id} bg-white ombre px-6 py-6 my-16 lg:my-10 border-l-4 rounded border-desaturated-dark-cyan relative flex flex-col lg:flex-row lg:items-center">

            <img src="${this.logo}" alt="${this.logo.slice(8)}" class="w-12 lg:w-24 absolute lg:relative -top-6 lg:top-0">

            <div class="my-2 lg:ml-16">
                <div>
                    <span class="font-bold text-sm text-desaturated-dark-cyan">${this.company}</span>
                    ${this.boolNew ? `<span class="ml-4 font-bold text-xs bg-desaturated-dark-cyan pt-2 pb-1 px-2 text-white rounded-full">NEW!</span>` : ''}
                    ${this.featured ? `<span class="ml-2 font-bold text-xs bg-black pt-2 pb-1 px-2 text-white rounded-full">FEATURED</span>` : ''}
                </div>
                <h2 class="font-bold my-3 text-sm text-very-dark-grayishc-cyan">${this.position}</h2>
                <div class="text-dark-grayish-cyan text-sm">
                    <span>${this.postedAt}</span>
                    <span>.</span>
                    <span>${this.contract}</span>
                    <span>.</span>
                    <span>${this.location}</span>
                </div>
            </div>
            
            <hr class="my-4">

            <div class="lg:ml-auto all-buttons-trie">
                <button class="bg-light-grayish-cyan-tablet text-desaturated-dark-cyan font-bold text-sm rounded p-2 mr-4 my-2">${this.role}</button>
                <button class="bg-light-grayish-cyan-tablet text-desaturated-dark-cyan font-bold text-sm rounded p-2 mr-4 my-2">${this.level}</button>
                ${this.languages.length > 0 ?
                this.languages.reduce((accu, value) =>
                    accu +
                    `
                        <button class="bg-light-grayish-cyan-tablet text-desaturated-dark-cyan font-bold text-sm rounded p-2 mr-4 my-2">${value}</button>
                        `
                    , '') : ''
            }
                ${this.tools.length > 0 ?
                this.tools.reduce((accu, value) =>
                    accu +
                    `
                        <button class="bg-light-grayish-cyan-tablet text-desaturated-dark-cyan font-bold text-sm rounded p-2 mr-4 my-2">${value}</button>
                        `
                    , '') : ''
            }
            </div>

        </div>
        `
    }

    insertInCode() {
        const main = document.querySelector('main') as HTMLElement
        main.innerHTML += '\n' + this.createHTML() + '\n'
    }

    affichable(tabTrie: string[]): boolean {
        return tabTrie.length === 0 || tabTrie.every(item => {
            return [this.role, this.level].concat(this.languages, this.tools).indexOf(item) !== -1
        })
    }

}

const allProfil = allData.map(profil => new Profil(
    profil.id, profil.company, profil.logo, profil.new, profil.featured, profil.position,
    profil.role, profil.level, profil.postedAt, profil.contract, profil.location,
    profil.languages, profil.tools
))

let tabTrie: string[] = []


const updateVue = () => {
    const main = document.querySelector('main') as HTMLElement
    main.innerHTML = ''
    allProfil.forEach(profil => {
        if (profil.affichable(tabTrie)) profil.insertInCode()
    })
    const allButtonsTrie = document.querySelectorAll('.all-buttons-trie button') as NodeListOf<HTMLButtonElement>
    allButtonsTrie.forEach(btnTrie => {
        if (tabTrie.indexOf(btnTrie.innerText) === -1) {
            btnTrie.style.background = "hsl(180, 31%, 95%)"
            btnTrie.style.color = "hsl(180, 29%, 50%)"
        } else {
            btnTrie.style.background = "hsl(180, 29%, 50%)"
            btnTrie.style.color = "hsl(180, 31%, 95%)"
        }
    })
    allButtonsTrie.forEach(btnTrie => btnTrie.addEventListener('click', () => {
        const valTrie = btnTrie.innerText
        if (tabTrie.indexOf(valTrie) === -1) tabTrie.push(valTrie)
        else tabTrie = tabTrie.filter(item => item !== valTrie)
        console.log(tabTrie)
        updateVue()
    }))
}

updateVue()
