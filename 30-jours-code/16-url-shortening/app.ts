// Gestion de burger et navigation

const burger = document.querySelector('#btn-burger') as HTMLButtonElement
const navigation = document.querySelector('#navigation') as HTMLDivElement

enum EtatBurger { OUVERT, FERME }
let etatBurger = EtatBurger.FERME

burger.addEventListener('click', () => {
    if (etatBurger === EtatBurger.FERME) {
        etatBurger = EtatBurger.OUVERT
        navigation.classList.remove('hidden')
    } else {
        etatBurger = EtatBurger.FERME
        navigation.classList.add('hidden')
    }
})

// Appel à notre API

const inputShortenLink = document.querySelector('#input-shorten-link') as HTMLInputElement
const btnShortenLink = document.querySelector('#btn-shorten-link') as HTMLButtonElement

const noLoader = document.querySelector('.no-loader') as HTMLDivElement
const loaders = document.querySelectorAll('.loader') as NodeListOf<HTMLDivElement>

const contentResult = document.querySelector('.content-result') as HTMLDivElement
const result = document.querySelector('.result') as HTMLElement

const btnCopy = document.querySelector('#btn-copy') as HTMLButtonElement

const testRegexLink = (link: string) => {
    return /^((http|https):\/\/)?([a-z]+\.)?[a-zA-Z0-9\-]+\.[a-z]{2,}[a-zA-Z0-9\/\-\?\&\=\+\_\%\.\#]*$/.test(link)
}

inputShortenLink.addEventListener('input', () => {
    inputShortenLink.classList.remove('border-color-alert')
})

inputShortenLink.addEventListener('keyup', event => {
    if (event.key === 'Enter') btnShortenLink.click()
    console.log(event.key)
})

btnShortenLink.addEventListener('click', () => {

    const link = inputShortenLink.value

    if (testRegexLink(link)) {

        btnShortenLink.disabled = true
        inputShortenLink.disabled = true
        noLoader.style.visibility = 'hidden'
        loaders.forEach(loader => loader.style.visibility = 'visible')

        fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)

            .then(reponse => reponse.json())
            .then(data => {

                const shortLink = data.result.full_short_link as string

                contentResult.style.visibility = 'visible'
                result.innerText = shortLink

                noLoader.style.visibility = 'visible'
                loaders.forEach(loader => loader.style.visibility = 'hidden')
                inputShortenLink.disabled = false
                btnShortenLink.disabled = false
                btnCopy.innerText = 'Copy'
                btnCopy.style.background = 'hsl(180, 66%, 49%)'

            }).catch(() => {
                contentResult.style.visibility = 'visible'
                result.innerText = 'Error Link'
                noLoader.style.visibility = 'visible'
                loaders.forEach(loader => loader.style.visibility = 'hidden')
                inputShortenLink.disabled = false
                btnShortenLink.disabled = false
                btnCopy.innerText = 'Copy'
                btnCopy.style.background = 'hsl(180, 66%, 49%)'
            })
    }
    else inputShortenLink.classList.add('border-color-alert')
})

const copyToClipboard = (str: string) => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

btnCopy.addEventListener('click', () => {
    copyToClipboard(result.innerText)
    btnCopy.innerText = 'Copied'
    btnCopy.style.background = 'hsl(257, 27%, 26%)'
    setInterval(() => {
        btnCopy.innerText = 'Copy'
        btnCopy.style.background = 'hsl(180, 66%, 49%)'
    }, 2000)
})