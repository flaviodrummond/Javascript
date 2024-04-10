// let input = document.querySelector("input")
// let paragraph = document.querySelector("p")
// let search = document.querySelector(".button")

// let contact = [{name:"Flávio Drumond", number:"(27) 98112-2334"},
// {name:"Amor", number:"(27) 99243-6980"},
// {name: "Filha", number:"(88) 932-7670"},
// {name: "Irmão", number:"(27) 98105-0148"}]


// function meet () {
//     for(let i = 0; i < contact.length; i++){
//         if(input.value.toLowerCase() === contact[i].name.toLowerCase()){
//             paragraph.innerHTML = `Nome: ${contact[i].name} Telefone: ${contact[i].number}`

//             break
//         } else {
//             paragraph.innerHTML = "Contato, não encontrado !  Faça a busca novamente"
//         }
//     }
// }

// search.addEventListener("click", meet)


const input = document.querySelector('input')
const button = document.querySelector('button')
const paragraph = document.querySelector('p')

const contacts = [{name: 'Flavio', number: '(27) 98112-2334'},
{name: 'Amor', number: '(27) 99243-6980'},
{name: 'Thiago', number: '(27) 99938-2859'},
{name: 'Mamãe', number: '(27) 98127-3516'}]

function meet(){
    for(i = 0; i < contacts.length; i++) {
        if(input.value.toLocaleLowerCase() === contacts[i].name.toLocaleLowerCase()){
            paragraph.innerHTML = `Nome: ${contacts[i].name}, Tel: ${contacts[i].number}`

            break
        } else {
            paragraph.innerHTML =  'Dados não encontrados'
        }
    }

}


button.addEventListener('click', meet)
// toLocaleLowerCase() -> retorna o valor das string em letras minusculas