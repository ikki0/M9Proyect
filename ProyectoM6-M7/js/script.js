"use strict";

// Variables;
// const campoNombre = document.querySelectorAll(".input");
const campoInput = document.querySelectorAll(".input");
const inputErrorNombre = document.querySelector(".errorNombreVacio");
const inputErrorEmail = document.querySelector(".errorEmailVacio");
const inputErrorPassword = document.querySelector(".errorPasswordVacio");
const inputErrorGeneral = document.querySelectorAll(".inputError");

// Funciones

for (let i = 0; i < campoInput.length; i++) {
  campoInput[i].addEventListener("focusout", function () {
    if (!campoInput[i].value) {
      campoInput[i].style.borderColor = "red";
      for (let elemento of inputErrorGeneral) {
        elemento.style.backgroundColor = "red";
        elemento.style.maxWidth = "200px";
      }
      // hacer un switch de i
      switch (i) {
        case 0:
          inputErrorNombre.classList.remove("hidden");
          //   inputErrorNombre.style.marginTop = "0.5rem";
          // si la posicion es 0 quitar la propiedad invisibitlit del input nombres
          break;
        case 1:
          inputErrorEmail.classList.remove("hidden");
          // si la posicion es 1 quitar la propiedad invisibility del input email
          break;

        case 2:
          inputErrorPassword.classList.remove("hidden");
          // si la posicion es 2 quitar la propiedad invisibility del input password
          break;
      }
    } else {
      for (let elemento of inputErrorGeneral) {
        elemento.classList.add("hidden");
      }
      campoInput[i].style.borderColor = "green";
      // agregamos la clase invisible al inputErrorNombre
    }
  });
}
