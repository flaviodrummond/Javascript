/* Funções Anônimas */

let test = function (oneNumber, twoNumber){ /* Posso tirar o nome da minha função e armazenar ela dessa forma: let test = function.
Então a minha função vira uma função anônima, ela não tem mais nome e nada muda para nós. Só para entender que tem formas diferentes. */
    let valor = oneNumber * twoNumber
    return valor 
}

const zero = 15
const one = 25

console.log(`O primeiro número é ${zero}`)
console.log(`O segundo número é ${one}`)

const valor = test(zero, one) 

console.log(`E a soma dos dois é ${valor}`) 