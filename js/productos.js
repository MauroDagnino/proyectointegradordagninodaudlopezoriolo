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


    let querySearch = new URLSearchParams(location.search);
    let productoElegido = querySearch.get("detalles");

    console.log("Producto elegido:", productoElegido);

    let descripcionProducto = document.querySelector(".descripcion_producto");
    let seccion_comentarios = document.querySelector(".seccion_comentarios");

    fetch("https://dummyjson.com/products/categories")
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (array) {

            let arrayUrl = [];

            for (let i = 0; i < array.length; i++) {
                let url = array[i].url;
                arrayUrl.push(url);
            }

            return arrayUrl;
        })
        .then(function (arrayUrl) {

            for (let u = 0; u < arrayUrl.length; u++) {
                let urlProducto = arrayUrl[u];

                fetch(urlProducto)
                    .then(function (respuesta) {
                        return respuesta.json();
                    })
                    .then(function (objeto) {

                        let listadoProductos = objeto.products;
                        let comentariosHTML = "";

                        for (let i = 0; i < listadoProductos.length; i++) {
                            let producto = listadoProductos[i];

                            if (producto.title == productoElegido) {

                                let productoHTML = `
                                    <article class="article_producto">
                                        <img id="imgProduct" src="${producto.images[0]}" alt="imagen de ${producto.title}">
                                    </article>

                                    <article class="article_producto">
                                        <h3>${producto.title}</h3>

                                        <div class="divProducto">
                                            <p class="precio">
                                                <span class="precio_anterior">$${producto.price + 2}</span>
                                                $${producto.price}
                                            </p>
                                        </div>

                                        <div class="divProducto">
                                            <p class="resumen_producto">${producto.description}</p>
                                        </div>

                                        <div>
                                            <p class="stock">Stock: ${producto.stock} unidades</p>
                                        </div>

                                        <div class="divTags">
                                            <ul class="tags"></ul>
                                        </div>
                                    </article>
                                `;

                                descripcionProducto.innerHTML = productoHTML;

                                let productoTags = producto.tags; 
                                let tagsHTML = "";

                                if (productoTags.length == 1) {
                                    tagsHTML = `<li class="tagIndividual">${productoTags[0]}</li>`;
                                } else if (productoTags.length == 2) {
                                    tagsHTML = `
                                        <li class="tagIndividual">${productoTags[0]}</li>
                                        <li class="tagIndividual">${productoTags[1]}</li>
                                    `;
                                } else {
                                    tagsHTML = `
                                        <li class="tagIndividual">${productoTags[0]}</li>
                                        <li class="tagIndividual">${productoTags[1]}</li>
                                        <li class="tagIndividual">${productoTags[2]}</li>
                                    `;
                                }

                                let listaTags = document.querySelector(".tags");
                                listaTags.innerHTML = tagsHTML;

                                let reviews = producto.reviews;

                                for (let r = 0; r < reviews.length; r++) {
                                    let rating = reviews[r].rating;
                                    let comentario = reviews[r].comment;
                                    let fecha = reviews[r].date;
                                    let nombre = reviews[r].reviewerName;
                                }

                                seccion_comentarios.innerHTML = comentariosHTML;
                            }
                        }
                    })
                    .catch(function (error) {
                        console.error("Error:", error);
                    });
            }
        })
        .catch(function (error) {
            console.error("Error general:", error);
        });

});