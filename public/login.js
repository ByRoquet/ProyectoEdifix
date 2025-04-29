
function mostrarContraseña() {
    const contra = document.getElementById("contra");
    const cambiar = document.querySelector(".mostrarContraseña");

    if (contra.type === "password") {
        contra.type = "text";
        cambiar.src = "/imagenesLogin/ojo.png";
    } else {
        contra.type = "password";
        cambiar.src = "/imagenesLogin/ojoInvisible.png";
    }
}