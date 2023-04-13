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
        default: result = number1 + number2
            break;
    }

    return result
}

console.log(calculator(15, 8, '+'))
console.log(calculator(30, 10 , '-'))
console.log(calculator(8, 5, '*'))
console.log(calculator(10, 5, '/'))