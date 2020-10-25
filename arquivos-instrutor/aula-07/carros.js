var carros = []; // lista vazia

function cadastrarCarro() {
  console.log("Cadastrando...");

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

  // add na lista de carros
  if (carro.modelo != "") {
    carros.push(carro);
  }

  console.table(carros);

  // saida
  document.getElementById("modelo").value = "";
  document.getElementById("ano").value = "";
  document.getElementById("preco").value = "";
  document.getElementById("cor").value = "";
  document.getElementById("modelo").focus(); // foca em mim

  var linhas = "";
  
  for (var i=0; i < carros.length; i++) {
    linhas += `
      <tr>
        <td>${carros[i].modelo}</td>
        <td>${carros[i].ano}</td>
        <td>${carros[i].preco}</td>
        <td>${carros[i].cor}</td>
      </tr>
    `;
  }

  console.log(linhas);
  document.getElementById("conteudo").innerHTML = linhas;

}
