let num1 = prompt("Ingrese el primer número:");
let num2 = prompt("Ingrese el segundo número:");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if (!isNaN(num1) && !isNaN(num2)) {
    let suma = num1 + num2;
    document.write("La suma de " + num1 + " y " + num2 + " es: " + suma);
} else {
    document.write("Por favor, ingrese valores numéricos válidos.");
}