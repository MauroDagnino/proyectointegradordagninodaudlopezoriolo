window.addEventListener("load", function(){

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



let form = document.querySelector(".login2");
let email = document.querySelector("#email");
let contraseña = document.querySelector("#contraseña");

form.addEventListener("submit", function (event){
    event.preventDefault();


    if (email.value == "") {
        alert("el campo del email se encuentra vacio");
    }
    else if (contraseña.value == "") {
        alert("el campo de la contraseña se encuentra vacio");
    }
    else if (contraseña.value.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
    }
    else {
        localStorage.setItem("user", email.value)
        console.log(localStorage);
        let recupero = localStorage.getItem("user")
        console.log('Email: ', recupero);
        location.href = "./index.html";
    }
    
    
})
})