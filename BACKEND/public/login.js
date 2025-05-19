document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const usuario = document.getElementById("usuario").value;
    const contra = document.getElementById("contra").value;

    const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ usuario, contra }),
    });

    const result = await response.json();

    if (result.success) {
        alert("¡Bienvenido!");
        window.location.href = 'index.html'; // Redirigir a la página principal
    } else {
        alert(result.message);
    }
});

function mostrarContraseña() {
    const contra = document.getElementById("contra");
    const cambiar = document.querySelector(".mostrarContraseña");

    if (contra.type === "password") {
        contra.type = "text";
        cambiar.src = "ojo.png"; // Imagen cuando la contraseña es visible
    } else {
        contra.type = "password";
        cambiar.src = "ojoInvisible.png"; // Imagen cuando la contraseña está oculta
    }
}