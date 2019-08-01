function mostrar()
{
  var cont = 0;
  do{
    var num = prompt("ingrese un numero");
    num = parseInt(num);
  } while (isNaN(num));

  for(var i = 2 ; i < num ; i++){
    if(num % i == 0){
      cont++;
      break;
    }
  }

  if(cont > 0){
    alert("no es primo");
  } else {
    alert("es primo");
  }
}
