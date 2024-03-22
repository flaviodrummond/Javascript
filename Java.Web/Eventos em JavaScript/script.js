const input = document.querySelector('#main-input') // indo no meu HTML e pegando meu input. 

const valorNoInput = document.querySelector('#main-input')

const novoParagrafo = document.querySelector('.novoParagrafoVindoDoJavascript')

function cliqueiNoBotao() {
    console.log(input.value) // input.value na função criada no botão, pega todo meu valor digitado no input, após o cliquei no botão.
}

function digiteiNoInput() {
    console.log(input.value) // input.value no digitei no input, ele pega cada letra que digito no input
}

function newParagraph() {
    (novoParagrafo.innerHTML = valorNoInput.value) // criei um novo paragrafo no HTML, coloquei uma class. Criei duas variavéis, para o input e outra para o novo paragrafo
}