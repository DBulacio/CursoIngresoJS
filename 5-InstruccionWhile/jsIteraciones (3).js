function mostrar()
{
  var clave = prompt("Ingrese la clave.");
  /*
  while (clave != "utn750"){
    clave = prompt("ERROR! Ingrese la clave nuevamente.");
  }

  do {
    clave = prompt("Ingrese la clave.");
  } while (clave != "utn750");
  */

  for( ; clave != "utn750" ; ){
    clave = prompt("Ingrese la clave.");
  }
}
