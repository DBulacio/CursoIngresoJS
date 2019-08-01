function mostrar()
{
  var cont = 0;

  do{
    var num = prompt("ingrese un numero");
    num = parseInt(num);
  } while(isNaN(num));

  for (var i = 0 ; i <= num ; i++){
    if(num % i == 0){
      alert(i);
      cont++;
    }
  }
  alert("se encontraron " + cont + " divisores");
}
