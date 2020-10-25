console.log("===FAIXA ETARIA.JS ===")

function calculaFaixaEtaria(){


    // input
var idade = document.getElementById("idade").value;
var resultado = "";

// processing
if (idade >= 0 && idade <= 12) {
    resultado = "Criança";
} else if(idade >= 13 && idade < 18) {
    resultado = "Adolescente";
} else if(idade >= 19 && idade < 65){
    resultado = "Adulto";
} else if (idade >= 65 && 130)
    resultado = "Idoso"

}

    // output
document.getElementById("faixa").value = resultado;

