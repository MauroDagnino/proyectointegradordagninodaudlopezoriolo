let user = localStorage.getItem('user')
let loginContainer = document.querySelector('.login')
let userContainer = document.querySelector('.saludo')
let usernameP = document.querySelector(".username");

if(user !== null) {
    loginContainer.style.display = 'none'
    userContainer.style.display = 'block'
    usernameP.innerText = `Bienvenido: ${user}`
}
usernameP.style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
usernameP.style.color = "#f01a61"
usernameP.style.fontWeight = "bold"
usernameP.style.fontSize = "18px"

userContainer.style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
userContainer.style.color = "#f01a61"
userContainer.style.fontWeight = "bold"
userContainer.style.fontSize = "18px"