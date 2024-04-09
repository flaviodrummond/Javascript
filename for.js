/* Estrutura de repetição - FOR */

/* Primeira coisa que temos que colocar dentro do for é a variável (let, var ou const) e tenho que dá o valor para ela. ex: for (let i = 0;).

Segundo parâmetro é até quando o for vai contar. No caso de números, quero que ele conte até 10.
ex: for (let i = 0; i < 10;). Então enquanto ele for menor que 10, ele irá se repetir.

Terceiro parâmetro é o que vai acontecer em cada ciclo, no meu caso, eu quero que o i seja somado por ++1. 
ex: for(let i = 0; i < 10; i++)

Dentro do meu console.log coloco minha variável que é o i. 
ex: console.log(i)

Enquanto ele não terminar de executar, ele não entra no próximo passo. */

for (let index = 0; index <= 10; index++) {
    console.log(index)
}

const students = ['Ana', 'Pedro', 'Flávio', 'Gustavo', 'Rosiane', 'Ketlyn']

for (let index = 0; index < students.length; index++) { // o length vai me mostrar o tamanho do meu array

    console.log(`${students[index]} está presente a aula`) // Sinal de crase para acrescentar a mensagem dentro do console.log
    
}


let user =  ['Flávio', 'Rosiane', 'Thiago', 'Igor', 'Elba', 'Claudio', 'Carlos', 'Januario', 'Luciele', 'Arthur', 'Wendel', 'Jaqueline']

for(let i = 0; i < user.length; i++){
    console.log(user[i])

}

const contact = ['Gustavo', 'Ketlyn', 'Rosiane', 'Fabrício', 'Edir', 'Rosimar', 'Valdecir']
for(let i = 0; i < contact.length; i++){
    console.log(`${contact[i]} é da minha família`)
}