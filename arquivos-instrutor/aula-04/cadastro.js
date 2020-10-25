console.log("=== CADASTRO.JS ===");

function calcularTotal() {
  console.log("calculando...");

  // input
  var preco = document.getElementById("preco").value;
  var qtde = document.getElementById("qtde").value;
  console.log(preco, qtde);

  // processing
  var total = preco * qtde;

  // output
  document.getElementById("total").value = total.toFixed(2);
}
