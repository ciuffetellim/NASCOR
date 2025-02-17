// Función para calcular la media
function calcularMedia(notas) {
    let suma = notas.reduce((acc, nota) => acc + nota, 0);
    return (suma / notas.length).toFixed(2); // Poner 2 decimales
}

// determinar la calificación final con la media
function obtenerCalificacion(media) {
    if (media < 5) return "Suspenso"; //suspendido
    if (media >= 5 && media < 6) return "Suficiente"; //Suficiente
    if (media >= 6 && media < 7) return "Bien"; //Bien
    if (media >= 7 && media < 8) return "Notable"; //Notable
    return "Sobresaliente"; // Sobresaliente
}

// Solicitar el nombre del alumno
let nombre = prompt("Introduce el nombre del alumno:");
// Solicitar el Apellidos del alumno
let apellidos = prompt("Introduce los apellidos del alumno:");

// Solicitar las 5 notas y almacenarlas
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
document.write(`<h2>Resultados Notas final Alumno</h2>`);
document.write(`<p><strong>Nombre:</strong> ${nombre}</p>`);
document.write(`<p><strong>Apellidos:</strong> ${apellidos}</p>`);
document.write(`<p><strong>Calificación Final:</strong> ${calificacion}</p>`);
//mostrar resultados detallado
document.write(`<h2>Resultados notas detalladas del Alumno</h2>`);
notas.forEach((nota, index) => {
    document.write(`<p><strong>Nota ${index + 1}:</strong> ${nota}</p>`);
});
document.write(`<p><strong>Media:</strong> ${media}</p>`);
document.write(`<p><strong>Calificación Final:</strong> ${calificacion}</p>`);

