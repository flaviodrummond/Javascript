/* Reduce
Retorna um valor (pode ser um novo array, um objeto, string, number, etc.)

Aceita 4 parâmetros:
    * Acumulador
    * Valor atual
    * index
    * array completo 
*/

const list = [1, 2, 3, 4, 5]

let newList = list.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual

}, 0) // 0 é o valor do nosso acumulador

console.log(newList)