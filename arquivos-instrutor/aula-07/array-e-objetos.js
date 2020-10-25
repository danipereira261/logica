console.log("=== ARRAY E OBJETOS ===");

// Estrutura de Dados
// Gol, Fusca, Palio, Corsa, 147

// Má Prática
// var carro1 = "Gol";
// var carro2 = "Fusca";
// var carro3 = "Palio";

var carros = []; // conjunto ou lista ou array (vazio)

// contexto.comando();
carros.push("Gol");
carros.push("Fusca");
carros.push("Palio"); // add no final
carros.unshift("Corsa"); // add no começo
carros.unshift("Fiat 147");
carros.splice(3, 0, "Fox"); // add numa pos X
carros.splice(1, 1, "Uno"); // substitui na pos X
carros.sort(); // ordena os dados
carros.reverse();
carros.splice(1, 1); // remove na pos X
console.log( carros.indexOf("Fusca") );
carros.splice(carros.indexOf("Fusca"), 1);
carros.pop(); // remove o ultimo
carros.shift(); // remove o primeiro

console.log( carros, carros.length );

// Objetos
var carro1 = {
  modelo: "Gol",
  ano: 2020,
  cor: "prata",
  preco: 25000,
  motor: 1.6
};

var carro2 = {
  modelo: "Fox",
  ano: 2018,
  cor: "preto",
  preco: 40000,
  motor: 1.0
};

console.log(carro1);
console.log(carro2);

var autos = [];
autos.push(carro1);
autos.push(carro2);
autos.push({
  modelo: "Tucson",
  ano: 2015,
  cor: "branca",
  preco: 70000,
  motor: 2.0
})

console.table(autos);
