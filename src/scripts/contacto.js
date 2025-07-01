const boton = document.getElementById("boton");

console.log(nombre.value);

document.addEventListener("DOMContentLoaded", () => {
  const iconoHamburguesa = document.querySelector(".icono-hamburguesa");
  const nav = document.querySelector(".main-links");

  iconoHamburguesa.addEventListener("click", () => {
    console.log("click");
    nav.classList.toggle("oculto");
  });
});
const responder = async (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const email = document.getElementById("email");
  alert(
    `Gracias por contactarnos !!
  ${nombre.value}  ${apellido.value}.
 Su consulta sera atendida a la brevedad al email: 
  ${email.value}`
  );
  nombre.value = "";
  apellido.value = "";
  email.value = "";
};
boton.addEventListener("click", responder);
