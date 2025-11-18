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




    let productosTop = document.querySelector(".productostop")

    let url = "https://dummyjson.com/products"

    fetch(url)
    .then(function (res) {
        return res.json();
    })
    
    .then(function (data){
        let resultados = data.products
        console.log(resultados)

        productosTop.innerHTML = "";
        for (let i = 0; i < resultados.length; i++) {
            let p = resultados[i];
            productosTop.innerHTML += ` <article class="productostop1">
                <img src="${p.thumbnail}">
                <h3>${p.title}</h3>
                <p>$ ${p.price}</p>
                <p>${p.category}</p>
                <p>- ${p.description}</p>
                <a class="vermas" href="./productos.html?id=${p.id}">Ver +</a>
            </article>
            `
        }
    })
    .catch(function (error) {
       console.log("Error: " + error);
    });
})