let form = document.querySelector(".register");

form.addEventListener("load", function(event) {

    let email = document.getElementById("email").value;
    let pass1 = document.getElementById("password1").value;
    let pass2 = document.getElementById("password2").value;
    let terminos = document.getElementById("terminos").checked;

    if (email === "") {
        alert("El email es obligatorio");
        event.preventDefault();
        return;
    }

    if (pass1 === "") {
        alert("La contraseña es obligatoria");
        event.preventDefault();
        return;
    }

    if (pass1.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
        event.preventDefault();
        return;
    }

    if (pass1 !== pass2) {
        alert("Las contraseñas no coinciden");
        event.preventDefault();
        return;
    }

    if (!terminos) {
        alert("Debes aceptar los términos y condiciones");
        event.preventDefault();
        return;
    }

    window.location.href = "login.html";
});
