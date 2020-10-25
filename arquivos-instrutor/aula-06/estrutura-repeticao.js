console.log("=== ESTRUTURA-REPETICAO.JS ===");

document.write("Veículos mais Vendidos em Set/2020<br>");

/*
document.write("<br>", "1 - Gol");
document.write("<br>", "2 - Fox");
document.write("<br>", "3 - Palio");
document.write("<br>", "4 - Celta");
document.write("<br>", "5 - Uno");
document.write("<br>", "6 - Tucson");
document.write("<br>", "7 - IX35");
document.write("<br>", "8 - Fusca");
document.write("<br>", "9 - Brasilia");
document.write("<br>", "10 - Corsa");
*/

/*
var carro1 = "Gol";
var carro2 = "Fox";
var carro3 = "Palio";
var carro4 = "Celta";
*/

var carros = "Gol Fox Palio Celta Uno Tucson Ix35";
carros = carros.split(" "); // lista ou array
console.log(carros);

/*
document.write("<br>", carros[0]);
document.write("<br>", carros[1]);
document.write("<br>", carros[2]);
document.write("<br>", carros[3]);
document.write("<br>", carros[4]);
document.write("<br>", carros[5]);
document.write("<br>", carros[6]);
*/

var inicial = 0;
var final = 6;

while (inicial <= final) {
  document.write("<br>", carros[inicial]); // Gol Fox Palio
  inicial = inicial + 1; // incremento
}

document.write("<br><br><hr>");

var inicial = 6;
var final = 0;

while (inicial >= final) {
  document.write("<br>", carros[inicial]);
  inicial = inicial - 1; // decremento
}

document.write("<br><br><hr>");

// 1 - 2 - 3 - 4 - 5 ... 98 - 99 - 100

var inicial = 1;
var final = 100;

while (inicial <= final) {
  if (inicial == final) {
    document.write(inicial);
  } else {
    document.write(inicial, " - ");
  }

  // inicial = inicial + 1;
  // inicial++;
  inicial += 1;
}

document.write("<br><br><hr>");

// 100 - 98 - 96 ... 0

var numero = 100;

while (numero >= 0) {
  document.write(numero);
  if (numero > 0) {
    document.write(" - ");
  }
  numero -= 2;
}

document.write("<br><br><hr>");

// 5 x 0 = 0
// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50

// var inicial = 0;

// while (inicial <= 10) {
//   // document.write("5 x " + inicial + " = " + inicial * 5 + "<br>");
//   document.write(`5 x ${inicial} = ${inicial * 5} <br>`);
//   inicial++;
// }

document.write("<hr><br>");


// 5 x 0 = 0

var contador = 1;
var limite = 10;

while (contador <= limite) {
  var base = contador;
  var fator = 0;
  
  while (fator <= limite) {
    document.write(`${base} x ${fator} = ${base * fator} <br>`);
    fator++;
  }

  contador++;
  document.write("<hr>");
}
