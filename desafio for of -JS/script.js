const input = document.querySelector("input")
const h2 = document.querySelector("h2")
const button = document.querySelector(".button")

let contact = [{ name: "Flávio Drumond", number: "(27) 98112-2334" },
{ name: "Amor", number: "(27) 99243-6980" },
{ name: "Filha", number: "(88) 932-7670" },
{ name: "Irmão", number: "(27) 98105-0148" }]

function onclick() {

    for (contatos of contact) {

        if (input.value.toLowerCase() === contatos.name.toLowerCase()) {
            h2.innerHTML = `Nome: ${contatos.name} Contato: ${contatos.number}`

            break
        } else {
            h2.innerHTML = "Contato não encontrato"
        }
    }
}

button.addEventListener("click", onclick)