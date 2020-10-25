var carros = []; // lista vazia

function cadastrarCarro() {
    console.log("cadastrando....")

    // entrada
    var modelo = document.getElementById("modelo").value;
    var ano = document.getElementById("ano").value;
    var preco = document.getElementById("preco").value;
    var cor = document.getElementById("cor").value;

    // processamento
    var carro = {
        modelo: modelo,
        ano: ano,
        preco: preco,
        cor: cor
    };

    if (carro.modelo != "") {
        carros.push(carro);
    }

    // add na lista de carros
    console.table(carros);

    //saída
    document.getElementById("modelo").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("cor").value = "";
    document.getElementById("modelo").focus(); // foca em mim

    var linhas = "";

    for (var i = 0; i < carros.length; i++) {
        linhas += `
            <tr>
            <td>${carros[i].modelo}</td>
            <td>${carros[i].ano}</td>
            <td>${carros[i].preco}</td>
            <td>${carros[1].cor}</td>
            </tr>
`;
    }
    console.log(linhas);
document.getElementById("conteudo").innerHTML = linhas;
}

