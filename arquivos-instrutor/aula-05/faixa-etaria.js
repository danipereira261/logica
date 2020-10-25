console.log("=== FAIXA-ETARIA.JS ===");

function calculaFaixaEtaria() {
  console.log("calculando faixa...");

  // input
  var idade = document.getElementById("idade").value;
  var resultado = "";

  // processing
  if (idade <= 12) {
    resultado = "criança";
  } else if (idade < 18) {
    resultado = "adolescente";
  } else if (idade < 65) {
    resultado = "adulto";
  } else {
    resultado = "idoso";
  }

  // output
  document.getElementById("faixa").value = resultado;

}
