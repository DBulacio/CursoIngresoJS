function mostrar()
{
  var sexo = prompt("ingrese f ó m .");
  /*
  while (sexo != "f" && sexo != "m") {
    var sexo = prompt("ingrese un sexo válido.");
  }
  */

  do {
    var sexo = prompt("ingrese un sexo válido.");
  } while (sexo != "f" && sexo != "m");
  document.getElementById('Sexo').value=sexo;

}
