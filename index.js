/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const btn = document.getElementById("convert-btn")
const num = document.getElementById("input")
const lengthOutput = document.getElementById("Length")
const volumeOutput = document.getElementById("Volume")
const massOutput = document.getElementById("Mass")


let metresToFeet = 0
let feetToMetres = 0

let litresToGallons = 0
let gallonsToLitres = 0

let kgToPounds = 0
let poundsToKg = 0



btn.addEventListener("click", function()
{
    value = num.value
    
    metresToFeet = (value * 3.281).toFixed(3)
    feetToMetres = (value / 3.281).toFixed(3)
    litresToGallons = (value * 0.264).toFixed(3)
    gallonsToLitres = (value / 0.264).toFixed(3)
    kgToPounds = (value * 2.204).toFixed(3)
    poundsToKg = (value / 2.204).toFixed(3)
    
    lengthOutput.textContent = `${value} metres = ${metresToFeet} feet | ${value} feet = ${feetToMetres} metres`;
    volumeOutput.textContent = `${value} litres = ${litresToGallons} gallons| ${value} gallons = ${gallonsToLitres} litres`;
    massOutput.textContent = `${value} kilos = ${kgToPounds} pounds | ${value} pounds = ${poundsToKg} kilos`;
})


