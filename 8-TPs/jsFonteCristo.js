//El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.
//13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:

var cant_par = 0, cant_impar = 0;

do {
  var num = prompt("ingrese un numero");
  num = parseInt(num);
} while (isNaN(num) && num > 0);

//a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
function NumerosPares(){
  if(num % 2 != 0){   // Si es impar le resto uno antes de entrar al bucle.
    num--;
  }
  for(var i = num ; i > 0 ; i--){
    if(i % 2 == 0){
      cant_par++;
    }
  }
  console.log(cant_par);
}
//b.	Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
function NumerosImpares(){
  if(num % 2 == 0){   // Si es impar le resto uno antes de entrar al bucle.
    num--;
  }
  for(var i = num ; i > 0 ; i--){
    if(i % 2 != 0){
      cant_impar++;
    }
  }
  console.log(cant_impar);
}
//c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
function NumerosDivisibles(){

}
//d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
function VerificarPrimo(){

}
//e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
function NumerosPrimos(){

}

