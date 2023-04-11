/* Crie 5 objetos nesse formato { nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" } 
Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo, a pessoa deve ser maior de idade e brasileira para ser aprovada.Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente. */

const personZero = {
    Nome: "Flávio",
    Idade: 38,
    sex: "male",
    carrer: "Desenvolvedor Front-end",
    Nationality: "brasileiro"
}

const personOne ={
    Nome: "Rosiane",
    Idade: 15,
    sex: "female",
    carrer: "Dona do lar",
    Nationality: "brasileira"
}

const personTwo ={
    Nome: "Douglas",
    Idade: 39,
    sex: "male",
    carrer: "Analista de rede",
    Nationality: "inglesa"
}

if(personZero.Idade >= 18 && personZero.Nationality === "brasileira" || personZero.Nationality === "brasileiro") { // Se a pessoa for >= 18 e (&&) nacionalidade for igual (===) a brasileira ou (||) igual (===) brasileiro
    console.log('Flávio, você foi aprovado no processo')
} else { // Caso contrário, não for nenhuma das afirmativas acima, será reprovado.
    console.log('Flávio, você foi reprovado no processo')
}

if(personOne.Idade >= 18 && personOne.Nationality === "brasileira" || personOne.Nationality === "brasileiro") {
    console.log('Rosiane, você foi aprovado no processo')
} else {
    console.log('Rosiane, você foi reprovado no processo')
}

if(personTwo.Idade >= 18 && personTwo.Nationality === "brasileira" || personTwo.Nationality === "brasileiro") {
    console.log('Douglas, você foi aprovado no processo')
} else {
    console.log('Douglas, você foi reprovado no processo')
}