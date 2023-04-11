/* Operadores Lógicos

&& -> E
true && true = true          
true && false = false 
false && false = false

|| -> Ou
true || true = true
true || false = true
false || false = false

! -> Negação
!true = false
!false = true

*/

// &&
console.log(true && true && true)
console.log(true && true && true && false)
console.log(true && false && true && false)

// ||
console.log(true || true || true || true)
console.log(true || false || true || false)
console.log(false || false || false || false)

// !
console.log(!true)
console.log(!false)
console.log(!(true && false || true))
