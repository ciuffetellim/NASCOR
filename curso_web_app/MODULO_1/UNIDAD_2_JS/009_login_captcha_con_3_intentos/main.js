document.getElementById("loginForm").addEventListener("submit", function(event) {
    let captchaInput = document.getElementById("captcha").value;
    
    if (parseInt(captchaInput) !== 14) {
        alert("Respuesta incorrecta. Inténtalo de nuevo.");
        event.preventDefault(); // Evita que se envíe el formulario
    }
});
