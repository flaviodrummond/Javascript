/* Operadores Ternário ou Condicional
? -> Se
: -> Se não
&& -> If sem o else
*/

const rai = false // Variável falsa, Não vai chover.
const umbrela = rai ? 'Levar guarda-chuva' : 'Deixar guarda-chuva' /* Se a opção for verdadeira, vai dá a resposta para levar o guarda-chuva, caso a opção for falsa, a resposta será de deixar o guarda-chuva */
console.log(umbrela)

// Transferência de dinheiro no banco

const balance = true // Preciso ter saldo em conta
const isNotBlocked = true // Conta não pode está bloqueada
const accountExist = false // Conta de transferência tem que ser uma conta existente 
const transferOk = balance && isNotBlocked && accountExist ? 'Transferência Realizada' : 'Transferência Negada' // Se tudo for verdadeiro, a transferência será aprovada, caso contrário, será negada.
console.log(transferOk)

const clima = 38

 /*IF ->*/ clima < 38 &&  console.log("O clima está muito fervendo")

 /*IF/ELSE -> */ clima >  40 ? console.log("O clima está agradável") : console.log("O clima está esquentando")

/* Else/If -> */clima >= 28 && clima <=32 ? console.log("O clima está agradável") : clima >= 33 && clima <= 39 ? console.log("O clima está esquentando") :  console.log("O clima está muito fervendo")

