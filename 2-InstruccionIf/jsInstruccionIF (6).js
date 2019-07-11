function mostrar()
{
  var edad;

  edad = document.getElementById("edad").value;

  if (edad < 13){
    alert("es niño");
  } else if (edad >= 13 && edad <= 17) {
    alert("es adolescente");
  } else {
    alert("es mayor");
  }
}
