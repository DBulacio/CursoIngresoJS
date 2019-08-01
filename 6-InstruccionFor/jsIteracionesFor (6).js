function mostrar()
{
  var cont = 0;
  var num = prompt("Ingrese un numero");
  num = parseInt(num);

  for (var i = 0 ; i <= num ; i += 2){
    alert(i);
    cont++;
  }
  alert("se encontraron " + cont + " numeros pares");
}
