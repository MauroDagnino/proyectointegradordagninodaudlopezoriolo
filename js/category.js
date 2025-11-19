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

let category2 = this.document.querySelector(".listalado")
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

    category2.innerHTML = cate
})
.catch(function (error) {
    console.log("Error: " + error);
})



let queryString = location.search;
let query = new URLSearchParams(queryString);
let category3 = query.get("cat");
let product = document.querySelector(".productostop");

product.innerHTML = ""

let URL = `https://dummyjson.com/products/category/${category3}`;

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
                <article class="productostop1">
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