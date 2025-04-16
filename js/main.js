document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("nav-menu");
  const header = document.getElementById("main-header");
  const categoriasBtn = document.getElementById("categorias-toggle");
  const submenu = document.getElementById("categorias-submenu");


   // mostrar categorias script
   window.mostrarCategoria = function(id) {
    const categorias = document.querySelectorAll('.categoria-masculina');
    categorias.forEach(c => c.classList.add('hidden'));
    document.getElementById(`categoria-${id}`)?.classList.remove('hidden');
  };

  //Modal categorias script
  function openModal(id) {
    document.getElementById(id)?.classList.remove("hidden");
  }
  
  function closeModal(id) {
    document.getElementById(id)?.classList.add("hidden");
  }

  // Menú hamburguesa
  toggle?.addEventListener("click", () => {
    const isScrolled = window.scrollY > 10;

    menu.classList.toggle("hidden");

    // Cambiar fondo del menú desplegable
    if (!menu.classList.contains("hidden")) {
      menu.classList.remove("bg-transparent", "backdrop-blur-sm");
      menu.classList.add("bg-[#1e1e1e]", "backdrop-blur-md", "shadow-md");
    } else {
      menu.classList.remove("bg-[#1e1e1e]", "backdrop-blur-md", "shadow-md");
      if (!isScrolled) {
        menu.classList.add("bg-transparent", "backdrop-blur-sm");
      }
    }
  });

  // Submenú en mobile
  categoriasBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    submenu.classList.toggle("hidden");
  });

  // Scroll dinámico del header
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.classList.remove("bg-transparent", "backdrop-blur-sm");
      header.classList.add("bg-[#1e1e1e]", "backdrop-blur-md", "shadow-md");

      // Si el menú está abierto, aseguramos que también tenga fondo sólido
      if (!menu.classList.contains("hidden")) {
        menu.classList.remove("bg-transparent", "backdrop-blur-sm");
        menu.classList.add("bg-[#1e1e1e]", "backdrop-blur-md", "shadow-md");
      }

    } else {
      header.classList.remove("bg-[#1e1e1e]", "backdrop-blur-md", "shadow-md");
      header.classList.add("bg-transparent", "backdrop-blur-sm");

      // Restaurar menú hamburguesa si está abierto
      if (!menu.classList.contains("hidden")) {
        menu.classList.remove("bg-[#1e1e1e]", "backdrop-blur-md", "shadow-md");
        menu.classList.add("bg-transparent", "backdrop-blur-sm");
      }
    }
  });

  // Scroll suave al hacer clic en anchors
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
});
