/* Faça um programa onde leia um numero e diga se ele é par ou impar. */

const number = 36

if(number % 2 === 0) { // Todo número par divido por 2, é divisível. Então se todo número divido por 2 for = 0. O número é par. Usamos o operador aritmético de resto para sabermos o resto da conta, para saber se é par ou ímpar
console.log('O número é par')
} else {
    console.log('O número é ímpar')
}