const burgerButton = document.querySelector('#burger') as HTMLImageElement
const nav = document.querySelector('nav') as HTMLDivElement
let toggleMenu = false 
const breakpointResponsive = 768

burgerButton.addEventListener('click', () => {
    if (toggleMenu) {
        nav.classList.remove('opacity-100')
        nav.classList.add('opacity-0')
    } else {
        nav.classList.remove('opacity-0')
        nav.classList.add('opacity-100')
    }
    toggleMenu = !toggleMenu
})
