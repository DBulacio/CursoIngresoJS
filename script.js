function ej1() {
  //Pedir los datos necesarios de un triangulo,
  //validar que sea rectangulo y calcular su superfecie.
  var side1, side2, hipotenusa, theta1, theta2, theta3;

  do {
    side1      = prompt("Ingrese la medida del primer cateto");
    side1      = parseInt(side1);
    side2      = prompt("Ingrese la medida del segundo cateto");
    side2      = parseInt(side2);
  } while(isNaN(side1) || isNaN(side2));
  do {
    hipotenusa = prompt("Ingrese la medida de la hipotenusa");
    hipotenusa = parseInt(hipotenusa);
  } while(hipotenusa < side1 || hipotenusa < side2 || isNaN(hipotenusa));

  //validar que sea rectangulo
  do {
    theta1 = prompt("Ingrese el primer angulo para un triangulo rectangulo");
    theta1 = parseInt(theta1);
    theta2 = prompt("Ingrese el segundo angulo para un triangulo rectangulo");
    theta2 = parseInt(theta2);
    theta3 = 180 - (theta1 + theta2);
  } while(theta1 != 90 && theta2 != 90 && theta3 != 90);

  alert("Es un triangulo rectangulo y su superficie es de: " + (side1 * side2) / 2);
}

function ej2(){
//Se deberan cargar tenistas hasta que el usuario quiera. Los datos a cargar seran: nombre, edad, partidos ganados,
//partidos perdidos. Debemos calcular el promedio de edad, cantidad de tenistas con record positivo,
//nombre del tenista con mas victorias, nombre del tenista con mas derrotas.
  var nombre, edad, sum_edad = 0, cont_edad = 0, promedio_edad, partidos_ganados,
      cont_record_w = 0, partidos_perdidos, masW = 0, nombre_masW = "", masL = 0, nombre_masL = "";

  while(confirm("Ingresar un nuevo tenista?")){
    // @Cleanup: _seguramente se puede hacer con un do while para cada variable
    nombre = prompt("Ingrese el nombre del tenista o presione cancelar para terminar el ingreso de datos");
    if(!isNaN(nombre))  //si no es nan -> es un numero
      continue;

    edad = prompt("Ingrese la edad del tenista");
    edad = parseInt(edad);
    if(isNaN(edad))
      continue;
    cont_edad++;

    partidos_ganados = prompt("Ingrese los partidos_ganados del tenista");
    partidos_ganados = parseInt(partidos_ganados);
    if(isNaN(partidos_ganados))
      continue;

    partidos_perdidos = prompt("Ingrese los partidos_perdidos del tenista");
    partidos_perdidos = parseInt(partidos_perdidos);
    if(isNaN(partidos_perdidos))
      continue;

    sum_edad += edad;

    if(partidos_ganados > partidos_perdidos)
      cont_record_w++;

    if(partidos_ganados > masW){
      masW = partidos_ganados;
      nombre_masW = nombre;
    }

    if(partidos_perdidos > masL){
      masL = partidos_perdidos;
      nombre_masL = nombre;
    }
  }
  //promedio de edad
  promedio_edad = sum_edad / cont_edad;
  alert("el promedio de edad es de: " + promedio_edad);

  //cantidad de tenistas con record positivo
  alert("la cantidad de tenistas con record positivo es: " + cont_record_w);

  //tenista con mas victorias
  alert("El tenista con mas victorias es " + nombre_masW);

  //tenista con mas derrotas
  alert("El tenista con mas derrotas es " + nombre_masL);
}

function ej3(){
  /*
  Se deben ingresar productos hasta que el usuario quiera. Pedir nombre, precio entre 10 y 100 y temperatura
  de conservacion del producto. Deberemos informar promedio de precio, nombre del producto de
  precio maximo, nombre del producto de precio minimo, precio maximo con temperatura bajo cero,
  temperatura minima sobre cero.
  */
  var nombre, nombre_max, nombre_min, precio, sum_precio = 0, prom_precio, cont_precio = 0, max_precio = 0,
      min_precio, precio_anterior = 101, temp, precio_temp = 0, precio_max_temp = 0, temp_min = 5505;

  while(confirm("Ingresar un nuevo producto?")){
    nombre = prompt("Ingrese el nombre del producto");
    if(!isNaN(nombre))
      continue;

    precio = prompt("Ingrese el precio (entre 10 y 100) del producto");
    precio = parseInt(precio);  //por ahora solo int
    if(isNaN(precio) || precio > 100 || precio < 10)
      continue;
    cont_precio++;

    temp = prompt("Ingrese la temperatura de conservacion del producto");
    temp = parseInt(temp);      //por ahora solo int
    if(isNaN(temp))
      continue;

    sum_precio += precio;

    if (precio > max_precio){
      max_precio = precio;
      nombre_max = nombre;
    }

    if(precio < precio_anterior){
      precio_anterior = precio;
      nombre_min      = nombre;
    }

    if(temp < 0){
      precio_temp = precio;
      if (precio_temp > precio_max_temp)
        precio_max_temp = precio_temp;
    }

    if(temp > 0){
      if(temp < temp_min){    //temp_min esta inicializado a la temperatura del sol, y se que nada puede ser conservado a esa temperatura.
        temp_min = temp;
      }
    }
  }

  prom_precio = sum_precio / cont_precio;
  alert("El promedio de los precios es: " + prom_precio);

  alert("Producto de mayor precio es: " + nombre_max);

  alert("Producto de menor precio es: " + nombre_min);

  alert("el precio maximo con temp bajo cero es: " + precio_max_temp)

  alert("La temperatura minima sobre cero es: " + temp_min);
}

function ej4(){
  /*
    Se deberan pedir 10 numeros entre -100 y 900 y deberemos informar: cantidad de numeros pares,
    cantidad de ceros, promedio de pares, cantidad de numeros divisibles por 3, el promedio de los
    numeros menores a 300, la multiplicacion acumulada de los nueros mayores a 500 y el mayor numero
    que sea primo.
  */
  var cont = 0, num, cantPar = 0, cantCero = 0, sumPar = 0, promPar = 0, cantDivTres = 0, sumMenorTrescientos = 0
      cantMenorTrescientos = 0, promMenorTrescientos = 0, multAcum = 1;

  while(cont < 10){
    do {
      num = prompt("Ingrese un numero entre -100 y 900");
      num = parseInt(num);
    } while(isNaN(num) || num < -100 || num > 900);

    //cantidad de numeros pares
    if(num / 2 == 0){
      cantPar++;
      sumPar += num;
    }

    //cantidad de ceros
    if(num == 0)
      cantCero++;

    //promedio de pares
    promPar = sumPar / cantPar;

    //cantidad de numeros divisibles por 3
    if(num / 3 == 0)
      cantDivTres++;

    //promedio de los numeros menores a 300
    if(num < 300){
      sumMenorTrescientos += num;
      cantMenorTrescientos++;
    }
    promMenorTrescientos = sumMenorTrescientos / cantMenorTrescientos;

    //multiplicacion acumulada de numeros mayores a 500
    if(num > 500){
      multAcum *= num;
    }

    //mayor de los numeros que sea primo
    for(var i = 2 ; i = num/2 ; i++){
      if(num / i == 0)
        break;

        //bool esPrimo, max min
    }

    cont++;
  }

}

