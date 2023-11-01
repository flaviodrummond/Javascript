/* Function - Argumentos e Parâmetros 

Function / Funções
-> Trecho de código que só é executado, quando for chamado */

function sum(number1, number2, number3, number4) { // Dentro dos () eu posso ter parâmetros. Posso ter nenhum ou posso ter quantos eu quiser.
    console.log((number1 / number2) * (number3 + number4)) // Agora vou imprimir na tela a execução desse calculo.
}
sum (50,5,2,2) // Os números vem dentro dos parenteses, são os argumentos, que eu mando para dentro do console e quando mando executar, ele vai executar o calculo que foi criado dentro do console
sum (5,5,10,10)

function myName(name = 'Flávio') { //Caso eu não mandar nada para a minha função, dará undefined. Mas eu posso colocar um valor padrão ao lado da minha função, que será colocado na tela, mas se eu informar algo na função, entrará minha função e ingnorar os valores padrões.
    console.log(name)
}

myName()