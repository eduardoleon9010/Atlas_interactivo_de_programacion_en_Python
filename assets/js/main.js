// Esperar a que el contenido de la página se haya cargado completamente
document.addEventListener("DOMContentLoaded", function() {
  console.log("¡Bienvenido al Atlas Interactivo de Programación en Python!");

  // Funcionalidad 1: Mensaje de bienvenida interactivo
  const bienvenida = document.querySelector(".bienvenida");
  if (bienvenida) {
    bienvenida.innerHTML = "¡Explora el Atlas Interactivo para aprender Python!";
  }

  // Funcionalidad 2: Cambiar entre modo claro y oscuro
  const themeToggle = document.querySelector("#theme-toggle");
  themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    const currentMode = document.body.classList.contains("dark-mode") ? "oscuro" : "claro";
    localStorage.setItem("theme", currentMode);
  });

  // Configuración inicial para el tema (modo claro/oscuro)
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme && savedTheme === "oscuro") {
    document.body.classList.add("dark-mode");
  }

  // Funcionalidad 3: Efecto de desplazamiento suave para enlaces
  const enlaces = document.querySelectorAll('a[href^="#"]');
  enlaces.forEach(function(enlace) {
    enlace.addEventListener("click", function(event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 50, // Ajuste para espacio superior
        behavior: "smooth"
      });
    });
  });
});
