import clientes from "./clientes-data.js";

function tiempoTranscurrido(fecha) {
  const fechaCompra = new Date(fecha);
  const hoy = new Date();
  const diferencia = hoy - fechaCompra;
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

  if (dias < 1) return "hoy";
  if (dias < 30) return `hace ${dias} día${dias === 1 ? "" : "s"}`;
  const meses = Math.floor(dias / 30);
  if (meses < 12) return `hace ${meses} mes${meses === 1 ? "" : "es"}`;
  const años = Math.floor(meses / 12);
  return `hace ${años} año${años === 1 ? "" : "s"}`;
}

function mostrarEstrellas(puntaje) {
  return "★".repeat(puntaje) + "☆".repeat(5 - puntaje);
}

const contenedor = document.getElementById("clientesContainer");

clientes.forEach((cliente) => {
  const tarjeta = document.createElement("div");
  tarjeta.className = "tarjeta";

  tarjeta.innerHTML = `
    <img src="${cliente.imagen}" alt="Foto de ${cliente.nombre}">
    <h3>${cliente.nombre}</h3>
    <p>"${cliente.opinion}"</p>
    <div class="estrellas">${mostrarEstrellas(cliente.valoracion)}</div>
    <div class="tiempo">${tiempoTranscurrido(cliente.fecha)}</div>
  `;

  contenedor.appendChild(tarjeta);
});
const iconoHamburguesa = document.querySelector(".icono-hamburguesa");
const mainLink = document.querySelector(".main-links");
iconoHamburguesa.addEventListener("click", () => {
  console.log("click");
  mainLink.classList.toggle("oculto");
});
