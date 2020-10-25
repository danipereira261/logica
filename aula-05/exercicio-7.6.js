var numeroFicha = 0;


function criaFicha() {
    numeroFicha = numeroFicha + 1
    var nome = campoNome.value
    var peso = parseFloatBrasil(campoPeso.value)
    var altura = parseFloatBrasil(campoAltura.value)


    var dataNascimento = campoDataNascimento.value
    var diaMesAnoNascimento = dataNascimento.split("/")
    var diaNascimento = diaMesAnoNascimento[0]
    var mesNascimento = diaMesAnoNascimento[1]
    var anoNascimento = diaMesAnoNascimento[2]
    var idade = calculaIdade(diaNascimento, mesNascimento, anoNascimento)



    var temProblemasCardiacos = campoProblemasCardiacos.checked
    var fraseAcompanhamentoMedico
    var ehCrianca = idade < 16

    if (temProblemasCardiacos || ehCrianca) {
        fraseAcompanhamentoMedico = "Necessita de acompanhamento médico"
    }
    if (!temProblemasCardiacos && !ehCrianca) {
        fraseAcompanhamentoMedico = "NÃO necessita de acompanhamento médico"
    }

    mostra(`
    <hr>
    Ficha ${numeroFicha}
        <hr>
        Nome: ${nome}
        <br>
        Peso: ${formataFloatBrasil(peso)} kg
        <br>
        Altura: ${formataFloatBrasil(altura)} m
        <br>
        Data de Nascimento: ${dataNascimento}
        <br>
        Idade: ${idade} anos
        <br>
        ${fraseAcompanhamentoMedico}
  `)
}