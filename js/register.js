window.addEventListener("load", function () {

let formulario = document.querySelector(".buscador2");
let input = document.querySelector("#barra")

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    let buscador = input.value.length;

    if (buscador == 0){
        alert("el campo de busqueda está vacio")
    }else if (buscador <= 3){
        alert("el campo debe tener al menos tres caracteres")
    }else{
        formulario.submit()
    }
})


    let formu = document.querySelector(".register");
    let gmail = document.querySelector("#email");
    let contra1 = document.querySelector("#contraseña");
    let contra2 = document.querySelector("#contraseña1");
    let terminos = document.querySelector("#terminos");

    let casillaVacia = "Esta casilla esta vacia";
    let casillaCorta = "Esta casilla debe tener al menos 6 caracteres";
    let casillaIgual = "Las contraseñas no coinciden";

    formu.addEventListener("submit", function (event) {
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

        window.location.href = "./login.html";
    });
});
