// pop - Remove o último elemento de um array.

const array1 = [1, 2, 3]
array1.pop()
console.log(array1)

// shift - Remove o primeiro elemento de um array

const array = ['Flávio', 'Sara', 'Alan']
array.shift()
console.log(array)

/*
 slice - O método slice() retorna um novo array, apenas com as informações escolhidas

    1) Posição do array da qual vamos começar a pegar as informações para criar o novo array
	2) Posição final do array que vamos pegar os dados
*/

const users = ["João", "Maria", "Pedro", "Michele", "Fernando"]
const newUser = users.slice(1, 3)

console.log(newUser)

/* 
splice - Esse metódo remove ou adiciona elementos em um array em uma posição específica.

     1) Posição do array da qual vamos começar a tirar as informações 
	 2) Quantos elementos eu quero retirar a partir da posição inicial 
	 3) Item que você quer adicionar
*/

const name = ["João", "Maria", "Pedro", "Michele", "Fernando"]
name.splice(1, 2, 'Frederico')

console.log(name)