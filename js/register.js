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


let category = this.document.querySelector(".listalado")
let urlCategory = 'https://dummyjson.com/products/category-list'

fetch(urlCategory)
.then(function(res){
    return res.json()
})

.then(function(data){
    console.log(data)
    let cate = ""

    for (let i = 0; i < data.length; i++) {
        let categoria = data[i];
        console.log(categoria);
        cate += ` <li><a href="./category.html?cat=${categoria}">${categoria}</a></li>
        `
    }

    category.innerHTML = cate
})
.catch(function (error) {
    console.log("Error: " + error);
})





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

})