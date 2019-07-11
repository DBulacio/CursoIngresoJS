function mostrar()
{
  var edad, estado_civil;

  edad = document.getElementById("edad").value;
  estado_civil = document.getElementById("estadoCivil").value;

  if (edad < 18 && estado_civil != "Soltero"){
    return;
  } else if (edad >= 18 && estado_civil == "Soltero") {
    alert('Es soltero y no es menor.');
  }
}
