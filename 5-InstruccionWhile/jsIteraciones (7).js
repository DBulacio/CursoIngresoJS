function mostrar()
{
	var contador=0;
  var acumulador=0;
  var num;

  while (true){
    num = prompt("Ingrese un numero");

    if(num == null) //si pone cancelar, termina el bucle.
      break;

    num = parseInt(num);

    if(isNaN(num)){ //si no pone un número, vuelve al principio del bucle.
      alert("isNaN");
      continue;
    }

    acumulador += num;

    contador++;
  }

  document.getElementById('suma').value=acumulador;
  document.getElementById('promedio').value=acumulador/contador;

}
