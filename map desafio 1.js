const list = [
    { name: 'Flavio', vip: true },
    { name: 'Kevyn', vip: false },
    { name: 'Rosiane', vip: true },
    { name: 'Gustavo', vip: true },
    { name: 'Jaqueline', vip: false },
    { name: 'Rodolfo', vip: false },
    { name: 'Ketlyn', vip: true }
]

const vipList = list.map(person =>{
    return {
        name: person.name,
        braceletColor: person.vip ? 'green' : 'red',
    }
})

/* também poderia esta fazendo dessa forma: 

const vipList = list.map(person => {
    let braceletColor

    if(braceletColor === true){
        braceletColor = 'green'
    } else {
        braceletColor = 'red'
    }
})
*/

console.log(vipList)