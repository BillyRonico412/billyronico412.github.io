"use strict";
const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
function dessin() {
    // Fonction permettant de dessiner nos elements
}
window.addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    dessin();
});
dessin();
