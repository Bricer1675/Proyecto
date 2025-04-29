// Agregar producto al carrito
function agregarAlCarrito(nombre, precio) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push({ nombre, precio });
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Producto agregado al carrito.");
  actualizarCantidadCarrito();

  // Animación de botón
  const botonCarrito = document.getElementById("boton-carrito");
  if (botonCarrito) {
    botonCarrito.classList.add("rebote");
    setTimeout(() => botonCarrito.classList.remove("rebote"), 600);
  }
}

// Actualizar cantidad de productos en el carrito
function actualizarCantidadCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const botonCarrito = document.getElementById("boton-carrito");
  if (botonCarrito) {
      botonCarrito.innerText = carrito.length;
  }
}

// Ejecutarlo cuando cargue la página
document.addEventListener('DOMContentLoaded', actualizarCantidadCarrito);
