let persona = {
    nombre: "Juan", apellido: "Nadie",
    edad: 50,
    ojosColor:
    {
        izquierdo: "Verde",
        derecho: "Azul"
    },
    altura: 1.80
};

for (const x in persona) {
    let dato = `${x}: ${persona[x]}`;
    if (x === "ojosColor") {
        dato = "Color de ojos:"
        if (persona.ojosColor.izquierdo)
            dato += "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Izquierdo: " + persona[x].izquierdo
        if (persona[x].derecho)
            dato += "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Derecho: " + persona[x].derecho
    }
    document.body.innerHTML = `${document.body.innerHTML}${dato}<br>`;
}

// ipmprimir mensaje
let texto = `<hr>Hola ${persona.nombre} ${persona.apellido}, tu edad es de 
${persona.edad} años y mides ${persona.altura} m. 
Eres como David Bowie porque tienes el ojo izquierdo verde y el derecho azul. Bienvenido!!`;
document.body.innerHTML = `${document.body.innerHTML}${texto}<hr>`;

//Modicifamos el valor de persona.ojosColor.izquierdo
persona.ojosColor.izquierdo = "Azul";

// Imprimir mensaje con datos modiciados
let texto2 = `Hola ${persona.nombre} ${persona.apellido}, tu edad es de 
${persona.edad} años y mides ${persona.altura} m. 
Tienes los ojos de color: 
<br>Derecho: ${persona.ojosColor.derecho}
<br>Izquierdo: ${persona.ojosColor.izquierdo}
y mides mides ${persona.altura} m. `;

document.body.innerHTML = `${document.body.innerHTML}${texto2}`;