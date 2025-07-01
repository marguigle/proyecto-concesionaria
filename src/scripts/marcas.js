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

const mostrarAutos = async (e) => {
  e.preventDefault();
  const marca = inputMarca.value.trim().toLowerCase();
  if (!marca) return;
  card.innerHTML = "";
  try {
    const autos = await traerDatos(marca);
    autos.forEach((auto) => {
      document.getElementById("card").innerHTML += `
   <p> <strong>${auto.Make_Name}</strong> <br/>
   modelo : ${auto.Model_Name} </p>
    `;
    });
  } catch (error) {
    console.log("Error al mostrar autos:", error);
  }
};
boton.addEventListener("click", mostrarAutos);
