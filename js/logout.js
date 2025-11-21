document.addEventListener("click", function (e) {
    let barra = document.querySelector(".barra")
    let mensaje = document.querySelector(".mensaje")
    let logout = document.querySelector("#logout")
    let saludo = document.querySelector(".saludo")

    if (logout) {
        logout.addEventListener("click", function (e) {
            e.preventDefault()
            localStorage.clear()

            if (saludo) {
                saludo.innerText = ""
            }
            if (mensaje) {
                mensaje.innerText = ""
            }
            if (barra) {
                barra.innerHTML = `<div class="login">
                <a href="./login.html">Login</a>
                <a href="./register.html">Registrarse</a>
                </div>`
            }

            window.location.href = "./index.html"
        })
    }
})