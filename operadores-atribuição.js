/* Operadores de Atribuição
= -> Atribuição
+= -> Adição
-= -> Subtração
/= -> Divisão
*= -> Multiplicação
%= -> Resto
**= -> Exponencial
*/

let firstNumber = 20
firstNumber = firstNumber + 5 // usando a variável duas vezes para achar o valor
console.log(firstNumber)

let result = 10
result += 60
console.log(result) // Está adição é a mesma do que (result = result + 60). O que muda apenas é economizar código.

let myNumber = 15
myNumber **=3 // As invés de fazer a variável duas vezes, posso simplificar usando as atribuições
console.log(myNumber)

let oneNumber = 40
oneNumber %= 3
console.log(oneNumber)