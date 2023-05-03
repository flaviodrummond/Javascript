let list =[
    {name: "Flávio", vip: true},
    {name: "Jaqueline", vip: false},
    {name: "Robert", vip: true},
    {name: "Rodolfo", vip: true},
    {name: "Rosiane", vip: false},
    {name: "ketlyn", vip: true},
    {name: "João", vip: false},
];

let newList = list.map(client => {
    let newList = {
        name: client.name,
        vip: client.vip,
        sector: client.vip ? 'Black' : 'Green'
    }
    return newList
})
console.log(newList)