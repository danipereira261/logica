var numeroJogo = 0
function jogar() {
    numeroJogo = numeroJogo + 1

    var numeroSorteado = parseInt(Math.random() * 100)
    var chute = pegaNumero("Qual número você acha que foi sorteado?")

    if (chute < 0 || chute > 100) {
        chute = pegaNumero("Número inválido. Ele está entre 0 e 100. Tente de novo aí")

    }

    if (chute == numeroSorteado) {
        mostra(` Ual! Você acertou! O número sorteado era ${numeroSorteado}`)
    } else {
        mostra(`Você errou! O número sorteado era ${numeroSorteado}`)
    }
}