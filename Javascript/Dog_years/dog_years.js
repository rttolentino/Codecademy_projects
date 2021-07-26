/*
Project: Dog Years
Purpose: Convert age from human to "dog" years.
Author: Rob Tolentino

Notes --
- Original task taken from Codecademy's Javascript course.
*/

// Current age in human years
const myAge = 33;

// First two years count as 10.5
let earlyYears = 2;
earlyYears *= 10.5;

// Take all other years into account
let laterYears = myAge - 2;
// Count all years after the first 2 human ones as 4 dog years
laterYears *= 4;

// Display current calculations
console.log(`Current age in human years: ${myAge}`);
console.log(`Early years in dog years: ${earlyYears}`);
console.log(`Later years in dog years: ${laterYears}`);

// Combine both chunks of dog years
let myAgeInDogYears = earlyYears + laterYears;

// Set name variable and put to lowercase because... reasons?
let myName = 'Rob'.toLowerCase();

// Output formatted data
console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`);