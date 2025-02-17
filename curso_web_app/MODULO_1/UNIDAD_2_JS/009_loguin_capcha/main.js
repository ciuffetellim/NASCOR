/// Login captcha con 3 intentos
const numCorrecto = 5 + 9;
let intento = 3;
function recursiva() {
    let numUsuario = parseInt(prompt('Comprobemos que eres humano ¿Cuánto es 9 + 5?'));
    intento--;
    if (intento < 1) {
        alert('Has superado los 3 intentos vas a la poli');
        window.location.href = "https://mossos.gencat.cat/ca/inici";
    }
    if (numUsuario === numCorrecto) {
        document.write('Resutlado correcto! Bienvenido! Resultado: <br>' + numUsuario);
        return;
    } else if (isNaN(numUsuario)) {
        // Si no es un número lo introducido
        alert('Debes introducir un número');
        recursiva()
    } else {
        alert(`Introduce el resultado correcto. Tu número ${numUsuario} no es correcto`);
        recursiva();
    }
}    
// Llamamos a la funcion principal
recursiva();
