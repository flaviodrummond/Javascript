const input = document.querySelector('#main-input')

const button = document.querySelector('.main-button')

const select =document.querySelector('select')

// addEventListener é um ouvinte, aqui estou pedindo para me avisar quando for alterado o select, com isso usei o evento de change, para que quando for alterado me avise.
select.addEventListener('change', function(){
    console.log('troquei de valor')
})

// Sempre que acontece um evento, chega várias informações e para sabermos essa informação, ela sempre chega dentro da nossa função, por isso colocamos o event dentro de nossos parenteses.
function troqueiDeValor(event){
    console.log(event)
}
select.addEventListener('change', troqueiDeValor)