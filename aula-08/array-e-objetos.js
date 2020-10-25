var carros = [];
carros.push("Gol"); // add no final
carros.unshift("Corsa"); // add no começo
carros.splice(1, 2, "Ka"); // add numa posiçao x
carros.pop(); // remove o ultimo
carros.shift(); // remove o primeiro
carros.sort(); // ordena os dados
carros.reverse(); 


console.log(carros, carros.length);


// Objetos

var carro1 = {
    modelo: "Gol",
    ano: 2020,
    preço: 25000,
    motor: 1.6

};
var carro2 = {
    modelo: "Ka",
    ano: 2021,
    preço: 60000,
    motor: 1.5

};
console.log(carro1)
console.log(carro2)

var autos = [];

autos.push(carro1);
autos.push(carro2)
console.table(autos);