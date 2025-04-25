!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!
    // 🔥 Función para actualizar cantidad de productos en el botón flotante del carrito
    function agregarAlCarrito(nombre, precio) {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carrito.push({ nombre, precio });
        localStorage.setItem("carrito", JSON.stringify(carrito));
        alert("Producto agregado al carrito.");
      
        // Actualizar cantidad
        actualizarCantidadCarrito();
      
        // Animar el botón carrito
        const botonCarrito = document.getElementById("boton-carrito");
        if (botonCarrito) {
          botonCarrito.classList.add("rebote");
          setTimeout(() => botonCarrito.classList.remove("rebote"), 600);
        }
      }
      
  
  // Ejecutarlo apenas cargue la página
  document.addEventListener('DOMContentLoaded', actualizarCantidadCarrito);
  