/* Escreva um programa, onde você chame uma função enviando um número (aceitar somente valores de 1 e 10) e escrever a tabuada de 1 a 10 do valor lido */

let table = (number) => {
    if (number < 1 || number >= 10) {
        console.log('Aceitamos apenas números de 1 a 10')
        return
    }
    for (let i = 1; i <=10; i++){
        console.log(`${i} x ${number} = ${i * number}`)
    }
}

table(8) 

let tables = (numbers) => {
    if(numbers < 1 || numbers >= 10){
        console.log('Aceitamos de 1 ao 10')
        return
    }
    for(let i = 1; i <= 10; i++){
    console.log(`${i} x ${numbers} = ${i * numbers}`)
    }
}

tables (3)