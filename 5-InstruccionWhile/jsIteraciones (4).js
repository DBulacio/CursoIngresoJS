function mostrar()
{
	var num = prompt("ingrese un número entre 0 y 10.");
  /*
  while (num < 0 || num > 9){
    num = prompt("ingrese un número valido");
    num = parseInt(num);
    while (isNaN){
      num = prompt("ingrese un número valido");
    }
  }

  do {
    num = prompt("ingrese un número valido");
    num = parseInt(num);
    while (isNaN){
      num = prompt("ingrese un número valido");
    }
  } while (num < 0 || num > 9);
  */

  for ( ; num < 0 || num > 9 ; ){
    num = prompt("ingrese un número valido");
    num = parseInt(num);
  }
}
