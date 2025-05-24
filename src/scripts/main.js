// const iconoHamburguesa = document.querySelector(".icono-hamburguesa");
// const nav = document.querySelector(".aside-links");

// iconoHamburguesa.addEventListener("click", () => {
//   console.log("click");
//   nav.classList.toggle("mostrar-links");
// });
document.addEventListener("DOMContentLoaded", () => {
  const iconoHamburguesa = document.querySelector(".icono-hamburguesa");
  const nav = document.querySelector(".aside-links");

  iconoHamburguesa.addEventListener("click", () => {
    console.log("click");
    nav.classList.toggle("oculto");
  });
});
