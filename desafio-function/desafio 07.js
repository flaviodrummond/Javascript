/* Faça um programa onde você chama uma função que calcule a taxa mensal de juros de um investimento 
Você deve enviar como argumentos da função:

- Valor incial do investimento
- Valor atual do investimento
- Tempo e meses que o valor esta investido

A função deve retornar a taxa de juros, já formatada. Ex: 2,5%.
Siga a formula desse video para te auxiliar com o cálculo.

Cálculo taxa = juros (valor atual do investimento - valor inicial do investimento) / valor inicial do investimento * tempo */ 

function investment(valorInicial, valorAtual, tempo){ // Criamos uma função onde ela recebe o valor inicial, valor atual e o tempo

    let juros = (valorAtual - valorInicial) / (valorInicial * tempo) //
    console.log((juros * 100). toFixed(2) + '%') // Cálculo para encontrar o juros, multiplico por 100, coloco o toFixed(2), pois quero apenas duas casas decimais e o sinal de porcentagem no final.
}

investment(2000, 2550, 16) // Aqui estou chamando a minha função com valor inicial, valor atual e o tempo do investimento.