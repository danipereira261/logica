var numeroJogo = 0
function jogar(){
    numeroJogo = numeroJogo + 1

var numeroMisterioso = pegaNumero("Digite o número misterioso!");
var chute = pegaNumero("Chute qual é o número misterioso!")

if (chute == numeroMisterioso){
    mostra (`Jogo ${numeroJogo} : Acertou! O número era ${numeroMisterioso} `)}

    else{
        mostra (`Jogo ${numeroJogo}: Errou! O número era ${numeroMisterioso}`)}

}