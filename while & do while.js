/* Estruturas de Repetição - WHILE (Enquanto)
While -> Verifique se é true e faça
Do while -> Faça, e depois veja se é true

*/

let index = 0 // let começa em 0
while (index < 50) // O while irá executar enquanto o index for menor que 50 
{
    console.log(index)
    index += 2 // Quero que ele conte de 5 em 5
}

let i = 191941519516196454
while (i > 1) {
    console.log(i)
    i /= 10 // dividindo por 10
}

let number = 0

do {
    number++
    console.log(number)
} while (number < 8);