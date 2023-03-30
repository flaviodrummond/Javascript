/* Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem. */

const drawnNumber = Math.floor(Math.random() * (10 - 1) +1); // Criando um número aleatório de 0 a 10 (número do sorteio)
const winnerNumber = Math.floor(Math.random() * (10 - 1) +1); // Criando um número aleatório de 0 a 10 (número do ganhador)

console.log (drawnNumber, "drawnNumber") // Verificar quais os números estão sendo gerados no sorteio
console.log(winnerNumber, "winnerNumber") // Verificar quais os números estão sendo gerados do ganhador

if(drawnNumber === winnerNumber){ // Se o número aleatório for igual ao número vencedor, Ganhei
    console.log('Você GANHOU')
}
else { // Caso o número não seja igual ao número do vencedor, Perdeu
    console.log('Não houve GANHADOR')
}