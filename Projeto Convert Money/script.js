const convertButton = document.querySelector('.convert-button')

const selectCurrencyToCovert = document.querySelector('.currency-select-to-convert')

const selectCurrencyToCoverted = document.querySelector('.currency-select-to-converted')

function changeToConvert() {

    const imageCurrencyToConvert = document.querySelector('.image-currency-to-convert')

    const currencyNameConvert = document.getElementById('currency-name-convert')

    if (selectCurrencyToCovert.value == "real") {
        currencyNameConvert.innerHTML = 'Real brasileiro'
        imageCurrencyToConvert.src = './assets/Real.png'
    }

    if (selectCurrencyToCovert.value == "dolar") {
        currencyNameConvert.innerHTML = 'Dólar americano'
        imageCurrencyToConvert.src = './assets/Dollar.png'
    }

    if (selectCurrencyToCovert.value == "euro") {
        currencyNameConvert.innerHTML = 'Euro'
        imageCurrencyToConvert.src = './assets/Euro.png'
    }

    if (selectCurrencyToCovert.value == "libra") {
        currencyNameConvert.innerHTML = 'Libra esterlina'
        imageCurrencyToConvert.src = './assets/libra.png'
    }

    if (selectCurrencyToCovert.value == "bitcoin") {
        currencyNameConvert.innerHTML = 'Bitcoin'
        imageCurrencyToConvert.src = './assets/bitcoin.png'
    }

    convertValue()

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

    const selectCurrencyToCovert = document.querySelector('.currency-select-to-convert')

    const selectCurrencyToCoverted = document.querySelector('.currency-select-to-converted')

    const dolarToday = 4.99
    const euroToday = 5.43
    const libraToday = 6.36
    const bitcoinToday = 318755.37
    const realToday = 1.00

    if (selectCurrencyToCovert.value == 'real' && selectCurrencyToCoverted.value == 'dolar') {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputCurrencyValue)

        currencyValueToConverted.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputCurrencyValue / dolarToday)

    }

    if (selectCurrencyToCovert.value == 'real' && selectCurrencyToCoverted.value == 'euro') {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL'
        }).format(inputCurrencyValue)

        currencyValueToConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)
    }

    if (selectCurrencyToCovert.value == 'real' && selectCurrencyToCoverted.value == 'libra') {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL'
        }).format(inputCurrencyValue)

        currencyValueToConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency', currency: 'GBP'
        }).format(inputCurrencyValue / libraToday)
    }

    if (selectCurrencyToCovert.value == 'real' && selectCurrencyToCoverted.value == 'bitcoin') {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL'
        }).format(inputCurrencyValue)

        currencyValueToConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'BTC'
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if (selectCurrencyToCovert.value == 'real' && selectCurrencyToCoverted.value == 'real') {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL'
        }).format(inputCurrencyValue)

        currencyValueToConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL'
        }).format(inputCurrencyValue)
    }

    if (selectCurrencyToCovert.value == 'dolar' && selectCurrencyToCoverted.value == 'dolar') {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency', currency: 'USD'
        }).format(inputCurrencyValue)

        currencyValueToConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency', currency: 'USD'
        }).format(inputCurrencyValue)

    }

    if (selectCurrencyToCovert.value == 'dolar' && selectCurrencyToCoverted.value == 'euro') {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency', currency: 'USD'
        }).format(inputCurrencyValue)

        currencyValueToConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'EUR'
        }).format((inputCurrencyValue * dolarToday) / euroToday)
    }

    if (selectCurrencyToCovert.value == 'dolar' && selectCurrencyToCoverted.value == 'libra') {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency', currency: 'USD'
        }).format(inputCurrencyValue)

        currencyValueToConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency', currency: 'GBP'
        }).format((inputCurrencyValue * dolarToday) / libraToday)
    }

    if (selectCurrencyToCovert.value == 'dolar' && selectCurrencyToCoverted.value == 'bitcoin') {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency', currency: 'USD'
        }).format(inputCurrencyValue)

        currencyValueToConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'BTC'
        }).format((inputCurrencyValue * dolarToday) / bitcoinToday)

    }

    if (selectCurrencyToCovert.value == 'dolar' && selectCurrencyToCoverted.value == 'real') {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency', currency: 'USD'
        }).format(inputCurrencyValue)

        currencyValueToConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL'
        }).format(inputCurrencyValue * dolarToday)
    }

    if (selectCurrencyToCovert.value == 'euro' && selectCurrencyToCoverted.value == 'dolar') {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'EUR'
        }).format(inputCurrencyValue)

        currencyValueToConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency', currency: 'USD'
        }).format((inputCurrencyValue / euroToday) * dolarToday)
    }

    if (selectCurrencyToCovert.value == 'euro' && selectCurrencyToCoverted.value == 'euro') {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'EUR'
        }).format(inputCurrencyValue)

        currencyValueToConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'EUR'
        }).format(inputCurrencyValue)
    }

    if (selectCurrencyToCovert.value == 'euro' && selectCurrencyToCoverted.value == 'libra') {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'EUR'
        }).format(inputCurrencyValue)

        currencyValueToConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency', currency: 'GBP'
        }).format((inputCurrencyValue * euroToday) / libraToday)
    }

    if (selectCurrencyToCovert.value == 'euro' && selectCurrencyToCoverted.value == 'bitcoin') {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'EUR'
        }).format(inputCurrencyValue)

        currencyValueToConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'BTC'
        }).format((inputCurrencyValue * euroToday) / bitcoinToday)
    }

    if (selectCurrencyToCovert.value == 'euro' && selectCurrencyToCoverted.value == 'real') {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'EUR'
        }).format(inputCurrencyValue)

        currencyValueToConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL'
        }).format(inputCurrencyValue * euroToday)
    }

    if (selectCurrencyToCovert.value == 'libra' && selectCurrencyToCoverted.value == 'dolar') {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency', currency: 'GBP'
        }).format(inputCurrencyValue)

        currencyValueToConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency', currency: 'USD'
        }).format((inputCurrencyValue / libraToday) * dolarToday)
    }

    if (selectCurrencyToCovert.value == 'libra' && selectCurrencyToCoverted.value == 'euro') {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency', currency: 'GBP'
        }).format(inputCurrencyValue)

        currencyValueToConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'EUR'
        }).format((inputCurrencyValue / libraToday) * euroToday)
    }

    if (selectCurrencyToCovert.value == 'libra' && selectCurrencyToCoverted.value == 'libra') {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency', currency: 'GBP'
        }).format(inputCurrencyValue)

        currencyValueToConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency', currency: 'GBP'
        }).format(inputCurrencyValue)
    }

    if(selectCurrencyToCovert.value == 'libra' && selectCurrencyToCoverted.value == 'bitcoin') {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency', currency: 'GBP'
        }).format(inputCurrencyValue)

        currencyValueToConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'BTC'
        }).format((inputCurrencyValue / libraToday) * bitcoinToday)
    }

    if(selectCurrencyToCovert.value == 'libra' && selectCurrencyToCoverted.value == 'real') {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency', currency: 'GBP'
        }).format(inputCurrencyValue)

        currencyValueToConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL'
        }).format(inputCurrencyValue * libraToday)
    }

    if(selectCurrencyToCovert.value == 'bitcoin' && selectCurrencyToCoverted.value == 'dolar') {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'BTC'
        }).format(inputCurrencyValue)

        currencyValueToConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency', currency: 'USD'
        }).format((inputCurrencyValue * bitcoinToday) / dolarToday)
    }

    if(selectCurrencyToCovert.value == 'bitcoin' && selectCurrencyToCoverted.value == 'euro') {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'BTC'
        }).format(inputCurrencyValue)

        currencyValueToConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'EUR'
        }).format((inputCurrencyValue * bitcoinToday) / euroToday)
    }

    if(selectCurrencyToCovert.value == 'bitcoin' && selectCurrencyToCoverted.value == 'libra') {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'BTC'
        }).format(inputCurrencyValue)

        currencyValueToConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency', currency: 'GBP'
        }).format((inputCurrencyValue * bitcoinToday) / libraToday)
    }

    if(selectCurrencyToCovert.value == 'bitcoin' && selectCurrencyToCoverted.value == 'bitcoin') {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'BTC'
        }).format(inputCurrencyValue)

        currencyValueToConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'BTC'
        }).format(inputCurrencyValue)
    }

    if(selectCurrencyToCovert.value == 'bitcoin' && selectCurrencyToCoverted.value == 'real') {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'BTC'
        }).format(inputCurrencyValue)

        currencyValueToConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL'
        }).format((inputCurrencyValue * bitcoinToday) / realToday)
    }




}

selectCurrencyToCovert.addEventListener('change', changeToConvert)
selectCurrencyToCoverted.addEventListener('change', changeToConverted)
convertButton.addEventListener('click', convertValue)