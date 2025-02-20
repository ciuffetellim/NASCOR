document.addEventListener('DOMContentLoaded', calcularEdad);
        
        function calcularEdad() {
            let inputFecha = prompt("Introduce tu fecha de nacimiento (YYYY-MM-DD):");
            let mensajeEdad = document.getElementById('edad');
            
            if (!inputFecha) {
                mensajeEdad.textContent = "Por favor, introduce una fecha válida.";
                return;
            }
            
            let fechaNacimiento = new Date(inputFecha);
            if (isNaN(fechaNacimiento.getTime())) {
                mensajeEdad.textContent = "Fecha no válida. Introduce en formato YYYY-MM-DD.";
                return;
            }
            
            let hoy = new Date();
            let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
            let mes = hoy.getMonth() - fechaNacimiento.getMonth();
            let dia = hoy.getDate() - fechaNacimiento.getDate();
            
            if (mes < 0 || (mes === 0 && dia < 0)) {
                edad--;
            }
            
            let categoria;
            if (edad < 15) {
                categoria = "Menor";
            } else if (edad >= 15 && edad < 18) {
                categoria = "Adolescente";
            } else if (edad > 21 && edad < 40) {
                categoria = "Adulto";
            } else if (edad >= 40 && edad <= 59) {
                categoria = "Adulto Contemporáneo";
            } else if (edad > 60) {
                categoria = "Adulto Mayor";
            } else {
                categoria = "Joven Adulto";
            }
            
            mensajeEdad.textContent = "Tu edad es: " + edad + " años. Categoría: " + categoria;
        }