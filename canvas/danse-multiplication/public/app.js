"use strict";
// Fonction utilitaire
const colorAleatoire = () => Math.floor(Math.random() * 255);
// Section config
const inputNbrePoint = document.getElementById('rangeNbrePoint');
const inputNbreTable = document.getElementById('rangeNbreTable');
const inputVitesse = document.getElementById('rangeVitesse');
const inputEpaisseur = document.getElementById('rangeEpaisseur');
const btnAfficher = document.getElementById('btn-afficher');
const btnValider = document.getElementById('btn-valider');
const btnPlay = document.getElementById('btn-play');
const btnPause = document.getElementById('btn-pause');
const btnReset = document.getElementById('btn-reset');
document.getElementById('valNbrePoint').innerText = inputNbrePoint.value;
inputNbrePoint.oninput = () => document.getElementById('valNbrePoint').innerText = inputNbrePoint.value;
document.getElementById('valVitesse').innerText = `${[0.001, 0.01, 0.1, 1, 10, 100][parseInt(inputVitesse.value)]}`;
inputVitesse.onchange = () => document.getElementById('valVitesse').innerText = `${[0.001, 0.01, 0.1, 1, 10, 100][parseInt(inputVitesse.value)]}`;
document.getElementById('valEpaisseur').innerText = `${parseInt(inputEpaisseur.value) * 0.1}`;
inputEpaisseur.onchange = () => document.getElementById('valEpaisseur').innerText = `${parseInt(inputEpaisseur.value) * 0.1}`;
btnValider.onclick = initValue;
btnReset.onclick = initValue;
btnPlay.onclick = () => film = true;
btnPause.onclick = () => film = false;
function initValue() {
    nbrePoint = parseInt(inputNbrePoint.value);
    nbreTable = parseInt(inputNbreTable.value);
    vitesse = [0.001, 0.01, 0.1, 1, 10, 100][parseInt(inputVitesse.value)];
    eppaisseur = parseInt(inputEpaisseur.value) * 0.1;
    film = false;
}
// Section canvas
const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext("2d");
let nbrePoint = parseInt(inputNbrePoint.value);
let nbreTable = parseInt(inputNbreTable.value);
let vitesse = [0.001, 0.01, 0.1, 1, 10, 100][parseInt(inputVitesse.value)];
let eppaisseur = parseInt(inputEpaisseur.value) * 0.1;
let film = false;
let heightTableau = innerHeight - 210;
let widthTableau = innerWidth - 25;
let ratio = widthTableau < heightTableau ? widthTableau : heightTableau;
canvas.width = ratio;
canvas.height = ratio;
function dessin() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Sauvegarde de l'état initial
    ctx.save();
    // On se place au milieu de notre canvas
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.lineWidth = eppaisseur;
    // Tracer le cercle
    let rayon = (canvas.width / 2) - 30;
    ctx.arc(0, 0, rayon, 0, Math.PI * 2);
    ctx.stroke();
    // Afficher lignes
    let angle = (Math.PI * 2) / nbrePoint;
    for (let i = 0; i < nbrePoint; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.cos(angle * i - Math.PI / 2) * rayon, Math.sin(angle * i - Math.PI / 2) * rayon);
        ctx.lineTo(Math.cos(angle * ((i * nbreTable) % nbrePoint) - Math.PI / 2) * rayon, Math.sin(angle * ((i * nbreTable) % nbrePoint) - Math.PI / 2) * rayon);
        ctx.stroke();
        ctx.closePath();
    }
    ctx.restore();
    if (film)
        nbreTable += vitesse;
    requestAnimationFrame(dessin);
}
window.addEventListener('resize', () => {
    heightTableau = innerHeight - 160;
    widthTableau = innerWidth - 25;
    ratio = widthTableau < heightTableau ? widthTableau : heightTableau;
    canvas.width = ratio;
    canvas.height = ratio;
});
dessin();
