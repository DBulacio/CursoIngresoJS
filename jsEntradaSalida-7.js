/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

var num1, num2, resultado;

function sumar()
{
  num1 = document.getElementById("numeroUno").value;
  num2 = document.getElementById("numeroDos").value;
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  resultado = num1 + num2;
  alert(resultado);
}

function restar()
{
  num1 = document.getElementById("numeroUno").value;
  num2 = document.getElementById("numeroDos").value;
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  resultado = num1 - num2;
  alert(resultado);
}

function multiplicar()
{
  num1 = document.getElementById("numeroUno").value;
  num2 = document.getElementById("numeroDos").value;
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  resultado = num1 * num2;
  alert(resultado);
}

function dividir()
{
  num1 = document.getElementById("numeroUno").value;
  num2 = document.getElementById("numeroDos").value;
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  resultado = num1 / num2;
  alert(resultado);
}

