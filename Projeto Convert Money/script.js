const convertButton = document.querySelector('.convert-button')
const currencySelect = document.querySelector(".currency-select-to-convert")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToCovert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 4.90
    const euroToday = 5.39

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

    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
