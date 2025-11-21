window.addEventListener("load", function(){

let formulario = document.querySelector(".buscador2");
let input = document.querySelector("#barra")
let parrafo = document.querySelector(".logout1");
let parrafo2 = this.document.querySelector(".logout2");
parrafo2.style.display = "none";
parrafo.style.display = "none";

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

})

let tituloResultados = document.querySelector(".pAleatorios h1");
let contenedorProductos = document.querySelector(".productosSearch");
let qSearch = new URLSearchParams(location.search)
let termino = qSearch.get('search');

    

fetch(`https://dummyjson.com/products/search?q=${termino}`)
   .then(function(res){
      return res.json()
   })

.then(function(losProductos){
    console.log("Resultados de búsqueda:", losProductos)

    let nuevoTitulo = `${termino}`;
    tituloResultados.innerText += " " + `${nuevoTitulo}`;

    let lista = losProductos.products;
    contenedorProductos.innerHTML = ``

    if (lista.length > 0) {
       
        for (let i = 0; i < lista.length; i++) {

            let p = lista[i];

            let producto = `<article class="productostop1">
                <img class="fotoP" src="${p.thumbnail}">
                <h3>${p.title}</h3>
                <p>$ ${p.price}</p>
                <p>- ${p.description}</p>
                <a id="vermas" href="./productos.html?id=${p.id}">Ver +</a>
            </article>`
            
            contenedorProductos.innerHTML += producto
        }
    } else {
        contenedorProductos.innerHTML = `<h1>No se encuentran resultados para: ${termino}</h1>`
        }
})