window.addEventListener("load", function(){

    let productosTop = document.querySelector(".productostop")

    let url = "https://dummyjson.com/products"

    fetch(url)
    .then(function (res) {
        return res.json();
    })
    
    .then(function (data){
        let resultados = data.products
        console.log(resultados)

        for (let i = 0; i < resultados.length; i++) {
            let p = resultados[i];
            productosTop.innerHTML += ` <article>
                <img src="${p.thumbnail}">
                <h3>${p.title}</h3>
                <p>$ ${p.price}</p>
                <p>$ ${p.category}</p>
                <p>${p.description}</p>
            </article>
            `
        }
    })
    .catch(function (error) {
       console.log("Error: " + error);
    });
})