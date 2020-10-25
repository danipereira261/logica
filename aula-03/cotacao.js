console.log("=== COTACAO.JS ===");

function converterParaMoeda(num = 0){
    return "R$ " + num.toFixed(2).replace(".", ",");

}

function converterCambio(cambio = 0, valor = 0){
    return converterParaMoeda (cambio * valor);

}

function converter(){


// input
var valorEmDolar = document.getElementById("dolar") .value;


var cotacaoDoDIa = document.getElementById("dia") .value;


// processing

var valorEmReais = converterCambio(cotacaoDoDIa, valorEmDolar);

// output

document.getElementById("real") .value = valorEmReais;

}