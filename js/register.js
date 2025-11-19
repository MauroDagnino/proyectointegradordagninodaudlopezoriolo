window.addEventListener("load", function () {

    let formulario = document.querySelector(".register");
    let gmail = document.querySelector("#email");
    let contra1 = document.querySelector("#contraseña");
    let contra2 = document.querySelector("#contraseña1");
    let terminos = document.querySelector("#terminos");

    let casillaVacia = "Esta casilla esta vacia";
    let casillaCorta = "Esta casilla debe tener al menos 6 caracteres";
    let casillaIgual = "Las contraseñas no coinciden";

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); 

        if (gmail.value == "") {
            alert(casillaVacia);
            return;
        }

        if (contra1.value == "") {
            alert(casillaVacia);
            return;
        }

        if (contra1.value.length < 6) {
            alert(casillaCorta);
            return;
        }

        if (contra1.value != contra2.value) {
            alert(casillaIgual);
            return;
        }

        if (!terminos.checked) {
            alert("Tenés que aceptar los términos y condiciones");
            return;
        }

        this.submit(); 
    });
});
