// Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name: "João"}, objetct1 = {name: "Maria"}. João e João imprime true. João e Maria imprime false.

const Flávio = {
    name: "Flávio Drumond",
    age: 38,
    sex: "male"
}

const Rosiane  = {
    name: "Rosiane Carlos",
    age: 37,
    sex: "female"
}

console. log(Flávio.name === Rosiane.name)
