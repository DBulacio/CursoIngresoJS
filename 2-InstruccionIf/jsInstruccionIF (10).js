function mostrar()
{
  var num;

  num = Math.floor((Math.random() * 10) + 1);

  if (num >= 9){
    alert("nota: " + num + " EXCELENTE!")
  } else if (num >= 4){
    alert("nota: " + num + " APROBO!")
  } else {
    alert("nota: " + num + " Vamos, la proxima se puede")
  }
}
