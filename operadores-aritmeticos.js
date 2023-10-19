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

console.log(7%3) // Operadores de resto, só pode dividir por números inteiros e me mostra apenas o resto da operação.

let myNumber = 10 
myNumber++ /* A cada Incremento (++) inserido, irá adicionando +1 no valor final do número.
Assim como cada Decremento (--) inserrido, irá retirar -1 no valor final do número. */
myNumber++
myNumber++
console.log(myNumber) /* Também posso está colocando o ++ dentro do console.log, antes da variavél. ex:console.log(++myNumber) */

let numberZero = 15
console.log(++numberZero) /* Também para fazer um incremento ou decremento, poderemos usar este modelo,
 com o sinal antes da variável para adicionar ou diminuir o valor final */

 console.log(2 ** 3) /* Nesse caso, usamos a exponeciação (**) para elevar ao número desejado */