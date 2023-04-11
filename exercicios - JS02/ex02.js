/* Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO */

const person = { // Criamos um objeto "person", com as seguintes descrições do objeto
    Name: 'Brunella',
    Nationality: 'Italiana'
}

// Agora faremos a comparação se o nosso objeto é uma pessoa de nacionalidade brasileira ou estrangeira

if(person.Nationality === "brasileira") {  // Ser o person. Nationality, (pois quero saber apenas a nacionalidade da pessoa) for igual a brasileira, aparecerá no meu resultado "brasileira"
    console.log('Nacionalidade brasileira')
} else { // Caso não seja de nacionalidade brasileira, aparecerá "Nacionalidade estrangeira"
    console.log('Nacionalidade estrangeira')
}