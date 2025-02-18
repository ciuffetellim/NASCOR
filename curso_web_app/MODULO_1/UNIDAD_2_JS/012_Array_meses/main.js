let meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

let numeroIntroducido = parseInt(prompt("Ingresa un número del 1 al 12:"));

let mes;
let numeroReal = numeroIntroducido-1;

mes = meses[numeroReal];
if (!mes) window.location.reload();

alert("el mes correspondiente al Número " + numeroIntroducido + " es " + mes);
console.log("el mes correspondiente al Número " + numeroIntroducido + " es " + mes);


