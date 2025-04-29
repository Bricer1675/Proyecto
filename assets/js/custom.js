// Agregar producto al carrito
function agregarAlCarrito(nombre, precio) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push({ nombre, precio });
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Producto agregado al carrito.");
  actualizarCantidadCarrito();
}

// Actualizar cantidad de productos en el carrito
function actualizarCantidadCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const cantidad = document.getElementById("cantidad-carrito");
  if (cantidad) {
    cantidad.innerText = carrito.length;
  }
}

// Mostrar los productos en carrito.html
function mostrarCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const contenedor = document.getElementById("lista-productos");
  const total = document.getElementById("total-carrito");
  let suma = 0;

  if (contenedor) {
    contenedor.innerHTML = ""; // limpiar
    carrito.forEach(producto => {
      contenedor.innerHTML += `<p>${producto.nombre} - $${producto.precio}</p>`;
      suma += producto.precio;
    });

    if (total) {
      total.innerText = `$${suma}`;
    }
  }
}

// Vaciar el carrito
function vaciarCarrito() {
  localStorage.removeItem("carrito");
  mostrarCarrito();
  actualizarCantidadCarrito();
}

// Ejecutarlo cuando cargue la página
document.addEventListener('DOMContentLoaded', () => {
  actualizarCantidadCarrito();
  if (document.getElementById("lista-productos")) {
    mostrarCarrito();
  }
});
