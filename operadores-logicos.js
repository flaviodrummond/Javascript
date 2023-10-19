/* Operadores Lógicos

&& -> E
true && true = true          
true && false = false 
false && false = false

|| -> Ou
true || (ou) true = true
true || (ou) false = true
false || (ou) false = false

! -> Negação
!true = false
!false = true

*/

// &&
console.log(true && true && true)
console.log(true && true && true && false)
console.log(true && false && true && false)

const digiteSenha = true
const digiteToken = false
const numeroDaConta = true

if(digiteSenha && digiteToken && numeroDaConta){
    console.log("Você está Logado")
} else {
    console.log("Falha na Autenticação")
}

// ||
console.log(true || true || true || true)
console.log(true || false || true || false)
console.log(false || false || false || false)

if(digiteSenha || digiteToken || numeroDaConta){
    console.log("Você está Logado")
} else {
    console.log("Falha na Autenticação")
}
// !
console.log(!true)
console.log(!false)
console.log(!(true && false || true))

if(!(digiteSenha && digiteToken && numeroDaConta)){
    console.log("Você está Logado")
} else {
    console.log("Falha na Autenticação")
}
