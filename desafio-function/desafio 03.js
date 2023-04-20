/* Escreva um programa onde você chame uma função, e diga a hora exata */

console.log(new Date().toLocaleTimeString('pt-br')) // No javascript temos a função nativa que se chama new Date(), quando roda ele mostra o ano, mês e dia, além disso, ele me mostra o tempo, mas ele coloca o horário universal. Por isso entramos com o toLocaleTimeString, para colocar a nossa hora local.