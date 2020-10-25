console.log("===ESTRUTURA-REPETICAO.JS===")

//var carros = "Gol Fox Palio Celta Uno";
//carros = carros.split(" "); // lista ou array
//console,log(carros);

// var inicial = 0;
// var final = 6;

// while (inicial <= final) {
//     document.write("<br>", carros[inicial])
//     inicial = inicial +1
// }

// var inicial = 0;
// var final = 100;

// while (inicial <= final) {
//     document.write(inicial = inicial + 1,  " - ")
//     inicial = (inicial -1, " - ")
// }

// document.write("<br><br><hr>")


// var numero = 100

// while (numero >=0) {
// document.write(numero);
// if (numero > 0){
//     document.write(" - ")
// }
// numero = numero - 2;
// }

// var base = 1;
// var fator = 0;
// var limite = 10;
// while (fator <= limite) {
//     document.write(`${base} x ${fator} = ${base * fator} <br>`)
//     fator ++
// }

// document.write("<h2>Números de 1 á 50</h2>")

// var num = 1;

// while (num <= 50) {
//     document.write(`${num}`)

//     num++
// }

// document.write("<h2>Números de 1 á 50</h2>");

// for (valor_inicial; condicao_logica; incremento_decremento){

// }

// for (var num = 1;num <= 50;num++){
//     document.write(`${num}`);
// }
// document.write("<h2>Alfabeto A-Z</h2>");

// Tabela ASCII
// A 65
// Z 90

// for (var num = "A".charCodeAt(); num <= "Z".charCodeAt(); num++){
//     document.write(`${String.fromCharCode(num)}
//     `)

// }

// document.write("<h2>Alfabeto Minúsculo z-a</h2>");

// for (var num = "z".charCodeAt(); num <= "a".charCodeAt(); num--){
//     document.write(`${String.fromCharCode(num) }`);

// }

document.write("<h2>Asteristico</h2>");

var ast = 0;
for (var lin = 1; lin <= 10; lin++) {
    document.write("<br>")
    for (var asteristico = 0; asteristico <=ast; asteristico++) {
        document.write(`${"*"}`);
       
        
    }
    ast ++;

}

document.write("<h2>V da Vingança - Desafio 3</h2><br><br>");

var ini  = 1;
var fim = 11;

for (var lin = 1; lin <= 6; lin ++){
for (var col=1; col <= 11; col++){
    if (col == ini || col == fim){
    document.write("*")
}else{
document.write("&nbsp;&nbsp")
}
}
document.write("<br>")
ini ++
fim --
}