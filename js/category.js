window.addEventListener("load", function () {

    let formulario = document.querySelector(".buscador2");
    let input = document.querySelector("#barra")

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        let buscador = input.value.length;

        if (buscador == 0) {
            alert("el campo de busqueda está vacio")
        } else if (buscador <= 3) {
            alert("el campo debe tener al menos tres caracteres")
        } else {
            formulario.submit()
        }
    })

    let category = this.document.querySelector(".listalado")
    let urlCategory = 'https://dummyjson.com/products/category-list'

    fetch(urlCategory)
        .then(function (res) {
            return res.json()
        })

        .then(function (data) {
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


    let quearySearch = new URLSearchParams(location.search);
    let productoElegido = quearySearch.get("id");
    let descripcionProducto = document.querySelector(".descripcion_producto");
    let seccion_comentarios = document.querySelector(".seccion_comentarios");

    console.log(productoElegido);

    fetch(`https://dummyjson.com/products/${productoElegido}`)
        .then(function (respuesta) {
            console.log(respuesta);
            return respuesta.json();
        })
        .then(function (data) {

            let comentario = '';


            

                let titulo = document.querySelector(".huevo2");
                let marca = document.querySelector(".huevo3");
                let imagen = document.querySelector(".fotohuevo");
                let descripcion = document.querySelector(".huevo4");
                let precio = document.querySelector(".huevo5");
                let catTexto = document.querySelector(".categoria");
                let stockTexto = document.querySelector(".stock");
                let codigoTexto = document.querySelector(".codigo");


                titulo.innerText = listadoProductos[i].title;

                marca.innerText = listadoProductos[i].category;
                imagen.src = listadoProductos[i].images[0];
                imagen.alt = "imagen de " + listadoProductos[i].title;
                descripcion.innerText = listadoProductos[i].description;
                precio.innerText = "$ " + listadoProductos[i].price;
                catTexto.innerText = "Categoria: " + listadoProductos[i].category;
                stockTexto.innerText = "Stock: " + listadoProductos[i].stock;
                codigoTexto.innerText = "# " + listadoProductos[i].id;


                let productoTags = listadoProductos[i].tags;
                console.log(productoTags);

                let todosLosTags = document.querySelector(".tags");
                let tagsHTML = "";

                if (productoTags.length == 1) {
                    tagsHTML = `<li class="tagIndividual">${productoTags[0]}</li>`;
                }
                else if (productoTags.length == 2) {
                    tagsHTML = `<li class="tagIndividual">${productoTags[0]}</li>
                                            <li class="tagIndividual">-${productoTags[1]}</li>`;
                }
                else {
                    tagsHTML = `<li class="tagIndividual">${productoTags[0]}</li>
                                            <li class="tagIndividual">-${productoTags[1]}</li>
                                            <li class="tagIndividual">-${productoTags[2]}</li>`;
                }

                todosLosTags.innerHTML = tagsHTML;


                for (let r = 0; r < review.length; r++) {
                    let rating = review[r].rating;
                    let comentarioReview = review[r].comment;
                    let fecha = review[r].date;
                    let nombre = review[r].reviewerName;

                    if (rating == 1) {
                        comentario += `
                                        <article class="comentarios">
                                            <h3 class="nobre_fecha">${nombre}</h3>
                                            <h3 class="fecha">${fecha}</h3>
                                            <h4 class="puntuacion">
                                                <p>⭐</p>1/5
                                            </h4>
                                            <p>${comentarioReview}</p>
                                        </article>
                                    `;

                    }
                    else if (rating == 2) {
                        comentario += `
                                        <article class="comentarios">
                                            <h3 class="nobre_fecha">${nombre}</h3>
                                            <h3 class="fecha">${fecha}</h3>
                                            <h4 class="puntuacion">
                                                <p>⭐⭐</p>2/5
                                            </h4>
                                            <p>${comentarioReview}</p>
                                        </article>
                                    `;
                    }
                    else if (rating == 3) {
                        comentario += `
                                        <article class="comentarios">
                                            <h3 class="nobre_fecha">${nombre}</h3>
                                            <h3 class="fecha">${fecha}</h3>
                                            <h4 class="puntuacion">
                                                <p>⭐⭐⭐</p>3/5
                                            </h4>
                                            <p>${comentarioReview}</p>
                                        </article>
                                    `;
                    }
                    else if (rating == 4) {
                        comentario += `
                                        <article class="comentarios">
                                            <h3 class="nobre_fecha">${nombre}</h3>
                                            <h3 class="fecha">${fecha}</h3>
                                            <h4 class="puntuacion">
                                                <p>⭐⭐⭐⭐</p>4/5
                                            </h4>
                                            <p>${comentarioReview}</p>
                                        </article>
                                    `;
                    }
                    else {
                        comentario += `
                                        <article class="comentarios">
                                            <h3 class="nobre_fecha">${nombre}</h3>
                                            <h3 class="fecha">${fecha}</h3>
                                            <h4 class="puntuacion">
                                                <p>⭐⭐⭐⭐⭐</p>
                                                5/5
                                            </h4>
                                            <p>${comentarioReview}</p>
                                        </article>
                                    `;
                    }
                }



                seccion_comentarios.innerHTML = comentario;
            })
        });