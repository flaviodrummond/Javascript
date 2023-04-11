/* Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar, - é par e divisível por 5. */

let number = 15
if (number % 2 === 0){ // Primeira verificação, para saber se o número é par ou ímpar
    if (number % 5 === 0){ // Segunda verificação, é saber se ele é divisível por 5
    console.log("O número é par e divisível por 5") // Me dará a resposta se é par e divisível por 5
    } else {
        console.log("O número é par e não é divisível por 5") // Se não, me dará se for par e não divisível por 5
    }
} else {
    for (let i = 2; i < number; i++)
    if (number % i === 0) { // Se algum momento ele entrar aqui e fizer uma divisão entre o 2 e o número do number, e for divisível, ele não é um número primo. Ou seja, é ímpar e não é primo.
        console.log("Ele é ímpar, mas não é primo")
        break // Assim que ele cai no for, ele não é primo. O break interrompe a execução do for e executa o else
    } else {
        if (i === number -1) { // ao fazer a passagem, ele não caiu para a passagem de baixo, por isso adicionamos o - 1
            console.log("Ele é um número primo")
        }
    