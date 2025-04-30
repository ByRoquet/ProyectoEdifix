//Botónes de Cambiar Secciones
const botones = document.querySelectorAll('.boton[data-section]'); 
const secciones = document.querySelectorAll('.seccion');

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

//Botón de Guardar Borrador
const btnGuardarBorrador = document.getElementById('btnGuardarBorrador');
const guardarBorrador = document.getElementById('guardarBorrador');
const btnConfirmarGuardado = document.getElementById('btnConfirmarGuardado');
const btnCancelarGuardado = document.getElementById('btnCancelarGuardado');

btnGuardarBorrador.addEventListener('click', () => {
    guardarBorrador.style.display = 'flex';
});

btnCancelarGuardado.addEventListener('click', () => {
    guardarBorrador.style.display = 'none';
});

btnConfirmarGuardado.addEventListener('click', () => {
    document.querySelector('.formulario').submit();
});

// Botón de Enviar
const btnEnviar = document.getElementById('btnEnviarReporte');
const enviarReporte = document.getElementById('enviarReporte');
const btnConfirmarEnvio = document.getElementById('btnConfirmarEnvio');
const btnCancelarEnvio = document.getElementById('btnCancelarEnvio');

btnEnviar.addEventListener('click', () => {
    enviarReporte.style.display = 'flex';
});

btnCancelarEnvio.addEventListener('click', () => {
    enviarReporte.style.display = 'none';
});

btnConfirmarEnvio.addEventListener('click', () => {
    document.querySelector('.formulario').submit();
});

// Botón de Cerrar Sesion
const btnCerrar = document.getElementById('btnCerrarSesion');
const cerrarSesion = document.getElementById('cerrarSesion');
const btnConfirmarCerrar = document.getElementById('btnConfirmarCerrar');
const btnCancelarCerrar = document.getElementById('btnCancelarCerrar');

btnCerrar.addEventListener('click', () => {
    cerrarSesion.style.display = 'flex';
});

btnConfirmarCerrar.addEventListener('click', () => {
    window.location.href = 'login.html';  // Ruta relativa desde principal.html
});

btnCancelarCerrar.addEventListener('click', () => {
    cerrarSesion.style.display = 'none';
});

// Botón de Guardar Usuario
const btnGuardarUsuario = document.getElementById('btnGuardarUsuario');
const guardarUsuario = document.getElementById('guardarUsuario');
const btnConfirmarUsuario = document.getElementById('btnConfirmarUsuario');
const btnCancelarUsuario = document.getElementById('btnCancelarUsuario');

btnGuardarUsuario.addEventListener('click', () => {
    guardarUsuario.style.display = 'flex';
});

btnConfirmarUsuario.addEventListener('click', () => {
    document.querySelector('.formularioAgregarUsuarios').submit();
});

btnCancelarUsuario.addEventListener('click', () => {
    guardarUsuario.style.display = 'none';  
});

//Botón de Imprimir

const btnImprimirReporte = document.getElementById('btnImprimirReporte');
const imprimirReporte = document.getElementById('imprimirReporte');
const btnConfirmarImpresion = document.getElementById('btnConfirmarImpresion');
const btnCancelarImpresion = document.getElementById('btnCancelarImpresion');

btnImprimirReporte.addEventListener('click', () => {
    imprimirReporte.style.display = 'flex';
});

btnCancelarImpresion.addEventListener('click', () => {
    imprimirReporte.style.display = 'none';
});

btnConfirmarImpresion.addEventListener('click', () => {
    window.print();
    imprimirReporte.style.display = 'none';
});


//Huevos al hector