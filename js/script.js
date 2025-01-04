  // Marcar como "activo" el enlace correspondiente según la página actual
  const currentUrl = window.location.href; // Obtiene la URL actual
  const links = document.querySelectorAll(".nav-link");

  links.forEach(link => {
      if (currentUrl.includes(link.getAttribute("href"))) {
          link.classList.add("active");
      }
  });