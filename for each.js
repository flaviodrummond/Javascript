/* FOR EACH - É uma função e serve para percorrer os array */

let students = [
    {name: 'Fabrício', age: 44},
    {name: 'Rosiane', age: 37},
    {name: 'Flávio', age: 38},
    {name: 'Rosália', age: 48},
    {name: 'Cristina', age: 21},
    {name: 'Amanda', age: 18},
];

let studentsAge = 0

students.forEach( (students) => {
    studentsAge += students.age
})

let averageAge = studentsAge / students.length
console.log(`A média dos alunos é ${averageAge.toFixed()} anos`)

/*


*/

let newStudents = [
    {name: 'Fabrício', age: 44},
    {name: 'Rosiane', age: 37},
    {name: 'Flávio', age: 38},
    {name: 'Rosália', age: 48},
    {name: 'Cristina', age: 21},
    {name: 'Amanda', age: 18},
];

let newStudentsAge = 0

students.forEach( (newStudent, index) => {
    console.log(`O aluno(a) chama-se ${newStudent.name}, tem ${newStudent.age} anos e está na posição ${index} do array`)
})