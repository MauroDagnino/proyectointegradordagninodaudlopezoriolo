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

let query = location.search
let queryId = new URLSearchParams (query);
let qId = queryId.get ("id");
let urlProduct = `https://dummyjson.com/products/${qId}`
let nombre = document.querySelector(".huevo2")
let marcas = document.querySelector(".huevo3")
let descripcion = document.querySelector(".huevo4")
let precio = document.querySelector(".huevo5")
let review = document.querySelector(".reviews")
let category = document.querySelector(".huevo8")
let stock = document.querySelector(".huevo9")
let nombreusuario = document.querySelector(".usuario")
let img = document.querySelector(".fotohuevo")
let tags = document.querySelector(".huevo10")



fetch(urlProduct)
    .then(function(res) {
        return res.json()
    })
    .then(function (data) {
        console.log(data)
        console.log(data.category)
        let category2 = data.category
        let link = ""
        for (let i = 0; i < 1; i ++){
            const element = category2[i];
            link += `<a href="category.html?category=${data.category}">categoria: ${data.category}</a>`
        }
        let reseñas = data.reviews

        let texto = "";

        for (let i = 0; i < 3; i++) {
            const element = reseñas[i];
            texto += `<section class="reviews">
                     <div class="review">
                        <p class="rating">${element.rating}</p>
                        <p class="comentario">${element.comment}
                        <p class="fecha1">${element.data}</p>
                        <p class="usuario">${element.reviewerName}</p>
                        <p class="email">${element.reviewerEmail}</p>
                      </div>
                      </section>`
        }
        nombre.innerText = data.title;
        marcas.innerText = `${data.brand}`;
        descripcion.innerText = `${data.description}`;
        precio.innerText = `$${data.price}`;
        category.innerHTML = link
        stock.innerText = `Stock: ${data.stock}`
        img.src = data.images[0];
        tags.innerText = `${data.tags}`;
        review.innerHTML =`${texto}`;
     })
    .catch(function(error) {
        console.log ("error" + error);
        })
 