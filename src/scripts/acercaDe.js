document.addEventListener("DOMContentLoaded", () => {
  const mapa = document.querySelector(".mapa-container");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          mapa.classList.add("mapa-visible");
          observer.unobserve(mapa);
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  observer.observe(mapa);

  const presentacion = document.querySelector(".presentacion");

  const observerp = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          presentacion.classList.add("presentacion-visible");
          observerp.unobserve(presentacion);
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  observerp.observe(presentacion);

  const iconoHamburguesa = document.querySelector(".icono-hamburguesa");
  const navLinks = document.querySelector(".main-links");

  iconoHamburguesa.addEventListener("click", () => {
    console.log("click");
    navLinks.classList.toggle("oculto");
  });
});
