window.addEventListener("load", function(){

let formulario = document.querySelector(".buscador2");
let input = document.querySelector("#barra")

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    let buscador = input.value.length;

    if (input.value.length == 0){
        alert("el campo de busqueda está vacio")
    }else if (input.value.length <= 3){
        alert("el campo debe tener al menos tres caracteres")
    }else{
        formulario.submit()
    }
})



    let email = this.document.querySelector("email")
    let contraseña = this.document.querySelector("contraseña")

    if (email.value == "") {
        this.alert("el campo esta vacio");
     }
    if (contraseña.value == "") {
        this.alert("el campo esta vacio");
     }
    if (contraseña.value < 6) {
        this.alert("La contraseña debe tener al menos 6 caracteres");
     }
})