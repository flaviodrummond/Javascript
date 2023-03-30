/* Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor. */

// Crio meus 3 números inteiros
const numberOne = 0
const numberTwo = 25
const numberTree = 120

if(numberOne > numberTwo && numberOne > numberTree){ // Vamos verificar se o primeiro número é maior que o segundo e se o primeiro número é maior que o terceiro
    console.log('O primeiro é o Maior')
}
if(numberOne < numberTwo && numberOne < numberTree){ // Vamos verificar se o primeiro número é menor que o segundo e se o primeiro número é menor que o terceiro
    console.log('O primeiro é Menor')
}
if(numberTwo > numberOne && numberTwo > numberTree){ // Vamos verificar se o segundo número é maior que o primeiro e se o segundo número é maior que o terceiro
    console.log('O segundo é Maior')
}
if(numberTwo < numberOne && numberTwo < numberTree){ // Vamos verificar se o segundo número é menor que o primeiro e se o segundo número é menor que o terceiro
    console.log('O segundo é Menor')
}
if(numberTree > numberOne && numberTree > numberTwo){ // Vamos verificar se o terceiro número é maior que o primeiro e se o terceiro número é maior que o segundo
    console.log('O terceiro é Maior')
}
if(numberTree < numberOne && numberTree < numberTwo){ // Vamos verificar se o terceiro número é menor que o primeiro e se o terceiro número é menor que o segundo
    console.log('O terceiro é Menor')
}

/* Também existe uma forma diferente de se resolver este desafio */

const oneNumber = 501
const twoNumber = 47
const treeNumber = 8

if(oneNumber > twoNumber && oneNumber > treeNumber){
    console.log('O primeiro é Maior')
} else if (twoNumber > treeNumber) {
    console.log('O segundo é Maior')
} else {
    console.log('O terceiro é Maior')
}

if(oneNumber < twoNumber && oneNumber < treeNumber){
    console.log('O primeiro é Menor')
} else if (twoNumber < treeNumber) {
    console.log('O segundo é Menor')
} else {
    console.log('O terceiro é Menor')
}