let cart = [
    {product: 'Iphone 15', price: 7485.00, amount: 1},
    {product: 'Xiaomi Realce 11', price: 2785.00, amount: 2},
    {product: 'Samsung S23', price: 5999.00, amount: 1},
]

let finalPrice = cart.reduce((acc, value)=>{
    let purchase = value.price * value.amount
    return acc + purchase
}, 0)

console.log(`Valor final da sua compra é ${finalPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)