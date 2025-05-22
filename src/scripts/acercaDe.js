const iconoHamburguesa = document.querySelector(".icono-hamburguesa");
const nav = document.querySelector("nav");

iconoHamburguesa.addEventListener("click", () => {
  nav.classList.toggle("mostrar-links");
});
