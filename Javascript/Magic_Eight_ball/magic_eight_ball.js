/*
Project: Magic Eight Ball
Purpose: Answer a question with a random number generator tied to case statements for expected values.
Author: Rob Tolentino

Notes --
- Original task taken from Codecademy's Javascript course.
*/

// Greet the user
let userName = 'Jeff';
console.log(`Hello${userName ? ', ' + userName + '!' : '!'}`);

// Setup the user's question for them
let userQuestion = 'Why is the sky blue?';
console.log(`${userName ? userName + ', y' : 'Y' }ou asked: ${userQuestion}`);

// Pick a random (whole) number from 0 to 7
let randomNumber = Math.floor(Math.random()*8);
let eightBall = '';

// Output an answer based on the random number
switch (randomNumber)
{
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'Sorry, lets try that one more time'
    break;
}

console.log(eightBall);