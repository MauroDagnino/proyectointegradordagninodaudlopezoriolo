let data = localStorage.getItem('user')
let barra = document.querySelector('.login')
if(barra ) {
    barra.innerHTML = `<p>Bienvenido: ${data}</p>
            <a id="logout" href="#">logout</a>`
}
else{
    alert("no se guardaron bien los datos")
    barra.innerHTML = `<a href="./login.html">Login</a>
            <a href="./register.html">Registrarse</a>`
}
barra.style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
barra.style.color = "#f01a61"
barra.style.fontWeight = "bold"
barra.style.fontSize = "18px"