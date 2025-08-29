// Buscador de productos en tienda.html

document.addEventListener('DOMContentLoaded', function() {
  const inputBuscar = document.querySelector('.filtros input[type="text"]');
  const btnBuscar = document.querySelector('.filtros button');
  const selectCategoria = document.getElementById('categoria');
  const productos = document.querySelectorAll('.productos-grid .producto');

  function filtrarProductos() {
    const texto = inputBuscar.value.toLowerCase();
    const categoriaSeleccionada = selectCategoria.value;
    productos.forEach(producto => {
      const nombre = producto.querySelector('h3').textContent.toLowerCase();
      const descripcion = producto.querySelector('p').textContent.toLowerCase();
      const categoria = producto.querySelector('.categoria')?.textContent.toLowerCase() || '';
      const coincideBusqueda = nombre.includes(texto) || descripcion.includes(texto);
      const coincideCategoria = categoriaSeleccionada === 'todos' || categoria === categoriaSeleccionada;
      if (coincideBusqueda && coincideCategoria) {
        producto.style.display = '';
      } else {
        producto.style.display = 'none';
      }
    });
  }

  btnBuscar.addEventListener('click', filtrarProductos);
});
