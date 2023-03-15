/* Operadores aritméticos

+ -> Adição
- -> Subtração
* -> Multiplicação
/ -> Divisão
% -> Resto
++ -> Incremento
-- -> Decremento
** -> Exponencial
*/

console.log(7%3) // Operadores de resto, só pode dividir por números inteiros.

let myNumber = 10 
myNumber++ /* A cada Incremento (++) inserrido, irá adicionando +1 no valor final do número.
Assim como cada Decremento (--) inserrido, irá retirar -1 no valor final do número. */
myNumber++
myNumber++
console.log(myNumber)

let numberZero = 15
console.log(++numberZero) /* Também para fazer um incremento ou decremento, poderemos usar este modelo,
 com o sinal antes da variável para adicionar ou diminuir o valor final */

 console.log(2 ** 3) /* Nesse caso, usamos a exponeciação (**) para elevar ao número desejado */