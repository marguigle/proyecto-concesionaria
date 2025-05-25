document.addEventListener("DOMContentLoaded", () => {
  const iconoHamburguesa = document.querySelector(".icono-hamburguesa");
  const nav = document.querySelector(".main-links");

  iconoHamburguesa.addEventListener("click", () => {
    console.log("click");
    nav.classList.toggle("oculto");
  });
});
