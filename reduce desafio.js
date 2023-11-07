const cart = [
    {product: 'Laranja', priceKilo: 1.98, kg: 1.4},
    {product: 'Melão', priceKilo: 3.10, kg: 1},
    {product: 'Morango', priceKilo: 2.60, kg: 3.5},
    {product: 'Uva', priceKilo: 5.20, kg: 1},
    {product: 'Limão', priceKilo: 2.33, kg: 1.1},
]

let finalPurchasePrice = cart.reduce((acumulador, valorAtual) => {
    let priceOfTheProduct = valorAtual.priceKilo * valorAtual.kg
    return acumulador + priceOfTheProduct
}, 0)

console.log(`Sua compra ficou no valor final de ${finalPurchasePrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`) // Colocando o valor em real brasileiro usando o toLocaleString