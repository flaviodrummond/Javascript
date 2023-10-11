let input = document.querySelector("#main-input")
let select = document.querySelector("select")
let button = document.querySelector(".main-button")

// Mostra a troca de valor no seletor
select.addEventListener("change", function(){
    console.log("Troca no seletor")
})

// Me mostra todo o valor que foi colocado no input
input.addEventListener("keypress", function (event){
    console.log(event)
})