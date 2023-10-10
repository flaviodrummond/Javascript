/* Controle de Fluxo - Condicionais - IF / ELSE

if -> Se
else -> Se não

Operadores de comparaação

> maior que
< menor que
== igual que

*/

const notaDoAluno = 5
const notaDeReprovacao = 7
if(notaDoAluno > notaDeReprovacao) {
    console.log('Parabéns, você foi Aprovado') // Se for verdadeiro o If vai executar
} else {
    console.log('Você foi reprovado') // Se for falso o If vai ingnorar
}

const age = 38
if(age >= 18){
    console.log('A pessoa é MAIOR de idade')
}
else {
    console.log('A pessoa é MENOR de idade')
}

const senhaDoUsuario = "Broliveifl2"
const senhaDigitada = "Brolivelfl4"

if(senhaDoUsuario == senhaDigitada) {
    console.log('Seja bem-vindo, Você está logado')
} else {
    console.log('Senha incorreta, favor digitar a senha')
}