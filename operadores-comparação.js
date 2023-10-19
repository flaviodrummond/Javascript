/* Operadores de Comparação
== -> Igual - Ele compara o valor, mas não compara o tipo do valor / Nunca usar
=== -> Totalmente Igual - Ele verifica o tipo de dado.

!= -> Diferentes - Ele compara o valor, mas não compara o tipo do valor / Nunca usar
!== -> Totalmente Diferente -  Ele verifica o tipo do dado.
*/

const oneNumber = "20" // "" Quando se usa aspa é string
const twoNumber = 20 // Apenas o número é number
console.log(oneNumber == twoNumber) // == Sinal de igual, porém só compara o valor e não o tipo. Ele comparou que os números são iguais, mas não comparou se um é string e o outro é number.
console.log(oneNumber === twoNumber) // === Sinal de igual, compara os valores e verifica o tipo. Já aqui, ele compara se os valores são iguais e se são string ou number.


const numberOne = "20" 
const numberTwo = 20 
console.log(numberOne != numberTwo) // != Sinal de diferente, estão comparando se os valores são diferentes
console.log(numberOne !== numberTwo) // !== Sinal de diferente, além de comparar valores, compara o tipo.