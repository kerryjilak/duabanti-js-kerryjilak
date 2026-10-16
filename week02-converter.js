function cedisToDollars(cedis) {
const exchangeRate = 0.086
return console.log(`${cedis} Cedis = $${(cedis * exchangeRate).toFixed(2)}`)
}

function kmToMiles(km) {
const conversionFactor = 0.621371
return console.log(`${km} km = ${(km * conversionFactor).toFixed(2)} miles`)
}
    

function celsiusToFahrenheit(celsius) {
const fahrenheit = (celsius * 9/5) + 32
return console.log(`${celsius}°C = ${fahrenheit.toFixed(2)}°F`)
}
// I used the current rate(GHC 1 = $0.086) according to Google ##
