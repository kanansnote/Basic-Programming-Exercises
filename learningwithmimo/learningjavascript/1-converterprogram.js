// Converter Program - Sept 13, 2023

const miles = 24;
const kilometers = 40;
const number = 1.609344;

const kilometersToMiles = kilometers / number;
const milesToKilometers = miles * number;

console.log("Distance conversions ");
console.log("-----------------------");

console.log(kilometers + " kilometers are:");
console.log(kilometersToMiles + " miles");
console.log("-----------------------");

console.log(miles + " miles are:");
console.log(milesToKilometers + " kilometers");

console.log("=======================");

const celsius = 5;
const fahrenheit = 41;

const celsiusToFahrenheit = (celsius * 9 / 5) + 32;
const fahrenheitToCelsius = (fahrenheit - 32) * 5 / 9;

console.log("Temperature conversions");
console.log("-----------------------");

console.log(fahrenheit + " degrees fahrenheit are:");
console.log(fahrenheitToCelsius + " degrees celsius");
console.log("-----------------------");

console.log(celsius + " degrees celsius are:");
console.log(celsiusToFahrenheit + " degrees fahrenheit");
