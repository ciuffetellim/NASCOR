// Función para calcular la media de un array de notas
function calcularMedia(notas) {
    let suma = notas.reduce((acc, nota) => acc + nota, 0);
    return (suma / notas.length).toFixed(2); // Redondear a 2 decimales
}

// Función para determinar la calificación final según la media
function obtenerCalificacion(media) {
    if (media < 5) return "Suspenso";
    if (media >= 5 && media < 6) return "Suficiente";
    if (media >= 6 && media < 7) return "Bien";
    if (media >= 7 && media < 8) return "Notable";
    return "Sobresaliente"; // Para calificaciones de 8 a 10
}

// Solicitar el nombre del alumno
let nombre = prompt("Introduce el nombre del alumno:");
// Solicitar el Apellidos del alumno
let apellidos = prompt("Introduce los apellidos del alumno:");

// Solicitar las 5 notas y almacenarlas en un array
let notas = [];
for (let i = 0; i < 5; i++) {
    let nota = parseFloat(prompt(`Introduce la nota ${i + 1}:`));
    while (isNaN(nota) || nota < 0 || nota > 10) {
        nota = parseFloat(prompt(`Nota no válida. Introduce la nota ${i + 1} nuevamente:`));
    }
    notas.push(nota);
}

// Calcular la media
let media = calcularMedia(notas);

// Obtener la calificación final
let calificacion = obtenerCalificacion(media);

// Mostrar resultados
document.write(`<h2>Resultados del Alumno</h2>`);
document.write(`<p><strong>Nombre:</strong> ${nombre}</p>`);
document.write(`<p><strong>Apellidos:</strong> ${apellidos}</p>`);
document.write(`<p><strong>Notas:</strong> ${notas.join(", ")}</p>`);
document.write(`<p><strong>Media:</strong> ${media}</p>`);
document.write(`<p><strong>Calificación Final:</strong> ${calificacion}</p>`);

