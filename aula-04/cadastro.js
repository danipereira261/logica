console.log("=== CADASTRO.JS ===")

function calcularTotal(){
    //input
    var preco = document.getElementById("preco").value;
    var qtd = document.getElementById("qtd").value;

    //processing

    var total = preco * qtd;

    //output

    document.getElementById("total").value = total.toFixed(2);
}