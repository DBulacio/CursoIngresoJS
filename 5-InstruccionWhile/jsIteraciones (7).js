function mostrar()
{
	var contador=0;
  var acumulador=0;
  var num;
	var respuesta;

  respuesta = prompt("Ingresar otro numero? SI/NO");

  while (respuesta == "si"){
    num = prompt("Ingrese un numero");
    num = parseInt(num);

    acumulador += num;

    respuesta = prompt("Ingresar otro numero? SI/NO");
    contador++;
  }

  document.getElementById('suma').value=acumulador;
  document.getElementById('promedio').value=acumulador/contador;

}
