const companies = [
    {name: 'Samsung', marketValue: 50000.00, fondedOn: 1938},
    {name: 'Microsoft', marketValue: 415000.00, fondedOn: 1975},
    {name: 'Intel', marketValue: 117000.00, fondedOn: 1968},
    {name: 'Facebook', marketValue: 383000.00, fondedOn: 2004},
    {name: 'Spotify', marketValue: 30000.00, fondedOn: 2006},
    {name: 'Apple', marketValue: 845000.00, fondedOn: 1976}
]

/* Sou um investido e quero fazer um investimento na compra de uma empresa, na qual preciso de alguns requisitos tais como:

empresa abaixo de R$ 100000.00;
fundado após o ano de 1998 */

const company = companies.filter(myCompany => {
    if(myCompany.marketValue < 100000.00 && myCompany.fondedOn > 1998) return true
    else return false
})

console.log(company)