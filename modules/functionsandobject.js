function sum (oneNumber, twoNumber) {
    return oneNumber + twoNumber
}

function multiply (firtNumber, seccondNumber) {
    return firtNumber * seccondNumber
}

const user = {nome: "Flávio Drumond"}

module.exports = {sum, multiply, user} 

// Criamos duas funções e uma variável em um módulo e depois exportamos todos eles para outro módulo, usando o module.exports = {sum, multiply, user} 