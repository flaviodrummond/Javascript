/* Function - Return */

function sum (number1, number2){
    let result = number1 + number2
    return result
}

const numberOne = 42
const numberTwo = 11 

console.log(`O primeiro número é ${numberOne}`)
console.log(`O segundo número é ${numberTwo}`)
console.log(`A soma dos dois é ${sum(numberOne, numberTwo)}`)

// Porém existe outra forma de chamar a função, vejamos aqui:

function test (oneNumber, twoNumber){
    let valor = oneNumber - twoNumber
    return valor 
}

const zero = 80
const one = 25

console.log(`O primeiro número é ${zero}`)
console.log(`O segundo número é ${one}`)

const valor = test(zero, one) // Ao invés de chamar a função abaixo, criei uma variável e peguei a minha função e falei para a variável assumir o valor dessa função

console.log(`E a soma dos dois é ${valor}`) 