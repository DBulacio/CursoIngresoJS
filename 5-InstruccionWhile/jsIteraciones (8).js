function mostrar()
{
	var contador=0;
	var positivo = 0, negativo = 1, num;
	var respuesta;

  respuesta = prompt("Ingresar otro numero?");

  while (respuesta == "si"){
    num = prompt("Ingrese un numero");
    num = parseInt(num);

    if(num >= 0){
      positivo += num;
    } else {
      negativo *= num;
    }

    respuesta = prompt("Ingresar otro numero?");
  }

  document.getElementById('suma').value=positivo;
  document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
