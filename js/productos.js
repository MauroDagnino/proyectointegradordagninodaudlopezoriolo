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
  }) 

let queryString = location.search
let queryStringID = new URLSearchParams (queryString);
let qID = queryStringID.get ("id");
let url_product = `https://dummyjson.com/products/${qID}`
let nombre = document.querySelector(".huevo2")
let marca = document.querySelector(".huevo3")
let descripcion = document.querySelector(".huevo4")
let precio = document.querySelector(".huevo5")
let  categorias = document.querySelector(".huevo8")
let stock = document.querySelector(".huevo9")
let img = document.querySelector(".fotohuevo")
let tags = document.querySelector(".huevo10")
let review = document.querySelector(".reviews")
let rating = document.querySelector(".raiting")
let comentario = document.querySelector(".comentario")
let fecha = document.querySelector(".fecha1")
let nombreusuario = document.querySelector(".usuario")

fetch(url_product)
    .then(function(response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        console.log(data.category)
        let categorias2 = data.category
        for (let i = 0; i < 1; i ++){
            const element = categorias2[i];
            link += `<a href="category.html?category=${data.category}">categoria: ${data.category}</a>`
        }
        let reseñas = data.reviews

        let texto = "";

        for (let i = 0; i < 3; i++) {
            const element = reseñas [i];
            texto += `<div class="review">
            <p class="raiting">${element.rating}</p>
            <p class="comentario">${element.comment}
            <p class="fecha1">${element.data}</p>
            <p class="huevo2">${element.reviewerName}</p>
            <p class="emailUsu">${element.reviewerEmail}</p>
            </div>`
        }
        nombre.innerText = data.title;
        marca.innerText = `Marca: ${data.brand}`;
        descripcion.innerText = data.descripcion;
        precio.innerText = `Precio: ${data.price}`;
        categorias.innerHTML = link
        stock.innerText = `Stock: ${data.stock}`
        img.src = data.images[0];
        tags.innerText = `Tags: ${data.tags}`;
        review.innerText =`<h3> Opiniones de usuario <h3> ${texto}`;
     })
    .catch(function(error) {
        console.log ("error" + error);
        })
 