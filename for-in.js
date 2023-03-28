/* Estrutura de Repetição - FOR IN */

const student =  {
    Name:"Camila",
    Age: 25,
    Genere: "Female",
    City: "Vila Velha"
}

for (let property in student){ // Vai pegar todas as propriedades do meu objeto
    console.log(property) // Quando vamos acessar um objeto, pegamos o nome do objeto. Ex: console.log(student.Name) e ele mostrará o nome, mas também podemos fazer de outra forma. Ex: console.log(student["name"]), dará a mesma resposta, as duas formas estão corretas.
}

const newStudent =  {
    Name:"Filipe",
    Age: 42,
    Genere: "Male",
    City: "Rio de Janeiro"
}

for (let style in newStudent){ 
    console.log(newStudent[style]) // A cada passagem, ele irá mostrar os dados descritos na informação
}

const person =  {
    Name:"Ketlyn",
    Age: 15,
    Genere: "Female",
    City: "Ceará"
}

for (let property in person){ 
    console.log(`${property}: ${person[property]}`) // Irá mostrar toda a descrição e informação do preenchimento.
}