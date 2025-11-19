window.addEventListener("load", function() {
    
    let usuario = localStorage.getItem("usuarioActual");

    // Elementos del header
    let loginLinks = document.querySelector(".login"); 
    let header = document.querySelector("header");

    if (usuario) {
        // Crear mensaje de bienvenida
        let bienvenida = document.createElement("p");
        bienvenida.style.fontSize = "20px";
        bienvenida.style.fontWeight = "bold";
        bienvenida.textContent = "Bienvenido: " + usuario;

        // Crear botón logout
        let logout = document.createElement("a");
        logout.textContent = "Logout";
        logout.href = "#";
        logout.style.marginLeft = "20px";
        logout.style.color = "red";
        logout.style.fontWeight = "bold";

        logout.addEventListener("click", function() {
            localStorage.removeItem("usuarioActual");
            window.location.reload();
        });

        // Insertar en el header
        header.appendChild(bienvenida);
        header.appendChild(logout);

        // Ocultar botones login/register
        if (loginLinks) {
            loginLinks.style.display = "none";
        }
    }
});
