/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
  var numDividendo, numDivisor, resultado;

  numDividendo = document.getElementById("numeroDividendo").value;
  numDivisor   = document.getElementById("numeroDivisor").value;

  parseInt(numDividendo);
  parseInt(numDivisor);

  resultado = numDividendo % numDivisor;
  alert(resultado);
}
