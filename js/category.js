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



let queryString = location.search;
let query = new URLSearchParams(queryString);
let category = query.get("cat");
let product = document.querySelector(".productostop");

product.innerHTML = ""

let URL = `https://dummyjson.com/products/category/${category}`;

fetch(URL)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data);

        let listaProductos = data.products;

        for (let i = 0; i < listaProductos.length; i++) {
            let producto = listaProductos[i];

            product.innerHTML += `
                <article class="articulo_categoria">
                    <img src="${producto.images[0]}" alt="${producto.title}">
                    <h3>${producto.title}</h3>
                    <p>$${producto.price}</p>
                    <p>${producto.description}</p>
                    <a href="./product.html?detalles=${producto.title}">Ver Detalles</a>
                </article>
            `;
        }
    })
    .catch(function (error) {
        console.log(error);
    });

})