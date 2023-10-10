
let alertInput = document.querySelector("#main-input")

/* function cliqueiNoBotao() {
    alert("Botão clicado com sucesso!")
 } */

function digiteiNoInput() {
  console.log("Digitei no input")
}

function valorNoInput() {
  console.log(input.value)
}// Para pegar o que digitei no input, primeiro eu preciso avisar ao Javascript quem é o input (foi criado o alertInput, na primeira linha) e após isso, no console.log(), preciso informar que eu quero o value 

function valorNoInputPeloButton() {
  console.log(input.value) // Toda vez que eu clicar no botão, ele me mostra o valor que está dentro do input
}
// Peguei o botão
let mainInput = document.querySelector("#main-input")

// Paragrafo
let valorDoInput = document.querySelector(".valorDoInput")

// Peguei a função, coloquei o class do paragrafo . innerhtml, assim que clicasse no botão.
function valorNoInputPeloButton() {
  (valorDoInput.innerHTML = mainInput.value)
}