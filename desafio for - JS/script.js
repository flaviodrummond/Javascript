let input = document.querySelector("input")
let paragraph = document.querySelector("p")
let search = document.querySelector(".button")

let contact = [{name:"Flávio Drumond", number:"(27) 98112-2334"},
{name:"Amor", number:"(27) 99243-6980"},
{name: "Filha", number:"(88) 932-7670"},
{name: "Irmão", number:"(27) 98105-0148"}]


function meet () {
    for(let i = 0; i < contact.length; i++){
        if(input.value.toLowerCase() === contact[i].name.toLowerCase()){
            paragraph.innerHTML = `Nome: ${contact[i].name} Telefone: ${contact[i].number}`

            break
        } else {
            paragraph.innerHTML = "Contato, não encontrado !  Faça a busca novamente"
        }
    }
}

search.addEventListener("click", meet)

// toLocaleLowerCase() -> retorna o valor das string em letras minusculas