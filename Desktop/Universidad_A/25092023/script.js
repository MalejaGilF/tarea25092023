let agregar = document.querySelector("#suma");
let disminuir = document.querySelector("#resta");
let restaurar = document.querySelector("#reset");


agregar.addEventListener("click", function () {
  let salida = document.querySelector("#resultado");
  let result = Number(salida.innerText) + 1;

  salida.innerText = result;
});

disminuir.addEventListener("click", function () {
  let salida = document.querySelector("#resultado");
  let result = Number(salida.innerText) - 1;

  salida.innerText = result;
});

restaurar.addEventListener("click", function () {
    let salida = document.querySelector("#resultado");
    salida.innerText = 0;
  });