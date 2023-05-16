import Pizzas from "./datos.js";
const input = document.getElementById("formInput");

const buscarId = (id) => {
  Pizzas.forEach((pizza) => {
    if (pizza.id.toString() === id) {
      result.innerHTML = `
              <h2>Pizza: <small>  ${pizza.name} </small></h2>
              <img src='${pizza.img}'></img>
              <h2>Precio: <small> $${pizza.price} </small></h2>
              
              `;
      result.style.color = "white";
      input.style.border = "none";
    } else if (id > Pizzas.length) {
      result.innerHTML = `
              <h2> No se encontró resultados con el ID: ${id}</h2>
              `;
      result.style.color = "red";
      input.style.border = "2px solid red";
    } else if (id == "" || id == "0") {
      result.innerHTML = `
          <h2> Ingrese un número válido</h2>
          `;
      result.style.color = "red";
      input.style.border = "2px solid red";
    }
  });
};

export default buscarId;
