/* Operadores Typeof e Delete */

/* Typeof - dá o poder de saber qual é o tipo daquela variável.
Delete -  coloco apenas o que eu quero deletar dentro do meu objeto */

const myNumber = 15

console.log(typeof myNumber)

const myString = "Olá Mundo"

console.log(typeof myString)

const myObject = {
    name: "Flavio",
    age: 38,
    height: 1.69,
}

console.log(typeof myObject)


const objectOne = {
    name: "Rosiane",
    age: 37,
    height: 1.65
}

delete objectOne.height

console.log(objectOne)