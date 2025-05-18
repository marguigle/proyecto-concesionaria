import { autos } from "./autos.js";

console.log(autos);

const containerCard = document.getElementById("card-container");

autos.forEach((auto) => {
  return (containerCard.innerHTML += `
       <div class="card">
          <img src=${auto.foto} alt="foto-auto" />
          <p>${auto.marca}</p>
          <p>${auto.modelo}</p>
          <p>${auto.segmento}</p>
          <p>$ ${auto.precio}</p>
          <button type="submit" class="button">Ver Detalles</button>
        </div>`);
});
