const input = document.querySelector("input")
const paragraph = document.querySelector("p")
const button = document.querySelector(".button")

let contacts = [{ name: "Flávio Drumond", number: "(27) 98112-2334" },
{ name: "Amor", number: "(27) 99243-6980" },
{ name: "Filha", number: "(88) 932-7670" },
{ name: "Irmão", number: "(27) 98105-0148" }]

function search() {
    contacts.forEach(contact => {

        if(input.value.toLocaleLowerCase() === contact.name.toLocaleLowerCase()) {
            paragraph.innerHTML = `Nome: ${contact.name}, Contato: ${contact.number}`

        } else {
            paragraph.innerHTML = 'Contato não encontrado, tente novamente'
        }
    })

        
        }
        
button.addEventListener('click', search)