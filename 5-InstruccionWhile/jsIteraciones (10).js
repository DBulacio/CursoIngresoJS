function mostrar()
{
	var contador = 0;

  var suma_neg = 0, suma_pos = 0, cant_neg = 0, cant_pos = 0, cant_zero = 0, cant_par = 0,
      prom_pos, prom_neg, delta;

  while (true){
    num = prompt("Ingrese un numero");
    if (num == null)
      break;

    num = parseInt(num);
    if (isNaN(num)){
      alert("ERROR: isNaN");
      continue;
    }

    // 1-Suma de los negativos.
    if (num < 0){
      suma_neg += num;
      // 4-Cantidad de negativos.
      cant_neg++;
    }
    // 2-Suma de los positivos.
    if (num > 0){
      suma_pos += num;
      // 3-Cantidad de positivos.
      cant_pos++;
    }
    // 5-Cantidad de ceros.
    if (num == 0){
      cant_zero++;
    }
    // 6-Cantidad de números pares.
    if (num / 2 == 0){
      cant_par++;
    }
    contador++;
  }

  // 7-Promedio de positivos.
  // 8-Promedios de negativos.
  // 9-Diferencia entre positivos y negativos, (positvos-negativos).
  if (cant_pos != 0)
    prom_pos = suma_pos / cant_pos;
  if (cant_neg != 0)
    prom_neg = suma_neg / cant_neg;

  delta = suma_pos - suma_neg;

  document.write("Suma de negativos: " + suma_neg + "<br>");
  document.write("Suma de positivos: " + suma_pos + "<br>");
  document.write("cantidad de positivos: " + cant_pos + "<br>");
  document.write("cantidad de negativos: " + cant_neg + "<br>");
  document.write("cantidad de ceros: " + cant_zero + "<br>");
  document.write("promedio positivos: " + prom_pos + "<br>");
  document.write("promedio negativos: " + prom_neg + "<br>");
  document.write("neg-pos: " + delta + "<br>");
  document.write("cantidad de pares: " + cant_par + "<br>");

}
