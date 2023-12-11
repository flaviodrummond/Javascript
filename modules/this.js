/* 

This

this em inglês significa - este, esta, isto
No javascript, o this faz referência:

Node -  module.exports
Web - window

Escopo:
    Global -  Quando começamos a escrever nossa aplicação.
    No contexto global, o this faz referência ao objeto global,
    que é o objeto window no navegador de internet ou ao objeto global no node.js

    Local - Por exemplo, dentro de uma função

*/

const person = "Flávio Drumond" // Escopo Global


function name() {
    const person = "Gustavo" // Escopo Local
}

// console.log(this === module.exports)

const user = {name:"Rosiane Lopes",
age: 38,
city: "Vila Velha",
talk: function() { 
    console.log(this.city) // this no escopo local, ele procura no próximo nível, ou seja, dentro do próprio escopo que ele está
}
};

user.talk()

function myname() {
    this.console.log("Agora sou o Global") // O this faz referência agora al Global, pois não tem ninguém acima dele.
}

myname()

// This como module.exports é usado dessa forma
this.object = user 
this.name = person