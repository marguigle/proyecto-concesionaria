const card = document.getElementById("card");
const inputMarca = document.getElementById("marca");

const boton = document.getElementById("boton");

const traerDatos = async (marca) => {
  //   let marca = "volkswagen";
  let URL = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${marca}?format=json`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    const autos = data.Results;
    return autos;
  } catch (error) {
    console.log(error);
  }
};
const iconoHamburguesa = document.querySelector(".icono-hamburguesa");
const mainLink = document.querySelector(".main-links");
iconoHamburguesa.addEventListener("click", () => {
  console.log("click");
  mainLink.classList.toggle("oculto");
});
const mostrarAutos = async (e) => {
  e.preventDefault();
  const marca = inputMarca.value.trim().toLowerCase();
  if (!marca) return;
  card.innerHTML = "";
  try {
    const autos = await traerDatos(marca);
    autos.forEach((auto) => {
      document.getElementById("card").innerHTML += `
        <div class="card-modelos">
          <p><strong>${auto.Make_Name}</strong><br/>
          Modelo: ${auto.Model_Name}</p>
          <button class="boton-agregar" 
                  data-make="${auto.Make_Name}" 
                  data-model="${auto.Model_Name}">
                  Agregar
          </button>
        </div>
      `;
    });
  } catch (error) {
    console.log("Error al mostrar autos:", error);
  }
};

boton.addEventListener("click", mostrarAutos);

// Delegación de eventos:
card.addEventListener("click", (e) => {
  if (e.target.classList.contains("boton-agregar")) {
    const make = e.target.dataset.make;
    const model = e.target.dataset.model;
    guardarLocalmente(make, model);
  }
});
const guardarLocalmente = (make, model) => {
  const auto = { make, model };

  // Recuperar los autos actuales en localStorage
  const autosGuardados = JSON.parse(localStorage.getItem("autos")) || [];

  // Agregar el nuevo auto
  autosGuardados.push(auto);

  // Guardar de nuevo
  localStorage.setItem("autos", JSON.stringify(autosGuardados));

  // Renderizar en la sección de autos seleccionados
  renderizarAutoSeleccionado(auto);
};

const renderizarAutoSeleccionado = (auto) => {
  const seccion = document.getElementById("autos-seleccionados");
  const div = document.createElement("div");
  div.classList.add("auto-seleccionado");
  div.innerHTML = `
    <p><strong>${auto.make}</strong> -  ${auto.model}</p>
  `;
  seccion.appendChild(div);
};
