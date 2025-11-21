let loginCaja = document.querySelector('.login')
let userCaja = document.querySelector('.saludo')
let logoutButton = document.querySelector(".logout1")


document.addEventListener("click", function (e) {

    logoutButton.addEventListener("click", function (e) {
        localStorage.clear()
        loginCaja.style.display = 'block'
        userCaja.style.display = 'none'
    })
})