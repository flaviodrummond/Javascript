class Person {

    name;
    age;

    talk() { // isso não é uma função dentro da class, mas sim um método.
        console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old`) // Por está fora do meu método e dentro da minha class, uso o this
    }

}

// Com a class é diferente, precisamos instância a nossa class. 

const newPerson = new Person() // Para instância a minha class, preciso colocar o new. Com isso, estou pegando a forma de cima e pedindo para o javascrip criar uma nova pessoa
newPerson.name = "Flávio"
newPerson.age = 39
newPerson.talk()

class User {
    constructor(name, age){ // uma class, pode ter esse método constructor. Que é opcional. Sempre será chamado assim que minha class instânciar.
        console.log(`Hello, I'm ${name}`)

        // Se eu quiser que o talk tenha acesso aos métodos do meu constructor, tenho que fazer dessa seguinde forma
        this.name = name
        this.age = age
    }
   
    talk() { // isso não é uma função dentro da class, mas sim um método.
        console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old`) // Por está fora do meu método e dentro da minha class, uso o this
    }

}

// Com a class é diferente, precisamos instância a nossa class. 

const newUser = new User("Rosiane", 38) // Para a instânciação da nossa class, posso já entrar com o nome e idade
const newUser1 = new User("Gustavo", 14) // cada vez que dou o new, estou criando uma nova class
const newUser2 = new User("Ketlyn", 16)

newUser.talk() // chamando o método talk
newUser1.talk()
newUser2.talk()