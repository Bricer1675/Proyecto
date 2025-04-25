!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!
    // 🔥 Función para actualizar cantidad de productos en el botón flotante del carrito
function actualizarCantidadCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const cantidadElemento = document.getElementById("cantidad-carrito");
    if (cantidadElemento) {
      cantidadElemento.textContent = carrito.length;
    }
  }
  
  // Ejecutarlo apenas cargue la página
  document.addEventListener('DOMContentLoaded', actualizarCantidadCarrito);
  