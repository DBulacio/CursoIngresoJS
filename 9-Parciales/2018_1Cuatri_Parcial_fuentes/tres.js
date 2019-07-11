function mostrar()
{
  var precio, porcentaje;

  precio     = prompt("Ingrese el precio.")
  porcentaje = prompt("Ingrese el porcentaje.")

  precio     = parseInt(precio);
  porcentaje = parseInt(porcentaje);

  precio -= precio * porcentaje;

  document.getElementById("elPrecioFinal").value = precio;

  //Esta mal, rehacer
}
