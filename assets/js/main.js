// Si quieres que el menú sea desplegable con un clic, puedes añadir este script
// Este código se asegura de que el submenú solo se despliegue cuando el usuario hace clic en la opción del menú.

document.addEventListener("DOMContentLoaded", function() {
  const menuItems = document.querySelectorAll('.menu > li');

  menuItems.forEach(item => {
    item.addEventListener('click', function(e) {
      // Cerramos cualquier otro submenú abierto
      menuItems.forEach(innerItem => {
        if (innerItem !== item) {
          innerItem.querySelector('.submenu').style.display = 'none';
        }
      });

      const submenu = item.querySelector('.submenu');
      if (submenu) {
        // Toggle: Si está visible, lo ocultamos; si está oculto, lo mostramos
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      }

      e.stopPropagation(); // Evita que se propague el clic
    });
  });

  // Cierra los submenús si el usuario hace clic fuera
  document.addEventListener('click', function() {
    menuItems.forEach(item => {
      item.querySelector('.submenu').style.display = 'none';
    });
  });
});
