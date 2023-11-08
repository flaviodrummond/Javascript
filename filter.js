/* Filter
Cria um novo array, a partir do array percorrido (array original).
Cria um novo array apenas com os elementos filtrados.

- Aceita 3 parâmetros:
item do array;
index;
array completo.

return true - item atual para para o novo array
return false -  item atual, não passa para o novo array 
*/

const number = [12, 33, 41, 25, 68, 74, 89, 90, 110, 147, 216, 351]

const newNumber = number.filter(newList => {
    if(newList < 120 && newList %2 === 0) return true // O número tem que ser menor que 120 e par
    else return false
})

console.log(newNumber)

/* Também pode ser feito dessa forma mais convencional

const newNumber = number.filter(newList => {
    if(newList < 120 && newList %2 === 0) { 
        return true
    } else {
        return false
    }
})

console.log(newNumber) */