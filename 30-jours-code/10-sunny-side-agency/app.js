var burgerButton = document.querySelector('#burger');
var nav = document.querySelector('nav');
var toggleMenu = false;
var breakpointResponsive = 768;
burgerButton.addEventListener('click', function () {
    if (toggleMenu) {
        nav.classList.remove('opacity-100');
        nav.classList.add('opacity-0');
    }
    else {
        nav.classList.remove('opacity-0');
        nav.classList.add('opacity-100');
    }
    toggleMenu = !toggleMenu;
});
