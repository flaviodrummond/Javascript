/* A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. A prefeitura deseja saber:

- Média do salário da população;
- Média do número de filhos;
- Maior salário;

O final da leitura de dados se dará com a entrada de um salário negativo.
Façã isso usando uma função. */


let people = [
    {
        name: 'João Carlos',
        wage: 2480,
        childNumber: 2,
    },
    {
        name: 'Carlane Costa',
        wage: 1940,
        childNumber: 1,
    },
    {
        name: 'Pedro Henrique',
        wage: 4500,
        childNumber: 4,
    },
    {
        name: 'Daniela Pereira',
        wage: 820,
        childNumber: 1,
    },
    {
        name: 'Kesia Coelho',
        wage: 3200,
        childNumber: 3,
    },
    {
        name: 'Flávio Drumond',
        wage: 6200,
        childNumber: 2,
    },
    {
        name: 'Rosiane Lopes',
        wage: -1020,
        childNumber: 0,
    }
]

function averageSalaryAndChildrenHigherSalary(peopleInformation){ 
    
    // Foi criado uma função para nosso arreio de pessoas acima e dentro da nossa função, criamos três variáveis que são: média de salário, média de filhos e maior salário, todos eles começando do zero.
    
    let averageSalary = 0
    let averageChildren = 0
    let higherSalary = 0

    // Agora criamos o FOR para encontra essas três variáveis acima, e cada vez que meu FOR tiver uma interação, pegará uma posição do meu arreio e irá passando posição por posição. Cada posição que passa, ele precisa pegar o número de salário e numero de filhos. Como eu faço isso?

    for (let i = 0; i < peopleInformation.length; i++) {
        let salary = peopleInformation[i].wage // Aqui iremos pegar o salário, na qual pegamos o peopleinformation, que é o meu arreio que chega na function, na posição i. wage que é o que eu quero saber
        let child = peopleInformation[i].childNumber  // Aqui iremos pegar os filhos, na qual pegamos o peopleinformation, que é o meu arreio que chega na function, na posição i. childNumber que é o que eu quero saber

        if(salary > higherSalary) higherSalary = salary // Para descobrir o maior salário eu verifico se o salário atual na posição do arreio, é maior que o maior salário, se for maior ele guarda na posição

        // Preciso parar a interação, quando achar meu salário negativo, aqui a baixo foram todos os dados que coletei e dou um break no meu FOR e meu FOR não rodar mais

        if(salary < 0) { 
            console.log(`Média de salário R$ ${(averageSalary / i)}`) 
            console.log(`Média de filhos ${(averageChildren / i).toFixed(0)}`)
            console.log(`Maior salário R$ ${higherSalary}`)
            break
        } else { // Caso não acha em cima, nenhum valor negativo. Pego o salário médio e adiciono o salário
            averageSalary = averageSalary + salary;
            averageChildren += child
        }
        
    }
}

averageSalaryAndChildrenHigherSalary(people) 

/* Temos uma segunda opção para executar esse desafio */

function averageChildAndSalaryHigherSalary (peopleInformacion) {

    let i = 0
    let salaryAverage = 0
    let childAverage = 0
    let salaryHigher = 0

while (peopleInformacion[i].wage > 0) { // while vai ficar interagindo até encontrar um valor negativo de salário
    salaryAverage += peopleInformacion[i].wage // Aqui estamos acumulando salário para tirar a média
    childAverage += peopleInformacion[i].childNumber // Já aqui estamos acumulando o número de filhos
    peopleInformacion[i].wage > salaryHigher ? salaryHigher = peopleInformacion[i].wage : salaryHigher = salaryHigher
    i++

    // O salário atual que chegou pra mim é maior que o maior salário ? Se for maior que o maior salário ele irá guardar na salaryHigher, se não o salaryHigher continua o valor que está. Encontrando o valor negativo ele sai do while, mas não podemos esquecer do i++, pois ele tem que mudar a posição do arreio, caso contrário ele irá travar
    
}
console.log(`Média de salário R$ ${(salaryAverage / i)}`)
console.log(`Média de filhos ${(childAverage / i).toFixed(0)}`)
console.log(`Maior salário R$ ${salaryHigher}`)

}


averageChildAndSalaryHigherSalary(people)