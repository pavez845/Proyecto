$(document).ready(function() {
    function validateEmail() {
        var email = $("#email").val();
        console.log("Email ingresado: " + email);
        var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailRegex.test(email)) {
            $("#emailError").text("El correo electrónico debe tener un punto y una arroba.").show();
            return false;
        } else {
            $("#emailError").hide();
            return true; 
        }
    }
  
    function validatePassword() {
        var password = $("#password").val();
        console.log("Contraseña ingresada: " + password);
        if (password.length <= 6) {
            $("#passwordError").text("La contraseña debe tener más de 6 caracteres.").show();
            return false;
        } else {
            $("#passwordError").hide();
            return true;
        }
    }
  
    $("#formulario").on("submit", function(e) {
        e.preventDefault(); 
        console.log("Validando formulario...");
        if (!validateEmail() || !validatePassword()) {
            alert("Email o contraseña inválido.");
        } else {
            console.log("Formulario enviado correctamente.");
            alert("Formulario enviado correctamente.");
            window.location.href = "pagina.html";
        }
    });
  });