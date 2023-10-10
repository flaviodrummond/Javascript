/* 1. Escreva um programa que exiba "Olá, mundo!" no console. */

let frase = 'Olá Mundo !'
console.log(frase)

/* 2. Escreva um programa que calcule a média de três números e exiba o resultado no console.
    - Para calcular a média você só precisa somar os 3 números e dividir por 3. */

    let numberOne = 125
    let numberTwo = 5
    let numberTree = 80

    let result = (numberOne + numberTwo + numberTree) / 3

    console.log(result)

    /* 3. Escreva um programa que verifique se um número é maior que 10 e exiba o resultado no console. */

    let idade = 18
    if(idade > 10) {
        console.log(`Este número é maior que 10, é ${idade}.`)
    } else {
        console.log(`Este número é menor que 10, é ${idade}.`)
    }

    /* 4. Escreva um programa que verifique se um número é positivo e exiba o resultado no console. */

    let number = 38

    if(number > 0){
        console.log('Este número é Positivo')
    } else {
        console.log('Este número é negativo')
    }
    
    /* 5. Escreva um programa que calcule a soma de dois números e exiba o resultado utilizando uma template string. Por exemplo, se os números forem 5 e 3, o programa deve exibir "A soma de 5 e 3 é igual a 8". */

    let number1 = 120
    let number2 = 8

    let resultado = (number1 + number2)
    console.log(`A soma de ${number1} e ${number2} é igual a ${resultado}`)