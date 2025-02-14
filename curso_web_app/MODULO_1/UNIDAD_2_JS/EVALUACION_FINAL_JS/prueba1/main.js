function calcularMedia(notas) {
    let suma = notas.reduce((total, nota) => total + nota, 0);
    return (suma / notas.length).toFixed(2);
}

function obtenerCalificacion(media) {
    if (media < 5) return "Suspenso";
    if (media == 5) return "Suficiente";
    if (media > 5 && media <= 6) return "Bien";
    if (media > 6 && media <= 7) return "Notable";
    if (media > 7 && media <= 8) return "Sobresaliente";
    return "Excelente";
}

document.addEventListener("DOMContentLoaded", function () {
    let nombre = prompt("Introduce el nombre del alumno:");
    let notas = [];
    
    for (let i = 0; i < 5; i++) {
        let nota = parseFloat(prompt(`Introduce la nota ${i + 1}:`));
        while (isNaN(nota) || nota < 0 || nota > 10) {
            nota = parseFloat(prompt(`Nota no válida. Introduce la nota ${i + 1} (entre 0 y 10):`));
        }
        notas.push(nota);
    }

    let media = calcularMedia(notas);
    let calificacion = obtenerCalificacion(parseFloat(media));
    
    document.body.innerHTML = `<h2>Alumno: ${nombre}</h2>`;
    document.body.innerHTML += `<p>Notas: ${notas.join(", ")}</p>`;
    document.body.innerHTML += `<p>Media: ${media}</p>`;
    document.body.innerHTML += `<p>Nota final: ${calificacion}</p>`;
});
