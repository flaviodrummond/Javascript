/* Estrutura de Repetição - For Of */

let myName =  'Flávio'
let allNames = ['Carla', 'Joneir', 'Carlos', 'Pedro']

 for (let letter of myName) {
     console.log(letter)
 }

for (let name of allNames){ // A vantagem do FOR OF é não avisar quando ele vai parar, pois ele vai executando enquanto tiver array ou string, quando terminar, ele sabe que tem que parar
    console.log(name)
}