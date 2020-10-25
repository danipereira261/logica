console.log("=== ESTRUTURA-REPETICAO-2.JS ===");

document.write("<h2>Números de 1 à 50</h2>");

var num = 1; // valor inicial

while (num <= 50) { // condicao logica
  document.write(`${num} `);
  num++; // incremento | decremento
}

document.write("<h2>Números de 1 à 50</h2>");

// for (valor_inicial; condicao_logica; incremento_decremento) {
// }

for (var num = 1; num <= 50; num++) {
  document.write(`${num} `);
}

document.write("<h2>Alfabeto A-Z</h2>");

// A 65
// Z 90
// String.fromCharCode(65) -> A
// "A".charCodeAt() -> 65

function getNumFromLetter(letter) {
  return letter.charCodeAt();
}

for (var i = "A".charCodeAt(); i <= getNumFromLetter("Z"); i++) {
  document.write(`${ String.fromCharCode(i) } `);
}

document.write("<h2>Alfabeto Minúsculo z-a</h2>");

for (var i = "z".charCodeAt(); i > "a".charCodeAt(); i--) {
  document.write(`${ String.fromCharCode(i) } `);
}


document.write("<h2>Asteriscos - Desafio 1</h2>");

// DESAFIO 1
// ========= 

// **********
// **********
// **********

for (var lin=1; lin <= 3; lin++) {
  for (var col=1; col <= 10; col++) {
    document.write("*");
  }
  document.write("<br>");
}


document.write("<h2>Asteriscos - Desafio 2</h2>");

// DESAFIO 2
// =========

// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********

for (var lin = 1; lin <= 10; lin++) {
  
  for (var col = 1; col <= lin; col++) {
    document.write("*");
  }
  
  document.write("<br>");
}


// DESAFIO 3
// =========

// *=========*
// =*=======*=
// ==*=====*==
// ===*===*===
// ====*=*====
// =====*=====

document.write("<h2>V da Vingança - Desafio 3</h2>");

var ini = 1;
var fim = 11;

for (var lin=1; lin <= 6; lin++) {
  for (var col=1; col <= 11; col++) {
    if (col == ini || col == fim) {
      document.write("*");
    } else {
      document.write("="); // &nbsp;&nbsp;
    }
  }
  document.write("<br>");
  ini++;
  fim--;
}







document.write("<br><br><br><br>");








