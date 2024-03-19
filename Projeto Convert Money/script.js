const convertButton = document.querySelector('.convert-button')

const selectCurrencyToCovert = document.querySelector('.currency-select-to-convert')

const selectCurrencyToCoverted = document.querySelector('.currency-select-to-converted')

function changeToConvert() {

    const imageCurrencyToConvert = document.querySelector('.image-currency-to-convert')

    const currencyNameConvert = document.getElementById('currency-name-convert')

if(selectCurrencyToCovert.value == "real") {
    currencyNameConvert.innerHTML = 'Real brasileiro'
    imageCurrencyToConvert.src = './assets/Real.png'
}

if(selectCurrencyToCovert.value == "dolar") {
    currencyNameConvert.innerHTML = 'Dólar americano'
    imageCurrencyToConvert.src = './assets/Dollar.png'
}

if(selectCurrencyToCovert.value == "euro") {
    currencyNameConvert.innerHTML = 'Euro'
    imageCurrencyToConvert.src = './assets/Euro.png'
}

if(selectCurrencyToCovert.value == "libra") {
    currencyNameConvert.innerHTML = 'Libra esterlina'
    imageCurrencyToConvert.src = './assets/libra.png'
}

if(selectCurrencyToCovert.value == "bitcoin") {
    currencyNameConvert.innerHTML = 'Bitcoin'
    imageCurrencyToConvert.src = './assets/bitcoin.png'
}

}

function changeToConverted() {

    const imageCurrencyToConverted = document.querySelector('.image-currency-to-converted')

    const currencyNameConverted = document.getElementById('currency-name-converted')

    if (selectCurrencyToCoverted.value == "dolar") {
        currencyNameConverted.innerHTML = 'Dólar americano'
        imageCurrencyToConverted.src = './assets/Dollar.png'
    }

    if (selectCurrencyToCoverted.value == "euro") {
        currencyNameConverted.innerHTML = 'Euro'
        imageCurrencyToConverted.src = './assets/Euro.png'
    }

    if (selectCurrencyToCoverted.value == "libra") {
        currencyNameConverted.innerHTML = 'Libra esterlina'
        imageCurrencyToConverted.src = './assets/libra.png'
    }

    if (selectCurrencyToCoverted.value == "bitcoin") {
        currencyNameConverted.innerHTML = 'Bitcoin'
        imageCurrencyToConverted.src = './assets/bitcoin.png'
    }

    if (selectCurrencyToCoverted.value == "real") {
        currencyNameConverted.innerHTML = 'Real brasileiro'
        imageCurrencyToConverted.src = './assets/Real.png'
    }

    convertValue()

}



function convertValue() {

    const inputCurrencyValue = document.querySelector('.input-currency').value

    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')

    const currencyValueToConverted = document.querySelector('.currency-value-to-converted')

    const dolarToday = 4.98
    const euroToday = 5.45
    const libraToday = 6.75
    const bitcoinToday = 33840.55

    if (selectCurrencyToCoverted.value == "dolar") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputCurrencyValue / dolarToday)
    }

    if (selectCurrencyToCoverted.value == "euro") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputCurrencyValue / euroToday)
    }

    if (selectCurrencyToCoverted.value == "libra") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(inputCurrencyValue / libraToday)
    }

    if (selectCurrencyToCoverted.value == "bitcoin") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'BTC' }).format(inputCurrencyValue / bitcoinToday)
    }

    if (selectCurrencyToCoverted.value == "real") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputCurrencyValue)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputCurrencyValue)

}


selectCurrencyToCovert.addEventListener('change', changeToConvert)
selectCurrencyToCoverted.addEventListener('change', changeToConverted)
convertButton.addEventListener('click', convertValue)