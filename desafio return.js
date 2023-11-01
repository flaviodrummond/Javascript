let cart = [100, 15, 2.20, 233, 28, 51, 1.99, 4, 180]
let finalValue = 0
let totalAmountPayable = 0
let fullDiscount = 0

function discountFinal (price, discount){

    let result = (price * discount) / 100

    return result
}


cart.forEach(value => { // forEach me possibilita pegar valor por valor dentro da minha variável cart e cada vez que ele pegar um valor, ele entra dentro do meu value

    totalAmountPayable += value 

    if(value >= 30){

        let discount = discountFinal (value, 10)

        finalValue += value - discount // Este atalho é o mesmo que eu fosse fazer finalValue = finalValue + (price - discount), apenas economizando código

    } else {

        finalValue += value
    }
    
    fullDiscount =  totalAmountPayable - finalValue
});

console.log(`O valor final da compra foi de R$ ${totalAmountPayable.toFixed(2)},
porém com o valor do desconto, você irá pagar R$ ${finalValue.toFixed(2)}, 
você teve o desconto de R$ ${fullDiscount.toFixed(2)}`)