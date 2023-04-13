/* Arrow Function (=>) 
É uma forma de escrever uma função mais resumida. */

const sum = (number1, number2) => number1 / number2
 
/* Ao invés de fazer uma função dessa forma:

const sum = function (number1, number2){
    const result = number1 / number2
    return result
}

No formado Arrow function eu preciso declarar uma variável para guardar a arrow function (const sum), depois coloco o sinal de (=), coloco os parâmetros (number1, number2). Ai que as coisas começa a mudar, pois eu não preciso escrever function, pois o javascript já entende que é uma função pelo fato desses sinais (=>).

E o legal que não precisa escrever return, pois só colocar após o sinal (=>) dessa forma (number1 / number2), ele já retorna automaticamente

Mas se o código for maior eu posso colocar dessa forma:

const sum = (number1, number2) => {
    number1 / number2
} 

Mas lembrando que eu perco o meu retorno, então teria que entrar com o return, dessa forma:

const sum = (number1, number2) => {
    return number1 / number2
} 

Se na arrow function não tem paramêtros, ela ficará desse jeito:

cons sum = () => 

Caso ela tenha um parâmetro, ela ficará assim:

const sum (number1) =>  */

let one = 120
let two = 2

console.log(`O meu primeiro número é ${one}`)
console.log(`O meu segundo número é ${two}`)

let result = sum(one,two)

console.log(`O resultado deles é ${result}`)