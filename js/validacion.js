$(document).ready(function() {
  function validateEmail() {
      var email = $("#email").val();
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
      if (!validateEmail() || !validatePassword()) {
          alert("Email o contraseña inválido.");
      } else {
          console.log("Formulario enviado correctamente.");
          alert("Formulario enviado correctamente.");
          window.location.href = "inicio.html";
      }
  });

  function validateForm() {
      var isValid = true;

      if ($("#name").val().trim() === "") {
          $("#name").addClass("invalid");
          isValid = false;
      } else {
          $("#name").removeClass("invalid");
      }

      var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test($("#email").val())) {
          $("#email").addClass("invalid");
          isValid = false;
      } else {
          $("#email").removeClass("invalid");
      }

      if ($("#message").val().trim() === "") {
          $("#message").addClass("invalid");
          isValid = false;
      } else {
          $("#message").removeClass("invalid");
      }

      return isValid;
  }

  $(".contact-form").on("submit", function(e) {
      if (!validateForm()) {
          e.preventDefault();
          alert("Por favor, corrige los errores en el formulario.");
      } else {
          console.log("Formulario de contacto enviado correctamente.");
          alert("Formulario de contacto enviado correctamente.");
      }
  });
});