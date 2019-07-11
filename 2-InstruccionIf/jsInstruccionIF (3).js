function mostrar()
{
  var edad;

  edad = document.getElementById("edad").value;

  if (edad >= 18){
    alert("ES MAYOR");
  } else {
    alert("ES MENOR");
  }
}
