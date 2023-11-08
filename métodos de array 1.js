// Push: Adiciona mais um item ao array;

let array = [1, 2, 4, 5, 10]
 array.push(12)
 console.log(array)

 // length: Mostra o tamanho do array. A quantidade de itens dentro do array

 const number = [1, 2, 3, 4]
 console.log(number.length)

 // sort: Organiza o array

 const fruit = ['melão', 'jamelão', 'morango', 'uva', 'abacaxi']
 fruit.sort()
 console.log(fruit)

 // delete: Deleta um item do array. O item é deletado, mas o espaço fica vazio. Retornando undefined

 const name = ['Maria', 'João', 'Carlos', 'Antônio']
delete name [2]
console.log(name)

// every:  Esse método testa se todos os elementos do Array passam em uma condição. Passamos uma função que retorna true ou false. Se todos os retornos forem true, significa que todos os elementos passaram no teste, e a função retornará true. Se algum item não estiver de acordo, ele retornará false.

const users = [
	{name: 'Nico', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Joana', credit: 300},
	{name: 'Vanessa', credit: 200},
]

const isTrue = users.every(user => user.credit > 100 && user.credit < 500)
console.log(isTrue)

// some: faz algo parecido com o .every(). A diferença é que o .every() só retorna true se todos os elementos passarem no teste. O .some() retorna true se pelo menos um elemento do Array passar no teste.

const client = [
	{name: 'Nico', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Joana', credit: 300},
	{name: 'Vanessa', credit: 200},
]

const user = client.some(client => client.credit > 800)
console.log(user)

/* fill: Preenche posições do array como desejarmos
	fill(1, 2, 3) 
	1) O que vai ser colocado no array
	2) A posição inicial 
	3) Posição final
*/

const one = [1, 2, 3, 4]
one.fill(10,1,2) // 10 é o número que irá ser colocado, 1 é a posição inicial do array, 2 é a posição final do array que ele irá parar
console.log(one)

// find: Usamos esse método quando queremos encontrar algum elemento dentro no Array. Para isso, passamos uma função que irá retornar true ou false. O primeiro true que for retornado irá finalizar a função e retornar o elemento em que estamos.

const shareholders = [
	{name: 'Nico', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Joana', credit: 300},
	{name: 'Vanessa', credit: 200},
]

const accShareholders = shareholders.find( user => user.name === 'Maria')
console.log(accShareholders)

// findIndex: Faz o mesmo que o .find(), mas retorna o índice do elemento encontrado ao invés de retornar o próprio elemento.

const contact = [
	{name: 'Nico', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Joana', credit: 300},
	{name: 'Vanessa', credit: 200},
]

const newContact = contact.findIndex(user => user.name === 'Vanessa') // Se colocar algo que ele não encontre, ele retorna o -1
console.log(newContact)

contact[newContact].name = 'Carla' // findIndex eu consigo alterar a informação que eu quero.
console.log(contact)

// concat - Esse método é usado para juntar dois arrays. Ele não altera os arrays originais, mas cria um novo array com a soma dos dois arrays escolhidos.

const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']

const array3 = array1.concat(array2)
console.log(array3)

// join - O método join() junta todos os elementos de um array.

const factor = ['água', 'fogo', 'terra']
const myFactor = factor.join(' ') // Vai tirar todos os elementos do array e vai separar as string com espaço. O que eu colocar dentro do parenteses, é a forma que irá separar as minhas strings
console.log(myFactor)