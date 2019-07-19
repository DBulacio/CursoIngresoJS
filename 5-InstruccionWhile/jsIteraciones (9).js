function mostrar()
{
	var contador = 0, num, max = 0, min = 0;

  while (true){
    num = prompt("Ingrese un numero");

    if (num == null)
      break;

    num = parseInt(num);

    if (isNaN(num)){
      alert("ERROR: isNaN");
      continue;
    }

    if (num > max){
      max = num;
    } else {
      min = num;
    }
  }

  document.getElementById('maximo').value = max;
  document.getElementById('minimo').value = min;

}
