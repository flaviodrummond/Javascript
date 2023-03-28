/* Estrutura de Repetição - For Of */

let myName =  'Flávio'
let allNames = ['Carla', 'Joneir', 'Carlos', 'Pedro']

for (let name of myName) { // 
    console.log(name)
}

for (let letter of allNames){ // A vantagem do FOR OF é não avisar quando ele vai parar, pois ele vai executando enquanto tiver array ou string, quando terminar, ele sabe que tem que parar
    console.log(letter)
}