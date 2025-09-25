// Animación de saludo en la consola
console.log("%c¡Bienvenido a Portafolio Pro!", "color: #00e6d3; font-size: 1.5em; font-weight: bold;");

// Mostrar notificación elegante al cargar la página
window.addEventListener("DOMContentLoaded", () => {
    mostrarNotificacion("¡Gracias por visitar mi portafolio profesional!");
});

// Función para mostrar una notificación personalizada
function mostrarNotificacion(mensaje) {
    const noti = document.createElement("div");
    noti.textContent = mensaje;
    noti.style.position = "fixed";
    noti.style.top = "30px";
    noti.style.right = "30px";
    noti.style.background = "#232526";
    noti.style.color = "#00e6d3";
    noti.style.padding = "16px 28px";
    noti.style.borderRadius = "8px";
    noti.style.boxShadow = "0 4px 16px rgba(0,0,0,0.25)";
    noti.style.fontSize = "1.1em";
    noti.style.zIndex = "9999";
    noti.style.opacity = "0";
    noti.style.transition = "opacity 0.5s";
    document.body.appendChild(noti);
    setTimeout(() => { noti.style.opacity = "1"; }, 100);
    setTimeout(() => {
        noti.style.opacity = "0";
        setTimeout(() => document.body.removeChild(noti), 500);
    }, 3000);
}

// Cambia el fondo con animación al hacer clic
document.addEventListener("click", () => {
    document.body.style.transition = "background 1s";
    document.body.style.background = "linear-gradient(120deg, #00e6d3 0%, #232526 100%)";
});