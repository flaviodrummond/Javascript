// Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado. Ex: João e João, imprime false. João e Maria, imprime true.

const firstName = "Flávio"
const secondName = "Flávio"

const names = firstName !== secondName // Para que imprima false, sendo que os dois nomes são iguais, usamos a exclamação (!) antes do sinal de igual. Assim também é o mesmo para com dois nomes diferentes, imprima true.

console.log(names)

const nameOne = "Flávio"
const nameTwo = "Rosiane"

const compare = nameOne !== nameTwo //  Quando for diferente, apenas usamos o sinal de exclamação (!), antes do sinais de iguais.
console.log(compare)