const students = [
    {name: 'Flavio', finalGrade: 8},
    {name: 'Rosiane', finalGrade: 6},
    {name: 'Gustavo', finalGrade: 2},
    {name: 'Ketlyn', finalGrade: 5},
    {name: 'Fabricio', finalGrade: 3},
    {name: 'Carlos', finalGrade: 7}
]

let student = students.map(final => {
    return {
        name: final.name,
        studentStatus: final.finalGrade >=5 ? 'Aprovado' : 'reprovado'
    }
})

console.log(student)