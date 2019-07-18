function mostrar()
{
	var contador = 0;
  var respuesta;

  var suma_neg = 0, suma_pos = 0, cant_neg = 0, cant_pos = 0, cant_zero = 0, cant_par = 0,
      prom_pos, prom_neg, delta;

  respuesta = prompt("Ingresar otro numero?");

  while (respuesta == "si"){
    num = prompt("Ingrese un numero");
    num = parseInt(num);

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
    // 7-Promedio de positivos.
    // 8-Promedios de negativos.
    // 9-Diferencia entre positivos y negativos, (positvos-negativos).

    contador++;
    respuesta = prompt("Ingresar otro numero?");
  }

  prom_pos = suma_pos / contador;
  prom_neg = suma_neg / contador;
  delta    = suma_pos - suma_neg;

  // Hacer con document.write
  console.log("Suma de negativos: " + suma_neg + " ; suma de positivos: " + suma_pos +
                 " ; cantidad de positivos: " + cant_pos + " ; cantidad de negativos: " + cant_neg +
                 " ; cantidad de ceros: " + cant_zero + " ; promedio positivos: " + prom_pos +
                 " ; promedio negativo: " + prom_neg + " ; neg-pos: " + delta +
                 " ; cantidad de pares: " + cant_par);
}
