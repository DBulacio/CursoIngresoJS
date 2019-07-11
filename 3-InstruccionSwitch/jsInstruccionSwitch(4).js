function mostrar()
{
  var mesDelAño = document.getElementById('mes').value;

  switch(mesDelAño){
    case "Enero":
      alert("tiene 31 días");
      break;
    case "Febrero":
      alert("Este mes no tiene más de 29 días.");
      break;
    case "Marzo":
      alert("tiene 31 días");
      break;
    case "Abril":
      alert("tiene 30 días");
      break;
    case "Mayo":
      alert("tiene 31 días");
      break;
    case "Junio":
      alert("tiene 30 días");
      break;
    case "Julio":
      alert("tiene 31 días");
      break;
    case "Agosto":
      alert("tiene 31 días");
      break;
    case "Septiembre":
      alert("tiene 30 días");
      break;
    case "Octubre":
      alert("tiene 31 días");
      break;
    case "Noviembre":
      alert("tiene 30 días");
      break;
    case "Diciembre":
      alert("tiene 31 días");
      break;
  }
}
