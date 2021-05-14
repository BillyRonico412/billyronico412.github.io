"use strict";
const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext("2d");
let ratio = innerWidth < innerHeight ? innerWidth : innerHeight;
let rayonOrbiteTerre = ratio / 3;
let rayonSoleil = ratio / 10;
let rayonTerre = ratio / 20;
let rayonLune = ratio / 40;
let rayonOrbiteLune = ratio / 10;
canvas.width = innerWidth;
canvas.height = innerHeight;
window.addEventListener('resize', () => {
    ratio = innerWidth < innerHeight ? innerWidth : innerHeight;
    rayonOrbiteTerre = ratio / 3;
    rayonSoleil = ratio / 10;
    rayonTerre = ratio / 20;
    rayonLune = ratio / 40;
    rayonOrbiteLune = ratio / 10;
    canvas.width = innerWidth;
    canvas.height = innerHeight;
});
function dessin() {
    // Fonction permettant de dessiner nos elements
    let date = new Date();
    console.log(date.getSeconds());
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    // Dessin du soleil
    ctx.beginPath();
    ctx.arc(0, 0, rayonSoleil, 0, 2 * Math.PI);
    ctx.fillStyle = '#F0F000';
    ctx.fill();
    ctx.closePath();
    // Dessin de l'orbite de la terre
    ctx.beginPath();
    ctx.arc(0, 0, rayonOrbiteTerre, 0, 2 * Math.PI);
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = "#FFFFFF";
    ctx.stroke();
    ctx.closePath();
    // Dessin de la terre
    ctx.beginPath();
    ctx.rotate((2 * Math.PI / 60) * date.getSeconds() + (2 * Math.PI / 60000) * date.getMilliseconds() - Math.PI * (1 / 2));
    ctx.arc(rayonOrbiteTerre, 0, rayonTerre, 0, 2 * Math.PI);
    ctx.fillStyle = '#1010FF';
    ctx.fill();
    ctx.closePath();
    // Dessin de la lune
    ctx.translate(rayonOrbiteTerre, 0);
    ctx.beginPath();
    ctx.rotate((2 * Math.PI / 6) * date.getSeconds() + (2 * Math.PI / 6000) * date.getMilliseconds() - Math.PI * (1 / 2));
    ctx.arc(rayonOrbiteLune, 0, rayonLune, 0, 2 * Math.PI);
    ctx.fillStyle = "#888888";
    ctx.fill();
    ctx.closePath();
    ctx.restore();
    requestAnimationFrame(dessin);
}
dessin();
