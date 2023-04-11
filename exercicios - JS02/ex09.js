/* Faça um programa onde ele lê 4 números. Em cada caso, ele deve retornar a mensagem condizente: Todos os números são ímpares => TODOS OS NÚMEROS SÃO ÍMPARES. Todos os números são pares => TODOS OS NÚMEROS SÃO PARES */

let numberOne = 7
let numberTwo = 98
let numberThree = 33
let numberFor = 10

if (numberOne % 2 === 0 && numberTwo % 2 === 0 && numberThree % 2 === 0 && numberFor % 2 === 0) { // Se o numberOne dividido por 2 for igual a 0 e (&&) todos os demais, será par
    console.log("Todos os números são pares")
} else if (numberOne % 2 !== 0 && numberTwo % 2 !== 0 && numberThree % 2 !== 0 && numberFor % 2 !== 0){ // No sinal de igual eu coloco interrogação (!) para informar que se todos forem diferentes de 0, significa que sobrou resto, se estão sobrou resto será ímpar
    console.log("Todos os números são ímpares")
} else {
    console.log("Todos os números estão misturados") // Se todos os números não forem nem ímpar e nem pares, todos serão misturados.
}

