/* Escreva um programa onde você chame uma função mandando dois argumentos, dois números, e a função responde qual o número maior */

let numbers = (numberOne, numberTwo) => {
    if (numberOne > numberTwo){
        console.log(`O primeiro número é ${numberOne} então ele é Maior que ${numberTwo} `)
    } else {
        console.log(`O segundo número é ${numberTwo} então ele é Maior que ${numberOne}`)}
}

numbers (10,6)