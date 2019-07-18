function mostrar()
{
	var contador = 0, num, max = 0, min = 0;
	var respuesta;

  respuesta = prompt("Ingresar otro numero?");

  while (respuesta == "si"){
    num = prompt("Ingrese un numero");
    num = parseInt(num);

    if (num > max){
      max = num;
    } else if (num < min){
      min = num;
    }

    respuesta = prompt("Ingresar otro numero?");
  }

  document.getElementById('maximo').value = max;
  document.getElementById('minimo').value = min;

}
