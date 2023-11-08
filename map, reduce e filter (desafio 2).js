const companies = [
    {name: 'Samsung', marketValue: 50000.00, fondedOn: 1938},
    {name: 'Microsoft', marketValue: 415000.00, fondedOn: 1975},
    {name: 'Intel', marketValue: 117000.00, fondedOn: 1968},
    {name: 'Facebook', marketValue: 383000.00, fondedOn: 2004},
    {name: 'Spotify', marketValue: 30000.00, fondedOn: 2006},
    {name: 'Apple', marketValue: 845000.00, fondedOn: 1976}
]

/*
Subtrair 10% de valor de mercado a todas companhias;
Filtrar somente as companhias fundadas depois de 1980;
Somar o valor de mercado das restantes.
*/

const minus10Percent = (company) => {
    company.marketValue -= (company.marketValue / 10)
     return company
}

 const filterCompany = (company) => company.fondedOn >= 1990

 const sumOfValues = (acc, company) => acc + company.marketValue

const companyValues = companies
.map(minus10Percent)
.filter(filterCompany)
.reduce(sumOfValues, 0)

console.log(`O valor de todas a empresas somadas juntas dá um valor total de: ${companyValues.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)