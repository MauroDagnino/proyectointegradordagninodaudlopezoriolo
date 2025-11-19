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
            productosTop.innerHTML +=  `<article class="productostop1">
                <img src="${p.thumbnail}">
                <h3>${p.title}</h3>
                <p>$ ${p.price}</p>
                <p>${p.category}</p>
                <p>- ${p.description}</p>
                <a class="vermas" href="./productos.html?id=${p.id}">Ver +</a>
            </article>`
        }
    })
    .catch(function (error) {
       console.log("Error: " + error);
    });
})