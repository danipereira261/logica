
function criarFicha() {
    var nome = campoNome.value
    var peso = parseFloatBrasil(campoPeso.value)
    var altura = parseFloatBrasil(campoAltura.value)
    var dataNascimento = campoDataNascimento.value

    var diaMesAnoNascimento = dataNascimento.split("/")


    var diaNascimento = diaMesAnoNascimento[0]
    var mesNascimento = diaMesAnoNascimento[1]
    var anoNascimento = diaMeasAnoNascimento[2]

    var idade = calculaIdade(diaNascimento, mesNascimento, anoNascimento)

    mostra(`
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
    `)
}
