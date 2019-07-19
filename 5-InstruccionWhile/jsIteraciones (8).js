function mostrar()
{
	var contador=0;
	var positivo = 0, negativo = 1, num;

  while (true){
    num = prompt("Ingrese un numero");
    if (num == null) //si pone cancelar, termina el bucle.
      break;

    num = parseInt(num);
    if (isNaN(num)){  //si no pone un número, vuelve al principio del bucle.
      alert("ERROR: isNaN");
      continue;
    }

    if(num >= 0){
      positivo += num;
    } else {
      negativo *= num;
    }
  }

  document.getElementById('suma').value=positivo;
  document.getElementById('producto').value=negativo;

}
