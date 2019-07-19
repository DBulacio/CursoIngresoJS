function mostrar()
{
	var contador=0;
	var acumulador=0;
  var num;

  while (contador < 5){
    num = prompt("Ingrese un numero");
    num = parseInt(num);

    if (isNaN(num))
      continue;

    acumulador += num;
    contador++;
  }

  document.getElementById('suma').value=acumulador;
  document.getElementById('promedio').value=acumulador/5;

}
