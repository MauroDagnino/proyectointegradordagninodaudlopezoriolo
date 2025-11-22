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
let cateto = new URLSearchParams(queryString);
let category3 = cateto.get("cat");
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
            let p = listaProductos[i];

            product.innerHTML += `
                <article class="productostop1">
                    <img src="${p.thumbnail}">
                    <h3>${p.title}</h3>
                    <p>$${p.price}</p>
                    <p>- ${p.description}</p>
                    <a class="vermas" href="./productos.html?id=${p.id}">Ver +</a>
            `;
        }
    })
    .catch(function (error) {
        console.log(error);
    });

})