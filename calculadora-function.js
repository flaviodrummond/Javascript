/* Function - Calculadora 

Nossa calculadora precisa ter 4 operações que são elas:
Somar (+), dividir (/), subtrair (-) e multiplicar (*)

*/

const calculator = (number1, number2, operation) => {

    let result

    switch (operation) {
        case "+":
            result = number1 + number2
            break;
        case "-":
            result = number1 - number2
            break;
        case "*":
            result = number1 * number2
            break;
        case "/":
            result = number1 / number2
            break;    
        default: 
            result = number1 + number2
            break;
    }

    return result
}

console.log(calculator(15, 8, '+'))
console.log(calculator(30, 10 , '-'))
console.log(calculator(8, 5, '*'))
console.log(calculator(10, 5, '/'))


let calculation = (oneNumber, twoNumber, operacion) => {
    let result

    switch (operacion) {
        case '+':
            result = oneNumber + twoNumber
            break;
        case '-':
            result = oneNumber - twoNumber
            break;
        case '*':
            result = oneNumber * twoNumber
            break;
        case '/':
            result = oneNumber / twoNumber
            break;
    
        default:
            result = ('Não foi possível resolver esse calculo, pois não foi encontrado a operação')
            break;
    }

    return result

}

console.log(calculation(2, 3, '+'))
console.log(calculation(3, 5, '='))
console.log(calculation(10, 7, '*'))
console.log(calculation(50, 5, '/'))