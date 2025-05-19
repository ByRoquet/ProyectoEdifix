document.addEventListener('DOMContentLoaded', function() {

    // CAMBIO DE SECCIÓN
    const botones = document.querySelectorAll('.boton[data-section]'); 
    const secciones = document.querySelectorAll('.seccion');

    if (botones.length > 0 && secciones.length > 0) {
        botones.forEach(boton => {
            boton.addEventListener('click', () => {
                botones.forEach(b => b.classList.remove('activo'));
                boton.classList.add('activo');
        
                const seccionId = boton.getAttribute('data-section');
                secciones.forEach(sec => sec.classList.remove('activo'));
        
                const activa = document.getElementById(seccionId);
                if (activa) activa.classList.add('activo');
            });
        });
    }

    // GUARDAR BORRADOR
    const btnGuardarBorrador = document.getElementById('btnGuardarBorrador');
    const guardarBorrador = document.getElementById('guardarBorrador');
    const btnConfirmarGuardado = document.getElementById('btnConfirmarGuardado');
    const btnCancelarGuardado = document.getElementById('btnCancelarGuardado');

    if (btnGuardarBorrador && guardarBorrador) {
        btnGuardarBorrador.addEventListener('click', () => {
            guardarBorrador.style.display = 'flex';
        });
    }

    if (btnCancelarGuardado && guardarBorrador) {
        btnCancelarGuardado.addEventListener('click', () => {
            guardarBorrador.style.display = 'none';
        });
    }

    if (btnConfirmarGuardado) {
        btnConfirmarGuardado.addEventListener('click', () => {
            const formulario = document.querySelector('.formulario');
            if (formulario) formulario.submit();
        });
    }

    // ENVIAR REPORTE
    const btnEnviar = document.getElementById('btnEnviarReporte');
    const enviarReporte = document.getElementById('enviarReporte');
    const btnConfirmarEnvio = document.getElementById('btnConfirmarEnvio');
    const btnCancelarEnvio = document.getElementById('btnCancelarEnvio');

    if (btnEnviar && enviarReporte) {
        btnEnviar.addEventListener('click', () => {
            enviarReporte.style.display = 'flex';
        });
    }

    if (btnCancelarEnvio && enviarReporte) {
        btnCancelarEnvio.addEventListener('click', () => {
            enviarReporte.style.display = 'none';
        });
    }

    if (btnConfirmarEnvio) {
        btnConfirmarEnvio.addEventListener('click', () => {
            const formulario = document.querySelector('.formulario');
            if (formulario) formulario.submit();
        });
    }

    // IMPRIMIR REPORTE
    const btnImprimir = document.getElementById('btnImprimirReporte');

    btnImprimir.addEventListener('click', () => {
        window.print();
    });

    // CERRAR SESIÓN
    const btnCerrar = document.getElementById('btnCerrarSesion');
    const cerrarSesion = document.getElementById('cerrarSesion');
    const btnConfirmarCerrar = document.getElementById('btnConfirmarCerrar');
    const btnCancelarCerrar = document.getElementById('btnCancelarCerrar');

    if (btnCerrar && cerrarSesion) {
        btnCerrar.addEventListener('click', () => {
            cerrarSesion.style.display = 'flex';
        });
    }

    if (btnConfirmarCerrar) {
        btnConfirmarCerrar.addEventListener('click', () => {
            window.location.href = 'login.html'; 
        });
    }

    if (btnCancelarCerrar && cerrarSesion) {
        btnCancelarCerrar.addEventListener('click', () => {
            cerrarSesion.style.display = 'none';
        });
    }

    // GUARDAR USUARIO
    const btnGuardarUsuario = document.getElementById('btnGuardarUsuario');
    const guardarUsuario = document.getElementById('guardarUsuario');
    const btnConfirmarUsuario = document.getElementById('btnConfirmarUsuario');
    const btnCancelarUsuario = document.getElementById('btnCancelarUsuario');

    if (btnGuardarUsuario && guardarUsuario) {
        btnGuardarUsuario.addEventListener('click', () => {
            guardarUsuario.style.display = 'flex';
        });
    }

    if (btnConfirmarUsuario) {
        btnConfirmarUsuario.addEventListener('click', () => {
            const formulario = document.querySelector('.formularioAgregarUsuarios');
            if (formulario) formulario.submit();
        });
    }

    if (btnCancelarUsuario && guardarUsuario) {
        btnCancelarUsuario.addEventListener('click', () => {
            guardarUsuario.style.display = 'none';  
        });
    }
});

function mostrarContraseña() {
    const inputContrasena = document.getElementById("contrasena");
    const checkbox = document.getElementById("mostrar-contrasena");

    inputContrasena.type = checkbox.checked ? "text" : "password";
}