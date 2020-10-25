var numeroJogo = 0
function jogar() {
    numeroJogo = numeroJogo + 1

    var numeroMisterioso = parseInt(Math.random() * 100)
    var chute = pegaNumero("Chute qual é o número misterioso!")

    if (chute == numeroMisterioso) {
        mostra(` Ual! Você acertou! O número sorteado era ${numeroMisterioso}`)
    }

    if (chute < 0 || chute > 100) {
        chute = pegaNumero("Número misterioso inválido. Ele está entre 0 e 100. Tente de novo aí!")
    }
    else {
        mostra(`Você errou! O número sorteado era ${numeroMisterioso}`)
    }

}