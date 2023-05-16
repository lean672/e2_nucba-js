import buscarId from "./validacion.js";

const input = document.getElementById("formInput");
const btn = document.getElementById("submit");
const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

btn.addEventListener("click", () => {
  const valor = input.value;

  buscarId(valor);
  result.style.display = "block";
});
