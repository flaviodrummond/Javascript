const companies = [
    {name: 'Samsung', marketValue: 50000.00, fondedOn: 1938},
    {name: 'Microsoft', marketValue: 415000.00, fondedOn: 1975},
    {name: 'Intel', marketValue: 117000.00, fondedOn: 1968},
    {name: 'Facebook', marketValue: 383000.00, fondedOn: 2004},
    {name: 'Spotify', marketValue: 30000.00, fondedOn: 2006},
    {name: 'Apple', marketValue: 845000.00, fondedOn: 1976}
]

/* 
Adicionar 10% de valor de mercado a todas as companhias - MAP
Filtrar somente companhias fundadas abaixo de 1990 - Filter
Somar o valor de mercado das restantes - Reduce
*/

const marketValueOfOlderCompanies = companies.map(company => {
    company.marketValue += (company.marketValue / 10)
    return company
}).filter(company => {
    if(company.fondedOn <= 1990) return true
    else return false
}).reduce((acc, company) => {
    return acc + company.marketValue
}, 0)

console.log(marketValueOfOlderCompanies)

/*
Também poderíamos fazer desse modelo, para ainda economizar mais código e ficar com um ambiente mais limpo 

const add10Porcent = (company) => {
    company.marketValue += (company.marketValue / 10)
    return company
}

const filterCompany = (company) => company.fondeOn <= 1990

const reduceCompany = (acc, company) => acc + company.marketValue


const marketValueOfOlderCompanies = companies
.map(add10Porcent)
.filter(filterCompany)
.reduce(reduceCompany, 0)

console.log(marketValueOfOlderCompanies)
*/