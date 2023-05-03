/* As três estruturas montadas daram a mesma informação, só muda que cada uma está montada de uma forma diferente.
Qual usar ? ai vai de vc escolher, o importante é economizar código.  */

let number = [1, 2, 3, 4, 5]
/* let newArray0 = number.map((number) =>{
    return number * 4
})

let newArray1 = number.map(function(number){
    return number * 3
})

let newArray2 = number.map((number => number * 5)) // Quando é um código simples, posso montar dessa forma, sem quebra de chaves, pois com a quebra de chaves sou obrigatório colocar o return, mas quando coloco na mesma linha, o javascript coloca automático um return pra mim. Caso eu tenha que colocar dois parâmetros, ai preciso de colocar parentes e ai preciso colocar o return.

console.log(newArray) */

const double = numbers => numbers * 4
const toReal = numbers => `R$ ${numbers.toFixed(2)}`
const minus = numbers => numbers - 3
const newArray3 = number.map(double).map(minus).map(toReal)
console.log(newArray3)
