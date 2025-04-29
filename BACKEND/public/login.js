// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {

    // Asigna el evento al botón de mostrar contraseña
    const eyeIcon = document.querySelector('.mostrarContraseña');
    if (eyeIcon) {
        eyeIcon.addEventListener('click', mostrarContraseña);
    }

    // Manejo del formulario
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const username = document.getElementById('usuario').value;
            const password = document.getElementById('contra').value;
            const errorMessage = document.getElementById('error-message');
            
            errorMessage.textContent = '';
            errorMessage.style.display = 'none';
            
            try {
                const response = await fetch('/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ 
                        username: username, 
                        password: password 
                    })
                });
                
                const data = await response.json();
                
                if (data.success) {
                    window.location.href = '/principal';
                } else {
                    errorMessage.textContent = data.message || 'Usuario o contraseña incorrectos';
                    errorMessage.style.display = 'block';
                }
            } catch (error) {
                console.error('Error:', error);
                errorMessage.textContent = 'Error al conectar con el servidor';
                errorMessage.style.display = 'block';
            }
        });
    }
});


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