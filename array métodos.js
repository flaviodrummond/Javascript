/* Array Métodos 
- Push > Adiciona novos itens ao meu array.
- length > Diz o tamanho do nosso array.
- sort > Coloca nosso array em ordem alfabética.
- delete > delete a posição escolhida no nosso array.
*/

let fruts = ['Maça', 'Banana', 'Melão', 'Abacaxi', 'Pera']
fruts.push('Jabuticaba', 'Morango')
delete fruts [2]
console.log(fruts.length, fruts.sort())

/*
- splice > Permiti tirar e add novos itens ao nosso array.
*/

let students = ['Pedro', 'Raul', 'Bruna', 'Fernanda']
students.splice (1, 0,'Flávio') // estou add um novo item ao array. O primeiro sempre será o item, não quero retiriar ninguém da posição, por isso o 0, caso quisesse tirar alguém, entraria com o número de quantos elementos eu iria tirar.  
students.splice (0, 1) // estou tirando o primeiro nome do array. O primeiro número sempre será o item, já o segundo é quantos elementos eu quero tirar.
console.log(students)

/*
- Slice > Permite que a gente tire itens do nosso array.
*/

let person = ['João', 'Carlos', 'Thamara', 'Sandro']
let newPerson = person.slice(1, 3) // Começa a tirar do item de índice 1, caso queira que pare em algum momento, eu coloco uma segunda posição.
/* O SPLICE motifica o nosso array, tira e adiciona, conforme a gente especifíca para ele. 
Já o SLICE, não modifica o array original, ele cria um novo array, por isso precisamos armazenar uma nova variável. (let newPerson) */
console.log(newPerson)

/*
- Pop > Tira o último item do array.
- Shift > Tira o primeiro item do array.
*/

let personOne = ['Deise', 'Robert', 'Igor']
personOne.pop()
personOne.shift()
console.log(personOne)
