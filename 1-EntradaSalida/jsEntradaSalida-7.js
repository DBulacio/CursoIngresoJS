/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar()
{
  var num1, num2, resultado;

  num1 = parseInt(document.getElementById("numeroUno").value);
  num2 = parseInt(document.getElementById("numeroDos").value);

  resultado = num1 + num2;

  alert(resultado);
}

function restar()
{
  var num1, num2, resultado;

  num1 = parseInt(document.getElementById("numeroUno").value);
  num2 = parseInt(document.getElementById("numeroDos").value);

  resultado = num1 - num2;

  alert(resultado);
}

function multiplicar()
{
  var num1, num2, resultado;

  num1 = parseInt(document.getElementById("numeroUno").value);
  num2 = parseInt(document.getElementById("numeroDos").value);

  resultado = num1 * num2;

  alert(resultado);
}

function dividir()
{
  var num1, num2, resultado;

  num1 = parseInt(document.getElementById("numeroUno").value);
  num2 = parseInt(document.getElementById("numeroDos").value);

  resultado = num1 / num2;

  alert(resultado);
}

