/* 
MAP
- Cria um novo array, a partir do array percorrido (array original)
- Cria um novo arrray, com a mesma quantidade de itens do array original
- Aceita 3 parâmetros
- Item do array;
- Index;
- Array completo.
*/


let number = [1, 2, 3, 4, 5]
let newArray = number.map((number) =>{
    return number * 4
})

console.log(newArray)

let newStudents = [
    {name: 'Fabrício', age: 44},
    {name: 'Rosiane', age: 37},
    {name: 'Flávio', age: 38},
    {name: 'Rosália', age: 48},
    {name: 'Cristina', age: 21},
    {name: 'Amanda', age: 18},
];

let students = newStudents.map((student) =>{
    let newStudent = {
        name: student.name + ' Drumond',
        age: student.age - 3
    }
    return newStudent
}) 
console.log(students)