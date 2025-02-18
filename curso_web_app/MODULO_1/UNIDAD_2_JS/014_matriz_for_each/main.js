// Declaramos la matriz
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Imprimir los números 3 y 5
document.write("imprimir los números 3 y 5:<br>");
document.write(matriz[0][2]);
        document.write('<br>');
        document.write(matriz[1][1]);
        document.write('<hr>');
        // Imprimir en columnas y filas
        function escribe(valor, indice, array){
            // Más en modo columna. Sub array a string y sustituir las comas por pips con espacios
            valor = valor.toString().replaceAll(',', ' | ')
            document.write('<h3>' + valor + '<h3>');
        }
        matriz.forEach(escribe);

        document.write('<hr>');
        // Modificar e imprimir 
        function modifica(valor, indice, array){
            valor.forEach(function(value, i){
                if (value%3==0){          
                    matriz[indice][i] = "m";
                }
            })
            document.write(valor + '<br>');
        }
        matriz.forEach(modifica);
