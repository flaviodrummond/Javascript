/* Controle de Fluxo - Condicionais - IF ELSE

If = Se
Else = Se não
Else If = mais se ...

*/

const temperature = 33
if(temperature >= 36 && temperature <=39) { // Se a condicional for verdadeira, irá executar o primeiro console.log(), caso contrário, irá verificar o else if, se for verdadeiro, irá executar o que está dentro do console.log() e ignora o else, agora se ele for falso, irá verificar a próxima condicional.
    console.log('A pessoa está saudavél')
} else if(temperature > 39){ // Criando outra condicional
    console.log('A pessoa está febril, Procure um médico')
} else {
    console.log('A pessoa não está bem, Procure um médico com Urgência')
}


const clima = 40
if(clima >= 28 && clima <=32) {
    console.log("O clima está agradável")
}else if (clima >= 33 && clima <= 39){
    console.log("O clima está esquentando")
} else if (clima > 39){
    console.log("O clima está muito fervendo")
} else {
    console.log("O clima está muito agradável")
}