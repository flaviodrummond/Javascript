/* Alterando e acessando texto

textContent - Pega todo o conteúdo
innerText - Pega apenas o texto
innerHTML - Permite adicionar HTML e texto */

let alterandoText = document.querySelector(".paragraph-js")
alterandoText.innerHTML = "Alterando texto com o <b>javacript</b>, utilizando o innerHTML"
// alterandoText.textContent = "Feliz em aprender Javacript" - apenas altera o texto HTML no Javacript
// alterandoText.innerText = "Tudo que trás no CSS" - Me trás tudo que o CSS me apresenta no texto se estiver estilizado.

console.log(alterandoText.textContent) // Só o HTML
console.log(alterandoText.innerText) // Leva em conta o CSS
console.log(alterandoText.innerHTML) // Trás tudo e permite adicionar o HTML no meio dele