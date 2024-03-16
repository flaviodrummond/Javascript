const convertButton = document.querySelector('.convert-button')

function convertValues(){
    const inputCurrencyValue = document.querySelector('.input-currency').value
    
    const dollarToday = 4.98
    
    const convertedValue = inputCurrencyValue / dollarToday

    console.log(convertedValue)
}

convertButton.addEventListener("click", convertValues)

/*const convertButton = document.querySelector('.convert-button')
const currencySelect = document.querySelector(".currency-select-to-convert")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToCovert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 4.90
    const euroToday = 5.39
    const libraToday = 6.19
    const bitcoinToday = 143681.77

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style:"currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }
        currencyValueToCovert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyMoney = document.querySelector(".currency-money")
    const imageCurrency = document.querySelector(".image-currency")

    if (currencySelect.value == "dolar") {
        currencyMoney.innerHTML = "Dólar americano"
        imageCurrency.src = './assets/Dollar.png'
    }

    if (currencySelect.value == "euro") {
        currencyMoney.innerHTML = "Euro"
        imageCurrency.src = './assets/Euro.png'
    }
    
    if (currencySelect.value == "libra") {
        currencyMoney.innerHTML = "Libra esterlina"
        imageCurrency.src = './assets/libra.png'
    }

    if (currencySelect.value == "bitcoin") {
        currencyMoney.innerHTML = "Bitcoin"
        imageCurrency.src = './assets/bitcoin.png'
    }

    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)*/
