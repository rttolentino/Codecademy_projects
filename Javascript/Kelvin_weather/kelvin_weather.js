/*
Project: Kelvin Weather
Purpose: Convert temperature value from Kelvin to other temperature scales.
Author: Rob Tolentino

Notes --
- Original task taken from Codecademy's Javascript course.
*/

// Declared constant value for Kelvin value
const kelvin = 293;

// Convert to C from K by subtracting 273
let celsius = kelvin - 273;

// Convert to F from C by multiplying by 9/5ths and adding 32
let fahrenheit = celsius * (9/5) + 32;
// Then, round down to nearest integer after conversion
fahrenheit = Math.floor(fahrenheit);

// Convert to Newton from C by multiplying by 33/100ths
let newton = celsius * (33/100)
// Then, round down to nearest integer after conversion
newton = Math.floor(newton);

// Output everything that was calculated
console.log(`Kelvin: ${kelvin}`);
console.log(`Celsius: ${celsius}`);
console.log(`Fahrenheit: ${fahrenheit}`);
console.log(`Newton: ${newton}`);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);