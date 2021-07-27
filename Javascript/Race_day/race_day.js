/*
Project: Race Day
Purpose: "Register" a runner and let them know when their start time is. I chose to randomly generate the runner's data so different setups can be tested quickly.
Author: Rob Tolentino

Notes --
- Original task taken from Codecademy's Javascript course.
*/

// Set random values to define a new runner
let raceNumber = Math.floor(Math.random() * 1000);
let earlyReg = Math.floor(Math.random() * 2);
let runnerAge = Math.floor(Math.random() * 100);

// Output the runner's stats
console.log(`Runner stats --\nNumber: ${raceNumber}\nEarly Registrant: ${earlyReg}\nAge: ${runnerAge}\n`);

// Add 1000 to raceNumber for adults who registered early
earlyReg && runnerAge > 18 ? raceNumber += 1000 : null;

// Print out start times based on age and if they registered early or not:
// -- Over 18 and early registrant? Start at 9:30.
// -- Over 18 but not early registrant? Start at 11:00.
// -- Under 18? Start at 12:30.
// -- 18 exactly? Specifically created "bug" in code per assignment, send runner to Registration Desk.
earlyReg && runnerAge > 18 ? console.log(`Welcome, Runner #${raceNumber}! Your start time will be 9:30 AM. Good luck!`) :
  runnerAge > 18 ? console.log(`Welcome, Runner #${raceNumber}! Your start time will be 11:00 AM. Good luck!`) :
  runnerAge < 18 ? console.log(`Welcome, Runner #${raceNumber}! Your start time will be 12:30 PM. Good luck!`) :
  console.log(`Oops... We're sorry, Runner #${raceNumber}, but we need you to swing by the Registration Desk. Please come by as soon as possible.`);